import logging
import os
import json
from typing import Optional
from fastapi import APIRouter, Request, HTTPException, Depends
from fastapi.responses import RedirectResponse
from pydantic import BaseModel
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request as GoogleRequest
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import httplib2
import requests
from supabase import create_client, Client
from typing import Union, Any, Optional
from dotenv import load_dotenv

load_dotenv()
GOOGLE_URI=os.getenv("GOOGLE_URI")
# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize Supabase client
supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")  # Changed to match the correct env var name
supabase: Optional[Client] = None
if supabase_url and supabase_key:
    supabase = create_client(supabase_url, supabase_key)
else:
    logger.warning("Supabase credentials not found. OAuth functionality will be limited.")

# OAuth configuration
CLIENT_SECRETS_FILE = "credentials.json"
REDIRECT_URI = "http://localhost:3001/api/auth/oauth2callback"
SCOPES = [
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
]

router = APIRouter()

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: Optional[str] = None
    token_type: str = "Bearer"
    expires_in: Optional[int] = None
    scope: str

class AuthService:
    @staticmethod
    def get_authorization_url(user_id: str) -> str:
        """
        Generate Google OAuth authorization URL
        """
        try:
            flow = Flow.from_client_secrets_file(
                CLIENT_SECRETS_FILE,
                scopes=SCOPES,
                redirect_uri=REDIRECT_URI
            )
            
            authorization_url, _ = flow.authorization_url(
                access_type='offline',
                include_granted_scopes='true',
                prompt='consent',  # Force consent screen to potentially get refresh token
                state=user_id  # Pass user_id in state
            )
            
            logger.info(f"Generated authorization URL for user {user_id}")
            return authorization_url
            
        except Exception as e:
            logger.error(f"Error generating authorization URL: {e}")
            raise HTTPException(status_code=500, detail="Failed to generate authorization URL")

    @staticmethod
    async def google_auth_callback(request: Request):
        """
        Handle Google OAuth callback
        Exchanges authorization code for tokens and saves them to Supabase
        """
        # Get authorization code and state from URL parameters
        auth_code = request.query_params.get("code")
        state = request.query_params.get("state")  # This contains the user_id
        error = request.query_params.get("error")
        
        if error:
            logger.error(f"OAuth error: {error}")
            raise HTTPException(status_code=400, detail=f"OAuth error: {error}")
        
        if not auth_code:
            raise HTTPException(status_code=400, detail="No authorization code provided")
        
        if not state:
            raise HTTPException(status_code=400, detail="No state parameter provided")

        try:
            # Exchange auth code for tokens using direct approach
            from google.auth.transport.requests import Request
            from google.oauth2.credentials import Credentials
            import requests
            
            # Get client info from credentials file
            with open(CLIENT_SECRETS_FILE, 'r') as f:
                client_info = json.load(f)['web']
            
            # Exchange code for tokens manually
            token_url = 'https://oauth2.googleapis.com/token'
            token_data = {
                'code': auth_code,
                'client_id': client_info['client_id'],
                'client_secret': client_info['client_secret'],
                'redirect_uri': REDIRECT_URI,
                'grant_type': 'authorization_code',
                'access_type': 'offline'  # Request refresh token
            }
            
            response = requests.post(token_url, data=token_data)
            token_info = response.json()
            
            logger.info(f"Token exchange response keys: {list(token_info.keys())}")
            logger.info(f"Has refresh_token: {bool(token_info.get('refresh_token'))}")
            logger.info(f"Has access_token: {bool(token_info.get('access_token'))}")
            
            if 'error' in token_info:
                raise HTTPException(status_code=400, detail=f"Token exchange failed: {token_info['error']}")
            
            # Create credentials object
            credentials = Credentials(
                token=token_info['access_token'],
                refresh_token=token_info.get('refresh_token'),
                token_uri='https://oauth2.googleapis.com/token',
                client_id=client_info['client_id'],
                client_secret=client_info['client_secret'],
                scopes=SCOPES
            )
            
            logger.info(f"Successfully exchanged code for tokens")
            
            # Get user info from Google
            user_info = AuthService._get_user_info(credentials)
            
            # Store tokens in Supabase
            await AuthService._store_tokens_in_supabase(
                user_id=state,
                credentials=credentials,
                user_info=user_info
            )
            
            logger.info(f"Successfully authenticated user {state} with Google")
            
            # Redirect to frontend with success
            return RedirectResponse(
                url=f"{GOOGLE_URI}/onboarding?oauth_success=true&provider=google&email={user_info.get('email', '')}",
                status_code=302
            )
            
        except Exception as e:
            logger.error(f"Authentication failed: {e}")
            raise HTTPException(status_code=500, detail=f"Authentication failed: {str(e)}")

    @staticmethod
    def _get_user_info(credentials: Any) -> dict:
        """
        Get user information from Google
        """
        try:
            service = build('oauth2', 'v2', credentials=credentials)
            user_info = service.userinfo().get().execute()
            return user_info
        except HttpError as e:
            logger.error(f"Error getting user info: {e}")
            return {}

    @staticmethod
    async def _store_tokens_in_supabase(user_id: str, credentials: Any, user_info: dict):
        """
        Store OAuth tokens in Supabase auth_tokens table
        """
        if not supabase:
            logger.error("Supabase client not initialized. Cannot store tokens.")
            raise HTTPException(status_code=500, detail="Database not configured")
            
        try:
            # Prepare token data
            token_data = {
                "user_id": user_id,
                "provider": "google",
                "access_token": credentials.token,
                "refresh_token": credentials.refresh_token,
                "token_type": "Bearer",
                "expires_at": credentials.expiry.isoformat() if credentials.expiry else None,
                "scope": " ".join(SCOPES),  # Store our requested scopes, not the expanded ones
                "provider_user_id": user_info.get("id"),
                "provider_user_email": user_info.get("email")
            }
            
            # Upsert the token (insert or update if exists)
            response = supabase.table("auth_tokens").upsert(token_data).execute()
            
            logger.info(f"Stored tokens for user {user_id}")
            return response.data
            
        except Exception as e:
            logger.error(f"Error storing tokens in Supabase: {e}")
            raise

    @staticmethod
    async def get_user_tokens(user_id: str, provider: str = "google"):
        """
        Retrieve stored tokens for a user
        """
        if not supabase:
            logger.error("Supabase client not initialized. Cannot retrieve tokens.")
            return []
            
        try:
            response = supabase.table("auth_tokens").select("*").eq("user_id", user_id).eq("provider", provider).execute()
            return response.data
        except Exception as e:
            logger.error(f"Error retrieving tokens: {e}")
            return []

    @staticmethod
    async def refresh_google_tokens(user_id: str):
        """
        Refresh Google OAuth tokens
        """
        try:
            # Get current tokens
            tokens = await AuthService.get_user_tokens(user_id, "google")
            if not tokens:
                raise HTTPException(status_code=404, detail="No tokens found for user")
            
            token_record = tokens[0]
            
            # Create credentials object
            credentials = Credentials(
                token=token_record["access_token"],
                refresh_token=token_record["refresh_token"],
                token_uri="https://oauth2.googleapis.com/token",
                client_id=os.getenv("GOOGLE_CLIENT_ID"),
                client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
                scopes=token_record["scope"].split() if token_record["scope"] else SCOPES
            )
            
            # Refresh the token
            if credentials.expired and credentials.refresh_token:
                credentials.refresh(GoogleRequest())
                
                # Update tokens in database
                await AuthService._store_tokens_in_supabase(
                    user_id=user_id,
                    credentials=credentials,
                    user_info={"id": token_record["provider_user_id"], "email": token_record["provider_user_email"]}
                )
                
                logger.info(f"Refreshed tokens for user {user_id}")
                return {"status": "success", "message": "Tokens refreshed"}
            else:
                return {"status": "success", "message": "Tokens are still valid"}
                
        except Exception as e:
            logger.error(f"Error refreshing tokens: {e}")
            raise HTTPException(status_code=500, detail=f"Failed to refresh tokens: {str(e)}")

# API Routes
@router.get("/google/authorize/{user_id}")
async def authorize_google(user_id: str):
    """Generate Google OAuth authorization URL"""
    auth_url = AuthService.get_authorization_url(user_id)
    return {"authorization_url": auth_url}

@router.get("/callback")
async def google_callback(request: Request):
    """Handle Google OAuth callback"""
    return await AuthService.google_auth_callback(request)

@router.get("/oauth2callback")
async def oauth2_callback(request: Request):
    """Handle Google OAuth callback (alternative path)"""
    return await AuthService.google_auth_callback(request)

@router.get("/tokens/{user_id}")
async def get_tokens(user_id: str, provider: str = "google"):
    """Get stored tokens for a user"""
    tokens = await AuthService.get_user_tokens(user_id, provider)
    return {"tokens": tokens}

@router.post("/refresh/{user_id}")
async def refresh_tokens(user_id: str):
    """Refresh OAuth tokens"""
    return await AuthService.refresh_google_tokens(user_id)
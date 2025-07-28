from fastapi import APIRouter, Request, HTTPException
from pydantic import BaseModel
from controllers.services import PipelineService, EmailService
from routes.auth import AuthService, router as auth_router

# Create router instance
router = APIRouter()

# Include auth routes
router.include_router(auth_router, prefix="/auth")


async def resolve_email_from_user_id(user_id: str) -> str:
    """Helper function to get email from auth.users table by user_id"""
    try:
        from routes.auth import supabase
        if not supabase:
            raise HTTPException(status_code=500, detail="Database not configured")
        # Get user directly by user_id
        response = supabase.auth.admin.get_user_by_id(user_id)
        
        if response:
            print(f"Found email: {response.user.email} for user_id: {user_id}")
            return str(response.user.email)
        else:
            print(f"No user found for user_id: {user_id}")
            return ""
        
    except Exception as e:
        print(f"Error getting email for user_id {user_id}: {e}")
        return ""

# Pydantic models for request validation
class PipelineRequest(BaseModel):
    deal_id: str
    slack_id: str
    email: str
    user_id: str | None = None  # Optional - will be resolved from email if not provided

class SendEmailRequest(BaseModel):
    email: str
    subject: str
    body: str
    user_id: str

# Pipeline execution route - acts as redirect to service
@router.post("/run")
async def run_pipeline(request: PipelineRequest):
    """
    Execute the main pipeline with deal_id, slack_id, email, and user_id
    """
    # Use provided user_id or resolve from email as fallback
    user_id = request.user_id
    
    
    print(f"Using user_id: {user_id} for email: {request.email}")
    print(f"Request data: {request.model_dump_json()}")
    return await PipelineService.execute_pipeline(
        deal_id=request.deal_id,
        slack_id=request.slack_id,
        email=request.email,
        user_id=str(user_id)
    )

# Email sending route - acts as redirect to service
@router.post("/email/send")
async def send_email_request(request: SendEmailRequest):
    """
    Send an email using the Gmail API
    """
    print(f"Sending email to {request.email} with user_id {request.user_id}")
    return EmailService.send_email(
        email=request.email,
        subject=request.subject,
        body=request.body,
        user_id=request.user_id
    )

@router.get("/auth/google/callback")
async def google_auth_callback(request: Request):
    """
    Handle Google OAuth callback
    """
    return await AuthService.google_auth_callback(request)

@router.get("/users/by-email")
async def get_user_by_email(email: str):
    """Get user UUID by email address"""
    try:
        from routes.auth import supabase
        import logging
        
        if not supabase:
            raise HTTPException(status_code=500, detail="Database not configured")
        
        # Query the auth.users table to find user by email
        response = supabase.auth.admin.list_users()
        
        # Find user with matching email
        user = None
        for user_data in response:
            if user_data.email == email:
                user = user_data
                break
        
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        return {"user_id": user.id, "email": user.email}
        
    except Exception as e:
        logging.error(f"Error getting user by email: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to get user: {str(e)}")
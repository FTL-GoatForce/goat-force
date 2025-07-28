import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import json 
from google import genai
from google.genai import types
import base64
from email.mime.text import MIMEText
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from dotenv import load_dotenv
from supabase import create_client, Client
load_dotenv()

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

# Initialize Supabase client
supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
supabase: Client | None = None
if supabase_url and supabase_key:
    supabase = create_client(supabase_url, supabase_key)

# If modifying these scopes, delete the file token.json.
SCOPES = ["https://mail.google.com/"]


def get_user_tokens(user_id: str, provider: str = "google"):
    """Get OAuth tokens from Supabase database"""
    if not supabase:
        raise Exception("Supabase client not initialized")
    
    try:
        response = supabase.table("auth_tokens").select("*").eq("user_id", user_id).eq("provider", provider).execute()
        
        print(f"Token query response: {response.data}")
        
        if response.data and len(response.data) > 0:
            token_data = response.data[0]
            print(f"Token data retrieved: {list(token_data.keys())}")
            print(f"Has refresh_token: {bool(token_data.get('refresh_token'))}")
            print(f"Has access_token: {bool(token_data.get('access_token'))}")
            
            return {
                "access_token": token_data["access_token"],
                "refresh_token": token_data.get("refresh_token"),
                "token_type": token_data.get("token_type", "Bearer"),
                "expires_at": token_data.get("expires_at")
            }
        else:
            raise Exception(f"No tokens found for user {user_id} and provider {provider}")
    except Exception as e:
        print(f"Error getting tokens: {e}")
        raise


def get_credentials_from_database(user_id: str, provider: str = "google"):
    """Get Google credentials from database tokens"""
    try:
        # Get client info from environment variables
        client_id = os.getenv("GOOGLE_CLIENT_ID")
        client_secret = os.getenv("GOOGLE_CLIENT_SECRET")
        
        if not client_id or not client_secret:
            raise Exception("GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables are required")
        
        # Get tokens from database
        tokens = get_user_tokens(user_id, provider)
        print(f"Tokens retrieved: {list(tokens.keys())}")
        print(f"Client ID: {bool(client_id)}")
        print(f"Client Secret: {bool(client_secret)}")
        
        # Create credentials object
        credentials = Credentials(
            token=tokens["access_token"],
            refresh_token=tokens.get("refresh_token"),
            token_uri='https://oauth2.googleapis.com/token',
            client_id=client_id,
            client_secret=client_secret,
            scopes=SCOPES
        )
        
        print(f"Credentials created successfully: {bool(credentials)}")
        print(f"Credentials has refresh_token: {bool(credentials.refresh_token)}")
        print(f"Credentials has client_id: {bool(credentials.client_id)}")
        print(f"Credentials has client_secret: {bool(credentials.client_secret)}")
        
        # Refresh if expired
        if credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
            
                    # Update tokens in database
        if supabase:
            supabase.table("auth_tokens").update({
                "access_token": credentials.token,
                "expires_at": credentials.expiry.isoformat() if credentials.expiry else None
            }).eq("user_id", user_id).eq("provider", provider).execute()
        
        return credentials
    except Exception as e:
        print(f"Error getting credentials: {e}")
        raise


def clean_body(body: str):
    # Convert newlines to HTML line breaks
    cleaned_body = body.replace('\n', '<br>')
    return cleaned_body


def send_email(email: str, subject: str, body: str, user_id: str):
    """Send email using OAuth tokens from database"""
    try:
        print(f"Starting email send process...")
        print(f"To: {email}")
        print(f"Subject: {subject}")
        print(f"User ID: {user_id}")
        
        # Get credentials from database
        creds = get_credentials_from_database(user_id, "google")
        print(f"Credentials obtained: {creds is not None}")
        
        # Get user's email from database
        if not supabase:
            raise Exception("Supabase client not initialized")
        
        # Get user's email from Supabase
        user_response = supabase.auth.admin.get_user_by_id(user_id)
        if not user_response.user:
            raise Exception(f"User not found for ID: {user_id}")
        
        user_email = user_response.user.email
        if not user_email:
            raise Exception(f"User email not found for ID: {user_id}")
        
        print(f"User email from database: {user_email}")
        
        service = build("gmail", "v1", credentials=creds)
        print("Gmail service built successfully")
        
        print(f"Email body: {body}")
        message = MIMEText(clean_body(body), "html")
        message["To"] = email
        message["From"] = user_email
        message["Subject"] = subject
        
        print(f"Message headers set:")
        print(f"  To: {message['To']}")
        print(f"  From: {message['From']}")
        print(f"  Subject: {message['Subject']}")
        
        encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
        print(f"Message encoded successfully")

        create_message = {"raw": encoded_message}
        
        print("Sending message via Gmail API...")
        # pylint: disable=E1101
        send_message = (
            service.users()
            .messages()
            .send(userId="me", body=create_message)
            .execute()
        )
        
        print(f'Message sent successfully! Message Id: {send_message["id"]}')
        print(f'Thread Id: {send_message.get("threadId", "N/A")}')
        
        return send_message
    except HttpError as error:
        print(f"Gmail API error occurred: {error}")
        print(f"Error details: {error.resp.status} - {error.content}")
        return None
    except Exception as error:
        print(f"General error occurred: {error}")
        return None


def get_gmail_data_file(email: str) -> dict:
    if os.path.exists(f"transcripts/gmail/{email}_structured_response.json"):
        with open(f"transcripts/gmail/{email}_structured_response.json", "r") as f:
            content = f.read().strip()
            if content:  # Check if file is not empty
                return json.loads(content)
            else:
                return {}
    else:
        return {}


def get_structured_gmail_prompt(response: object, email: str) -> str:
    return f"""
    You are a sales assistant AI reviewing email threads between sales representatives and prospects. You are provided with structured email data from Gmail.

    Your task is to generate a structured summary and analysis that can help guide next steps for the sales rep.

    ### Instructions:

    Use the provided list of emails and metadata to:

    1. Identify each participant and their role:
    - rep, prospect, or unknown
    - Try to identify names from the email content (e.g., signatures, greetings)
    - If names are mentioned in the emails, use those instead of email addresses

    2. For each email, infer:
    - sentiment (positive, neutral, negative)
    - tone (e.g., professional, friendly, urgent, formal)
    - objections raised (e.g., pricing, timeline, technical fit, budget)
    - sales intent (e.g., confirm, escalate, stall, negotiate, clarify)
    - whether action is required from the sales rep

    3. Generate a TLDR summary of the email thread (2–3 sentences max)

    4. Calculate engagement metrics:
    - Total email count
    - Avg. rep response time in hours
    - Number of objections raised
    - Number of follow-up commitments made by the rep

    5. Tag the conversation with helpful metadata (e.g., `"budget_objection"`, `"technical_question"`, `"urgent_response_needed"`)


    ---

    Here are the emails we have collected:
    {response}

    ### Output Format:

    Here is the current gmail data file we have:
    {json.dumps(get_gmail_data_file(email), indent=2)}


    I want you to update this file by appending to the messages with new Non duplicate messages.

    Update any other fields as neccessary, so the summary is accurate and up to date.
    

    Respond ONLY with valid JSON following this schema:

    ```json
    {{
    "thread_id": "string",
    "channel": {{
        "id": "string",
        "name": "string", 
        "type": "string"
    }},
    "participants": [
        {{
        "id": "string",
        "name": "string (use actual names if mentioned in emails, otherwise email)",
        "role": "rep | prospect | unknown"
        }}
    ],
    "messages": [
        //In ascending order of timestamp, so most recent message is last
        {{
        "from": "string",
        "to": ["string"],
        "subject": "string",
        "timestamp": "ISO8601 datetime string",
        "text": "string", //This is the actual text of the email. Always include this field.
        "sentiment": "positive | neutral | negative",
        "tone": "string",
        "objections": ["string"],
        "intent": "string",
        "action_required": true
        }}
    ],
    "summary": "string",
    "last_activity": "ISO8601 datetime string",
    "engagement_metrics": {{
        "email_count": 0,
        "avg_rep_response_time_hr": 0.0,
        "objections_raised": 0,
        "followups_committed": 0
    }},
    "tags": ["string"]
    }}
    ```
    If any field is missing or unclear, leave it blank or null — do not make things up.

    Make sure they all follow the same format.
    Never break the format. Always include all fields. Especially the text field.
    """


def get_emails(email: str, user_id: str):
    """
    Shows basic usage of the Gmail API.
    Lists the user's Gmail messages using OAuth tokens from database.
    """
    try:
        # Get credentials from database
        creds = get_credentials_from_database(user_id, "google")
        
        # Check if credentials are expired and we have no refresh token
        if creds.expired and not creds.refresh_token:
            print("Access token expired and no refresh token available. Please re-authenticate.")
            return []
        
        # Also check if token is about to expire (within 5 minutes)
        if hasattr(creds, 'expiry') and creds.expiry:
            from datetime import datetime, timedelta
            if creds.expiry < datetime.utcnow() + timedelta(minutes=5):
                if not creds.refresh_token:
                    print("Access token will expire soon and no refresh token available. Please re-authenticate.")
                    return []
        
        service = build("gmail", "v1", credentials=creds)
        
        # Test the credentials before making the actual API call
        try:
            # Make a simple API call to test if credentials are valid
            test_response = service.users().getProfile(userId="me").execute()
            print(f"Gmail API connection successful for user: {test_response.get('emailAddress')}")
        except Exception as e:
            print(f"Gmail API connection failed: {e}")
            print("Please re-authenticate with Google to get fresh tokens.")
            return []
        
        results = (
            service.users().messages().list(userId="me", labelIds=["INBOX"], q=f"from:{email}").execute()
        )
        messages = results.get("messages", [])

        if not messages:
            print("No messages found.")
            return

        seen_threads = set()
        all_messages = []
        
        for message in messages:
            msg = service.users().messages().get(userId="me", id=message["id"]).execute()
            thread_id = msg.get("threadId")
            
            # Skip if we've already processed this thread
            if thread_id in seen_threads:
                continue
                
            seen_threads.add(thread_id)

            print(f"All Threads: {seen_threads}")
            
            thread = service.users().threads().get(userId="me", id=thread_id).execute()
            thread_messages = thread.get("messages", [])
            
            print(f"\nThread ID: {thread_id}")
            print(f"Number of messages in thread: {len(thread_messages)}")
            
            for i, thread_msg in enumerate(thread_messages):
                headers = thread_msg.get("payload", {}).get("headers", [])
                subject = next((h["value"] for h in headers if h["name"] == "Subject"), "No Subject")
                from_header = next((h["value"] for h in headers if h["name"] == "From"), "Unknown")
                date = next((h["value"] for h in headers if h["name"] == "Date"), "Unknown")
                
                message_data = {
                    "from": from_header,
                    "subject": subject,
                    "timestamp": date,
                    "text": thread_msg.get('snippet', 'No snippet')
                }          
                all_messages.append(message_data)      
        
        return all_messages

    except HttpError as error:
        # TODO(developer) - Handle errors from gmail API.
        print(f"An error occurred: {error}")


def run_gmail(email: str, user_id: str):
    print("Getting emails")
    emails = get_emails(email, user_id)
    get_gmail_data_file(email)
    print("collected emails: ", emails)
    prompt = get_structured_gmail_prompt(emails, email)
    print("prompt: ", prompt)
    print("Running gemini")
    try: 
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema={
                        "type": "object",
                        "properties": {
                            "thread_id": {"type": "string"},
                            "channel": {
                                "type": "object",
                                "properties": {
                                    "id": {"type": "string"},
                                    "name": {"type": "string"},
                                    "type": {"type": "string"}
                                },
                                "required": ["id", "name", "type"]
                            },
                            "participants": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "id": {"type": "string"},
                                        "name": {"type": "string"},
                                        "role": {"type": "string"}
                                    },
                                    "required": ["id", "name", "role"]
                                }
                            },
                            "messages": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "from": {"type": "string"},
                                        "to": {
                                            "type": "array",
                                            "items": {"type": "string"}
                                        },
                                        "subject": {"type": "string"},
                                        "timestamp": {"type": "string"},
                                        "text": {"type": "string"},
                                        "sentiment": {"type": "string"},
                                        "tone": {"type": "string"},
                                        "objections": {
                                            "type": "array",
                                            "items": {"type": "string"}
                                        },
                                        "intent": {"type": "string"},
                                        "action_required": {"type": "boolean"}
                                    },
                                    "required": ["from", "to", "subject", "timestamp", "text", "sentiment", "tone", "objections", "intent", "action_required"]
                                }
                            },
                            "summary": {"type": "string"},
                            "last_activity": {"type": "string"},
                            "engagement_metrics": {
                                "type": "object",
                                "properties": {
                                    "email_count": {"type": "integer"},
                                    "avg_rep_response_time_hr": {"type": "number"},
                                    "objections_raised": {"type": "integer"},
                                    "followups_committed": {"type": "integer"}
                                },
                                "required": ["email_count", "avg_rep_response_time_hr", "objections_raised", "followups_committed"]
                            },
                            "tags": {
                                "type": "array",
                                "items": {"type": "string"}
                            }
                        },
                        "required": ["thread_id", "channel", "participants", "messages", "summary", "last_activity", "engagement_metrics", "tags"]
                    }
                ),
        )
        print("response: ", response.parsed)

        print("Writting to file")
        os.makedirs("transcripts/gmail", exist_ok=True)
        with open(f"transcripts/gmail/{email}_structured_response.json", "w") as f:
            json.dump(response.parsed, f, indent=2, default=str)
        print("Wrote to file")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    import sys
    # Get email and user_id from command line arguments
    if len(sys.argv) < 3:
        print("Usage: python gmail_api.py <email> <user_id>")
        sys.exit(1)
    
    email = sys.argv[1] 
    user_id = sys.argv[2]
    print(f"Running Gmail API Service for email: {email}, user_id: {user_id}")
    run_gmail(email, user_id)
    print("Gmail API Service completed")
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
load_dotenv()

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
# If modifying these scopes, delete the file token.json.
SCOPES = ["https://mail.google.com/"]


def clean_body(body: str):
    # Convert newlines to HTML line breaks
    cleaned_body = body.replace('\n', '<br>')
    return cleaned_body

def send_email(email: str, subject: str, body: str):
    creds = None
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
            creds = flow.run_local_server(port=0)
        with open("token.json", "w") as token:
            token.write(creds.to_json())
    try: 
        service = build ("gmail", "v1", credentials=creds)
        print("body", body)
        message = MIMEText(clean_body(body), "html")
        message["To"] = email
        message["From"] = "bruce.wayne.goatforce@gmail.com"
        message["Subject"] = subject
        encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()

        create_message = {"raw": encoded_message}
        # pylint: disable=E1101
        send_message = (
            service.users()
            .messages()
            .send(userId="me", body=create_message)
            .execute()
        )
        print(f'Message Id: {send_message["id"]}')
    except HttpError as error:
        print(f"An error occurred: {error}")
        send_message = None
    return send_message



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

    Here is the json data from the first response:
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
    "participants": [
        {{
        "email": "string",
        "name": "string (use actual names if mentioned in emails, otherwise email)",
        "role": "rep | prospect | unknown"
        }}
    ],
    "messages": [
        //In accending order of timestamp, so most recent message is last
        {{
        "from": "string",
        "to": ["string"],
        "subject": "string",
        "timestamp": "ISO8601 datetime string",
        "text": "string",
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
    Never break the format. Always include all fields.
    """


def get_emails(email: str):
    """
    Shows basic usage of the Gmail API.
    Lists the user's Gmail messages.
    """
    creds = None
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
            creds = flow.run_local_server(port=0)
        with open("token.json", "w") as token:
            token.write(creds.to_json())

    try:
        service = build("gmail", "v1", credentials=creds)
        
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


def run_gmail(email: str):
    print("Getting emails")
    emails = get_emails(email)
    print(f"Emails: {emails}")
    get_gmail_data_file(email)
    prompt = get_structured_gmail_prompt(emails, email)
    print("Running gmail")
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
                                }
                            },
                            "participants": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "id": {"type": "string"},
                                        "name": {"type": "string"},
                                        "role": {"type": "string"}
                                    }
                                }
                            },
                            "messages": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "from": {"type": "string"},
                                        "text": {"type": "string"},
                                        "timestamp": {"type": "string"},
                                        "sentiment": {"type": "string"},
                                        "tone": {"type": "string"},
                                        "objections": {
                                            "type": "array",
                                            "items": {"type": "string"}
                                        },
                                        "intent": {"type": "string"},
                                        "action_required": {"type": "boolean"}
                                    }
                                }
                            },
                            "summary": {"type": "string"},
                            "last_activity": {"type": "string"},
                            "engagement_metrics": {
                                "type": "object",
                                "properties": {
                                    "message_count": {"type": "integer"},
                                    "rep_response_time_sec": {"type": "number"},
                                    "objections_raised": {"type": "integer"},
                                    "followups_committed": {"type": "integer"}
                                }
                            },
                            "tags": {
                                "type": "array",
                                "items": {"type": "string"}
                            }
                        },
                        "required": ["thread_id", "channel", "participants", "messages", "summary", "engagement_metrics", "tags"]
                    }
                ),
        )
        os.makedirs("transcripts/gmail", exist_ok=True)
        with open(f"transcripts/gmail/{email}_structured_response.json", "w") as f:
            json.dump(response.parsed, f, indent=2, default=str)
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    import sys
    # Get email from command line argument, or use default
    email = sys.argv[1] if len(sys.argv) > 1 else "david.gonzalez.fedex2025@gmail.com"
    print(f"Running Gmail API Service for email: {email}")
    run_gmail(email)
    print("Gmail API Service completed")
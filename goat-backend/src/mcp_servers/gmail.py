import os
import asyncio
from datetime import datetime
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from google import genai
from google.genai import types
import json
from dotenv import load_dotenv
load_dotenv()

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY")) 

server_params = StdioServerParameters(
    command="npx",
    args=[
        "@gongrzhe/server-gmail-autoauth-mcp"
    ]
)

def get_gmail_prompt(email: str) -> str:
    return f"""
        You are retrieving sales-related email threads for structured analysis.
    
        Steps:
        1. Access the Gmail account
        2. Retrieve ALL emails between me and {email}
        3. Make sure to get the COMPLETE conversation thread, including:
            - All emails
            - All replies and responses
            - The entire email chain from start to finish
        4. For each email, MAKE SURE TO EXTRACT AND OUTPUT THE FOLLOWING:
            - `email_id` (unique identifier)
            - `subject` (email subject line)
            - `sender` (sender email and name if available)
            - `recipients` (list of recipient emails)
            - `date` (timestamp)
            - `body` (email content)
            - `thread_id` (if part of a conversation thread)
            - Any other relevant metadata

        Also, try to infer the following for each email if possible:
        - `is_from_rep` (true/false) - based on sender domain or context
        - `is_prospect_objection` (true/false) - based on email content
        - `is_follow_up` (true/false) - based on subject or content
        - `urgency_level` (low/medium/high) - based on content analysis

        IMPORTANT: 
        - Use the available MCP tools to get ALL emails in the thread
        - Do NOT limit the number of emails - get the complete conversation
        - Focus on the specific thread about "Proposal for Q2 Rollout — Custom Analytics Suite"
        - Make sure to retrieve both sides of the conversation (from both sender and recipient)

        Output the results as a clean JSON array of ALL emails in the thread. Do **not** do any further analysis or interpretation.
    """

def get_structured_gmail_prompt(response: object) -> str:
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
    """


async def gmail_mcp_server(email: str):
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            try:
                prompt = get_gmail_prompt(email)
                response = await client.aio.models.generate_content(
                    model="gemini-2.5-flash",
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        temperature=0,
                        tools=[session]
                    ),
                )
            except Exception as e:
                print(f"Error with first Gemini API call: {e}")

            structured_prompt = get_structured_gmail_prompt(response.text)
            structured_response = await client.aio.models.generate_content(
                model="gemini-2.5-flash",
                contents=structured_prompt,
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
                json.dump(structured_response.parsed, f, indent=2, default=str)

            with open(f"transcripts/logs/gmail_logs/gmail_mcp_server.log", "a") as f:
                f.write(f"Email: {email}\n")
                f.write(f"Structured Response: {structured_response.text}\n")
                f.write(f"--------------------------------\n")

if __name__ == "__main__":
    import sys
    # Get email from command line argument, or use default
    email = sys.argv[1] if len(sys.argv) > 1 else "sophia.nguyen.airbnb2025@gmail.com"
    print(f"Running Gmail MCP Server for email: {email}")
    asyncio.run(gmail_mcp_server(email))
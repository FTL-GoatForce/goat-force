import os
import asyncio 
from mcp import ClientSession, StdioServerParameters, stdio_client
from google import genai
from google.genai import types
from typing import List, Literal, Optional
from datetime import datetime
import json
from dotenv import load_dotenv

load_dotenv()

from slack_server_params import get_slack_server_params

API_KEY = os.getenv("GOOGLE_API_KEY")

client = genai.Client(api_key=API_KEY)

server_params = get_slack_server_params()

def get_slack_data_file(channel_id: str) -> str:
    if os.path.exists(f"transcripts/slack/{channel_id}_structured_response.json"):
        with open(f"transcripts/slack/{channel_id}_structured_response.json", "r") as f:
            return json.load(f)
    else:
        return "{}"


def get_analysis_slack_prompt(channel_id: str) -> str:
    return f"""
    You are a helpful slack assistant whos job is to retieve information from the users slack conversation.

    Step 1: Read the last 10 messages from the slack channel that belongs to the id: {channel_id}
    Step 2. Return the messages in timestamp order.


    Identiy the following channel information:
        - `channel_id`
        - `channel_name`
        - `channel_type`

        For each message, extract and output:
        - `user_id`
        - `user_name` (if resolvable)
        - `text`
        - `timestamp`
        - Any metadata like reactions or edits if available

        Also, try to infer the following for each message if possible:
        - `is_from_rep` (true/false)
        - `is_prospect_objection` (true/false)
        - `reply_to` (if threaded)
        - `any follow-up request made` (true/false)

        Output the results as a clean JSON array of messages. Do **not** do any further analysis or interpretation.
    """

def get_structured_slack_prompt(response: object, channel_id: str) -> str:
    return f"""
    You are a sales assistant AI reviewing a Slack thread between a sales representative and a prospect. You are provided with structured message data from a thread.

            Your task is to generate a structured summary and analysis that can help guide next steps for the sales rep.

            ### Instructions:

            Use the provided list of messages and metadata to:

            1. Identify each participant and their role:
            - rep, prospect, or unknown (try and resolve the names from the user_id or from the conversation)

            2. For each message, infer:
            - sentiment (positive, neutral, negative)
            - tone (e.g., analytical, firm, casual, evasive)
            - objections raised (e.g., pricing, timeline, competitor)
            - sales intent (e.g., confirm, escalate, stall, negotiate)
            - whether action is required from the sales rep

            3. Generate a TLDR summary of the thread (2–3 sentences max)

            4. Calculate engagement metrics:
            - Total message count
            - Avg. rep response time in seconds
            - Number of objections raised
            - Number of follow-up commitments made by the rep

            5. Tag the conversation with helpful metadata (e.g., `"budget_objection"`, `"late_response"`, `"neutral_tone"`)

            ---

            Here is the json data from the first response:
            {response}

            ### Output Format:

            Here is the current gmail data file we have:
            {get_slack_data_file(channel_id)}


            I want you to update this file by appending to the messages with new Non duplicate messages.

            Update any other fields as neccessary, so the summary is accurate and up to date.

            Respond ONLY with valid JSON following this schema:

            ```json
            {{
            "thread_id": "string",
            "channel": {{
                "id": "string",
                "name": "string", #Try to resolve the name from the user_id or from the conversation.
                "type": "public_channel | private_channel | dm | group_dm"
            }},
            "participants": [
                {{
                "id": "string",
                "name": "string", #Try to resolve the name from the user_id or from the conversation. First name only.
                "role": "rep | prospect | unknown"
                }}
            ],
            "messages": [
                //In accending order of timestamp, so most recent message is last
                {{
                "from": "string",
                "text": "string",
                "timestamp": "ISO8601 datetime string",
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
                "message_count": 0,
                "rep_response_time_sec": 0,
                "objections_raised": 0,
                "followups_committed": 0
            }},
            "tags": ["string"]
            }}
            ```
            If any field is missing or unclear, leave it blank or null — do not make things up.
            
    """
# This the main function that we will use to run the slack mcp server.
async def slack_mcp_server(channel_id: str):
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            try:
                prompt = get_analysis_slack_prompt(channel_id)
                response = await client.aio.models.generate_content(
                    model="gemini-2.5-flash",
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        temperature=0,
                        tools=[session],
                    ),
                )
        
                response_text = response.text
            except Exception as e:
                print(f"Error: {e}")

            structured_prompt = get_structured_slack_prompt(response_text, channel_id)
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
            os.makedirs("transcripts/slack", exist_ok=True)
            with open(f"transcripts/slack/{channel_id}_structured_response.json", "w") as f:
                json.dump(structured_response.parsed, f, indent=2, default=str)

            with open(f"transcripts/logs/slack_logs/slack_mcp_server.log", "a") as f:
                f.write(f"Channel ID: {channel_id}\n")
                f.write(f"Structured Response: {structured_response.text}\n")
                f.write(f"--------------------------------\n")

if __name__ == "__main__":
    import sys
    channel_id = sys.argv[1] if len(sys.argv) > 1 else "D094R07DZ4J"
    print(f"Running Slack MCP Server for channel: {channel_id}")
    asyncio.run(slack_mcp_server(channel_id))

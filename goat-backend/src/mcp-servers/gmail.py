import os
import asyncio
from datetime import datetime
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from google import genai
from google.genai import types
import json

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY")) 

server_params = StdioServerParameters(
    command="npx",
    args=[
        "@gongrzhe/server-gmail-autoauth-mcp"
    ]
)
async def main():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            try:
                response = await client.aio.models.generate_content(
                    model="gemini-2.0-flash",
                    contents="""
                    You are retrieving the entire conversation thread between me and sophia.nguyen.airbnb2025@gmail.com.
                    Make sure to get the COMPLETE conversation thread, including:
                    - The original proposal email
                    - All follow-up emails
                    - All replies and responses
                    - The entire email chain from start to finish
                    For each email, extract and output:
                    - `email_id` (unique identifier)
                    - `subject` (email subject line)
                    - `sender` (sender email and name if available)
                    - `recipients` (list of recipient emails)
                    - `date` (timestamp)
                    - `body` (email content)
                    - `thread_id` (if part of a conversation thread)
                    - Any other relevant metadata
                    """,
                    config=types.GenerateContentConfig(
                        temperature=0,
                        tools=[session]
                    ),
                )
                print("\n=== First Gemini Response ===")
                print(response.text)


            except Exception as e:
                print(f"Error with first Gemini API call: {e}")

if __name__ == "__main__":
    asyncio.run(main())
import os
import asyncio 
from google import genai 
from google.genai import types
from typing import List, Literal, Optional
from datetime import datetime
import json
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from mcp_servers.slack import slack_mcp_server
from mcp_servers.gmail import gmail_mcp_server



async def main(slack_channel_id: str, email: str):
    await slack_mcp_server(slack_channel_id)
    await gmail_mcp_server(email)


import os
import asyncio 
from google import genai 
from google.genai import types
from typing import List, Literal, Optional
from datetime import datetime
import json
import time
import sys
import subprocess
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from personality.personality import get_personality_analysis


def clear_cache():
    cache_files = ['.channels_cache_v2.json', '.users_cache.json']
    for cache_file in cache_files:
        if os.path.exists(cache_file):
            os.remove(cache_file)
            print(f"Cleared cache file: {cache_file}")


def run_slack_mcp_server(channel_id: str):
    slack_script_path = os.path.join(os.path.dirname(__file__), '..', 'mcp_servers', 'slack.py')
    result = subprocess.run([sys.executable, slack_script_path, channel_id], 
                          capture_output=True, text=True, cwd=os.getcwd())
    print("Slack MCP Server Output:")
    print(result.stdout)
    if result.stderr:
        print("Slack MCP Server Errors:")
        print(result.stderr)
    return result.returncode == 0


def run_gmail_mcp_server(email: str):
    gmail_script_path = os.path.join(os.path.dirname(__file__), '..', 'mcp_servers', 'gmail.py')
    result = subprocess.run([sys.executable, gmail_script_path, email], 
                          capture_output=True, text=True, cwd=os.getcwd())
    print("Gmail MCP Server Output:")
    print(result.stdout)
    if result.stderr:
        print("Gmail MCP Server Errors:")
        print(result.stderr)
    return result.returncode == 0

def run_einstein_request(deal_id: str):
    einstein_script_path = os.path.join(os.path.dirname(__file__), '..', 'einstein', 'einstein.py')
    result = subprocess.run([sys.executable, einstein_script_path, deal_id], 
                          capture_output=True, text=True, cwd=os.getcwd())
    print("Einstein Request Output:")
    print(result.stdout)
    if result.stderr:
        print("Einstein Request Errors:")
        print(result.stderr)
    return result.returncode == 0


async def main(deal_id: str, slack_channel_id: str, email: str):
    clear_cache()
    
    start_time = time.time()
    
    print("Running Slack MCP server...")
    slack_success = await asyncio.to_thread(run_slack_mcp_server, slack_channel_id)
    slack_time = time.time() - start_time
    print(f"slack time: {slack_time:.2f}")
    print("Running Gmail MCP server...")
    gmail_success = await asyncio.to_thread(run_gmail_mcp_server, email)
    gmail_time = time.time() - slack_time
    print(f"gmail time: {gmail_time:.2f}")
    
    end_time = time.time()
    print(f"Time taken for MCP servers: {end_time - start_time} seconds")
    
    if slack_success and gmail_success:
        print("Running personality analysis...")
        await get_personality_analysis()
        personality_time = time.time() - gmail_time
        print(f"personality time: {personality_time:.2f}")

        print("Running Einstein analysis...")
        run_einstein_request(deal_id)
        einstein_time = time.time() - personality_time
        print(f"einstein time: {einstein_time:.2f}")
        end_time = time.time()
        print(f"Total time taken: {end_time - start_time} seconds")

        return True
    else:
        print("One or more MCP servers failed, skipping Einstein analysis")


if __name__ == "__main__":
    import sys
    deal_id = sys.argv[1]
    slack_channel_id = sys.argv[2]
    email = sys.argv[3]
    asyncio.run(main(deal_id, slack_channel_id, email))
    # python main.py 01J094KB9QUNP D094KB9QUNP sophia.nguyen.airbnb2025@gmail.com
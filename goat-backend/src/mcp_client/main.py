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


# def clear_cache():
#     cache_files = ['.channels_cache_v2.json', '.users_cache.json']
#     for cache_file in cache_files:
#         if os.path.exists(cache_file):
#             os.remove(cache_file)
#             print(f"Cleared cache file: {cache_file}")


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
    
    # Initialize timing variables
    start_time = time.time()
    slack_start = start_time
    gmail_start = None
    personality_start = None
    einstein_start = None
    
    # Track individual component times
    component_times = {}
    
    
    print("Running Slack MCP server...")
    slack_success = await asyncio.to_thread(run_slack_mcp_server, slack_channel_id)
    slack_end = time.time()
    slack_time = slack_end - slack_start
    component_times['slack_mcp'] = slack_time
    print(f"Slack MCP: {slack_time:.2f}s")

    gmail_start = slack_end
    print("Running Gmail MCP server...")
    gmail_success = await asyncio.to_thread(run_gmail_mcp_server, email)
    gmail_end = time.time() 
    gmail_time = gmail_end - gmail_start
    component_times['gmail_mcp'] = gmail_time
    print(f"Gmail MCP: {gmail_time:.2f}s")
    
    if slack_success and gmail_success:
        personality_start = gmail_end
        print("Running personality analysis...")
        await get_personality_analysis()
        personality_end = time.time()
        personality_time = personality_end - personality_start
        component_times['personality'] = personality_time
        print(f"Personality: {personality_time:.2f}s")

        einstein_start = personality_end
        print("Running Einstein analysis...")
        einstein_success = run_einstein_request(deal_id)
        einstein_end = time.time()
        einstein_time = einstein_end - einstein_start
        component_times['einstein'] = einstein_time
        print(f"Einstein: {einstein_time:.2f}s")
        
        total_time = einstein_end - start_time
        component_times['total'] = total_time
        print(f"Total: {total_time:.2f}s")
        
        # Save the component times to a JSON file
        basePath = os.getcwd()
        with open(os.path.join(basePath, 'performance.json'), 'r+') as f:
            data = json.load(f)
            data['runs'].append({
                "timestamp": datetime.now().isoformat(),
                "deal_id": deal_id,
                "component_times": component_times,
                "success": True
            })
            f.seek(0)
            json.dump(data, f, indent=2)
        print("Component times saved to performance.json")
        return einstein_success
    else:
        print("One or more MCP servers failed, skipping Einstein analysis")            
        return False


if __name__ == "__main__":
    import sys
    deal_id = sys.argv[1]
    slack_channel_id = sys.argv[2]
    email = sys.argv[3]
    asyncio.run(main(deal_id, slack_channel_id, email))
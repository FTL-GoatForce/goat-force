import requests
import json
import os
from dotenv import load_dotenv
import asyncio
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from utils.load_data import load_data
from utils.strip_json import strip_json
from jwt_gen import get_einstein_token

load_dotenv()

access_token = get_einstein_token()

# Credentials from einstein.txt
ACCESS_TOKEN= access_token
CONSUMER_KEY= os.getenv("CONSUMER_KEY")
CONSUMER_SECRET= os.getenv("CONSUMER_SECRET")

# API endpoint for text generation using OpenAI GPT-4o Mini
URL = os.getenv("EINSTEIN_URL")
string_url = str(URL)

# Headers as specified in the documentation
headers = {
    'Authorization': f'Bearer {ACCESS_TOKEN}',
    'Content-Type': 'application/json',
    'x-sfdc-app-context': 'EinsteinGPT',
    'x-client-feature-id': 'ai-platform-models-connected-app'
}

prompt = f"""
You are a sales intelligence AI analyzing deal data from multiple communication channels. 

Your task is to analyze the data and provide a summary of the deal. 
This is the slack data + gmail data:
{load_data()}

FIll out all the fields to the best of your ability. 
DO NOT ADD COMMENTS TO THE JSON.

TASK: Analyze this deal data and provide a structured analysis in the following format:

{{
  "deal_id": "[string]",
  "client_company": "[string]",
  "primary_rep": {{
    "id": "[string]",
    "name": "[string]"
  }},
  "last_activity_timestamp": "[ISO8601 datetime]",
  "deal_stage": "[prospecting | qualification | proposal | negotiation | closed_won | closed_lost]",
  "deal_value_usd": [number],
  "expected_close_date": "[ISO8601 date]",

  "RISK_ASSESSMENT": {{
    "Deal_Risk_Score": [0-100],
    "Churn_Risk": [0-100],
    "Timeline_Risk": [0-100], 
    "Budget_Risk": [0-100]
  }},

  "DEAL_INSIGHTS": {{
    "Key_Objections": ["[array of strings]"],
    "Decision_Maker_Status": "[string]",
    "Urgency_Level": "[low | medium | high]",
    "Competitive_Position": "[leading | neutral | behind]"
  }},

  "ACTIVITY_ANALYSIS": {{
    "message_count": [integer],
    "rep_response_time_sec": [number],
    "engagement_trend": "[improving | declining | stable]",
    "last_touch_channel": "[slack | email | call | meeting]",
    "last_touch_summary": "[string]"
  }},

  "AI_GENERATED_SUMMARY": "[string]",

  "RECOMMENDATIONS": {{
    "Next_Steps": ["[array of strings]"],
    "Escalation_Triggers": "[string]",
    "Deal_Acceleration_Tactics": "[string]"
  }},

  "AI_GENERATED_FOLLOW_UP": {{
    "Email_Draft": "[string]",
    "Slack_Message": "[string]", 
    "Internal_Note": "[string]"
  }},

  "PARTICIPANTS": [
    {{
      "id": "[string]",
      "name": "[string]",
      "role": "[rep | decision_maker | influencer | unknown]",
      "sentiment": "[positive | neutral | negative]",
      "communication_score": [0-100]
    }}
  ],

  "TAGS": ["[array of strings]"]
}}
Provide this analysis in a structured JSON format with clear numerical values and actionable insights.


"""

async def einstein_request(deal_id: str):
    try:
        data = {
            "prompt": prompt
        }

        response = requests.post(string_url, headers=headers, json=data)
        response_json = response.json()
        einstein_response = response_json.get("generation").get("generatedText")

        einstein_response_json = strip_json(einstein_response)
        base_path = os.getcwd()
        with open(os.path.join(base_path, "src", "einstein", "einstein_analysis", f"{deal_id}_einstein_response.json"), "w") as f:
            f.write(einstein_response_json)


        with open(os.path.join(base_path, "src", "einstein", "logs", f"{deal_id}_einstein_response.log"), "a") as f:
            f.write(f"Deal ID: {deal_id}\n")
            f.write(f"Response: {einstein_response}\n")
            f.write("--------------------------------\n")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__": 
  import sys
  deal_id = sys.argv[1]
  print(f"Running Einstein request for deal ID: {deal_id}")
  asyncio.run(einstein_request(deal_id))
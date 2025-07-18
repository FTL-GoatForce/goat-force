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

def get_einstein_data_file(deal_id: str) -> str:
    if os.path.exists(os.path.join("src", "einstein", "einstein_analysis", f"{deal_id}_einstein_response.json")):
        with open(os.path.join("src", "einstein", "einstein_analysis", f"{deal_id}_einstein_response.json"), "r") as f:
            return json.load(f)
    else:
        print(f"No einstein data file found for deal ID: {deal_id}")
        return "{}"

def get_prompt(email: str, slack_id: str) -> str:
    return f"""
You are a sales intelligence AI analyzing deal data from multiple communication channels. 

Your task is to analyze the data and provide a summary of the deal. 
This is the slack data + gmail data:
{load_data(email, slack_id)}

FIll out all the fields to the best of your ability. 
DO NOT ADD COMMENTS TO THE JSON.

TASK: Analyze this deal data and provide a structured analysis in the following format:

Here is the current einstein data file we have:
{get_einstein_data_file(deal_id)}

Update the fields as neccessary, so the analysis is accurate and up to date.

Always adjust risk in case of a drastic event.

The Deal Risk Score is a holistic indicator (0–100) that evaluates the overall health and momentum of a deal by analyzing activity metrics, 
participant engagement, risk signals, and contextual cues from Slack and Gmail transcripts. A score between 0–30 represents Low Risk, meaning 
the deal shows strong engagement, timely responses, aligned priorities, and no major blockers. A score from 31–59 indicates Medium Risk, suggesting
there are emerging concerns such as slower response times, unclear next steps, or early signs of misalignment that could impact the deal’s trajectory if
not addressed. A score of 60 or above flags the deal as High Risk, where key issues are present — such as stalled communication, negative sentiment, 
timeline pressure, unresolved objections, or low buyer intent or even the deal being called off(100)— and immediate action is needed to prevent loss.

The Churn Risk Score is a measure of the likelihood of the prospect switching to a competitor.

The Timeline Risk Score is a measure of the likelihood of the deal not closing on time.

The Budget Risk Score is a measure of the likelihood of the deal not being budgeted.

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
    "Budget_Risk": [0-100],
    "deal_risk_explanation": "[string]",
    "churn_risk_explanation": "[string]",
    "timeline_risk_explanation": "[string]",
    "budget_risk_explanation": "[string]"
  }},

  "DEAL_INSIGHTS": {{
    "Key_Objections": ["[array of strings]"],
    "Decision_Maker_Status": "[string]",
    "Urgency_Level": "[low | medium | high]",
    "Competitive_Position": "[leading | neutral | behind]"
  }},

  "ACTIVITY_ANALYSIS": {{
    "message_count": [integer],
    "prospect_response_time_sec": [number],
    "engagement_trend": "[improving | declining | stable]",
    "last_touch_channel": "[slack | email | call | meeting]",
    "last_touch_summary": "[string]"
  }},
  "TIMELINE": {{ //Add multiple events, at least 3, 2 should be past events, 1 should be a future event
    "event": {{
      "event_date": "[ISO8601 date]",
      "event_description": "[string]",
      "event_type": "[string]"
    }}
  }},

  "AI_GENERATED_SUMMARY": "[string]",

  "RECOMMENDATIONS": {{
    "Next_Steps": ["[array of strings]"],
    "Escalation_Triggers": "[string]",
    "Deal_Acceleration_Tactics": "[string]"
  }},

  "AI_GENERATED_FOLLOW_UP": {{
    "Email_Draft": [
      {{
        "subject": "[string]",
        "body": "[string]"
      }}
    ],
    "Slack_Message": [string]
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

async def einstein_request(deal_id: str, email: str, slack_id: str):
    try:
        data = {
            "prompt": get_prompt(email, slack_id)
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
  email = sys.argv[2]
  slack_id = sys.argv[3]
  print(f"Running Einstein request for deal ID: {deal_id}")
  asyncio.run(einstein_request(deal_id, email, slack_id))



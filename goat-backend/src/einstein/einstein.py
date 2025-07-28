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

def get_prompt(email: str, slack_id: str, deal_id: str) -> str:
    # Load current conversation data
    current_conversation_data = load_data(email, slack_id)
    
    # Check if conversation data is empty or minimal
    conversation_data_parsed = json.loads(current_conversation_data) if current_conversation_data.strip() else []
    is_empty_or_minimal = len(conversation_data_parsed) == 0 or (len(conversation_data_parsed) == 1 and len(str(conversation_data_parsed[0])) < 100)
    
    # Get current Einstein data to provide context
    einstein_data = get_einstein_data_file(deal_id)
    
    return f"""
You are a sales intelligence AI analyzing deal data from multiple communication channels. 

Your task is to analyze the data and provide a summary of the deal. 
This is the slack data + gmail data:
{current_conversation_data}

**CONVERSATION DATA STATUS**: {'EMPTY OR MINIMAL' if is_empty_or_minimal else 'CONTAINS SUBSTANTIAL DATA'}

FIll out all the fields to the best of your ability. 
DO NOT ADD COMMENTS TO THE JSON.

TASK: Analyze this deal data and provide a structured analysis in the following format:

Here is the current einstein data file we have:
{get_einstein_data_file(deal_id)}

--- INSTRUCTIONS ---
1. Use the communication data to analyze deal progress and participant engagement.
2. **CRITICAL**: The communication data contains the MOST RECENT information. You MUST update ALL fields based on the latest conversation data, even if it contradicts the existing Einstein data file.
3. **ALWAYS OVERWRITE** outdated values in the existing Einstein data file with the current status from the conversation data:
   - Update `deal_stage` based on the final outcome in the conversation
   - Update `deal_value_usd` if mentioned in the latest conversation
   - Update `expected_close_date` if mentioned
   - **COMPLETELY REPLACE** the `RISK_ASSESSMENT` section with current risk scores
   - Update all explanations to reflect the current conversation state
4. When updating the TIMELINE:
   - **REPLACE** the entire timeline with events from the current conversation
   - Use this format:
     Event type: [2-3 words, no past tense verbs like "Scheduled", not a communication form]
     Event description: [Clear, concise summary of the event]
   - Examples:
     - Event type: Deal Lost | Event description: The deal was called off by the prospect.
     - Event type: Deal Won | Event description: The prospect accepted the counter-offer and confirmed the deal.
     - Event type: Price Negotiation | Event description: Rep offered $250,000 discount to save the deal.
5. **RISK SCORE UPDATES**: 
   - If the deal is CLOSED WON: Set `Deal_Risk_Score` to 0-10, `Churn_Risk` to 0-10, `Timeline_Risk` to 0-10
   - If the deal is CLOSED LOST: Set `Deal_Risk_Score` to 90-100, `Churn_Risk` to 80-100
   - If the deal is ACTIVE: Assess based on current conversation sentiment and engagement
6. **ALWAYS PRIORITIZE** the latest conversation data over the existing Einstein data file, even if the latest data appears to be from an earlier point in time. For example:
   - If the Einstein file shows the deal as CLOSED_LOST but the latest conversation shows active deal discussions, update all fields to reflect the current active state
   - If risk scores in Einstein file are high (60-100) but current conversations show positive engagement, lower the risk scores to match reality (0-30)
   - The conversation data represents the current truth - use it to overwrite any conflicting historical data in the Einstein file

7. **CONFLICT DETECTION AND RESOLUTION**:
   - **ANALYZE THE CONVERSATION CONTENT**: Carefully examine the actual conversation data to determine what events, outcomes, or decisions are actually mentioned
   - **DETECT CONFLICTS**: If the Einstein file shows a deal as CLOSED_LOST but the conversation data contains NO MENTION of the deal being called off, lost, or any negative outcome, this indicates a conflict
   - **RESOLVE CONFLICTS**: When you detect such conflicts, you MUST:
     * Reset the deal stage to an appropriate active stage based on the actual conversation content
     * Adjust risk scores to reflect the actual sentiment and engagement in the conversation
     * Update the timeline to only include events that are actually mentioned or implied in the current conversation
     * Remove any references to events that are not supported by the current conversation data
     * Update all explanations to reflect the current state of the conversation
   - **THE RULE**: Only include outcomes, events, or decisions that are explicitly mentioned or clearly implied in the current conversation data
   - **EMPTY/MINIMAL DATA**: If conversation data is empty or minimal, treat as a fresh start and ignore any previous negative outcomes


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
    "name": "[string]" //This is the name of the buyer, not bruce wayne.
  }},
  "last_activity_timestamp": "[ISO8601 datetime]",
  "deal_stage": "[prospecting | qualification | proposal | negotiation | closed_won | closed_lost]",
  "deal_value_usd": [number], // Update this based on the latest conversation (e.g., $250,000 from the counter-offer)
  "expected_close_date": "[ISO8601 date]",

  "RISK_ASSESSMENT": {{
    "Deal_Risk_Score": [0-100], //recalute this every time based on the CURRENT CONVERSATION DATA NOT THE EINSTEIN FILE
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
    // Do NOT include events from the existing Einstein file if they are not supported by current conversation data
    // If the conversation shows ongoing discussions but no mention of deal being called off, do NOT include "Deal Lost" events
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

**FINAL REMINDER**: 
1. If the conversation data is empty or minimal, you MUST ignore any previous negative outcomes (like deals being called off) that are no longer present in the current data.
2. If the conversation data contains ongoing discussions but NO MENTION of the deal being called off, lost, or any negative outcome, you MUST NOT mark the deal as closed_lost.
3. Only include events and outcomes that are actually present in the current conversation data.
4. Treat the conversation data as the single source of truth - if something isn't mentioned there, it didn't happen.


"""

async def einstein_request(deal_id: str, email: str, slack_id: str):
    try:
        data = {
            "prompt": get_prompt(email, slack_id, deal_id)
        }


        print(f"Transcripts: {load_data(email, slack_id)}")
        response = requests.post(string_url, headers=headers, json=data)
        response_json = response.json()
        einstein_response = response_json.get("generation").get("generatedText")

        einstein_response_json = strip_json(einstein_response)
        base_path = os.getcwd()
        with open(os.path.join(base_path, "src", "einstein", "einstein_analysis", f"{deal_id}_einstein_response.json"), "w") as f:
            f.write(einstein_response_json)

        print(f"Einstein response: {einstein_response}")
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



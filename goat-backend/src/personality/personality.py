import os
import asyncio 
from google import genai
from google.genai import types
from typing import List, Literal, Optional
from datetime import datetime
import sys
from pydantic import BaseModel
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from utils.load_data import load_data
from utils.strip_json import strip_json
import json
from dotenv import load_dotenv  
load_dotenv()
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))


# Pydantic models for structured output
class PersonalityCommunicationProfile(BaseModel):
    personality_traits: List[str]
    communication_style: str
    decision_making_style: str
    objection_style: str
    role_in_deal: str

class IntentSentiment(BaseModel):
    intent_signals: List[str]
    overall_sentiment: str
    tone_patterns: str

class ObjectionsConcerns(BaseModel):
    objection_types: List[str]
    objection_frequency_severity: str

class CommunicationBehavior(BaseModel):
    response_time: str
    engagement_level: str
    message_complexity: str
    preferred_channel: str

class DealDynamicsRiskAssessment(BaseModel):
    deal_stage_signals: str
    budget_risk_indicators: str
    timeline_risk_indicators: str
    churn_risk_indicators: str

class DealInsights(BaseModel):
    key_objections: str
    decision_maker_status: str
    urgency_level: str
    competitive_position: str

class PersonalityAnalysis(BaseModel):
    prospect_name: str
    personality_communication_profile: PersonalityCommunicationProfile
    intent_sentiment: IntentSentiment
    objections_concerns: ObjectionsConcerns
    communication_behavior: CommunicationBehavior
    deal_dynamics_risk_assessment: DealDynamicsRiskAssessment
    deal_insights: DealInsights

def personality_analysis_prompt(email: str, slack_id: str):
    return f"""
    You are an expert in behavioral analysis, personality profiling, and B2B sales communication.
    You will be provided with JSON data containing conversations (Slack and Email) between a sales representative and a prospect.
    Your task is to analyze the prospect and generate a structured personality profile along with insight into deal dynamics.
    Only do the analysis for the prospect. DO NOT DO IT FOR BRUCE.
    The prospect is the one listed in gmail.
    ANALYZE THIS SALES DATA:
    {load_data(email, slack_id)}
    

    Your output should include insights across the following categories:

    0. Prospect Name:
        - Prospect Name: What is the name of the prospect?

    1. Personality & Communication Profile
        - Personality Traits (e.g., analytical, assertive, reserved)
        - Communication Style (formal, casual, empathetic, skeptical, etc.)
        - Decision-Making Style (data-driven, cautious, fast-mover, consensus-seeking)
        - Objection Style (direct, indirect, passive-aggressive, collaborative)
        - Role in Deal (decision maker, influencer, blocker, unknown)

    2. Intent & Sentiment
        - Intent Signals: Are they showing interest, stalling, escalating, evaluating?
        - Overall Sentiment: Toward the product and the conversation (positive, neutral, negative)
        - Tone Patterns: Consistent tone across messages (e.g., urgent, analytical, skeptical)

    3. Objections & Concerns
        - Objection Types: Budget-related, Timeline/urgency, Technical limitations, Trust or uncertainty
        - Objection Frequency & Severity: How often and how strongly do they raise concerns?

    4. Communication Behavior
        - Response Time: Fast, slow, inconsistent (approximate if not exact)
        - Engagement Level: High vs. low (message count, message length, enthusiasm)
        - Message Complexity: Short replies, long-form answers, structured or casual
        - Preferred Channel: Slack, Email, or other (if applicable)

    5. Deal Dynamics & Risk Assessment
        - Deal Stage Signals: Are they in qualification, proposal, negotiation, etc.?
        - Budget Risk Indicators: Mentions of cost caps, pushback, or approval needs
        - Timeline Risk Indicators: Delays, conflicting projects, vague timing
        - Churn Risk Indicators: Lack of engagement, slow replies, shifting requirements

    6. Deal Insights
        - Key Objections: What are the most significant concerns or objections?
        - Decision-Maker Status: Is the prospect a decision-maker or an influencer?
        - Urgency Level: How urgent is the deal?
        - Competitive Position: How does the prospect compare to competitors?

    Provide your analysis in a structured JSON format with clear insights and actionable recommendations.
"""


async def get_personality_analysis(email: str, slack_id: str):
    try:
        prompt = personality_analysis_prompt(email, slack_id)
        
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config={
                "response_mime_type": "application/json",
                "response_schema": list[PersonalityAnalysis]
            }
        )
        response_text = str(response.text)
        response_text = response_text.strip("[]")
        
        base_path = os.getcwd()
        with open(os.path.join(base_path, "src", "personality", "personality_analysis", "personality_analysis.json"), "w") as f:
            f.write(response_text)
        print("Written personality analysis to file")

        with open(os.path.join(base_path, "src", "personality", "logs", "personality_analysis.log"), "a") as f:
            f.write(f"Personality analysis completed successfully")
            f.write(f"Response: {response_text}")
            f.write("--------------------------------\n")
        
        return True
    except Exception as e:
        print(f"Error in personality analysis: {e}")
        return None





import asyncio
import json
from mcp_client.main import main
from mcp_servers.gmail_api import send_email

class PipelineService:
    """Service for handling pipeline execution and data processing"""
    
    @staticmethod
    async def execute_pipeline(deal_id: str, slack_id: str, email: str, user_id: str):
        """
        Execute the main pipeline with deal_id, slack_id, email, and user_id
        Returns combined data from all sources
        """
        try:
            print(f"Executing pipeline for deal_id: {deal_id}, slack_id: {slack_id}, email: {email}, user_id: {user_id}")
            success = await main(deal_id, slack_id, email, user_id)
            print(f"Pipeline execution result: {success}")
            
            if success:
                # Load Einstein analysis data
                einstein_data = PipelineService._load_einstein_data(deal_id)
                print(f"Einstein data loaded: {bool(einstein_data)}")
                
                # Load Slack transcript data
                slack_data = PipelineService._load_slack_data(slack_id)
                print(f"Slack data loaded: {bool(slack_data)}")
                
                # Load Gmail transcript data
                gmail_data = PipelineService._load_gmail_data(email)
                print(f"Gmail data loaded: {bool(gmail_data)}")
                
                # Load personality analysis data
                personality_data = PipelineService._load_personality_data(email)
                print(f"Personality data loaded: {bool(personality_data)}")

                # Combine all data
                combined_data = einstein_data
                combined_data["slack_transcript"] = slack_data
                combined_data["gmail_transcript"] = gmail_data
                combined_data["personality_analysis"] = personality_data
                
                print(f"Combined data keys: {list(combined_data.keys())}")
                return {"status": "success", "data": combined_data}
            else:
                print("Pipeline returned False - indicating failure")
                return {"status": "error", "message": "Pipeline failed"}
        except Exception as e:
            print(f"Pipeline execution exception: {e}")
            return {"status": "error", "message": str(e)}
    
    @staticmethod
    def _load_einstein_data(deal_id: str):
        """Load Einstein analysis data from file"""
        try:
            with open(f'src/einstein/einstein_analysis/{deal_id}_einstein_response.json', 'r') as f:
                data = f.read()
                return json.loads(data)
        except Exception as e:
            print(f"Error loading Einstein data: {e}")
            return {}
    
    @staticmethod
    def _load_slack_data(slack_id: str):
        """Load Slack transcript data from file"""
        try:
            with open(f'transcripts/slack/{slack_id}_structured_response.json', 'r') as f:
                slack_data = f.read()
                return json.loads(slack_data)
        except Exception as e:
            print(f"Error loading Slack data: {e}")
            return {}
    
    @staticmethod
    def _load_gmail_data(email: str):
        """Load Gmail transcript data from file"""
        try:
            with open(f'transcripts/gmail/{email}_structured_response.json', 'r') as f:
                gmail_data = f.read() 
                return json.loads(gmail_data)
        except Exception as e:
            print(f"Error loading Gmail data: {e}")
            return {}
    
    @staticmethod
    def _load_personality_data(email: str):
        """Load personality analysis data from file"""
        try:
            with open(f'src/personality/personality_analysis/{email}.json', 'r') as f:
                personality_data = f.read()
                return json.loads(personality_data)
        except Exception as e:
            print(f"Error loading personality data: {e}")
            return {}


class EmailService:
    """Service for handling email operations"""
    
    @staticmethod
    def send_email(email: str, subject: str, body: str, user_id: str):
        """
        Send an email using the Gmail API with OAuth tokens from database
        """
        try:
            print(f"EmailService: Sending email to {email} with user_id {user_id}")
            response = send_email(email, subject, body, user_id)
            print("Email response:", response)
            if response:
                return {"status": "success", "message": "Email sent", "message_id": response.get("id")}
            else:
                return {"status": "error", "message": "Failed to send email"}
        except Exception as e:
            print(f"EmailService error: {e}")
            return {"status": "error", "message": str(e)}

import asyncio
from mcp_client.main import main
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json

class Request(BaseModel):
    deal_id: str
    slack_id: str
    email: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/run")
def run_pipeline(request: Request):
    try:
        print(request)
        success = asyncio.run(main(request.deal_id, request.slack_id, request.email))
        # success = True
        if success:
            with open(f'src/einstein/einstein_analysis/{request.deal_id}_einstein_response.json', 'r') as f:
                data = f.read()
                json_data = json.loads(data)
            with open(f'transcripts/slack/{request.slack_id}_structured_response.json', 'r') as f:
                slack_data = f.read()
                slack_transcript_json = json.loads(slack_data)
            
            with open(f'transcripts/gmail/{request.email}_structured_response.json', 'r') as f:
                gmail_data = f.read() 
                gmail_transcript_json = json.loads(gmail_data)
            
            with open(f'src/personality/personality_analysis/personality_analysis.json', 'r') as f:
                personality_data = f.read()
                personality_json = json.loads(personality_data)

            json_data["slack_transcript"] = slack_transcript_json
            json_data["gmail_transcript"] = gmail_transcript_json
            json_data["personality_analysis"] = personality_json
            return {"status": "success", "data": json_data}
        else:
            return {"status": "error", "message": "Pipeline failed"}
    except Exception as e:
        return {"status": "error", "message": str(e)}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=3001)
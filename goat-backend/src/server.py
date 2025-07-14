import asyncio
from mcp_client.main import main
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
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
        if success:
            return {"status": "success"}
        else:
            return {"status": "error", "message": "Pipeline failed"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=3001)
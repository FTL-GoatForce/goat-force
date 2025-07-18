import asyncio
from fastmcp import Client
from fastapi import FastAPI
from pydantic import BaseModel
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from google import genai
from google.genai import types
import os
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

# -------------- Google Docs ServerParams
server_params = StdioServerParameters(
    command="python",  
    args=["./src/mcp_servers/chatbot.py"],  # MCP Server
    env=None,  
)
# ------------- FastAPI APP : Creating the server and adding CORS
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

# ------------- Gemini
gemini_client =  genai.Client(api_key=api_key) # add api key here


# ------------- Data Checking  | Only accept a POST with JSON that has a message key of type string
class MessageRequest (BaseModel):
    message: str
    chatHistory: list = []


# -------------- FastAPI Endpoint that recieves a post with a string
@app.post('/api/message')
async def receieve_message(request: MessageRequest):
    try:
        # ----------- Receieve message request then run our MCP Server 
        print(f"Message Recieved: {request.message}")
        print(f"Chat History: {request.chatHistory}")
        result = await run(request, request.chatHistory)
        return {
            "success":True,
            "response": result
        }
    except Exception as e:
        return{
            "success":False,
            "response": f"Error: {str(e)}"
        }


# ------------ Once a message is recieved to the API Endpoint - Run MCP Server and create an API Request - Then Return the Gemini Response
async def run(message: MessageRequest, chatHistory: list):
    async with stdio_client(server_params) as (read, write):    # launches our MCP server 
        async with ClientSession(read, write) as session:   # Wraps the read and write into an MCP session object so we can invoke tools 
            try:
                # ----------- Starting our session giving gemini access to tools 
                await session.initialize()  
                response = await gemini_client.aio.models.generate_content(
                    model = "gemini-2.5-flash",
                    contents = f""" 
                    You are GoatForce Analyst, an expert assistant trained to analyze and provide insights about active sales deals. You have access to two tools:
                    1. get_deals() — Retrieves a list of all deals with basic information (ID, name, company, stage, status, amount, etc.).
                    2. get_deal_details(deal_id) — Given a deal ID, returns detailed metrics, participants, risk scores, activities, follow-ups, tags, and more.

                    Always follow this pattern before answering any user question:
                    1. Call get_deals() to gather the list of deals.
                    2. Based on the user’s query, extract the relevant deal IDs.
                    3. Call get_deal_details(deal_id) for each relevant deal to retrieve deeper insights.

                    Your responsibilities:
                    1. Answer questions about deal performance, progress, and risk.
                    2. Compare deals or filter by custom criteria such as stage, risk level, or rep performance.
                    3. Detect trends or flag concerns across any deal.
                    4. Provide data-driven recommendations or insights.

                    Only answer based on the data retrieved. Avoid speculation. If more information is needed to answer the question properly, explain what’s missing.

                    The user's query is: {message.message}
                    The chat history is: {chatHistory}

                    Always return the response in markdown format, 100-200 words. Instead of bullet points,just make a new line for each point.
                    """,
                # Giving gemini access to tools 
                 config=types.GenerateContentConfig(
                        tools=[session]
                    )
                )

                return (response.text)
            
            except Exception as e:
                return {
                    "success":False,
                    "message":f"Error: {str(e)}",
                    "status": "error"
                }
            

    # Going to need a different post route and new mcp tool for SANDBOX mode, will give access to a contacts personality data and etc,
    
#  Calling this in python auto starts the API Server 
if __name__ == "__main__":
    print("Starting FastAPI Server")
    uvicorn.run(app, host="0.0.0.0", port=8000)
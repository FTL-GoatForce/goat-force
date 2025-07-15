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


# -------------- FastAPI Endpoint that recieves a post with a string
@app.post('/api/message')
async def receieve_message(request: MessageRequest):
    try:
        # ----------- Receieve message request then run our MCP Server 
        print(f"Message Recieved: {request.message}")
        result = await run(request)
        return {
            "success":True,
            "response": result
        }
    except Exception as e:
        return{
            "success":False,
            "response":result
        }


# ------------ Once a message is recieved to the API Endpoint - Run MCP Server and create an API Request - Then Return the Gemini Response
async def run(message: MessageRequest):
    async with stdio_client(server_params) as (read, write):    # launches our MCP server 
        async with ClientSession(read, write) as session:   # Wraps the read and write into an MCP session object so we can invoke tools 
            try:
                # ----------- Starting our session giving gemini access to tools 
                await session.initialize()  
                response = await gemini_client.aio.models.generate_content(
                    model = "gemini-2.5-flash",
                    contents = f""" 
                    You are **GoatForce**, an AI‑powered sales assistant that helps any sales rep stay on top of their CRM deals.  
                    Your goal: cut down administrative work so the user can focus on selling, increase close rates, and drive more revenue.



                    Your job is to:
                    1. Read the user’s natural‑language message and identify their intent.  
                    2. Decide whether you need to call **get_deals** (or simply reply if no data fetch is required).  
                    3. Craft an informative response that helps the user act on their deals (e.g., show deal details, flag risks, suggest next steps, generate follow‑up reminders, summarize communications, compare deals, etc.).  
                    4. Output your answer in **Markdown**.  
                    5. Use clean, bolded field labels and line breaks—*no* asterisks or bullet‑point lists.  
                    6. Keep the tone concise, professional, and action‑oriented.

                    Here are the available tools available: 
                    1. 'get_deals'
                    - Retrieves all deals from the database (including id).
                    - No required parameters.
                    
                    
                    ### Example deal‑detail format
                    **Deal Name:** Test Deal  
                    **Company:** Dariel Got Motion  
                    **Stage:** Qualification  
                    **Status:** Awaiting technical review  
                    **Amount:** $20,000.00  
                    **Expected Close Date:** January 1, 2026  
                    **Created At:** July 14, 2025  
                    **Updated At:** July 16, 2025  
                    **Deal ID:** 1  

                    ### Example summary / recommendation format
                    You have five active deals. Two are overdue for follow‑up (IDs 3 & 4). I recommend emailing the decision maker at Apex Labs today and scheduling a demo for BrightCore by Friday to keep both opportunities warm.

                    Here is the user's message: {message.message}

                    Return the response in markdown format using the guidelines above.
                    """,

                # Giving gemini access to tools 
                 config=types.GenerateContentConfig(
                        tools=[session]
                    )
                )
                print(response.text) # ! DEBUGGING 
                return (response.text)
            
            except Exception as e:
                return {
                    "success":False,
                    "message":f"Error: {str(e)}",
                    "status": "error"
                }
            
#  Calling this in python auto starts the API Server 
if __name__ == "__main__":
    print("Starting FastAPI Server")
    uvicorn.run(app, host="0.0.0.0", port=8000)
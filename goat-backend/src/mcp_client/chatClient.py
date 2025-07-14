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
                    You are a smart AI assistant that manages a user's CRM deal data, . You have access to multiple tools that allow you to read from all of the users deals.
                    You are to allow the user to spend less time on administrative tasks and more time actively selling, ultimately improving deal close rates in turn producing more company revenue.



                    Your job is to:
                    1. Understand the user's natrual language message.
                    2. Decide which tool to call based on the user's intent.
                    3. Take in the users request and respond in natural language as an informed assistant on all their deals 

                    Here are the available tools available: 
                    1. 'get_deals'
                    - Retrieves all deals from the database (including id).
                    - No required parameters.
                    


                    Here is the user's message: {message.message}

                    Return the response in markdown format.
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
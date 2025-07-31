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

# ------------- Data Checking  | Only accept a POST with JSON that has a message key of type string
class SandboxMessageRequest (BaseModel):
    message: str
    participant: str
    chatHistory: list = []
    deal_name: str
    deal_id: int
    
# -------------- Data Checking
class ReportRequest (BaseModel):
    participant: str
    chatHistory: list = []
    deal_name: str
    deal_id: int


# --------------- Gemini Structured Output for run report
class Report (BaseModel):
    score: int
    summary: str
    improvements: list[str]
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

# -------------- FastAPI Endpoint that recieves a post with a string
@app.post('/api/sandbox')
async def receive_sandbox_message(request : SandboxMessageRequest):
    try:
        # Recieve Sandbox message then run our mcp server
        print(f"Message Recieved: {request.message}")
        result = await runSandbox(request)
        return{
            'success':True,
            'response':result
        }
    except Exception as e:
        return{
            'sucess':False,
            'response': f"Error:{str(e)}"
        }
# ----------- FastApi Endpoint for generating a sandbox report
@app.post('/api/report')
async def generate_sandbox_report(request : ReportRequest):
    try:
        # Recieve report request
        print(f"Report Request Recieved: {request.participant}")
        result = await runReport(request)
        return {
            'success':True,
            'response':result
        }
    except Exception as e:
        return{
            'success':False,
            'response': f"Error: {str(e)}"
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
                    3. edit_deal(deal_id, body) — Given a deal ID and an update body, this tool updates specific fields of an existing deal.
                        The `edit_deal` tool requires:
                        - `deal_id` (int): The unique identifier of the deal you want to update.
                        - `body` (dict): A dictionary with any of the following updatable fields:
                        {{
                            "deal_name": "string",
                            "company_name": "string",
                            "stage": "string (optional)",
                            "deal_value": float,
                            "deal_description": "string",
                            "service_category": "string",
                            "contract_term_length": "string",
                            "expected_close_date": "string (YYYY-MM-DD)",
                            "job_status": "string"
                        }}

                    Do not include `id`, `created_at`, or `updated_at` in the body — those are managed automatically.

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
async def runSandbox(message: SandboxMessageRequest):
        async with stdio_client(server_params) as (read, write):    # launches our MCP server 
            async with ClientSession(read, write) as session:   # Wraps the read and write into an MCP session object so we can invoke tools 
                try:
                    # ----------- Starting our session giving gemini access to tools 
                    await session.initialize()  
                    response = await gemini_client.aio.models.generate_content(
                        model = "gemini-2.5-flash",
                        contents = f""" 
                 You are an expert assistant designed to simulate {message.participant}, allowing Sales Reps to practice conversations with a point of contact in a realistic, data-driven environment.
                 Mainly use the information on the databse to help you in portraying yourself as {message.participant},  the deal you are working on is deal_name = {message.deal_name}, deal_id = {message.deal_id}, and you are in SANDBOX MODE.
                    You have access to two tools to assist in this simulation:
                    1. get_deals() — Retrieves a list of all deals with basic information (ID, name, company, stage, status, amount, etc.).
                    2. get_deal_details(deal_id) — Given a deal ID, returns detailed metrics, participants, risk scores, activities, follow-ups, tags, and more.

                    Always follow this process before responding:
                    1. Call get_deals() to gather the full list of deals, and find the deal_id for {message.deal_id}. This is crucial for accessing the right data.
                    2. Use get_deal_details(deal_id) on those specific deals to extract deeper insights, you can see personality analysis for {message.participant} and cater your responses accordingly.

                    Your goals in SANDBOX MODE:
                    1. Respond accurately to questions about deal performance, progress, risks, and sales dynamics.
                    2. Simulate {message.participant}'s personality and behavior based on the provided data.
                    3. Spot trends or raise concerns from available data.
                    4. Offer useful, data-backed recommendations.
                    5. Portray {message.participant} in a realistic way, keeping conversation context in mind.


                    Only use the information retrieved through the tools. Do not speculate. If required data is missing, clearly explain what is needed.

                    The user's query is: {message.message}
                    The chat history is: {message.chatHistory}
                    Only use the chat history regarding the specific participant you are being asked to portray

                    Respond in markdown format, 100–200 words. Avoid bullet points; instead, write in concise, informative full sentences with natural line breaks.
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

async def runReport(message : ReportRequest):
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session: 
            try:
                await session.initialize()
                response = await gemini_client.aio.models.generate_content(
                    model= "gemini-2.5-flash",
                    contents= f"""
                    Your are given the chat history: {message.chatHistory} between the user and you acting as {message.participant} for the deal {message.deal_name} deal_id {message.deal_id}, through tools you have access
                    to {message.participant}'s personality assesment.

                    You have access to one tool to assist in this simulation:
                    1. get_deal_details(deal_id) — Given a deal ID, returns detailed metrics, personality, participants, risk scores, participant activities, follow-ups, tags, and more.

                    When constructing a response you should:
                    1. Analyze the chat history
                    2. Use the tools to look into the personality table of deal_id {message.deal_id} for {message.participant}
                    3. Construct a summary of the chat where you tell positives and negatives of the chat and give constructive feedback
                    4. Rate the simulated conversation on a score 1 - 100, with 100 being a perfect conversation. Do not score the AI Responses only what the user says.
                    5. Give different improvements the user could give for the real conversation
                    6. Structure the response as a JSON object with the following structure:

                    {{
                        "score": <integer between 1-100>,
                        "summary": "<string summary (up to 100 words)>",
                        "improvements": ["<improvement 1 (up to 25 words)>", "<improvement 2 (up to 25 words)>", "<improvement 3 (up to 25 words)>"]
                    }}
                    """,
                    # give gemini tools
                    config=types.GenerateContentConfig(
                        tools=[session],
                        # response_mime_type= "application/json",
                        # response_schema= Report.model_json_schema()
                        # cant use structured output when using tools with JSOn- must use one or the other
                    )
                )
                return (response.text)
            except Exception as e:
                return{
                    "success":False,
                    "message":f"Error: {str(e)}",
                    "status": "error"
                }




#  Calling this in python auto starts the API Server 
if __name__ == "__main__":
    print("Starting FastAPI Server")
    uvicorn.run(app, host="0.0.0.0", port=8000)
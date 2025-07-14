from fastmcp import FastMCP
from prisma import Prisma
from datetime import datetime
from typing import Optional, List
import asyncio

mcp = FastMCP("chatbot-server")  # initialized our FastMCP server 
prisma = Prisma()   # initialized our prisma client

@mcp.tool
async def get_deals():
    try:
        await prisma.connect() # connect to prisma
        result = await prisma.deals.find_many() # find all deals
        return result # return deals
    except Exception as e:
        return {'err': str(e)}
    finally:
        await prisma.disconnect()

    
# Within the FastMCP ecosystem, this line may be unnecessary. However, including it ensures that your FastMCP server runs for all users and clients in a consistent way and is therefore recommended as best practice.
if __name__ == "__main__":
    mcp.run()

#  Code Notes 
# *  This file (server) acts as a backend service that exposes our database to the client calls, 
# *  We will communicate between server and client using FastMCP which will expose our functions as tools to Gemini
# !  chatbot.py ---  uses fastmcp to expose these database operations as "tools" that the client can call.

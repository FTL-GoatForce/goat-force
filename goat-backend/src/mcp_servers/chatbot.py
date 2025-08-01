from fastmcp import FastMCP
from prisma import Prisma
from datetime import datetime
from typing import Optional, List
import asyncio

mcp = FastMCP("chatbot-server")  # initialized our FastMCP server 
prisma = Prisma()   # initialized our prisma client

@mcp.tool
async def edit_deal(deal_id: int, body: dict):
    try:
        await prisma.connect()
        updated_deal = await prisma.deals.update(
            where={"id": deal_id},
            data=body
        )
        return updated_deal
    except Exception as e:
        return {'err': str(e)}
    finally:
        await prisma.disconnect()


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

@mcp.tool
async def get_deal_details(deal_id: int):
    try:
        await prisma.connect()
        response = {}
        deal = await prisma.deals.find_unique(
            where={"id": deal_id}
        )
        response["deal"] = deal

        participants = await prisma.participants.find_many(
            where={"deal_id": deal_id}
        )
        response["participants"] = participants
        participant_id = participants[0].id

        risks = await prisma.risks.find_many(
            where={"deal_id": deal_id}
        )
        response["risks"] = risks

        activity_metrics = await prisma.activitymetrics.find_many(
            where={"deal_id": deal_id}
        )
        response["activityMetrics"] = activity_metrics

        ai_recommendation = await prisma.airecommendation.find_many(
            where={"deal_id": deal_id}
        )
        response["aiRecommendation"] = ai_recommendation

        follow_ups = await prisma.followup.find_many(
            where={"deal_id": deal_id}
        )
        response["followUps"] = follow_ups

        tags = await prisma.tags.find_many(
            where={"deal_id": deal_id}
        )
        response["tags"] = tags

        conversation_history = await prisma.conversationhistory.find_many(
            where={"deal_id": deal_id}
        )
        response["conversationHistory"] = conversation_history

        deal_insights = await prisma.dealinsights.find_many(
            where={"deal_id": deal_id}
        )
        response["dealInsights"] = deal_insights

        risk_explanation = await prisma.riskexplanation.find_many(
            where={"risk_id": risks[0].id}
        )
        response["riskExplanation"] = risk_explanation

        personality = await prisma.personality.find_many(
            where={"participant_id": participant_id}
        )
        response["personality"] = personality

        timeline = await prisma.timeline.find_many(
            where={"activity_metrics_id": activity_metrics[0].id}
        )
        response["timeline"] = timeline

        return response
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
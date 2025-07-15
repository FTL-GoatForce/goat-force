// Controller Imports
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
const prisma = new PrismaClient();
dotenv.config();
const FASTAPI_URL = process.env.FASTAPI_URL;

export const createDeal = async (req, res) => {
  try {
    const {company_name, deal_name, deal_description, deal_value, service_category, contract_term_length, expected_close_date } = req.body;
    const deal = await prisma.deals.create({
      data: {
        company_name,
        deal_name,
        deal_value,
        deal_description,
        service_category,
        contract_term_length,
        expected_close_date
      },

    });
    const dealId = deal.id;
    const {prospect_name, email, slack_id, phone_number} = req.body;
    const participant = await prisma.participants.create({
      data: {
        deal_id: dealId,
        prospect_name,
        email,
        slack_id,
        phone_number
      }
    });
    const participant_id = participant.id;
    
    const run_pipeline = await fetch(`${FASTAPI_URL}/run`, {
      method: "POST",
      body: JSON.stringify({ 
        deal_id: dealId.toString(),
        slack_id: slack_id, 
        email: email 
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (!run_pipeline.ok) {
      const errorText = await run_pipeline.text();
      console.error("FastAPI error:", run_pipeline.status, errorText);
      throw new Error(`FastAPI request failed: ${run_pipeline.status} - ${errorText}`);
    }
    const response = await run_pipeline.json();
    const einstein_data = response.data;
    const einstein_response = await saveEinsteinData(dealId, participant_id, slack_id, email, einstein_data);
    res.status(200).json({ deal, participant, einstein_response });
  } catch (error) {
    console.log("Error creating deal or participant", error);
    res.status(500).json({ error: error.message });
  }
};

const saveEinsteinData = async (dealId, participant_id, slack_id, email, einsteinData) => {
  try {
    const { deal_stage, PARTICIPANTS, RISK_ASSESSMENT, DEAL_INSIGHTS, RECOMMENDATIONS, AI_GENERATED_FOLLOW_UP, AI_GENERATED_SUMMARY, ACTIVITY_ANALYSIS, TIMELINE, slack_transcript, gmail_transcript, personality_analysis, TAGS} = einsteinData;
    
    const updatedDeal = await prisma.deals.update({
      where: { id: dealId },
      data: {
        stage: deal_stage,
      }
    });
    console.log("made it past deals");
    
    const updateParticipant = await prisma.participants.update({
      where: { id: participant_id },
      data: {
        role: PARTICIPANTS[0].role,
        communication_score: PARTICIPANTS[0].communication_score,
        sentiment: PARTICIPANTS[0].sentiment,
      }
    });
    console.log("made it past participants");
    
    const updateRisks = await prisma.risks.create({
      data: {
        deal_id: dealId,
        deal_risk_score: RISK_ASSESSMENT.Deal_Risk_Score,
        churn_risk_score: RISK_ASSESSMENT.Churn_Risk,
        timeline_risk_score: RISK_ASSESSMENT.Timeline_Risk,
        budget_risk_score: RISK_ASSESSMENT.Budget_Risk
      }
    });
    console.log("made it past risks");
    
    const updateDealRiskExplanation = await prisma.riskExplanation.create({
      data: {
        risk_id: updateRisks.id,
        budget_risk_explanation: RISK_ASSESSMENT.budget_risk_explanation,
        timeline_risk_explanation: RISK_ASSESSMENT.timeline_risk_explanation,
        churn_risk_explanation: RISK_ASSESSMENT.churn_risk_explanation,
        deal_risk_summary: RISK_ASSESSMENT.deal_risk_explanation
      }
    });
    console.log("made it past risk explanation");
    
    const updateDealInsights = await prisma.dealInsights.create({
      data:{
        deal_id: dealId,
        key_objections: DEAL_INSIGHTS.Key_Objections,
        decision_maker_status: DEAL_INSIGHTS.Decision_Maker_Status,
        urgency_level: DEAL_INSIGHTS.Urgency_Level,
        competitive_position: DEAL_INSIGHTS.Competitive_Position
      }
    });
    console.log("made it past deal insights");
    
    const updateAiRecommendation = await prisma.aiRecommendation.create({
      data: {
        deal_id: dealId,
        deal_acceleration_tactics: RECOMMENDATIONS.Deal_Acceleration_Tactics,
        escalation_triggers: RECOMMENDATIONS.Escalation_Triggers,
        next_steps: RECOMMENDATIONS.Next_Steps
      }
    });
    console.log("made it past ai recommendation");
    
    const updateEmailDraft = await prisma.followUp.create({
      data: {
        deal_id: dealId,
        communication_type: "Email",
        contact_address: email,
        subject: AI_GENERATED_FOLLOW_UP.Email_Draft[0].subject,
        body: AI_GENERATED_FOLLOW_UP.Email_Draft[0].body
      }
    });
    console.log("made it past email draft");
    
    const updateSlackMessage = await prisma.followUp.create({
      data: {
        deal_id: dealId,
        communication_type: "Slack",
        contact_address: slack_id,
        body: AI_GENERATED_FOLLOW_UP.Slack_Message
      }
    });
    console.log("made it past slack message");
    
    const updateTags = await prisma.tags.create({
      data: {
        deal_id: dealId,
        tag: TAGS
      }
    });
    console.log("made it past tags");
    
    const updateActivityMetrics = await prisma.activityMetrics.create({
      data: {
        deal_id: dealId,
        message_count: ACTIVITY_ANALYSIS.message_count,
        prospect_response_time: ACTIVITY_ANALYSIS.prospect_response_time_sec,
        engagement_trend: ACTIVITY_ANALYSIS.engagement_trend,
        last_communication_source: ACTIVITY_ANALYSIS.last_touch_channel,
        last_communication_summary: ACTIVITY_ANALYSIS.last_touch_summary
      }
    });
    console.log("made it past activity metrics");
    
    const updateTimeline = await prisma.timeline.create({
      data: {
        activity_metrics_id: updateActivityMetrics.id,
        event: TIMELINE
      }
    });
    console.log("made it past timeline");
    
    const updateConversationHistory = await prisma.conversationHistory.create({
      data: {
        deal_id: dealId,
        slack: slack_transcript,
        email: gmail_transcript,
        deal_summary: AI_GENERATED_SUMMARY
      }
    });
    console.log("made it past conversation history");
    
    const updatePersonalityAnalysis = await prisma.personality.create({
      data: {
        participant_id: participant_id,
        personality_traits: personality_analysis
      }
    });
    console.log("made it past personality analysis");
    
    return true;
  } catch (error) {
    console.error("Error in saveEinsteinData:", error);
    throw error;
  }
}

export const getDealDetails = async (req, res) => {
  try {
    const response = {};
    const { id } = req.params;
    const deal = await prisma.deals.findUnique({
      where: { id: parseInt(id) },
    });
    response.deal = deal;

    const participants = await prisma.participants.findMany({
      where: { deal_id: parseInt(id) },
    });
    response.participants = participants;
    const participant_id = participants[0].id;

    const risks = await prisma.risks.findMany({
      where: { deal_id: parseInt(id) },
    });
    response.risks = risks;

    const activityMetrics = await prisma.activityMetrics.findMany({
      where: { deal_id: parseInt(id) },
    });
    response.activityMetrics = activityMetrics;

    const aiRecommendation = await prisma.aiRecommendation.findMany({
      where: { deal_id: parseInt(id) },
    });
    response.aiRecommendation = aiRecommendation;

    const followUps = await prisma.followUp.findMany({
      where: { deal_id: parseInt(id) },
    });
    response.followUps = followUps;

    const tags = await prisma.tags.findMany({
      where: { deal_id: parseInt(id) },
    });
    response.tags = tags;

    const conversationHistory = await prisma.conversationHistory.findMany({
      where: { deal_id: parseInt(id) },
    });
    response.conversationHistory = conversationHistory;

    const dealInsights = await prisma.dealInsights.findMany({
      where: { deal_id: parseInt(id) },
    });
    response.dealInsights = dealInsights;

    const riskExplanation = await prisma.riskExplanation.findMany({
      where: { risk_id: risks[0].id },
    });
    response.riskExplanation = riskExplanation;

    const personality = await prisma.personality.findMany({
      where: { participant_id: participant_id },
    });
    response.personality = personality;

    const timeline = await prisma.timeline.findMany({
      where: { activity_metrics_id: activityMetrics[0].id },
    });
    response.timeline = timeline;

    res.status(200).json(response);
  } catch (error) {
    console.error("Error getting deal:", error);
    res.status(500).json({ error: error.message });
  }
}
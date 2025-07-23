// Controller Imports
import dotenv from "dotenv";
import { getLastUpdatedAt } from "../utils/getLastUpdatedAt.js";
import { getSocketInstance } from "../web_socket/socket.js";
import redis from "../utils/redis.js";
import prisma from "../db/db.js";
dotenv.config();
const FASTAPI_URL = process.env.FASTAPI_URL;

export const createDeal = async (req, res) => {
  const io = getSocketInstance();
  let dealId = null;

  try {
    const {
      company_name,
      deal_name,
      deal_description,
      deal_value,
      service_category,
      contract_term_length,
      expected_close_date,
    } = req.body;
    const deal = await prisma.deals.create({
      data: {
        company_name,
        deal_name,
        deal_value,
        deal_description,
        service_category,
        contract_term_length,
        expected_close_date,
        job_status: "processing",
      },
    });
    dealId = deal.id;

    // Emit event to WebSocket clients | Deal is processing
    try {
      io.emit("JobStatusUpdate", {
        dealId,
        status: "processing",
      });
      console.log(
        `Backend Emitted JobStatusUpdate for deal ${dealId} (processing)`
      );
    } catch (socketError) {
      console.error("WebSocket emission error:", socketError);
      // Continue processing even if WebSocket fails
    }

    const { prospect_name, email, slack_id, phone_number } = req.body;
    const participant = await prisma.participants.create({
      data: {
        deal_id: dealId,
        prospect_name,
        email,
        slack_id,
        phone_number,
      },
    });
    const participant_id = participant.id;

    const run_pipeline = await fetch(`${FASTAPI_URL}/run`, {
      method: "POST",
      body: JSON.stringify({
        deal_id: dealId.toString(),
        slack_id: slack_id,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!run_pipeline.ok) {
      const errorText = await run_pipeline.text();
      console.error("FastAPI error:", run_pipeline.status, errorText);
      throw new Error(
        `FastAPI request failed: ${run_pipeline.status} - ${errorText}`
      );
    }
    const response = await run_pipeline.json();
    const einstein_data = response.data;
    const einstein_response = await saveEinsteinData(
      dealId,
      participant_id,
      slack_id,
      email,
      einstein_data
    );
    await prisma.deals.update({
      where: { id: dealId },
      data: { job_status: "idle" },
    });

    // Emit event to WebSocket clients that the Deal is idle
    try {
      io.emit("JobStatusUpdate", {
        dealId,
        status: "idle",
      });
      console.log(`Backend Emitted JobStatusUpdate for deal ${dealId} (idle)`);
    } catch (socketError) {
      console.error("WebSocket emission error:", socketError);
      // Continue processing even if WebSocket fails
    }

    // fetch that full deal

    const updatedDealDetails = await getDealDetailsRaw(dealId);

    // So that the frontend refreshed I'm sending another socket emit that tells the Client we need to update a certain deal
    try {
      io.emit("NewDealUpdate", {
        deal: updatedDealDetails,
        dealId,
      });
      console.log(`Backend Emitted NewDealUpdate for deal ${dealId}`);
    } catch (socketError) {
      console.log(socketError);
    }

    res.status(200).json({ deal, participant, einstein_response });
  } catch (error) {
    console.log("Error creating deal or participant", error);

    // Emit error status if dealId exists

    res.status(500).json({ error: error.message });
  }
};

const saveEinsteinData = async (
  dealId,
  participant_id,
  slack_id,
  email,
  einsteinData
) => {
  try {
    const {
      deal_stage,
      PARTICIPANTS,
      RISK_ASSESSMENT,
      DEAL_INSIGHTS,
      RECOMMENDATIONS,
      AI_GENERATED_FOLLOW_UP,
      AI_GENERATED_SUMMARY,
      ACTIVITY_ANALYSIS,
      TIMELINE,
      slack_transcript,
      gmail_transcript,
      personality_analysis,
      TAGS,
    } = einsteinData;

    const updatedDeal = await prisma.deals.update({
      where: { id: dealId },
      data: { stage: deal_stage },
    });

    const updateParticipant = await prisma.participants.update({
      where: { id: participant_id },
      data: {
        role: PARTICIPANTS[0].role,
        communication_score: PARTICIPANTS[0].communication_score,
        sentiment: PARTICIPANTS[0].sentiment,
      },
    });

    const existingRisk = await prisma.risks.findFirst({
      where: { deal_id: dealId },
    });

    const updateRisks = existingRisk
      ? await prisma.risks.update({
          where: { id: existingRisk.id },
          data: {
            deal_risk_score: RISK_ASSESSMENT.Deal_Risk_Score,
            churn_risk_score: RISK_ASSESSMENT.Churn_Risk,
            timeline_risk_score: RISK_ASSESSMENT.Timeline_Risk,
            budget_risk_score: RISK_ASSESSMENT.Budget_Risk,
          },
        })
      : await prisma.risks.create({
          data: {
            deal_id: dealId,
            deal_risk_score: RISK_ASSESSMENT.Deal_Risk_Score,
            churn_risk_score: RISK_ASSESSMENT.Churn_Risk,
            timeline_risk_score: RISK_ASSESSMENT.Timeline_Risk,
            budget_risk_score: RISK_ASSESSMENT.Budget_Risk,
          },
        });

    const existingRiskExplanation = await prisma.riskExplanation.findFirst({
      where: { risk_id: updateRisks.id },
    });

    if (existingRiskExplanation) {
      await prisma.riskExplanation.update({
        where: { id: existingRiskExplanation.id },
        data: {
          budget_risk_explanation: RISK_ASSESSMENT.budget_risk_explanation,
          timeline_risk_explanation: RISK_ASSESSMENT.timeline_risk_explanation,
          churn_risk_explanation: RISK_ASSESSMENT.churn_risk_explanation,
          deal_risk_summary: RISK_ASSESSMENT.deal_risk_explanation,
        },
      });
    } else {
      await prisma.riskExplanation.create({
        data: {
          risk_id: updateRisks.id,
          budget_risk_explanation: RISK_ASSESSMENT.budget_risk_explanation,
          timeline_risk_explanation: RISK_ASSESSMENT.timeline_risk_explanation,
          churn_risk_explanation: RISK_ASSESSMENT.churn_risk_explanation,
          deal_risk_summary: RISK_ASSESSMENT.deal_risk_explanation,
        },
      });
    }

    const existingDealInsights = await prisma.dealInsights.findFirst({
      where: { deal_id: dealId },
    });

    if (existingDealInsights) {
      await prisma.dealInsights.update({
        where: { id: existingDealInsights.id },
        data: {
          key_objections: DEAL_INSIGHTS.Key_Objections,
          decision_maker_status: DEAL_INSIGHTS.Decision_Maker_Status,
          urgency_level: DEAL_INSIGHTS.Urgency_Level,
          competitive_position: DEAL_INSIGHTS.Competitive_Position,
        },
      });
    } else {
      await prisma.dealInsights.create({
        data: {
          deal_id: dealId,
          key_objections: DEAL_INSIGHTS.Key_Objections,
          decision_maker_status: DEAL_INSIGHTS.Decision_Maker_Status,
          urgency_level: DEAL_INSIGHTS.Urgency_Level,
          competitive_position: DEAL_INSIGHTS.Competitive_Position,
        },
      });
    }

    const existingAiRecommendation = await prisma.aiRecommendation.findFirst({
      where: { deal_id: dealId },
    });

    if (existingAiRecommendation) {
      await prisma.aiRecommendation.update({
        where: { id: existingAiRecommendation.id },
        data: {
          deal_acceleration_tactics: RECOMMENDATIONS.Deal_Acceleration_Tactics,
          escalation_triggers: RECOMMENDATIONS.Escalation_Triggers,
          next_steps: RECOMMENDATIONS.Next_Steps,
        },
      });
    } else {
      await prisma.aiRecommendation.create({
        data: {
          deal_id: dealId,
          deal_acceleration_tactics: RECOMMENDATIONS.Deal_Acceleration_Tactics,
          escalation_triggers: RECOMMENDATIONS.Escalation_Triggers,
          next_steps: RECOMMENDATIONS.Next_Steps,
        },
      });
    }

    const updateEmailDraft = await prisma.followUp.create({
      data: {
        deal_id: dealId,
        communication_type: "Email",
        contact_address: email,
        subject: AI_GENERATED_FOLLOW_UP.Email_Draft[0].subject,
        body: AI_GENERATED_FOLLOW_UP.Email_Draft[0].body,
      },
    });

    const updateSlackMessage = await prisma.followUp.create({
      data: {
        deal_id: dealId,
        communication_type: "Slack",
        contact_address: slack_id,
        body: AI_GENERATED_FOLLOW_UP.Slack_Message,
      },
    });

    const existingTags = await prisma.tags.findFirst({
      where: { deal_id: dealId },
    });

    if (existingTags) {
      await prisma.tags.update({
        where: { id: existingTags.id },
        data: { tag: TAGS },
      });
    } else {
      await prisma.tags.create({
        data: {
          deal_id: dealId,
          tag: TAGS,
        },
      });
    }

    const existingActivityMetrics = await prisma.activityMetrics.findFirst({
      where: { deal_id: dealId },
    });

    const updateActivityMetrics = existingActivityMetrics
      ? await prisma.activityMetrics.update({
          where: { id: existingActivityMetrics.id },
          data: {
            message_count: ACTIVITY_ANALYSIS.message_count,
            prospect_response_time:
              ACTIVITY_ANALYSIS.prospect_response_time_sec,
            engagement_trend: ACTIVITY_ANALYSIS.engagement_trend,
            last_communication_source: ACTIVITY_ANALYSIS.last_touch_channel,
            last_communication_summary: ACTIVITY_ANALYSIS.last_touch_summary,
          },
        })
      : await prisma.activityMetrics.create({
          data: {
            deal_id: dealId,
            message_count: ACTIVITY_ANALYSIS.message_count,
            prospect_response_time:
              ACTIVITY_ANALYSIS.prospect_response_time_sec,
            engagement_trend: ACTIVITY_ANALYSIS.engagement_trend,
            last_communication_source: ACTIVITY_ANALYSIS.last_touch_channel,
            last_communication_summary: ACTIVITY_ANALYSIS.last_touch_summary,
          },
        });

    const updateTimeline = await prisma.timeline.create({
      data: {
        activity_metrics_id: updateActivityMetrics.id,
        event: TIMELINE,
      },
    });

    const existingConversationHistory =
      await prisma.conversationHistory.findFirst({
        where: { deal_id: dealId },
      });

    if (existingConversationHistory) {
      await prisma.conversationHistory.update({
        where: { id: existingConversationHistory.id },
        data: {
          slack: slack_transcript,
          email: gmail_transcript,
          deal_summary: AI_GENERATED_SUMMARY,
        },
      });
    } else {
      await prisma.conversationHistory.create({
        data: {
          deal_id: dealId,
          slack: slack_transcript,
          email: gmail_transcript,
          deal_summary: AI_GENERATED_SUMMARY,
        },
      });
    }

    const existingPersonality = await prisma.personality.findFirst({
      where: { participant_id: participant_id },
    });

    if (existingPersonality) {
      await prisma.personality.update({
        where: { id: existingPersonality.id },
        data: { personality_traits: personality_analysis },
      });
    } else {
      await prisma.personality.create({
        data: {
          participant_id: participant_id,
          personality_traits: personality_analysis,
        },
      });
    }

    return true;
  } catch (error) {
    console.error("Error in saveEinsteinData:", error);
    throw error;
  }
};

export const getDealDetails = async (req, res) => {
  try {
    const response = {};
    const { id } = req.params;
    if (!id) {
      res.status(500);
    }
    const lastDbUpdate = await getLastUpdatedAt();
    const meta = await redis.get("deals_meta");
    const parsedMeta = meta ? meta : null;

    if (parsedMeta?.updated_at === lastDbUpdate) {
      const cachedDeal = await redis.get(`deal_${id}`);
      if (cachedDeal) {
        console.log("Serving from cache");
        return res.status(200).json(cachedDeal);
      }
    }
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
};

export const getAllDeals = async (req, res) => {
  try {
    // Grab the last DB Update from smart caching
    const lastDbUpdate = await getLastUpdatedAt();
    const meta = await redis.get("deals_meta");
    const parsedMeta = meta ? meta : null;

    if (parsedMeta?.updated_at === lastDbUpdate) {
      const cachedDeals = await redis.get("deals_cache");
      if (cachedDeals) {
        console.log("Serving from cache");
        return res.status(200).json(cachedDeals);
      }
    }
    // Look for deal in redis cache
    // Get all deals
    const deals = await prisma.deals.findMany();

    // For each deal, get all related data
    const dealsWithDetails = await Promise.all(
      deals.map(async (deal) => {
        const dealId = deal.id;

        const participants = await prisma.participants.findMany({
          where: { deal_id: dealId },
        });

        const risks = await prisma.risks.findMany({
          where: { deal_id: dealId },
        });

        const activityMetrics = await prisma.activityMetrics.findMany({
          where: { deal_id: dealId },
        });

        const aiRecommendation = await prisma.aiRecommendation.findMany({
          where: { deal_id: dealId },
        });

        const followUps = await prisma.followUp.findMany({
          where: { deal_id: dealId },
        });

        const tags = await prisma.tags.findMany({
          where: { deal_id: dealId },
        });

        const conversationHistory = await prisma.conversationHistory.findMany({
          where: { deal_id: dealId },
        });

        const dealInsights = await prisma.dealInsights.findMany({
          where: { deal_id: dealId },
        });

        let riskExplanation = [];
        if (risks.length > 0) {
          riskExplanation = await prisma.riskExplanation.findMany({
            where: { risk_id: risks[0].id },
          });
        }

        const personality =
          participants.length > 0
            ? await prisma.personality.findMany({
                where: { participant_id: participants[0].id },
              })
            : [];

        let timeline = [];
        if (activityMetrics.length > 0) {
          timeline = await prisma.timeline.findMany({
            where: { activity_metrics_id: activityMetrics[0].id },
          });
        }

        // Return structured deal object with all details
        return {
          deal,
          participants,
          risks,
          activityMetrics,
          aiRecommendation,
          followUps,
          tags,
          conversationHistory,
          dealInsights,
          riskExplanation,
          personality,
          timeline,
        };
      })
    );

    const response = {
      totalDeals: dealsWithDetails.length,
      deals: dealsWithDetails,
    };

    // caching individual deals for faster api calls in
    for (const deal of dealsWithDetails) {
      await redis.set(`deal_${deal.deal.id}`, JSON.stringify(deal));
      console.log(`Caching ${deal.deal.id} seperately`);
    }

    await redis.set("deals_cache", JSON.stringify(response));
    await redis.set("deals_meta", JSON.stringify({ updated_at: lastDbUpdate }));
    console.log("New Deals Cached");
    res.status(200).json({
      totalDeals: dealsWithDetails.length,
      deals: dealsWithDetails,
    });
  } catch (error) {
    console.error("Error getting all deals:", error);
    res.status(500).json({ error: error.message });
  }
};

export const updateDeal = async (req, res) => {
  const io = getSocketInstance();
  let dealIdInt = null;

  try {
    const { dealId, slack_id, email } = req.body;

    // Convert dealId to integer for database operations
    dealIdInt = parseInt(dealId);

    if (isNaN(dealIdInt)) {
      throw new Error(`Invalid deal ID: ${dealId}`);
    }

    // Get the participant for this deal
    const participant = await prisma.participants.findFirst({
      where: { deal_id: dealIdInt },
    });

    if (!participant) {
      throw new Error(`No participant found for deal ${dealId}`);
    }

    const participant_id = participant.id;
    // Set Deal to loading
    await prisma.deals.update({
      where: { id: dealIdInt },
      data: { job_status: "processing" },
    });

    // Send a socket update saying the deal is now processing
    try {
      io.emit("JobStatusUpdate", {
        dealId: dealIdInt,
        status: "processing",
      });
      console.log(
        `Backend Emitted JobStatusUpdate for deal ${dealIdInt} (processing)`
      );
    } catch (socketError) {
      console.error("WebSocket emission error:", socketError);
      // Continue processing even if WebSocket fails
    }

    const run_pipeline = await fetch(`${FASTAPI_URL}/run`, {
      method: "POST",
      body: JSON.stringify({
        deal_id: dealId.toString(),
        slack_id: slack_id,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!run_pipeline.ok) {
      const errorText = await run_pipeline.text();
      console.error("FastAPI error:", run_pipeline.status, errorText);
      throw new Error(
        `FastAPI request failed: ${run_pipeline.status} - ${errorText}`
      );
    }

    const response = await run_pipeline.json();
    const einstein_data = response.data;
    const einstein_response = await saveEinsteinData(
      dealIdInt,
      participant_id,
      slack_id,
      email,
      einstein_data
    );

    // Send a socket update saying the deal is now back to idle
    try {
      io.emit("JobStatusUpdate", {
        dealId: dealIdInt,
        status: "idle",
      });
      console.log(
        `Backend Emitted JobStatusUpdate for deal ${dealIdInt} (idle)`
      );
    } catch (socketError) {
      console.error("WebSocket emission error:", socketError);
      // Continue processing even if WebSocket fails
    }

    // Set Deal Status back to idle
    await prisma.deals.update({
      where: { id: dealIdInt },
      data: { job_status: "idle" },
    });

    // grab that full new deal
    const updatedDealDetails = await getDealDetailsRaw(dealIdInt);
    // So that the frontend refreshed I'm sending another socket emit that tells the Client we need to update a certain deal
    // Emit event to WebSocket clients that the Deal is idle
    try {
      io.emit("NewDealUpdate", {
        deal: updatedDealDetails,
        dealId: dealIdInt,
      });
      console.log(`Backend Emitted NewDealUpdate for deal ${dealIdInt}`);
    } catch (socketError) {
      console.error("WebSocket emission error:", socketError);
      // Continue processing even if WebSocket fails
    }

    res.status(200).json({
      message: "Deal updated successfully",
      einstein_response,
    });
  } catch (error) {
    console.error("Error updating deal:", error);

    res.status(500).json({ error: error.message });
  }
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { job_status } = req.body;

  try {
    const updatedDeal = await prisma.deals.update({
      where: { id: parseInt(id) },
      data: { job_status },
    });
    res.status(200).json(updatedDeal);
  } catch (e) {
    console.error("error: ", e);
    res.status(500);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const status = await prisma.deals.findMany({
      select: {
        id: true,
        job_status: true,
      },
    });
    res.status(200).json(status);
  } catch (e) {
    console.error("error in getAllJobs:", e);
    res.status(500).json({ error: e.message });
  }
};

export const getDealDetailsRaw = async (id) => {
  const response = {};

  const deal = await prisma.deals.findUnique({ where: { id: parseInt(id) } });
  response.deal = deal;

  const participants = await prisma.participants.findMany({
    where: { deal_id: id },
  });
  response.participants = participants;
  const participant_id = participants[0]?.id;

  const risks = await prisma.risks.findMany({ where: { deal_id: id } });
  response.risks = risks;

  const activityMetrics = await prisma.activityMetrics.findMany({
    where: { deal_id: id },
  });
  response.activityMetrics = activityMetrics;

  response.aiRecommendation = await prisma.aiRecommendation.findMany({
    where: { deal_id: id },
  });
  response.followUps = await prisma.followUp.findMany({
    where: { deal_id: id },
  });
  response.tags = await prisma.tags.findMany({ where: { deal_id: id } });
  response.conversationHistory = await prisma.conversationHistory.findMany({
    where: { deal_id: id },
  });
  response.dealInsights = await prisma.dealInsights.findMany({
    where: { deal_id: id },
  });

  if (risks.length > 0) {
    response.riskExplanation = await prisma.riskExplanation.findMany({
      where: { risk_id: risks[0].id },
    });
  }

  if (participant_id) {
    response.personality = await prisma.personality.findMany({
      where: { participant_id },
    });
  }

  if (activityMetrics.length > 0) {
    response.timeline = await prisma.timeline.findMany({
      where: { activity_metrics_id: activityMetrics[0].id },
    });
  }

  return response;
};

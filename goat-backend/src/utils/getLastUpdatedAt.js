import dotenv from "dotenv";
import prisma from "../db/db.js";
dotenv.config();
const FASTAPI_URL = process.env.FASTAPI_URL;

export const getLastUpdatedAt = async () => {
  const tables = [
    prisma.deals,
    prisma.participants,
    prisma.risks,
    prisma.activityMetrics,
    prisma.aiRecommendation,
    prisma.followUp,
    prisma.tags,
    prisma.conversationHistory,
    prisma.dealInsights,
    prisma.riskExplanation,
    prisma.personality,
    prisma.timeline,
  ];
  const maxDates = await Promise.all(
    tables.map((model) => model.aggregate({ _max: { updated_at: true } }))
  );

  const latestTimestamp = maxDates.reduce((latest, curr) => {
    const date = curr._max.updated_at;
    return date && (!latest || date > latest) ? date : latest;
  }, null);

  return latestTimestamp ? latestTimestamp.toISOString() : null;
};

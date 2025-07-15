-- DropForeignKey
ALTER TABLE "ActivityMetrics" DROP CONSTRAINT "ActivityMetrics_deal_id_fkey";

-- DropForeignKey
ALTER TABLE "AiRecommendation" DROP CONSTRAINT "AiRecommendation_deal_id_fkey";

-- DropForeignKey
ALTER TABLE "ConversationHistory" DROP CONSTRAINT "ConversationHistory_deal_id_fkey";

-- DropForeignKey
ALTER TABLE "DealInsights" DROP CONSTRAINT "DealInsights_deal_id_fkey";

-- DropForeignKey
ALTER TABLE "FollowUp" DROP CONSTRAINT "FollowUp_deal_id_fkey";

-- DropForeignKey
ALTER TABLE "Participants" DROP CONSTRAINT "Participants_deal_id_fkey";

-- DropForeignKey
ALTER TABLE "Personality" DROP CONSTRAINT "Personality_participant_id_fkey";

-- DropForeignKey
ALTER TABLE "RiskExplanation" DROP CONSTRAINT "RiskExplanation_risk_id_fkey";

-- DropForeignKey
ALTER TABLE "Risks" DROP CONSTRAINT "Risks_deal_id_fkey";

-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_deal_id_fkey";

-- DropForeignKey
ALTER TABLE "Timeline" DROP CONSTRAINT "Timeline_activity_metrics_id_fkey";

-- AddForeignKey
ALTER TABLE "Participants" ADD CONSTRAINT "Participants_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risks" ADD CONSTRAINT "Risks_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityMetrics" ADD CONSTRAINT "ActivityMetrics_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiRecommendation" ADD CONSTRAINT "AiRecommendation_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUp" ADD CONSTRAINT "FollowUp_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationHistory" ADD CONSTRAINT "ConversationHistory_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DealInsights" ADD CONSTRAINT "DealInsights_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskExplanation" ADD CONSTRAINT "RiskExplanation_risk_id_fkey" FOREIGN KEY ("risk_id") REFERENCES "Risks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personality" ADD CONSTRAINT "Personality_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "Participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_activity_metrics_id_fkey" FOREIGN KEY ("activity_metrics_id") REFERENCES "ActivityMetrics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

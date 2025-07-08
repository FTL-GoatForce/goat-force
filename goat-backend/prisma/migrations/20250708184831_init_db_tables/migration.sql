/*
  Warnings:

  - You are about to drop the `Deal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Deal";

-- CreateTable
CREATE TABLE "Deals" (
    "id" SERIAL NOT NULL,
    "deal_name" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "deal_amount" DOUBLE PRECISION NOT NULL,
    "expected_close_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participants" (
    "id" SERIAL NOT NULL,
    "deal_id" INTEGER NOT NULL,
    "prospect_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "slack_id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "sentiment" TEXT NOT NULL,
    "communication_score" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Risks" (
    "id" SERIAL NOT NULL,
    "deal_id" INTEGER NOT NULL,
    "deal_risk_score" DOUBLE PRECISION NOT NULL,
    "churn_risk_score" DOUBLE PRECISION NOT NULL,
    "timeline_risk_score" DOUBLE PRECISION NOT NULL,
    "budget_risk_score" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Risks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityMetrics" (
    "id" SERIAL NOT NULL,
    "deal_id" INTEGER NOT NULL,
    "message_count" INTEGER NOT NULL,
    "prospect_response_time" DOUBLE PRECISION NOT NULL,
    "engagement_trend" TEXT NOT NULL,
    "last_communication_source" TEXT NOT NULL,
    "last_communication_summary" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityMetrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiRecommendation" (
    "id" SERIAL NOT NULL,
    "deal_id" INTEGER NOT NULL,
    "next_steps" TEXT[],
    "escalation_triggers" TEXT NOT NULL,
    "deal_acceleration_tactics" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowUp" (
    "id" SERIAL NOT NULL,
    "deal_id" INTEGER NOT NULL,
    "communication_type" TEXT NOT NULL,
    "contact_address" TEXT NOT NULL,
    "subject" TEXT,
    "body" TEXT,
    "message_id" TEXT,
    "scheduled_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FollowUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "deal_id" INTEGER NOT NULL,
    "tag" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversationHistory" (
    "id" SERIAL NOT NULL,
    "deal_id" INTEGER NOT NULL,
    "slack" JSONB NOT NULL,
    "email" JSONB NOT NULL,
    "deal_summary" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConversationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DealInsights" (
    "id" SERIAL NOT NULL,
    "deal_id" INTEGER NOT NULL,
    "kpi_insights" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DealInsights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiskExplanation" (
    "id" SERIAL NOT NULL,
    "risk_id" INTEGER NOT NULL,
    "budget_risk_explanation" TEXT NOT NULL,
    "timeline_risk_explanation" TEXT NOT NULL,
    "churn_risk_explanation" TEXT NOT NULL,
    "deal_risk_summary" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RiskExplanation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personality" (
    "id" SERIAL NOT NULL,
    "participant_id" INTEGER NOT NULL,
    "personality_traits" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Personality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeline" (
    "id" SERIAL NOT NULL,
    "activity_metrics_id" INTEGER NOT NULL,
    "event_date" TIMESTAMP(3) NOT NULL,
    "event_type" TEXT NOT NULL,
    "event_details" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participants" ADD CONSTRAINT "Participants_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risks" ADD CONSTRAINT "Risks_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityMetrics" ADD CONSTRAINT "ActivityMetrics_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiRecommendation" ADD CONSTRAINT "AiRecommendation_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUp" ADD CONSTRAINT "FollowUp_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationHistory" ADD CONSTRAINT "ConversationHistory_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DealInsights" ADD CONSTRAINT "DealInsights_deal_id_fkey" FOREIGN KEY ("deal_id") REFERENCES "Deals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskExplanation" ADD CONSTRAINT "RiskExplanation_risk_id_fkey" FOREIGN KEY ("risk_id") REFERENCES "Risks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personality" ADD CONSTRAINT "Personality_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "Participants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_activity_metrics_id_fkey" FOREIGN KEY ("activity_metrics_id") REFERENCES "ActivityMetrics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `kpi_insights` on the `DealInsights` table. All the data in the column will be lost.
  - You are about to drop the column `deal_amount` on the `Deals` table. All the data in the column will be lost.
  - Added the required column `competitive_position` to the `DealInsights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `decision_maker_status` to the `DealInsights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urgency_level` to the `DealInsights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contract_term_length` to the `Deals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deal_description` to the `Deals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deal_value` to the `Deals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_category` to the `Deals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Participants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DealInsights" DROP COLUMN "kpi_insights",
ADD COLUMN     "competitive_position" TEXT NOT NULL,
ADD COLUMN     "decision_maker_status" TEXT NOT NULL,
ADD COLUMN     "key_objections" TEXT[],
ADD COLUMN     "urgency_level" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Deals" DROP COLUMN "deal_amount",
ADD COLUMN     "contract_term_length" TEXT NOT NULL,
ADD COLUMN     "deal_description" TEXT NOT NULL,
ADD COLUMN     "deal_value" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "service_category" TEXT NOT NULL,
ALTER COLUMN "stage" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Participants" ADD COLUMN     "phone_number" TEXT NOT NULL,
ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "sentiment" DROP NOT NULL,
ALTER COLUMN "communication_score" DROP NOT NULL;

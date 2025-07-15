/*
  Warnings:

  - You are about to drop the column `event_date` on the `Timeline` table. All the data in the column will be lost.
  - You are about to drop the column `event_details` on the `Timeline` table. All the data in the column will be lost.
  - You are about to drop the column `event_type` on the `Timeline` table. All the data in the column will be lost.
  - Added the required column `event` to the `Timeline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Timeline" DROP COLUMN "event_date",
DROP COLUMN "event_details",
DROP COLUMN "event_type",
ADD COLUMN     "event" JSONB NOT NULL;

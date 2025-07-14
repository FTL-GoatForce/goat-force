// Controller Imports
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import dotenv from "dotenv";
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
    
    const run_pipeline = await fetch(`${FASTAPI_URL}/run`, {
      method: "POST",
      body: JSON.stringify({ 
        deal_id: dealId.toString(), // Convert to string as FastAPI expects
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
    const data = await run_pipeline.json();

    //save new data to the database
    res.status(200).json({ deal, participant, data });
  } catch (error) {
    console.log("Error creating deal or participant", error);
    res.status(500).json({ error: error.message });
  }
};

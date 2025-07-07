// Controller Imports
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Get All Deals
export const getDeals = async (req, res) => {
  try {
    const deals = await prisma.deal.findMany();
    res.status(200).json(deals);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

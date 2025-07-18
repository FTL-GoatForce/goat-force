import express from "express";
const router = express.Router();

// Import deal controllers
import { createDeal, getDealDetails, getAllDeals, updateDeal } from "../controllers/deal.js";

// Set routes coming after /deal
router.post("/create", createDeal);
router.get("/all", getAllDeals);
router.get("/:id", getDealDetails);
router.put("/update", updateDeal);

export default router;

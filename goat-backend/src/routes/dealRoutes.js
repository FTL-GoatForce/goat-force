import express from "express";
const router = express.Router();

// Import deal controllers
import { createDeal, getDealDetails, getAllDeals } from "../controllers/deal.js";

// Set routes coming after /deal
router.post("/create", createDeal);
router.get("/all", getAllDeals);
router.get("/:id", getDealDetails);
export default router;

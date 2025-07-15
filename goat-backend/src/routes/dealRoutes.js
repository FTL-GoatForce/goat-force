import express from "express";
const router = express.Router();

// Import deal controllers
import { createDeal, getDealDetails } from "../controllers/deal.js";

// Set routes coming after /deal
router.post("/create", createDeal);
router.get("/:id", getDealDetails);
export default router;

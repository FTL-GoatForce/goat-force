import express from "express";
const router = express.Router();

// Import deal controllers
import { createDeal } from "../controllers/deal.js";

// Set routes coming after /deal
router.post("/create", createDeal);

export default router;

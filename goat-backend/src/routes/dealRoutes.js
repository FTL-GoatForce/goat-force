import express from "express";
const router = express.Router();

// Import deal controllers
import { getDeals } from "../controllers/deal";

// Set routes coming after /deal
router.get("/", getDeals); //

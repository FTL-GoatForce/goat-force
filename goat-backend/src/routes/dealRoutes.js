import express from "express";
const router = express.Router();

// Import deal controllers
import {
  createDeal,
  getDealDetails,
  getAllDeals,
  updateDeal,
  updateJob,
  getAllJobs,
  updateDealDetails,
} from "../controllers/deal.js";

import prisma from "../db/db.js";
import { createGoogleMeeting } from "../utils/createGoogleMeeting.js";

// Simple connection monitoring middleware
const monitorConnections = async (req, res, next) => {
  next();
};

// Apply connection monitoring to all routes
router.use(monitorConnections);

// Set routes coming after /deal
router.post("/create", createDeal);
router.get("/all", getAllDeals);
router.get("/stats", getAllJobs);
router.get("/:id", getDealDetails);
router.put("/update", updateDeal);
router.put("/jobUpdate/:id", updateJob);
router.put("/updateDetails/:id", updateDealDetails);

// google calendar route
router.post("/create-meeting", createGoogleMeeting);


export default router;
import express from "express";
const router = express.Router();

// Import deal controllers
import { createDeal, getDealDetails, getAllDeals, updateDeal } from "../controllers/deal.js";
import prisma from "../db/db.js";

// Connection monitoring middleware
const monitorConnections = async (req, res, next) => {
  const startTime = Date.now();
  
  // Log connections before request
  try {
    // Get total and app connections before
    const totalBefore = await prisma.$queryRaw`SELECT count(*) as connection_count FROM pg_stat_activity WHERE datname = current_database()`;
    const appBefore = await prisma.$queryRaw`
      SELECT count(*) as connection_count 
      FROM pg_stat_activity 
      WHERE datname = current_database() 
      AND (application_name LIKE '%prisma%' OR application_name LIKE '%node%' OR application_name LIKE '%postgres%')
    `;
    
    const totalBeforeCount = parseInt(totalBefore[0].connection_count);
    const appBeforeCount = parseInt(appBefore[0].connection_count);
    
    console.log(`🔍 ${req.method} ${req.path} - Total: ${totalBeforeCount} | App: ${appBeforeCount}`);
    
    // Store for after request
    req.totalBefore = totalBeforeCount;
    req.appBefore = appBeforeCount;
  } catch (error) {
    console.log('Could not get connection count before request');
  }
  
  // Monitor after request completes
  res.on('finish', async () => {
    try {
      // Get total and app connections after
      const totalAfter = await prisma.$queryRaw`SELECT count(*) as connection_count FROM pg_stat_activity WHERE datname = current_database()`;
      const appAfter = await prisma.$queryRaw`
        SELECT count(*) as connection_count 
        FROM pg_stat_activity 
        WHERE datname = current_database() 
        AND (application_name LIKE '%prisma%' OR application_name LIKE '%node%' OR application_name LIKE '%postgres%')
      `;
      
      const totalAfterCount = parseInt(totalAfter[0].connection_count);
      const appAfterCount = parseInt(appAfter[0].connection_count);
      
      const totalChange = totalAfterCount - req.totalBefore;
      const appChange = appAfterCount - req.appBefore;
      const duration = Date.now() - startTime;
      
      console.log(`✅ ${req.method} ${req.path} - Total: ${totalAfterCount} (${totalChange > 0 ? '+' : ''}${totalChange}) | App: ${appAfterCount} (${appChange > 0 ? '+' : ''}${appChange}) - ${duration}ms`);
    } catch (error) {
      console.log('Could not get connection count after request');
    }
  });
  
  next();
};

// Apply connection monitoring to all routes
router.use(monitorConnections);

// Set routes coming after /deal
router.post("/create", createDeal);
router.get("/all", getAllDeals);
router.get("/:id", getDealDetails);
router.put("/update", updateDeal);

export default router;

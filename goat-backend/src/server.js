// Packages
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import prisma from "./db/db.js";

// Routes
import dealRoutes from "./routes/dealRoutes.js";

// Configuration
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Setting Routes
app.use("/deal", dealRoutes);

//pulse check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Connection monitoring
let lastTotalCount = 0;
let lastAppCount = 0;

const logConnectionCount = async () => {
  try {
    // Get total connections
    const totalResult = await prisma.$queryRaw`SELECT count(*) as connection_count FROM pg_stat_activity WHERE datname = current_database()`;
    const totalCount = parseInt(totalResult[0].connection_count);
    
    // Get app-specific connections (connections from your app's IP/process)
    const appResult = await prisma.$queryRaw`
      SELECT count(*) as connection_count 
      FROM pg_stat_activity 
      WHERE datname = current_database() 
      AND application_name LIKE '%prisma%' 
      OR application_name LIKE '%node%'
      OR application_name LIKE '%postgres%'
    `;
    const appCount = parseInt(appResult[0].connection_count);
    
    // Log only if there are changes
    if (totalCount !== lastTotalCount || appCount !== lastAppCount) {
      const totalChange = totalCount > lastTotalCount ? `+${totalCount - lastTotalCount}` : `${totalCount - lastTotalCount}`;
      const appChange = appCount > lastAppCount ? `+${appCount - lastAppCount}` : `${appCount - lastAppCount}`;
      
      console.log(`📊 Total DB connections: ${totalCount} (${totalChange}) | Your App: ${appCount} (${appChange})`);
      
      lastTotalCount = totalCount;
      lastAppCount = appCount;
    }
    
    return { totalCount, appCount };
  } catch (error) {
    console.log('Could not get connection count:', error.message);
    return null;
  }
};

// Starting server
const server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Database connection status: Active');
  await logConnectionCount();
  
  // Monitor connections every 30 seconds
  setInterval(async () => {
    await logConnectionCount();
  }, 30000);
});

// Graceful shutdown to close database connections
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  await logConnectionCount();
  server.close(async () => {
    await prisma.$disconnect();
    console.log('Database connections closed');
    process.exit(0);
  });
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  await logConnectionCount();
  server.close(async () => {
    await prisma.$disconnect();
    console.log('Database connections closed');
    process.exit(0);
  });
});

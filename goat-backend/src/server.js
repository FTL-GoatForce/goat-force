// Packages
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import prisma from "./db/db.js";
import http from "http";

// Routes
import dealRoutes from "./routes/dealRoutes.js";

// WebSocket
import { initializeWebSocket } from "./web_socket/socket.js";

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

// Simple connection monitoring
let lastConnectionCount = 0;

const logConnectionCount = async () => {
  try {
    const result =
      await prisma.$queryRaw`SELECT count(*) as connection_count FROM pg_stat_activity WHERE datname = current_database()`;
    const currentCount = parseInt(result[0].connection_count);

    if (currentCount !== lastConnectionCount) {
      console.log(`📊 DB Connections: ${currentCount}`);
      lastConnectionCount = currentCount;
    }

    return currentCount;
  } catch (error) {
    return null;
  }
};

// Start WebSocket server
const server = http.createServer(app);
initializeWebSocket(server);

// Starting server
server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Database connection status: Active");

  await logConnectionCount();

  // Monitor connections every 30 seconds
  setInterval(async () => {
    await logConnectionCount();
  }, 30000);
});

// Graceful shutdown to close database connections
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  await logConnectionCount();
  server.close(async () => {
    await prisma.$disconnect();
    console.log("Database connections closed");
    process.exit(0);
  });
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, shutting down gracefully");
  await logConnectionCount();
  server.close(async () => {
    await prisma.$disconnect();
    console.log("Database connections closed");
    process.exit(0);
  });
});

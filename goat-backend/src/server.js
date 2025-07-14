// Packages
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";

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

// Starting server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Packages
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import dealRoutes from "./src/routes/dealRoutes";

// Configuration
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan());

// Setting Routes
app.use("/deal", dealRoutes);

// Starting server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

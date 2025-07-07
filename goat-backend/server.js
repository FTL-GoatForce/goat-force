import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import express from "express";
const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

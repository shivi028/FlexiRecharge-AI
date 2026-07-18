import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import planRoutes from "./routes/planRoutes.js";

dotenv.config();
console.log("ML_API_URL =", process.env.ML_API_URL);
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/plan", planRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
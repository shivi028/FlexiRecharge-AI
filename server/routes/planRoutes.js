import express from "express";
import { generateRechargePlan, generateManualRechargePlan } from "../controllers/planController.js";

const router = express.Router();

router.post("/generate", generateRechargePlan);
router.post("/manual", generateManualRechargePlan);

export default router;
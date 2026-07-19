import express from "express";
import { createPaymentOrder, verifyPayment } from "../controllers/paymentController.js";

const router = express.Router();
console.log("Payment routes loaded");

router.post("/create-order", createPaymentOrder);
router.post("/verify", (req, res, next) => {
  console.log("Verify route matched");
  next();
}, verifyPayment);

// router.get("/test", (req, res) => {
//   res.json({
//     success: true,
//     message: "Payment routes are working",
//   });
// });

export default router;
import { createOrder } from "../services/paymentService.js";
import {verifyPaymentSignature} from "../services/paymentVerificationService.js";

export const createPaymentOrder = async (req, res) => {

  try {

    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment amount."
      });
    }

    const order = await createOrder(Math.round(amount));

    return res.status(200).json({
      success: true,
      order
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to create payment order."
    });

  }

};


export const verifyPayment = async (req, res) => {
   console.log("✅ verifyPayment endpoint hit");
  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const isVerified = verifyPaymentSignature({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    if (!isVerified) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed.",
      });
    }

    // Database insertion will happen here in the next step

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully.",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });

  }
};
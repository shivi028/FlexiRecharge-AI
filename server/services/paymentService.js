import { getRazorpayInstance } from "../config/razorpay.js";

export const createOrder = async(amount)=>{
    const razorpay = getRazorpayInstance();
    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
    }
    return razorpay.orders.create(options);
}

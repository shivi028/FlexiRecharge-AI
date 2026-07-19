import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export const createPaymentOrder = async(amount)=>{
    try {
        const response = await axios.post(`${API}/api/v1/payment/create-order`, { amount });
        return response.data;
    } catch (error) {
        console.error("Error creating payment order:", error);
        throw error;
    }
}

export const verifyPayment = async (paymentData) => {

  const response = await axios.post(
    `${API}/api/v1/payment/verify`,
    paymentData
  );

  return response.data;

};
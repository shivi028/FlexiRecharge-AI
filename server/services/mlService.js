import axios from "axios";


export const generatePlan = async (prompt) => {
  const ML_BASE_URL = process.env.ML_API_URL;
  
  try{
    
    console.log("Calling:", `${ML_BASE_URL}/api/v1/plan/generate`);
     const response = await axios.post(
    `${ML_BASE_URL}/api/v1/plan/generate`,
    { prompt }
  );
  return response.data;
  }
  catch (error) {
    console.error("========== ML SERVICE ERROR ==========");
    console.error("URL:", `${ML_BASE_URL}/api/v1/plan/generate`);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error(error.message);
    }

    throw error;
  }
  
};

export const generateManualPlan = async (plan) => {

    const ML_BASE_URL = process.env.ML_API_URL;

    const response = await axios.post(
        `${ML_BASE_URL}/api/v1/plan/manual`,
        plan
    );

    return response.data;
};
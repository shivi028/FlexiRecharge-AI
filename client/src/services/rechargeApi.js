import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const generateRechargePlan = async (prompt) => {

    const response = await axios.post(
        `${API}/api/v1/plan/generate`,
        { prompt }
    );

    return response.data;
};

export const generateManualPlan = async (plan) => {

    const response = await axios.post(
        `${API}/api/v1/plan/manual`,
        plan
    );

    return response.data;
};
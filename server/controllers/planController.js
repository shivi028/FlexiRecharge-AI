import { generatePlan, generateManualPlan } from "../services/mlService.js";

export const generateRechargePlan = async (req, res) => {
  try {

    const { prompt } = req.body;

    if (!prompt?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required."
      });
    }

    const result = await generatePlan(prompt);

    return res.status(200).json(result);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

export const generateManualRechargePlan = async (req, res) => {

    try {

        const result = await generateManualPlan(req.body);

        return res.status(200).json(result);

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
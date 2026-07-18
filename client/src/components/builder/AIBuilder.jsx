import { useState } from "react";
import { generateRechargePlan } from "../../services/rechargeApi.js";

const prompts = [
  "I need a 20-day recharge with 3GB/day and Netflix.",
  "Give me a budget 28-day recharge under ₹300.",
  "I have a 4G phone and need unlimited calls for 14 days.",
];

export default function AIBuilder({ loading, setResult, setLoading, setError }) {
  const [prompt, setPrompt] = useState("");
 
  const handleGenerate = async () => {
    if (!prompt?.trim()) {
      setError("Prompt is required.");
      return;
    }
    try {
      setLoading(true);
      setError(null);

      const response = await generateRechargePlan(prompt);
      setResult(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Ask FlexiAI</h2>

      <p className="mt-2 text-slate-400">
        Describe your recharge requirements naturally.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={7}
        placeholder="Example: I need a recharge for 20 days with 3GB/day, unlimited calls and Netflix."
        className="mt-6 w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none"
      />

      <div className="mt-5 flex flex-wrap gap-3">
        {prompts.map((item) => (
          <button
            key={item}
            onClick={() => setPrompt(item)}
            className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-blue-500"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-4 font-semibold"
      >
        {loading ? "Generating...." : "Generate Recharge Plan"}
      </button>

      
    
    </div>
  );
}

import { useState } from "react";
import { generateRechargePlan } from "../../services/rechargeApi.js";

const prompts = [
  "I need a 28-day recharge under ₹500 with Netflix",
  "Give me a 2 GB/day plan for 84 days",
  "Unlimited calls with 5G and Prime Video",
  "Recharge for my parents with low data usage",
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
      <h2 className="text-2xl font-bold">Build with AI</h2>

      <p className="mt-2 text-slate-400">
       Describe your recharge needs naturally and let FlexiRecharge AI generate the perfect plan.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={7}
        placeholder="Example:
I need a 28-day recharge with 2GB/day, unlimited calls, Netflix, and a budget under ₹500."
        className="mt-6 w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none"
      />

      <p className="mt-6 mb-3 text-sm font-medium text-slate-400">
    Try an example prompt :
</p>

      <div className="mt-5 flex flex-wrap gap-3">
        {prompts.map((item) => (
          <button
            key={item}
            onClick={() => setPrompt(item)}
            className="
rounded-full
border
border-white/10
bg-slate-900
px-4
py-2
text-sm
text-slate-300
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500
hover:bg-slate-800
hover:text-white
"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-4 font-semibold"
      >
        {loading ? "🤖 Building Your Recharge Plan..." : "✨ Generate Recharge Plan"}
      </button>

      
    
    </div>
  );
}

import React, { useState } from "react";
import { generateManualPlan } from "../../services/rechargeApi";
export default function ManualBuilder({
  setResult,
  setLoading,
  setError,
  loading,
}) {
  const [plan, setPlan] = useState({
    days: 28,

    data_per_day: null,

    calls: "Unlimited",

    sms: false,

    network: "4G",

    ott: [],

    budget: null,
  });

  const ottList = [
    "Netflix",
    "Prime",
    "Hotstar",
    "SonyLiv",
    "Zee5",
    "JioCinema",
  ];

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await generateManualPlan(plan);

      setResult(response.data);
    } catch (err) {
      setError(err.message || "Unable to generate plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Manual Builder</h2>

      <div className="mt-8 grid gap-5">
        <select
          value={plan.days}
          onChange={(e) =>
            setPlan((prev) => ({
              ...prev,
              days: Number(e.target.value),
            }))
          }
          className="rounded-xl bg-slate-900 p-4"
        >
          {[7, 14, 28, 56, 84].map((day) => (
            <option key={day} value={day}>
              {day} Days
            </option>
          ))}
        </select>

        <select
          value={plan.data_per_day ?? ""}
          onChange={(e) =>
            setPlan((prev) => ({
              ...prev,
              data_per_day: e.target.value ? Number(e.target.value) : null,
            }))
          }
          className="rounded-xl bg-slate-900 p-4"
        >
          <option value="">No Data</option>
          <option value="1">1 GB/day</option>
          <option value="1.5">1.5 GB/day</option>
          <option value="2">2 GB/day</option>
          <option value="2.5">2.5 GB/day</option>
          <option value="3">3 GB/day</option>
        </select>

        <div className="flex gap-6">
          {["Unlimited", "None"].map((calls) => (
            <label key={calls} className="flex items-center gap-2">
              <input
                type="radio"
                checked={plan.calls === calls}
                onChange={() =>
                  setPlan((prev) => ({
                    ...prev,
                    calls,
                  }))
                }
              />

              {calls}
            </label>
          ))}
        </div>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={plan.sms}
            onChange={(e) =>
              setPlan((prev) => ({
                ...prev,
                sms: e.target.checked,
              }))
            }
          />
          Include SMS
        </label>

        <div className="flex gap-6">
          {["4G", "5G"].map((network) => (
            <label key={network} className="flex items-center gap-2">
              <input
                type="radio"
                checked={plan.network === network}
                onChange={() =>
                  setPlan((prev) => ({
                    ...prev,
                    network,
                  }))
                }
              />

              {network}
            </label>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {ottList.map((ott) => (
            <label key={ott} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={plan.ott.includes(ott)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setPlan((prev) => ({
                      ...prev,
                      ott: [...prev.ott, ott],
                    }));
                  } else {
                    setPlan((prev) => ({
                      ...prev,
                      ott: prev.ott.filter((item) => item !== ott),
                    }));
                  }
                }}
              />

              {ott}
            </label>
          ))}
        </div>

        <input
          type="number"
          placeholder="Budget (Optional)"
          value={plan.budget ?? ""}
          onChange={(e) =>
            setPlan((prev) => ({
              ...prev,
              budget: e.target.value ? Number(e.target.value) : null,
            }))
          }
          className="rounded-xl bg-slate-900 p-4"
        />
      </div>

      <button
        disabled={loading}
        onClick={handleGenerate}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-4 font-semibold"
      >
        {loading ? "Generating...." : "Generate Recharge Plan"}
      </button>
    </div>
  );
}

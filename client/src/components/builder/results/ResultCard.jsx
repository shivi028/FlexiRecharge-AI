export default function ResultCard({ result }) {

  const plan = result?.parsed_plan;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold">
        Your Recharge Plan
      </h2>

      <div className="mt-10">

        <h3 className="text-slate-400">
          Predicted Recharge Price
        </h3>

        <p className="mt-2 text-5xl font-bold text-blue-400">
          ₹ {result?.predicted_price ?? "--"}
        </p>

      </div>

      <div className="mt-10 space-y-3">

        <h3 className="text-slate-400">
          Recharge Summary
        </h3>

        <p>📅 Validity : {plan?.days ?? "Not specified"} Days</p>

        <p>📶 Data : {plan?.data_per_day ? `${plan.data_per_day} GB/day` : "Not specified"}</p>

        <p>📞 Calls : {plan?.calls ?? "Not specified"}</p>

        <p>📡 Network : {plan?.network ?? "Not specified"}</p>

        <p>
          🎬 OTT :
          {plan?.ott?.length
            ? ` ${plan.ott.join(", ")}`
            : " None"}
        </p>

      </div>

      <button
        disabled
        className="mt-10 w-full rounded-xl bg-slate-700 py-4"
      >
        Proceed To Pay
      </button>

    </div>
  );
}
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    navigate("/");
    return null;
  }

  const { payment, predictedPrice, plan } = state;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-10">
        {/* Success Icon */}

        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20">
            <span className="text-5xl">✅</span>
          </div>
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-center text-4xl font-bold">
          Payment Successful
        </h1>

        <p className="mt-2 text-green-400 font-medium">
    Transaction Completed Successfully
</p>

        {/* Payment Details */}

        <div className="mt-10 rounded-2xl bg-slate-800 p-6">
          <h2 className="mb-5 text-xl font-semibold">Payment Details</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-slate-400">Amount</span>

              <span>₹ {Number(predictedPrice).toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Payment ID</span>

              <span className="font-mono text-sm break-all">
    {payment.razorpay_payment_id}
</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Order ID</span>

              <span className="font-mono text-sm break-all">{payment.razorpay_order_id}</span>
            </div>
          </div>
        </div>

        {/* Recharge Summary */}

        <div className="mt-8 rounded-2xl bg-slate-800 p-6">
          <h2 className="mb-5 text-xl font-semibold">Recharge Summary</h2>

          <div className="grid grid-cols-2 gap-4">
            <InfoCard label="Validity" value={`${plan.days} Days`} />

            <InfoCard
              label="Data"
              value={
                plan.data_per_day
                  ? `${plan.data_per_day} GB/day`
                  : "Not Included"
              }
            />

            <InfoCard label="Calls" value={plan.calls} />

            <InfoCard label="Network" value={plan.network} />
          </div>

          <div className="mt-6">
            <p className="text-slate-400 mb-2">OTT Benefits</p>

            <div className="flex flex-wrap gap-2">
              {plan.ott?.length ? (
                plan.ott.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-600 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <span className="text-slate-500">None</span>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-10 flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700"
          >
            Back To Home
          </button>

          <button
            onClick={() => navigate("/history")}
            className="flex-1 rounded-xl border border-white/10 bg-slate-800 py-4 font-semibold transition hover:bg-slate-700"
          >
            View History
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-900 p-4">
      <p className="text-sm text-slate-400">{label}</p>

      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}

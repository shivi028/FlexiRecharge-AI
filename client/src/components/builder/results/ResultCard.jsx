import { createPaymentOrder, verifyPayment } from "../../../services/paymentApi.js";
export default function ResultCard({ result }) {
  const plan = result?.parsed_plan;

  const handlePayment = async () => {
    try {
      const payment = await createPaymentOrder(result.predicted_price);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: payment.order.amount,

        currency: payment.order.currency,

        name: "FlexiRecharge AI",

        description: "Recharge Purchase",

        order_id: payment.order.id,

        handler: async function (response) {
            try {

    const verification = await verifyPayment(response);

    console.log(verification);

    if (verification.success) {

      alert("✅ Payment Verified Successfully!");

    }

  } catch (error) {

    console.error(error);

    alert("Payment verification failed.");

  }
        },

        theme: {
          color: "#2563eb",
        },

        prefill: {
          name: "Shivi Tiwari",
          email: "demo@example.com",
        },

        modal: {
          ondismiss: function () {
            console.log("Payment popup closed");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", function (response) {
        console.log("Payment Failed");

        console.log(response.error);
      });

      razorpay.open();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-2xl font-bold">Your Recharge Plan</h2>

      <div className="mt-10">
        <h3 className="text-slate-400">Predicted Recharge Price</h3>

        <p className="mt-2 text-5xl font-bold text-blue-400">
          ₹ {result?.predicted_price ?? "--"}
        </p>
      </div>

      <div className="mt-10 space-y-3">
        <h3 className="text-slate-400">Recharge Summary</h3>

        <p>📅 Validity : {plan?.days ?? "Not specified"} Days</p>

        <p>
          📶 Data :{" "}
          {plan?.data_per_day ? `${plan.data_per_day} GB/day` : "Not specified"}
        </p>

        <p>📞 Calls : {plan?.calls ?? "Not specified"}</p>

        <p>📡 Network : {plan?.network ?? "Not specified"}</p>

        <p>🎬 OTT :{plan?.ott?.length ? ` ${plan.ott.join(", ")}` : " None"}</p>
      </div>

      <button
        onClick={handlePayment}
        className="
mt-10
w-full
rounded-xl
bg-gradient-to-r
from-green-600
to-emerald-500
py-4
font-semibold
hover:scale-[1.02]
transition
"
      >
        Proceed To Pay
      </button>
    </div>
  );
}

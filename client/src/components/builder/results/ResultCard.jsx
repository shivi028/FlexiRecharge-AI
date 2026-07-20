import { createPaymentOrder, verifyPayment } from "../../../services/paymentApi.js";
import { toast } from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

export default function ResultCard({ result }) {
  const [paying, setPaying] = useState(false);
  const plan = result?.parsed_plan;
  const navigate = useNavigate();

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
          setPaying(true);
            try {

   const verification = await verifyPayment(response);

if (verification.success) {

    toast.success("Recharge Purchased Successfully 🎉");

    setTimeout(() => {

        navigate("/payment-success", {

            state: {
                plan,
                predictedPrice: result.predicted_price,
                payment: response
            }

        });

    },1000);

}

  } catch (error) {

    console.error(error);

    toast.error("Payment Verification Failed");

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
            toast("Payment Cancelled");
            setPaying(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", function (response) {
        console.log("Payment Failed");
        console.log(response.error);
        toast.error("Payment Failed. Please try again.");
        setPaying(false);
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
    disabled={paying}
    className={`mt-10 w-full rounded-xl py-4 font-semibold transition-all duration-300 ${
        paying
            ? "cursor-not-allowed bg-slate-600"
            : "bg-gradient-to-r from-blue-600 to-violet-600 hover:scale-[1.02]"
    }`}
>
    {paying ? "Processing Payment..." : "Proceed To Pay"}
</button>
    </div>
  );
}

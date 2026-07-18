import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        🚀 AI-Powered Recharge Builder
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
        Build Your Perfect
        <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          {" "}
          Recharge Plan
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-400">
        Create personalized telecom plans using AI, receive smart pricing
        recommendations, and pay securely with Razorpay.
      </p>

      <div className="mt-10 flex gap-4">
        <Link to="/builder" className="rounded-xl bg-blue-600 px-6 py-3">
          Start Building
        </Link>

        <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-500">
          Learn More
        </button>
      </div>
    </section>
  );
}

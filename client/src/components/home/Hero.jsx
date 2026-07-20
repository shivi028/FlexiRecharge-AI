import { Link } from "react-router-dom";
import { Sparkles, Brain, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex min-h-screen items-center justify-center px-6">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-20 bottom-20 h-60 w-60 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

        {/* Badge */}

        <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">

          <Sparkles size={16} />

          AI Powered Recharge Recommendation

        </div>

        {/* Heading */}

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">

          Build Your Perfect

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">

            Recharge Plan

          </span>

        </h1>

        {/* Subtitle */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">

          Simply describe your recharge needs in plain English.
          Our AI understands your requirements, predicts the optimal
          recharge cost using Machine Learning, and lets you complete
          the purchase securely through Razorpay.

        </p>

        {/* CTA */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <Link
            to="/builder"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold transition duration-300 hover:scale-105"
          >
            ✨ Try AI Builder
          </Link>

          <a
            href="#features"
            className="rounded-xl border border-white/10 bg-slate-900 px-8 py-4 font-semibold transition hover:border-blue-500 hover:bg-slate-800"
          >
            Learn More
          </a>

        </div>

        {/* Quick Highlights */}

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">

            <Brain className="mx-auto text-blue-400" size={34} />

            <h3 className="mt-4 text-xl font-semibold">

              AI + Machine Learning

            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">

              Personalized recharge recommendations with intelligent
              price prediction powered by a trained ML model.

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">

            <Sparkles className="mx-auto text-violet-400" size={34} />

            <h3 className="mt-4 text-xl font-semibold">

              Natural Language Builder

            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">

              Just type what you need in plain English and let the AI
              generate your ideal recharge plan.

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">

            <ShieldCheck className="mx-auto text-green-400" size={34} />

            <h3 className="mt-4 text-xl font-semibold">

              Secure Payments

            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">

              Complete your purchase securely using Razorpay with
              cryptographic payment verification.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
import {
  Bot,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Bot,
    title: "AI Recharge Builder",
    description:
      "Simply describe your recharge needs in natural language and let AI generate the perfect personalized plan.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Pricing",
    description:
      "A trained ML model predicts accurate recharge pricing based on your selected features and preferences.",
  },
  {
    icon: TrendingUp,
    title: "Smart Recommendations",
    description:
      "Receive optimized suggestions that help reduce recharge costs while preserving the features you care about.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Complete purchases confidently with Razorpay integration and secure payment verification.",
  },
];

export default function Features() {
  return (
    <div>
    <section
      id="features"
      className="relative overflow-hidden py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">

            Why FlexiRecharge AI?

          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">

            Everything You Need for a

            <span className="block bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">

              Smarter Recharge Experience

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">

            From AI-powered recommendations to secure payments,
            every step is designed to make recharge planning
            faster, smarter, and more personalized.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (

            <FeatureCard
              key={feature.title}
              {...feature}
            />

          ))}

        </div>

      </div>
    </section>
    </div>
  );
}
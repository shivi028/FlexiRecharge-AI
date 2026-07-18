import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🤖",
    title: "AI Plan Builder",
    description:
      "Describe your recharge in natural language and let AI create the perfect plan.",
  },
  {
    icon: "🧠",
    title: "Smart Recommendations",
    description:
      "Get optimized recharge suggestions to save money while meeting your needs.",
  },
  {
    icon: "📊",
    title: "Dynamic Pricing",
    description:
      "Machine Learning predicts the estimated cost of your customized recharge.",
  },
  {
    icon: "💳",
    title: "Secure Payments",
    description:
      "Pay seamlessly using Razorpay's secure payment gateway.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center">
        <p className="text-blue-400 font-semibold">
          FEATURES
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Everything you need
        </h2>

        <p className="mt-4 text-slate-400">
          AI-powered recharge planning from start to finish.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}
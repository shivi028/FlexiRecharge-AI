const prompts = [
  "I need a 28-day recharge under ₹500 with Netflix",
  "Give me a 2 GB/day plan for 84 days",
  "Unlimited calls with 5G and Prime Video",
  "Recharge for my parents with low data usage",
];

export default function ExamplePrompts({ onPromptSelect }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <div className="text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          AI Examples
        </span>

        <h2 className="mt-6 text-4xl font-bold">

          Try These Prompts

        </h2>

        <p className="mt-4 text-slate-400">

          Click any example to instantly fill the AI Builder.

        </p>

      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {prompts.map((prompt) => (

          <button
            key={prompt}
            onClick={() => onPromptSelect(prompt)}
            className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"
          >

            <p className="text-lg text-slate-300 group-hover:text-white">

              "{prompt}"

            </p>

          </button>

        ))}

      </div>

    </section>
  );
}
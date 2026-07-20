export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-blue-500/10">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">

        <Icon
          size={30}
          className="text-blue-400"
        />

      </div>

      <h3 className="mt-6 text-xl font-semibold">

        {title}

      </h3>

      <p className="mt-4 leading-7 text-slate-400">

        {description}

      </p>

    </div>
  );
}
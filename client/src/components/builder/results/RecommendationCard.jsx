export default function RecommendationCard({ recommendation }) {

  return (

    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

      <div className="flex items-center gap-2">

        <span className="text-xl">💡</span>

        <h3 className="font-semibold">
          {recommendation.title}
        </h3>

      </div>

      <p className="mt-4 font-medium text-white">
        {recommendation.action}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {recommendation.reason}
      </p>

      <div className="mt-5 flex justify-between">

        <span className="text-slate-400">
          Estimated Saving
        </span>

        <span className="font-bold text-green-400">
          ₹ {recommendation.estimated_saving}
        </span>

      </div>

    </div>

  );

}
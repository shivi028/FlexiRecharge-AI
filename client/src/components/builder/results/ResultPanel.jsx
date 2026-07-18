import Loader from "../../ui/Loader";
import ResultCard from "./ResultCard";
import RecommendationCard from "./RecommendationCard";

export default function ResultPanel({
  result,
  loading,
  error,
}) {

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex justify-center items-center min-h-[500px]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

    if (!result) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex min-h-[500px] items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-bold">Your Recharge Plan</h2>
          <p className="mt-4 text-slate-400">
            Describe your recharge requirements and click
            <strong> Generate Recharge Plan</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <ResultCard result={result} />

      {result?.recommendations?.length > 0 ? (

        result.recommendations.map((recommendation) => (

          <RecommendationCard
            key={recommendation.action}
            recommendation={recommendation}
          />

        ))

      ) : result && (

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <h3 className="text-lg font-semibold">
            ✅ Your plan is already optimized
          </h3>

          <p className="mt-2 text-slate-400">
            No cost-saving recommendations found.
          </p>

        </div>

      )}

    </div>
  );
}
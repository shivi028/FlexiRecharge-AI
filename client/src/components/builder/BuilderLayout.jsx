import { useState } from "react";
import ModeSelector from "./ModeSelector";
import AIBuilder from "./AIBuilder";
import ManualBuilder from "./ManualBuilder";
import ResultPanel from "./results/ResultPanel"
// import Loader from "../ui/Loader";

export default function BuilderLayout() {
 const [mode, setMode] = useState("ai");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleModeChange = (newMode) => {
  setMode(newMode);
  setResult(null);
  setError(null);
};

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-10 text-center text-5xl font-bold">Build Your Plan</h1>

      <ModeSelector mode={mode} setMode={handleModeChange} />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          {mode === "ai" ? (
             <AIBuilder
             loading={loading}
              setResult={setResult}
              setLoading={setLoading}
              setError={setError}
            />
          ) : (
            <ManualBuilder
              loading={loading}
              setResult={setResult}
              setLoading={setLoading}
              setError={setError}
            />
          )}
        </div>

        <ResultPanel result={result} loading={loading} error={error} />
      </div>
    </div>
  );
}

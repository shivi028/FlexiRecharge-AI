import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ModeSelector from "./ModeSelector";
import AIBuilder from "./AIBuilder";
import ManualBuilder from "./ManualBuilder";
import ResultPanel from "./results/ResultPanel";

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
    <div className="mx-auto max-w-6xl px-6 py-8">

      {/* Header */}
      <div className="flex justify-center items-center pb-2">
       <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">

    ⚡ AI Recharge Workspace

  </span>
  </div>

      <div className="relative mb-8 flex items-center">

        <Link
          to="/"
          className="absolute left-0 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back 
        </Link>

        <div className="mx-auto text-center">
          
          <h1 className="text-4xl font-bold">

            Build Your Plan

          </h1>

          <p className="mt-2 text-slate-400">

            Generate your perfect recharge using AI or build it manually.

          </p>

        </div>

      </div>

      {/* Mode Selector */}

      <div className="mb-8 flex justify-center">

        <ModeSelector
          mode={mode}
          setMode={handleModeChange}
        />

      </div>

      {/* Workspace */}

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">

        {/* Builder */}

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">

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

        {/* Result */}

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">

          <ResultPanel
            result={result}
            loading={loading}
            error={error}
          />

        </div>

      </div>

    </div>
  );
}
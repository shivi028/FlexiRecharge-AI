export default function ModeSelector({ mode, setMode }) {

  return (

    <div className="mx-auto flex w-fit rounded-xl bg-slate-900 p-2">

      <button
        onClick={() => setMode("ai")}
        className={`rounded-lg px-6 py-3 transition ${
          mode === "ai"
            ? "bg-blue-600"
            : "text-slate-400"
        }`}
      >
        🤖 AI Builder
      </button>

      <button
        onClick={() => setMode("manual")}
        className={`rounded-lg px-6 py-3 transition ${
          mode === "manual"
            ? "bg-blue-600"
            : "text-slate-400"
        }`}
      >
        🛠 Manual Builder
      </button>

    </div>

  );

}
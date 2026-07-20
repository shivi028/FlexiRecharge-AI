import { Clock3, ArrowLeft, Receipt } from "lucide-react";
import { useNavigate } from "react-router-dom";
import react from "react";

export default function History() {
    const history = [];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <div className="border-b border-white/10">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 transition hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Home
          </button>

          <h1 className="text-2xl font-bold">

            Recharge History

          </h1>

        </div>

      </div>

      {/* Body */}

      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-24">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-900">

          <Receipt size={42} className="text-blue-400" />

        </div>

        <h2 className="mt-8 text-3xl font-bold">

           {history.length === 0 ? (

      <div className="flex min-h-screen flex-col items-center justify-center">

        <Receipt size={60} className="text-blue-400" />

        <h1 className="mt-8 text-3xl font-bold">

          No Recharge History Yet

        </h1>

        <p className="mt-3 text-slate-400">

          Purchase a recharge plan to see your history here.

        </p>

      </div>

    ) : (

      <div>

        {/* We'll display recharge cards here later */}

      </div>

    )}


        </h2>

        <p className="mt-4 max-w-md text-center text-slate-400">

          Once you successfully purchase a recharge plan,
          it will automatically appear here.

        </p>

        <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-slate-900 p-8 w-full">

          <div className="flex items-center gap-3">

            <Clock3 className="text-blue-400" />

            <span className="font-medium">

              Coming Soon

            </span>

          </div>

          <ul className="mt-5 space-y-3 text-slate-400">

            <li>✔ View previous recharge plans</li>

            <li>✔ Download payment receipts</li>

            <li>✔ Repurchase a previous plan</li>

            <li>✔ Search recharge history</li>

          </ul>

        </div>

      </div>

    </div>
  );

}
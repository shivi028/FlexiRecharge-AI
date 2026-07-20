import { GitBranchIcon, LucideUnlockKeyhole, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-blue-400">⚡</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                FlexiRecharge AI
              </span>
            </h2>

            <p className="mt-3 max-w-md text-slate-400">
              AI-powered recharge recommendations using Natural Language
              Processing, Machine Learning, and secure Razorpay payments.
            </p>
          </div>

          {/* Social */}

          <div className="flex gap-4">
            <a
              href="https://github.com/shivi028"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-slate-900"
            >
              <GitBranchIcon size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/shivi-tiwari/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-3 transition hover:border-blue-500 hover:bg-slate-900"
            >
              <LucideUnlockKeyhole size={22} />
            </a>
          </div>
        </div>

        {/* Tech Stack */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "React",
            "Express",
            "FastAPI",
            "Scikit-learn",
            "Razorpay",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="flex items-center justify-center gap-2 text-sm text-slate-500">
            © 2026 FlexiRecharge AI • Built with
            <Heart size={16} className="fill-red-500 text-red-500" />
            by <span className="font-medium text-slate-300">Shivi Tiwari</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

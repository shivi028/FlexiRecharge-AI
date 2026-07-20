import { Link, NavLink } from "react-router-dom";
import { History, Home, GitBranch } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-wide"
        >
          <span className="text-2xl">⚡</span>

          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            FlexiRecharge AI
          </span>
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-2">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <History size={18} />
            History
          </NavLink>

          <a
            href="https://github.com/shivi028"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <GitBranch size={18} />
            GitHub
          </a>

        </div>

      </div>
    </nav>
  );
}
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400"
        >
          ⚡ FlexiRecharge AI
        </Link>

        <div className="flex items-center gap-6">
          <a href="#features" className="text-slate-300 hover:text-white">
            Features
          </a>

          <Link
            to="/builder"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-500"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
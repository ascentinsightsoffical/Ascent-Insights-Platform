import { useEffect, useState } from "react";
import { Link } from "react-router";
import { navigationLinks } from "../../data/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        `fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ease-in-out backdrop-blur-xl ${
          isScrolled ? "bg-white/95 border-slate-200 text-slate-950" : "bg-white/0 border-white/0 text-white"
        }`
      }
    >
      <div className="mx-auto flex w-full max-w-[1220px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-4">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-full bg-slate-950/90 px-3 py-2 text-white shadow-xl ring-1 ring-white/25 backdrop-blur-sm border border-white/10"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
            <img
              src="/AscentInsights.png"
              alt="Ascent Insights logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white/90 opacity-90">Ascent Insights</span>
        </Link>

        <button
          type="button"
          className={`inline-flex items-center rounded-full border p-2 transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 lg:hidden ${
            isScrolled
              ? "border-slate-200 bg-white text-slate-950 hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-900"
              : "border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/20 focus-visible:ring-white/60"
              ? "border-white/20 bg-[#0A1045]/80 text-white hover:border-[#3E7BFF]/50 hover:bg-[#2648D8]/30 focus-visible:ring-[#3E7BFF]"
              : "border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/20 focus-visible:ring-white/60"
          }`}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="24" height="24" fill="none" aria-hidden="true" className="h-5 w-5">
            <path
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <nav className="hidden lg:flex lg:items-center lg:gap-6" aria-label="Primary navigation">
          {navigationLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 ease-in-out ${
                isScrolled ? "text-[#9CA3AF] hover:text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <div
          id="primary-navigation"
          className={`border-t lg:hidden ${
            isScrolled ? "border-white/10 bg-[#05082D]/98" : "border-white/10 bg-[#05082D]/95"
          }`}
        >
          <div className="space-y-3 px-4 py-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block rounded-2xl px-3 py-3 text-sm font-medium transition-colors duration-300 ease-in-out text-[#9CA3AF] hover:bg-[#2648D8]/20 hover:text-white`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9CA3AF]">Future items</p>
              <p className="text-sm text-[#6B7280]">Client Portal</p>
              <p className="text-sm text-[#6B7280]">AI Assistant</p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

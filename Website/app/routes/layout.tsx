import { useState } from "react";
import { Link, Outlet } from "react-router";
import { navigationLinks, footerSections, socialLinks } from "../data/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-950">
          Ascent Insights
        </Link>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 lg:hidden"
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
            <Link key={item.path} to={item.path} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
          <span className="ml-6 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Client Portal
          </span>
          <span className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            AI Assistant
          </span>
        </nav>
      </div>

      {isOpen ? (
        <div id="primary-navigation" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-3 px-4 py-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="space-y-2 border-t border-slate-200 pt-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">Future items</p>
              <p className="text-sm text-slate-500">Client Portal</p>
              <p className="text-sm text-slate-500">AI Assistant</p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-[1220px] gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-[1.5fr_2fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Ascent Insights</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              A strategic partner for organizations pursuing intelligent transformation, digital resilience, and continental leadership with global standards.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Newsletter</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Stay connected to insights, research, and platform progress as the Ascent ecosystem grows.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">{section.title}</h2>
              <div className="space-y-2 text-sm text-slate-500">
                {section.links.map((link) => (
                  <Link key={link.path} to={link.path} className="block transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Social</h2>
            <div className="space-y-2 text-sm text-slate-500">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="block transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950 px-4 py-6 text-sm text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ascent Insights. All rights reserved.</p>
          <p>Built for enterprise readiness and platform-first expansion.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

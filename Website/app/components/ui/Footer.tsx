import { Link } from "react-router";
import { footerSections, socialLinks } from "../../data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05082D] text-white">
      <div className="mx-auto grid max-w-[1220px] gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-[1.5fr_2fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3E7BFF]">Ascent Insights</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#9CA3AF]">
              A strategic partner for organizations pursuing intelligent transformation, digital resilience, and continental leadership with global standards.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/10 bg-[#0A1045]/95 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-[#9CA3AF]">Newsletter</p>
              <p className="mt-3 text-sm leading-7 text-[#9CA3AF]/80">
                Stay connected to insights, research, and platform progress as the Ascent ecosystem grows.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9CA3AF]">{section.title}</h2>
              <div className="space-y-2 text-sm text-[#6B7280]">
                {section.links.map((link) => (
                  <Link key={link.path} to={link.path} className="block transition hover:text-[#3E7BFF]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9CA3AF]">Social</h2>
            <div className="space-y-2 text-sm text-[#6B7280]">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="block transition hover:text-[#3E7BFF]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#05082D] px-4 py-6 text-sm text-[#6B7280] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ascent Insights. All rights reserved.</p>
          <p>Built for enterprise readiness and platform-first expansion.</p>
        </div>
      </div>
    </footer>
  );
}

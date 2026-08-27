import Link from "next/link";

import { person } from "@/lib/profile";
import { Tick } from "@/components/tick";

const sitemap = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="on-ink relative overflow-hidden bg-blue-900 text-paper">
      <div
        aria-hidden
        className="ledger-grid pointer-events-none absolute inset-0 opacity-[0.16]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-blue-500/25 blur-[110px]"
      />

      <div className="shell relative py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="t-meta text-honey-400">Open to conversations</p>
            <h2 className="t-title mt-5 max-w-[16ch]">
              Hiring for tax, reporting, or something in between?
            </h2>
            <p className="t-lead mt-6 max-w-[46ch] !text-blue-200">
              I am finishing a MAcc at Gies and heading to PwC as a tax
              associate. If you are building something where tax detail and
              data fluency both matter, I would like to hear about it.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${person.email}`} className="btn btn-honey">
                <Tick variant="check" className="size-3.5" />
                Email me
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="t-meta text-blue-300">Direct</p>
              {/* py on the anchors keeps every tap target >= 24px tall */}
              <ul className="mt-3 space-y-1 text-[0.9375rem]">
                <li>
                  <a
                    href={`mailto:${person.email}`}
                    className="link-draw inline-block py-1.5 text-paper"
                  >
                    {person.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${person.phoneHref}`}
                    className="link-draw t-num inline-block py-1.5 text-paper"
                  >
                    {person.phone}
                  </a>
                </li>
                <li className="py-1.5 text-blue-200">{person.location}</li>
              </ul>
            </div>

            <div>
              <p className="t-meta text-blue-300">Pages</p>
              <ul className="mt-3 space-y-1 text-[0.9375rem]">
                {sitemap.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-draw inline-block py-1.5 text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rule-t mt-16 flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-meta text-blue-200">
            © {new Date().getFullYear()} {person.name}
          </p>
          <p className="t-meta text-blue-300">
            Set in Archivo &amp; Azeret Mono · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

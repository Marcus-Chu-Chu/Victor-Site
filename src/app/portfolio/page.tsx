import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { PageIntro, Section, SectionHead } from "@/components/section";
import { Arrow, Tick } from "@/components/tick";
import { caseStatusLabel, caseStudies, person } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies in progress from Victor Starkov: an executive dashboard build at PwC, a Section 174 method change, agentic tax-research workflows, and a two-entity sales and use tax compliance system.",
};

const statusStyle: Record<string, string> = {
  drafting: "border-blue-600 text-blue-700",
  "in-review": "border-violet-700 text-violet-700",
  planned: "border-rule-2 text-ink-3",
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        slug="Portfolio"
        locator="4 entries · 2 drafting, 2 planned"
        title={
          <>
            Written{" "}
            <span className="text-blue-600">carefully</span>, or not at all.
          </>
        }
        lead={
          <>
            Client work at a Big Four firm does not go on a personal website
            unaltered, so these are being written the slower way: the technical
            problem, the approach, and the reasoning, with anything
            confidential abstracted out. Here is what is on the bench and how
            far along each one is.
          </>
        }
      />

      {/* ------------------------------------------------ case studies */}
      <Section>
        <div className="shell">
          <SectionHead
            title="On the bench."
            note="Each entry lists what the write-up will actually cover — including the parts that were harder than they look."
          />

          <ol className="mt-12 grid gap-px bg-rule lg:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Reveal
                key={cs.ref}
                as="li"
                delay={i * 80}
                className="group relative flex flex-col bg-paper p-7 transition-colors duration-500 hover:bg-blue-50 sm:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="t-num text-[0.8125rem] text-blue-600">
                    {cs.ref}
                  </span>
                  <span
                    className={`t-meta border px-2.5 py-1 ${statusStyle[cs.status]}`}
                  >
                    {caseStatusLabel[cs.status]}
                  </span>
                </div>

                <h3 className="wdth-wide mt-7 max-w-[20ch] text-[1.4375rem] leading-[1.12] font-bold tracking-[-0.025em] text-ink sm:text-[1.625rem]">
                  {cs.title}
                </h3>
                <p className="t-meta mt-3 text-ink-3">{cs.context}</p>

                <p className="mt-6 max-w-[52ch] grow text-[0.9375rem] leading-relaxed text-ink-2">
                  {cs.abstract}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2 border-t border-rule pt-6">
                  {cs.tags.map((tag) => (
                    <li
                      key={tag}
                      className="t-meta border border-rule px-2.5 py-1.5 text-ink-3"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* ------------------------------------------------- the standard */}
      <Section className="border-y border-rule bg-wash">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Reveal as="h2" className="t-title max-w-[16ch]">
                What each write-up has to clear.
              </Reveal>
              <Reveal as="p" delay={80} className="t-lead mt-6 max-w-[46ch]">
                A case study that only reports the win is marketing. These are
                held to a standard closer to a workpaper: someone should be able
                to disagree with the approach on the evidence given.
              </Reveal>
            </div>

            <Reveal delay={120}>
              <ul>
                {[
                  [
                    "No confidential client data",
                    "Figures abstracted or generalized; nothing identifiable leaves the engagement.",
                  ],
                  [
                    "The problem before the solution",
                    "What was actually broken, stated plainly enough to be argued with.",
                  ],
                  [
                    "The wrong turns included",
                    "Where the first approach failed and what the failure cost.",
                  ],
                  [
                    "A reader who is not me",
                    "Written for a controller or a hiring partner, not for other accountants.",
                  ],
                ].map(([title, body]) => (
                  <li
                    key={title}
                    className="flex gap-5 border-t border-rule py-5 last:border-b"
                  >
                    <Tick
                      variant="check"
                      className="mt-1 size-[1.125rem] shrink-0 text-honey-500"
                    />
                    <div>
                      <h3 className="text-[1rem] font-semibold text-ink">
                        {title}
                      </h3>
                      <p className="mt-2 max-w-[46ch] text-[0.9375rem] leading-relaxed text-ink-2">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- notify */}
      <Section>
        <div className="shell-tight">
          <Reveal className="plate hatch bg-paper p-3 sm:p-4">
            <div className="grid gap-8 bg-paper p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
              <div>
                <h2 className="t-head max-w-[22ch]">
                  Want one of these before it is published?
                </h2>
                <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-2">
                  Email me and say which reference number. I will send the
                  current draft, caveats and all, and you can judge the thinking
                  rather than the polish.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:justify-self-end">
                <a
                  href={`mailto:${person.email}?subject=${encodeURIComponent("Case study draft request")}`}
                  className="btn justify-center"
                >
                  Request a draft
                  <Arrow className="size-3.5" />
                </a>
                <Link href="/journey" className="btn btn-ghost justify-center">
                  See the work behind them
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

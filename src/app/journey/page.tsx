import type { Metadata } from "next";
import Link from "next/link";

import { JourneyRail } from "@/components/journey-rail";
import { Reveal } from "@/components/reveal";
import { PageIntro, Section, SectionHead } from "@/components/section";
import { Arrow } from "@/components/tick";
import { TrajectoryChart } from "@/components/trajectory-chart";
import { chapters, education, person, roles } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Career journey",
  description:
    "Victor Starkov's career record, 2021–2027: Chick-fil-A to Naughton & Company, Geneva Park District, Cars Commerce, and two summers at PwC — ending in an incoming international tax associate seat.",
};

const chapterOrder = ["practice", "industry", "foundation"] as const;

export default function JourneyPage() {
  return (
    <>
      <PageIntro
        slug="Career journey"
        locator="2021 — 2027 · Seven entries"
        title={
          <>
            The record, in{" "}
            <span className="text-blue-600">order</span>.
          </>
        }
        lead={
          <>
            Six roles and three degrees over seven years. Read straight down —
            each entry keeps what it actually involved, not what it sounds best
            as.
          </>
        }
      >
        <Reveal delay={200} className="mt-12">
          <TrajectoryChart />
        </Reveal>
      </PageIntro>

      {/* --------------------------------------------------- chapters */}
      <Section className="border-b border-rule">
        <div className="shell">
          <SectionHead
            title="Three chapters."
            note="The work sorts cleanly into a practice track, an in-house track, and the foundation underneath both."
          />
          <div className="mt-12 grid gap-px bg-rule md:grid-cols-3">
            {chapterOrder.map((key, i) => {
              const c = chapters[key];
              const count = roles.filter((r) => r.chapter === key).length;
              return (
                <Reveal key={key} delay={i * 80} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between gap-4 px-6 py-4 sm:px-8 ${c.tint}`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={`size-2 shrink-0 rotate-45 ${c.dot}`}
                      />
                      <span className={`t-meta !text-[0.75rem] ${c.text}`}>
                        {c.label}
                      </span>
                    </span>
                    <span className="t-num text-[0.8125rem] text-ink-3">
                      {count} {count === 1 ? "role" : "roles"}
                    </span>
                  </div>
                  <p className="grow bg-paper px-6 py-6 text-[0.9375rem] leading-relaxed text-ink-2 sm:px-8">
                    {c.note}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------- the rail */}
      <Section>
        <div className="shell">
          <JourneyRail />
        </div>
      </Section>

      {/* ---------------------------------------------------- education */}
      <Section className="border-t border-rule bg-wash">
        <div className="shell">
          <SectionHead
            title="Degrees, in parallel."
            note="Community college to Gies, associate through master's, with the CPA exams running alongside the last stretch."
          />

          <ol className="mt-12">
            {education.map((ed, i) => (
              <Reveal
                key={`${ed.school}-${ed.credential}`}
                as="li"
                delay={i * 70}
                className="grid grid-cols-1 gap-x-10 gap-y-3 border-t border-rule py-8 last:border-b md:grid-cols-[12rem_1fr]"
              >
                <div>
                  {/* reference key — matches the bar labels in Fig. 02 */}
                  <p className="t-num mb-3 text-[0.8125rem] text-teal-700">
                    {["A", "B", "C"][i]}
                  </p>
                  <div className="t-meta flex items-center gap-2.5 text-ink-3">
                    <span
                      aria-hidden
                      className={`size-1.5 shrink-0 rotate-45 ${ed.current ? "bg-teal-500" : "bg-rule-2"}`}
                    />
                    {ed.start} — {ed.end}
                  </div>
                </div>
                <div>
                  <h3 className="wdth-wide text-[1.375rem] font-bold tracking-[-0.025em] text-ink">
                    {ed.credential}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-[0.9375rem] text-ink-2">
                    {ed.school}
                  </p>
                  {ed.detail ? (
                    <p className="t-meta mt-3 text-blue-700">{ed.detail}</p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={140} className="mt-12 flex flex-wrap gap-3">
            <Link href="/portfolio" className="btn">
              Case studies in progress
              <Arrow className="size-3.5" />
            </Link>
            <a href={`mailto:${person.email}`} className="btn btn-ghost">
              Ask me about any of it
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { MonogramPlate } from "@/components/monogram-plate";
import { Reveal } from "@/components/reveal";
import { PageIntro, Section, SectionHead } from "@/components/section";
import { Arrow, Tick } from "@/components/tick";
import {
  certifications,
  education,
  honors,
  person,
  principles,
} from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Victor Starkov — international tax and accounting, Chicago. How he works, what he has been certified in, and where the CPA and MAcc track is heading.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        slug="About"
        locator="41.8781° N, 87.6298° W"
        title={
          <>
            I like the part everyone else{" "}
            <span className="text-blue-600">skips</span>.
          </>
        }
        lead={
          <>
            Reconciliation, tie-outs, control checks — the unglamorous half of
            accounting where the work either holds up or quietly does not. Six
            roles in, it is still the part I trust a deliverable on.
          </>
        }
      />

      {/* --------------------------------------------------- narrative */}
      <Section>
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div className="prose-measure space-y-6 text-[1.0625rem] leading-relaxed text-ink-2">
              <Reveal as="p" className="!text-[1.1875rem] !text-ink">
                My first accounting job was at Naughton &amp; Company in St.
                Charles, reconciling client bank accounts and running payroll
                tax. It was small-firm work, and it taught me the thing that has
                shaped everything since: most financial problems are not
                analytical problems. They are data problems wearing an
                analytical costume.
              </Reveal>
              <Reveal as="p" delay={60}>
                At Cars Commerce I saw the same thing at a different scale. Two
                legal entities, more than thirty sales and use tax payments a
                month, quarterly estimates to project, and a Section 174 method
                change that changed how much cash actually left the business
                that year. None of it was hard to understand. All of it was hard
                to keep correct, which is a different discipline entirely.
              </Reveal>
              <Reveal as="p" delay={90}>
                Two summers at PwC pushed the work outward. The first, in the
                Start program, was mostly about audience: I co-led a
                presentation on youth engagement data, synthesized more than
                5,000 user interactions, and learned that a finding nobody can
                act on is not a finding. The second, in international tax, was
                about instrumentation. I built an interactive executive
                dashboard out of engagement data that had been living in a dozen
                incompatible places, and designed the entity and organizational
                visuals that made complicated structures readable to people who
                had four minutes.
              </Reveal>
              <Reveal as="p" delay={120}>
                Somewhere in there, AI stopped being a novelty in my workflow
                and became infrastructure. I write prompt systems and build
                agentic workflows — currently in Claude Code — pointed at
                research synthesis, unstructured document review, and knowledge
                capture. I am deliberate about where the line sits. A model can
                gather and summarize; it does not decide what a rule means for a
                client. Knowing which side of that line a task falls on is most
                of the skill.
              </Reveal>
              <Reveal as="p" delay={150}>
                Right now I am in the MAcc at Gies, sitting for the CPA exams,
                and heading back to PwC as an international tax associate. Long
                term I want to be the person on a tax team who can both defend
                the technical position and build the system that keeps it
                consistent next quarter.
              </Reveal>

              <Reveal delay={180} className="flex flex-wrap gap-3 pt-2">
                <Link href="/journey" className="btn">
                  The full journey
                  <Arrow className="size-3.5" />
                </Link>
                <a href={`mailto:${person.email}`} className="btn btn-ghost">
                  Get in touch
                </a>
              </Reveal>
            </div>

            <Reveal
              delay={80}
              className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:pt-1"
            >
              <MonogramPlate />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- principles */}
      <Section className="border-y border-rule bg-wash">
        <div className="shell">
          <SectionHead
            title="How I work."
            note="Four rules I have actually been burned into, rather than four rules that sound good on a website."
          />

          <div className="mt-12 grid gap-px bg-rule sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="flex gap-5 bg-wash p-7 sm:p-9"
              >
                <Tick
                  variant="check"
                  className="mt-1 size-5 shrink-0 text-honey-500"
                />
                <div>
                  <h3 className="wdth-wide text-[1.125rem] font-bold tracking-[-0.015em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-relaxed text-ink-2">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- credentials */}
      <Section>
        <div className="shell">
          <SectionHead
            title="Education and credentials."
            note="Three schools, five certifications, and a licensure track that is currently in progress."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h3 className="t-meta text-blue-700">Education</h3>
              <ol className="mt-5">
                {education.map((ed, i) => (
                  <Reveal
                    key={`${ed.school}-${ed.credential}`}
                    as="li"
                    delay={i * 70}
                    className="border-t border-rule py-6 last:border-b"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <h4 className="wdth-wide text-[1.1875rem] font-bold tracking-[-0.02em] text-ink">
                        {ed.credential}
                      </h4>
                      <span className="t-meta flex items-center gap-2 text-ink-3">
                        {ed.current ? (
                          <span
                            aria-hidden
                            className="size-1.5 rotate-45 bg-blue-500"
                          />
                        ) : null}
                        {ed.start} — {ed.end}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[52ch] text-[0.9375rem] text-ink-2">
                      {ed.school}
                    </p>
                    {ed.detail ? (
                      <p className="mt-1.5 text-[0.875rem] text-blue-700">
                        {ed.detail}
                      </p>
                    ) : null}
                  </Reveal>
                ))}
              </ol>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
              <Reveal delay={60}>
                <h3 className="t-meta text-blue-700">Certifications</h3>
                <ul className="mt-5">
                  {certifications.map((c) => (
                    <li
                      key={c.name}
                      className="flex items-start gap-3 border-t border-rule py-3.5 last:border-b"
                    >
                      <Tick
                        variant="check"
                        className="mt-0.5 size-4 shrink-0 text-honey-500"
                      />
                      <span className="text-[0.9375rem] leading-snug text-ink-2">
                        {c.name}
                        {c.detail ? (
                          <span className="t-meta ml-2 text-ink-3">
                            {c.detail}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120}>
                <h3 className="t-meta text-blue-700">Honors</h3>
                <ul className="mt-5">
                  {honors.map((h) => (
                    <li
                      key={h.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 border-t border-rule py-3.5 last:border-b"
                    >
                      <span className="text-[0.9375rem] text-ink-2">
                        {h.name}
                      </span>
                      {h.detail ? (
                        <span className="t-meta text-ink-3">{h.detail}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

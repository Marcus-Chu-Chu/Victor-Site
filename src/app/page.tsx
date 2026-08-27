import Link from "next/link";

import { HeroLattice } from "@/components/hero-lattice";
import { InstrumentStrip } from "@/components/instrument-strip";
import { Arrow, Tick } from "@/components/tick";
import { DrawRule, MaskLine, Reveal } from "@/components/reveal";
import { Section, SectionHead } from "@/components/section";
import {
  capabilities,
  chapters,
  evidence,
  person,
  roles,
  statusLine,
  toolkit,
} from "@/lib/profile";

const accentText = {
  blue: "text-blue-700",
  violet: "text-violet-700",
  honey: "text-honey-700",
} as const;

const accentBar = {
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  honey: "bg-honey-400",
} as const;

const accentTint = {
  blue: "bg-blue-50",
  violet: "bg-violet-500/8",
  honey: "bg-honey-100",
} as const;

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="relative border-b border-rule">
        <div className="shell pt-8 pb-16 sm:pt-10 sm:pb-24">
          <div className="flex flex-col gap-1 border-b border-rule-2 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <span className="t-meta text-blue-700">{person.name}</span>
            <span className="t-meta text-ink-3">
              International tax &amp; accounting · Chicago
            </span>
          </div>

          <div className="mt-12 grid items-start gap-14 lg:mt-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
            <div>
              <h1 className="t-display">
                <MaskLine delay={60}>Tax is a</MaskLine>
                <MaskLine delay={170}>
                  <span className="text-blue-600">
                    data problem<span className="text-honey-500">.</span>
                  </span>
                </MaskLine>
              </h1>

              <Reveal
                as="p"
                delay={330}
                className="t-lead mt-8 max-w-[52ch] !text-[1.1875rem]"
              >
                I am finishing a Master of Accounting Science at Gies and
                heading to PwC&rsquo;s international tax practice. The work I
                like most sits where tax detail meets data: reconcile the
                numbers first, then build the dashboard, model, or workflow
                that makes them worth a decision.
              </Reveal>

              <Reveal
                delay={420}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Link href="/journey" className="btn">
                  See the career journey
                  <Arrow className="size-3.5" />
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  About me
                </Link>
              </Reveal>

              <Reveal delay={500} className="mt-14">
                <DrawRule delay={520} />
                <dl className="grid grid-cols-2 sm:grid-cols-4">
                  {statusLine.map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-rule py-4 pr-4 sm:border-b-0"
                    >
                      <dt className="t-meta text-ink-3">{item.label}</dt>
                      <dd className="mt-2 text-[0.9375rem] leading-snug font-semibold text-ink">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* figure plate */}
            <Reveal delay={240} className="lg:pt-2">
              <figure className="plate bg-wash">
                <figcaption className="flex items-baseline justify-between gap-4 border-b border-rule px-4 py-3">
                  <span className="t-meta text-ink-2">
                    Fig. 01 — Working method
                  </span>
                  <span className="t-meta text-ink-3">Live</span>
                </figcaption>
                <div className="relative h-[19rem] sm:h-[24rem] lg:h-[27rem]">
                  <HeroLattice />
                </div>
                <div className="grid grid-cols-3 border-t border-rule">
                  {[
                    ["Reconcile", "Tie the data out"],
                    ["Model", "Make it answer"],
                    ["Automate", "Keep it running"],
                  ].map(([k, v], i) => (
                    <div
                      key={k}
                      className={`px-4 py-3.5 ${i < 2 ? "border-r border-rule" : ""}`}
                    >
                      <p className="t-meta text-blue-700">{k}</p>
                      <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink-2">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <InstrumentStrip />

      {/* ------------------------------------------------------- thesis */}
      <Section>
        <div className="shell">
          <SectionHead
            title={
              <>
                The throughline: I make financial data{" "}
                <span className="text-blue-600">legible</span>.
              </>
            }
            note="Four finance and tax teams, 60+ businesses, and one consistent job — turning something fragmented into something a decision can be made from."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="prose-measure space-y-6 text-[1.0625rem] leading-relaxed text-ink-2">
              <p>
                I started in a small firm in St. Charles doing bank
                reconciliations and payroll tax, moved to in-house compliance at
                Cars Commerce, and spent two summers at PwC. Different scales,
                same pattern: the numbers arrive scattered, and somebody has to
                make them agree before anyone can act on them.
              </p>
              <p>
                That somebody has usually been me, and I have come to like the
                part most people skip. Reconciling two entities&rsquo; sales and
                use tax month after month teaches you where data actually breaks.
                Building an executive dashboard on top of fragmented engagement
                data teaches you that the reporting is the easy half.
              </p>
              <p>
                What has changed recently is the toolkit. Prompt engineering and
                agentic workflows now handle the genuinely mechanical parts of
                research and document review, which means the judgment calls get
                more of the week. I am pursuing CPA licensure alongside the MAcc
                and returning to PwC in international tax.
              </p>
              <Link
                href="/about"
                className="link-draw inline-flex items-center gap-2 font-semibold text-blue-700"
              >
                Read the longer version
                <Arrow className="size-3.5" />
              </Link>
            </div>

            <Reveal delay={80}>
              <div className="plate bg-paper">
                <div className="flex items-center justify-between border-b border-rule px-5 py-4">
                  <span className="t-meta text-ink-2">Profile</span>
                  <span
                    aria-hidden
                    className="t-num text-[0.6875rem] text-blue-600"
                  >
                    {person.initials}
                  </span>
                </div>
                <dl className="divide-y divide-rule">
                  {[
                    ["Name", person.name],
                    ["Focus", "International tax"],
                    ["Degree", "MAcc, Gies (2027)"],
                    ["Undergrad", "B.S. Accountancy, highest honors"],
                    ["Licensure", "CPA candidate"],
                    ["Location", person.location],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-3.5"
                    >
                      <dt className="t-meta text-ink-3">{k}</dt>
                      <dd className="text-[0.9375rem] font-medium text-ink">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="hatch border-t border-rule px-5 py-2.5">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="link-draw t-meta inline-flex min-h-6 items-center gap-2 py-1.5 text-blue-700"
                  >
                    {person.linkedinLabel}
                    <Arrow className="size-3" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- capabilities */}
      <section className="on-cobalt relative overflow-hidden bg-blue-700 text-paper">
        <div
          aria-hidden
          className="ledger-grid pointer-events-none absolute inset-0 opacity-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-32 size-[30rem] rounded-full bg-blue-500/40 blur-[120px]"
        />
        <div className="shell relative py-20 sm:py-28">
          <Reveal as="h2" className="t-title max-w-[18ch]">
            Three things I am actually good at.
          </Reveal>

          <div className="mt-14">
            {capabilities.map((cap, i) => (
              <Reveal
                key={cap.n}
                delay={i * 90}
                className="rule-t grid gap-6 py-9 md:grid-cols-[auto_1fr_1.25fr] md:gap-12"
              >
                <span
                  aria-hidden
                  className="t-num text-[2.5rem] leading-none text-honey-400 md:text-[3.25rem]"
                >
                  {cap.n}
                </span>
                <h3 className="t-head max-w-[17ch] self-start">{cap.title}</h3>
                <div>
                  <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-blue-100">
                    {cap.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <li
                        key={tag}
                        className="t-meta border border-paper/30 px-2.5 py-1.5 text-blue-100"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <DrawRule tone="bg-paper/25" />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- evidence */}
      <Section>
        <div className="shell">
          <SectionHead
            title="The schedule, tied out."
            note="Claims are cheap. These are the ones with a workpaper behind them, referenced the way an auditor would."
          />

          <Reveal className="mt-12 border border-rule">
            <div className="hidden grid-cols-[4.5rem_1fr_15rem_3rem] items-center border-b border-rule bg-wash px-5 py-3 md:grid">
              <span className="t-meta text-ink-3">Ref</span>
              <span className="t-meta text-ink-3">Result</span>
              <span className="t-meta text-ink-3">Source</span>
              <span className="t-meta text-right text-ink-3">Tick</span>
            </div>
            <ul className="divide-y divide-rule">
              {evidence.map((row) => (
                <li
                  key={row.ref}
                  className="group grid grid-cols-[3.5rem_1fr_2rem] items-start gap-x-4 gap-y-2 px-5 py-5 transition-colors duration-300 hover:bg-blue-50 md:grid-cols-[4.5rem_1fr_15rem_3rem] md:items-center md:gap-y-0"
                >
                  <span className="t-num text-[0.8125rem] text-blue-600">
                    {row.ref}
                  </span>
                  <span className="text-[0.9375rem] leading-snug font-medium text-ink md:pr-8">
                    {row.claim}
                  </span>
                  <span className="t-meta col-start-2 text-ink-3 md:col-start-auto">
                    {row.source}
                  </span>
                  <Tick
                    variant="check"
                    className="col-start-3 row-start-1 size-5 justify-self-end text-honey-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-115 md:col-start-4 md:row-start-auto"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------ journey */}
      <Section className="border-y border-rule bg-wash">
        <div className="shell">
          <SectionHead
            title="Six roles, one direction."
            note="From a K–5 program floor and a Chick-fil-A rush to Big Four international tax — the throughline is throughput under constraint."
          />

          <ol className="mt-12">
            {roles.map((role, i) => {
              const chapter = chapters[role.chapter];
              return (
                <Reveal
                  key={`${role.org}-${role.title}`}
                  as="li"
                  delay={i * 60}
                  className="group border-t border-rule last:border-b"
                >
                  <Link
                    href="/journey"
                    className="grid grid-cols-1 items-baseline gap-x-8 gap-y-2 py-6 transition-colors duration-300 hover:bg-paper md:grid-cols-[10rem_1fr_auto] md:px-4"
                  >
                    <span className="t-meta flex items-center gap-2.5 text-ink-3">
                      <span
                        aria-hidden
                        className={`size-1.5 shrink-0 rotate-45 ${chapter.dot}`}
                      />
                      {role.start} — {role.end}
                    </span>
                    <span className="flex flex-wrap items-baseline gap-x-3">
                      <span className="wdth-wide text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
                        {role.org}
                      </span>
                      <span className="text-[0.9375rem] text-ink-2">
                        {role.title}
                      </span>
                    </span>
                    <span className="t-meta flex items-center gap-2 text-ink-3 transition-colors duration-300 group-hover:text-blue-700">
                      {role.place}
                      <Arrow className="size-3 -translate-x-1 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={120} className="mt-10">
            <Link href="/journey" className="btn">
              Open the full journey
              <Arrow className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------ toolkit */}
      <Section>
        <div className="shell">
          <SectionHead
            title="What is in the kit."
            note="Certified where it counts, self-taught where it moves faster than the certification does."
          />

          <div className="mt-12 grid gap-px bg-rule md:grid-cols-3">
            {toolkit.map((group, i) => (
              <Reveal
                key={group.group}
                delay={i * 90}
                className="flex flex-col bg-paper"
              >
                <div
                  className={`flex items-center gap-3 border-b border-rule px-6 py-4 sm:px-8 ${accentTint[group.accent]}`}
                >
                  <span
                    aria-hidden
                    className={`size-2 shrink-0 rotate-45 ${accentBar[group.accent]}`}
                  />
                  <h3
                    className={`t-meta !text-[0.75rem] ${accentText[group.accent]}`}
                  >
                    {group.group}
                  </h3>
                  <span className="t-num ml-auto text-[0.6875rem] text-ink-3">
                    {group.items.length}
                  </span>
                </div>
                <ul className="px-6 py-2 sm:px-8">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-rule py-2.5 text-[0.9375rem] text-ink-2 last:border-b-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- portfolio */}
      <section className="relative overflow-hidden border-t border-rule bg-honey-100">
        <div
          aria-hidden
          className="hatch pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="shell relative py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <Reveal as="h2" className="t-title max-w-[17ch]">
                The case studies are being written.
              </Reveal>
              <Reveal as="p" delay={90} className="t-lead mt-6 max-w-[50ch]">
                Four write-ups are in progress: the dashboard build, the
                Section 174 method change, the agentic research workflows, and
                the two-entity compliance system. Each one covers what the
                problem actually was and where the analysis nearly went wrong.
              </Reveal>
              <Reveal delay={160} className="mt-9">
                <Link href="/portfolio" className="btn btn-honey">
                  See what is coming
                  <Arrow className="size-3.5" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <ul className="divide-y divide-honey-200 border-y border-honey-200">
                {[
                  ["CS-01", "One screen for a fragmented practice"],
                  ["CS-02", "A Section 174 method change, start to finish"],
                  ["CS-03", "Agents on the mechanical half of tax research"],
                  ["CS-04", "Compliance for two entities without a miss"],
                ].map(([ref, title]) => (
                  <li
                    key={ref}
                    className="flex items-baseline gap-5 py-4 text-ink"
                  >
                    <span className="t-num text-[0.8125rem] text-honey-700">
                      {ref}
                    </span>
                    <span className="text-[0.9375rem] leading-snug font-medium">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

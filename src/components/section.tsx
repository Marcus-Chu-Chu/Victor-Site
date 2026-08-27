import type { ReactNode } from "react";

import { DrawRule, Reveal } from "@/components/reveal";

/**
 * Section head: title on the left, a plain-language note on the right,
 * separated by a hairline that draws itself in. No kickers, no numbering —
 * the rule carries the structure.
 */
export function SectionHead({
  title,
  note,
  id,
  className = "",
}: {
  title: ReactNode;
  note?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={className} id={id}>
      <DrawRule />
      <div className="grid gap-5 pt-7 md:grid-cols-[1.05fr_1fr] md:items-end md:gap-14">
        <Reveal as="h2" className="t-title">
          {title}
        </Reveal>
        {note ? (
          <Reveal
            as="p"
            delay={90}
            className="t-lead max-w-[46ch] !text-[1.0625rem] md:justify-self-end"
          >
            {note}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

/**
 * Running head — the folio line from a printed report. Sits flush against the
 * top rule of a page, left slug and right locator.
 */
export function RunningHead({
  slug,
  locator,
}: {
  slug: string;
  locator: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-rule-2 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <span className="t-meta text-blue-700">{slug}</span>
      <span className="t-meta text-ink-3">{locator}</span>
    </div>
  );
}

/** Page-level opening block used on every interior route. */
export function PageIntro({
  slug,
  locator,
  title,
  lead,
  children,
}: {
  slug: string;
  locator: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-wash">
      <div
        aria-hidden
        className="ledger-grid pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 size-[26rem] rounded-full bg-blue-500/10 blur-[100px]"
      />
      <div className="shell relative pt-8 pb-16 sm:pt-10 sm:pb-20">
        <RunningHead slug={slug} locator={locator} />
        <Reveal as="h1" delay={60} className="t-display mt-12 max-w-[15ch]">
          {title}
        </Reveal>
        <Reveal
          as="div"
          delay={140}
          className="t-lead prose-measure mt-8 !text-[1.1875rem]"
        >
          {lead}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

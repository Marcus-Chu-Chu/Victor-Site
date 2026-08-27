import { person } from "@/lib/profile";

/**
 * Typographic monogram plate — the colophon mark. Stands where a portrait
 * would sit; drop a headshot in by replacing the <div> below with a
 * next/image and keeping the plate frame and caption rows.
 */
export function MonogramPlate() {
  return (
    <figure className="plate bg-wash">
      <figcaption className="flex items-baseline justify-between gap-4 border-b border-rule px-4 py-3">
        <span className="t-meta text-ink-2">{person.name}</span>
        <span className="t-meta text-ink-3">Chicago, IL</span>
      </figcaption>

      <div className="ledger-grid relative grid h-[20rem] place-items-center overflow-hidden sm:h-[24rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-10 size-64 rounded-full bg-blue-500/12 blur-[70px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -bottom-14 size-56 rounded-full bg-honey-400/25 blur-[70px]"
        />
        <span
          aria-hidden
          className="wdth-wide relative text-[9rem] leading-none font-extrabold tracking-[-0.06em] text-blue-600 sm:text-[11rem]"
        >
          {person.initials}
        </span>
        <span
          aria-hidden
          className="absolute inset-x-0 top-1/2 h-px bg-honey-400/60"
        />
      </div>

      <div className="grid grid-cols-2 border-t border-rule">
        <div className="border-r border-rule px-4 py-3.5">
          <p className="t-meta text-blue-700">Reading now</p>
          <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink-2">
            Subchapter N and the CPA blueprints
          </p>
        </div>
        <div className="px-4 py-3.5">
          <p className="t-meta text-blue-700">Building now</p>
          <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink-2">
            Agentic research workflows
          </p>
        </div>
      </div>
    </figure>
  );
}

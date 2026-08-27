import { instruments } from "@/lib/profile";

/**
 * Hairline spec strip. Runs continuously; pauses on hover, and collapses to a
 * static horizontally scrollable list under reduced motion.
 */
export function InstrumentStrip() {
  const lane = [...instruments, ...instruments];

  return (
    <div className="group relative overflow-hidden border-y border-rule bg-paper py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-paper to-transparent sm:w-28"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-paper to-transparent sm:w-28"
      />
      <ul
        className="marquee-lane flex w-max items-center gap-0"
        aria-label="Areas of work"
      >
        {lane.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= instruments.length ? true : undefined}
            className="flex shrink-0 items-center gap-8 px-8"
          >
            <span className="t-meta whitespace-nowrap text-ink-2">{item}</span>
            <span
              aria-hidden
              className="size-1 shrink-0 rotate-45 bg-honey-500"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

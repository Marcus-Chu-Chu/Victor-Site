import type { Chapter } from "@/lib/profile";

/* Chart window: Jan 2021 → Jan 2028 */
const T0 = 2021;
const T1 = 2028;
const at = (year: number, month: number) =>
  (((year + (month - 1) / 12 - T0) / (T1 - T0)) * 100).toFixed(3);

type Bar = {
  n: string;
  label: string;
  from: [number, number];
  to: [number, number];
  lane: Chapter | "education";
  forward?: boolean;
};

/**
 * `n` is the reference key. Roles are numbered newest-first to match the order
 * of the record on this page; degrees take letters, matching the education
 * list. Keep both in step if either list is reordered.
 */
const bars: Bar[] = [
  { n: "06", label: "Chick-fil-A — Team Member", from: [2021, 5], to: [2021, 9], lane: "foundation" },
  { n: "05", label: "Naughton & Company — Accounting Intern", from: [2023, 6], to: [2023, 9], lane: "foundation" },
  { n: "04", label: "Geneva Park District — Kids' Zone Leader", from: [2023, 10], to: [2024, 7], lane: "foundation" },
  { n: "03", label: "Cars Commerce — Tax Accounting Intern", from: [2024, 6], to: [2024, 9], lane: "industry" },
  { n: "02", label: "PwC — Start Tax Intern", from: [2025, 6], to: [2025, 8], lane: "practice" },
  { n: "01", label: "PwC — International Tax Intern", from: [2026, 6], to: [2026, 9], lane: "practice" },
  { n: "→", label: "PwC — Tax Associate (incoming)", from: [2027, 8], to: [2028, 1], lane: "practice", forward: true },
  { n: "C", label: "Elgin Community College — A.A. Accounting", from: [2022, 8], to: [2024, 6], lane: "education" },
  { n: "B", label: "UIUC Gies — B.S. Accountancy", from: [2024, 8], to: [2026, 6], lane: "education" },
  { n: "A", label: "UIUC Gies — Master of Accounting Science", from: [2026, 8], to: [2027, 6], lane: "education" },
];

/* Every fill/ink pair below is verified at >= 4.5:1. */
const lanes: { key: Bar["lane"]; label: string; fill: string; ink: string }[] = [
  { key: "practice", label: "Public accounting", fill: "bg-blue-600", ink: "text-paper" },
  { key: "industry", label: "Industry & compliance", fill: "bg-violet-500", ink: "text-paper" },
  { key: "foundation", label: "Foundation", fill: "bg-honey-400", ink: "text-ink" },
  { key: "education", label: "Education", fill: "bg-teal-500", ink: "text-ink" },
];

const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027];

/**
 * Lane chart of every role and degree, 2021–2027. Scrolls horizontally on
 * small screens rather than compressing into illegibility.
 */
export function TrajectoryChart() {
  return (
    <figure className="plate bg-paper">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-rule px-4 py-3 sm:px-5">
        <span className="t-meta text-ink-2">Fig. 02 — Roles and degrees, 2021–2027</span>
        <span className="t-meta text-ink-3">Keyed to the record below</span>
      </figcaption>

      <div className="overflow-x-auto">
        <div className="min-w-[46rem] px-4 py-6 sm:px-5">
          {lanes.map((lane) => {
            const laneBars = bars.filter((b) => b.lane === lane.key);
            return (
              <div
                key={lane.key}
                className="grid grid-cols-[10.5rem_1fr] items-center gap-4 border-b border-rule py-3 last:border-b-0"
              >
                <div className="flex items-center gap-2.5">
                  <span aria-hidden className={`size-2 shrink-0 rotate-45 ${lane.fill}`} />
                  <span className="t-meta text-ink-2">{lane.label}</span>
                </div>

                <div className="relative h-8">
                  {/* year gridlines */}
                  <div aria-hidden className="absolute inset-0">
                    {years.map((y) => (
                      <span
                        key={y}
                        className="absolute top-0 bottom-0 w-px bg-rule"
                        style={{ left: `${at(y, 1)}%` }}
                      />
                    ))}
                  </div>

                  {laneBars.map((bar) => {
                    const left = Number(at(...bar.from));
                    const right = Number(at(...bar.to));
                    return (
                      <div
                        key={bar.label}
                        title={bar.label}
                        aria-label={bar.label}
                        className={[
                          "absolute top-1/2 flex h-7 min-w-7 -translate-y-1/2 items-center justify-center",
                          bar.forward
                            ? `border border-dashed ${lane.key === "practice" ? "border-blue-600 text-blue-700" : ""} hatch`
                            : `${lane.fill} ${lane.ink}`,
                        ].join(" ")}
                        style={{
                          left: `${left}%`,
                          width: `${Math.max(right - left, 1.1)}%`,
                        }}
                      >
                        <span className="t-num text-[0.6875rem] leading-none">
                          {bar.n}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* year axis */}
          <div className="mt-3 grid grid-cols-[10.5rem_1fr] gap-4">
            <span className="t-meta text-ink-3">Year</span>
            <div className="relative h-5">
              {years.map((y) => (
                <span
                  key={y}
                  className="t-num absolute top-0 text-[0.6875rem] text-ink-3"
                  style={{ left: `${at(y, 1)}%` }}
                >
                  {y}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="t-meta border-t border-rule px-4 py-3 text-ink-3 sm:px-5">
        Dashed bar = incoming, start date pending MAcc completion
      </p>
    </figure>
  );
}

export { bars as trajectoryBars };

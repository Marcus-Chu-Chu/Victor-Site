"use client";

import { useEffect, useRef, useState } from "react";

import { Tick } from "@/components/tick";
import { chapters, roles } from "@/lib/profile";

/**
 * The record itself. A hairline rail on the left fills as the list scrolls
 * past, and each entry's marker lights when it reaches reading position.
 */
export function JourneyRail() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const anchor = window.innerHeight * 0.42;
      const span = rect.height || 1;
      const p = (anchor - rect.top) / span;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = itemRefs.current.indexOf(entry.target as HTMLLIElement);
          if (index >= 0) setActive(index);
        }
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* rail */}
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-0 w-px bg-rule sm:left-[0.4375rem] md:left-[12rem]"
      >
        <div
          className="w-px origin-top bg-blue-500 transition-transform duration-150 ease-linear motion-reduce:transition-none"
          style={{ height: "100%", transform: `scaleY(${progress})` }}
        />
      </div>

      <ol className="space-y-0">
        {roles.map((role, i) => {
          const chapter = chapters[role.chapter];
          const isActive = i === active;
          return (
            <li
              key={`${role.org}-${role.title}`}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative grid grid-cols-1 gap-x-10 border-b border-rule py-10 pl-8 last:border-b-0 sm:py-12 md:grid-cols-[12rem_1fr] md:pl-0"
            >
              {/* marker */}
              <span
                aria-hidden
                className={[
                  "absolute top-[3.15rem] left-0 z-10 block size-[0.9375rem] -translate-x-[0.4375rem] rotate-45 border-2 bg-paper transition-colors duration-500 sm:top-[3.4rem] md:left-[12rem]",
                  isActive
                    ? `${chapter.dot} border-transparent`
                    : "border-rule-2",
                ].join(" ")}
              />

              <div className="md:pr-10 md:text-right">
                {/* reference key — matches the bar labels in Fig. 02 */}
                <p className="t-num mb-2.5 text-[0.8125rem] text-blue-600 md:mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                {/* compact single line on mobile, stacked column from md */}
                <div className="flex flex-wrap items-baseline gap-x-2.5 md:block">
                  <p className="t-num text-[0.9375rem] text-ink">
                    {role.start}
                  </p>
                  <span aria-hidden className="t-meta text-ink-3 md:hidden">
                    —
                  </span>
                  <p className="t-meta text-ink-3 md:mt-1.5">{role.end}</p>
                  <span aria-hidden className="t-meta text-ink-3 md:hidden">
                    ·
                  </span>
                  <p className="t-meta text-ink-3 md:mt-4">{role.span}</p>
                </div>
                <p
                  className={`t-meta mt-2.5 md:mt-4 ${isActive ? chapter.text : "text-ink-3"} transition-colors duration-500`}
                >
                  {chapter.label}
                </p>
              </div>

              <div className="mt-6 md:mt-0 md:pl-10">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="wdth-wide text-[1.75rem] leading-none font-extrabold tracking-[-0.03em] text-ink sm:text-[2.125rem]">
                    {role.org}
                  </h3>
                  <span className="t-meta text-ink-3">{role.place}</span>
                </div>
                <p className="mt-3 text-[1.0625rem] font-semibold text-blue-700">
                  {role.title}
                </p>
                <p className="mt-4 max-w-[56ch] text-[1.0625rem] leading-relaxed text-ink-2">
                  {role.summary}
                </p>

                <ul className="mt-7 space-y-0">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-4 border-t border-rule py-3.5 last:border-b"
                    >
                      <Tick
                        variant="check"
                        className="mt-1 size-4 shrink-0 text-honey-500"
                      />
                      <span className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-2">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

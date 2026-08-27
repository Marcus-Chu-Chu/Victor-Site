"use client";

import { useEffect, useRef, useState } from "react";

import { Tick } from "@/components/tick";

/**
 * Contact row with a copy control. Falls back to a plain link if the
 * clipboard is unavailable — the value is always selectable either way.
 */
export function CopyField({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    const flash = () => {
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    };

    try {
      await navigator.clipboard.writeText(value);
      flash();
      return;
    } catch {
      /* fall through to the legacy path */
    }

    try {
      const scratch = document.createElement("textarea");
      scratch.value = value;
      scratch.setAttribute("readonly", "");
      scratch.style.position = "fixed";
      scratch.style.opacity = "0";
      document.body.appendChild(scratch);
      scratch.select();
      document.execCommand("copy");
      document.body.removeChild(scratch);
      flash();
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-rule py-6 last:border-b">
      <div className="min-w-0">
        <p className="t-meta text-ink-3">{label}</p>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="link-draw mt-2 block truncate text-[1.125rem] font-semibold text-ink sm:text-[1.375rem]"
        >
          {value}
        </a>
      </div>

      <button
        type="button"
        onClick={copy}
        className="t-meta flex shrink-0 items-center gap-2 border border-rule-2 px-3.5 py-2.5 text-ink-2 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
      >
        {copied ? (
          <>
            <Tick variant="check" className="size-3.5" />
            Copied
          </>
        ) : (
          <>Copy</>
        )}
        <span className="sr-only">{label}</span>
      </button>
    </div>
  );
}

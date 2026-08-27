type TickVariant = "check" | "footed" | "traced" | "crossref";

/**
 * Audit tick marks — the site's ornament.
 * Drawn the way they get inked onto a workpaper: fast, slightly off-axis.
 */
const paths: Record<TickVariant, string> = {
  // verified
  check: "M3 11.4 L7.6 16.2 L17.2 4.3",
  // footed (column added down)
  footed: "M4.2 3.6 L4.2 16.4 L16.4 16.4",
  // traced to supporting documentation
  traced: "M10 3.4 L17.4 16.6 L2.6 16.6 Z",
  // cross-referenced
  crossref: "M15.6 3.6 C6.2 5.2 6.2 14.8 15.6 16.4",
};

export function Tick({
  variant = "check",
  className = "",
}: {
  variant?: TickVariant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={className}
      stroke="currentColor"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[variant]} />
    </svg>
  );
}

/** Small directional arrow used on links and buttons. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={className}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 10h13M11 4.5 16.5 10 11 15.5" />
    </svg>
  );
}

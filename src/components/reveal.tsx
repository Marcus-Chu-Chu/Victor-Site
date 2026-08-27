import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in ms. */
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

/**
 * Server component. Applies the reveal class and stagger delay; the actual
 * in-view flip is driven by MotionProvider. Renders fully visible if JS never
 * runs — the "from" state only exists under .motion-ready.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}: RevealProps) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Line-by-line mask reveal for display headings. */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={`reveal-mask ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <span>{children}</span>
    </span>
  );
}

/** Hairline that draws itself in from the left. */
export function DrawRule({
  delay = 0,
  className = "",
  tone = "bg-rule",
}: {
  delay?: number;
  className?: string;
  tone?: string;
}) {
  return (
    <span
      aria-hidden
      className={`reveal-rule block h-px w-full ${tone} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    />
  );
}

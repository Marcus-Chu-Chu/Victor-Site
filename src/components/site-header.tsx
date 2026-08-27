"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { person } from "@/lib/profile";

const nav = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    // The panel covers the page, so take everything behind it out of the tab
    // order and the accessibility tree while it is open.
    const behind = [
      document.getElementById("main"),
      document.querySelector("footer"),
    ].filter(Boolean) as HTMLElement[];
    behind.forEach((el) => el.setAttribute("inert", ""));

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      behind.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={[
        "sticky top-0 z-30 border-b bg-paper transition-[border-color,box-shadow] duration-500",
        scrolled
          ? "border-rule shadow-[0_1px_24px_-12px_oklch(0.24_0.095_262_/_0.5)]"
          : "border-transparent shadow-none",
      ].join(" ")}
    >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${person.name} — home`}
        >
          <span
            aria-hidden
            className="t-num grid size-9 place-items-center bg-blue-600 text-[0.8125rem] leading-none text-paper transition-colors duration-400 group-hover:bg-ink"
          >
            {person.initials}
          </span>
          <span className="flex flex-col leading-none">
            <span className="wdth-wide text-[0.9375rem] font-bold tracking-[-0.015em]">
              {person.name}
            </span>
            <span className="t-meta mt-1 text-ink-3">{person.status}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "t-meta relative px-3 py-2 transition-colors duration-300",
                  active ? "text-ink" : "text-ink-3 hover:text-ink",
                ].join(" ")}
              >
                {item.label}
                <span
                  aria-hidden
                  className={[
                    "absolute inset-x-3 bottom-0 h-[2px] origin-left bg-honey-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    active ? "scale-x-100" : "scale-x-0",
                  ].join(" ")}
                />
              </Link>
            );
          })}
          <Link href="/contact" className="btn ml-4 !px-5 !py-3">
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="t-meta flex items-center gap-2 border border-rule-2 px-3 py-2.5 md:hidden"
        >
          <span className="grid gap-[3px]" aria-hidden>
            <span
              className={[
                "block h-[1.5px] w-4 bg-ink transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "translate-y-[4.5px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[1.5px] w-4 bg-ink transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[1.5px] w-4 bg-ink transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "-translate-y-[4.5px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 border-t border-rule bg-paper md:hidden"
      >
        <div className="shell flex h-full flex-col justify-between py-8">
          <nav aria-label="Primary mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="group flex items-baseline justify-between border-b border-rule py-5"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span
                  className={[
                    "t-title !text-[2rem]",
                    isActive(item.href) ? "text-blue-700" : "text-ink",
                  ].join(" ")}
                >
                  {item.label}
                </span>
                <span className="t-meta text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a href={`mailto:${person.email}`} className="btn justify-center">
              {person.email}
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost justify-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

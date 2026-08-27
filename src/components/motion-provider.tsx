"use client";

import { useEffect } from "react";

const SELECTOR = ".reveal, .reveal-mask, .reveal-rule";

/**
 * Drives the reveal system. The "hidden" state is set by the bootstrap script
 * in the document head; this component's only jobs are to flip elements in as
 * they enter the viewport and to guarantee everything ends up visible.
 */
export function MotionProvider() {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-motion-live", "");
    // If the bootstrap never ran, nothing was hidden — revealAll is a no-op.

    const revealAll = () => {
      root
        .querySelectorAll<HTMLElement>(SELECTOR)
        .forEach((el) => el.classList.add("is-in"));
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    const observeAll = () => {
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (!el.classList.contains("is-in")) observer.observe(el);
      });
    };

    observeAll();

    // Catch nodes added by client-side navigation or late hydration.
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    // Failsafe: nothing stays hidden, whatever the observer does.
    const failsafe = window.setTimeout(revealAll, 3500);

    const onReducedChange = () => {
      if (reduced.matches) revealAll();
    };
    reduced.addEventListener("change", onReducedChange);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.clearTimeout(failsafe);
      reduced.removeEventListener("change", onReducedChange);
    };
  }, []);

  return null;
}

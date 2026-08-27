import Link from "next/link";

import { Arrow } from "@/components/tick";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-wash">
      <div
        aria-hidden
        className="ledger-grid pointer-events-none absolute inset-0 opacity-70"
      />
      <div className="shell relative grid min-h-[70vh] place-items-center py-24">
        <div className="max-w-[46ch] text-center">
          <p className="t-num text-[4rem] leading-none text-blue-600">404</p>
          <h1 className="t-title mt-6">This reference does not tie out.</h1>
          <p className="t-lead mt-5">
            The page is not here. It may have been renamed, or the link picked
            up a typo somewhere along the way.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn">
              Back to the index
              <Arrow className="size-3.5" />
            </Link>
            <Link href="/journey" className="btn btn-ghost">
              Career journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

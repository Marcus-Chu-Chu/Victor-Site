import type { Metadata } from "next";

import { CopyField } from "@/components/copy-field";
import { Reveal } from "@/components/reveal";
import { PageIntro, Section } from "@/components/section";
import { Tick } from "@/components/tick";
import { person } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Victor Starkov — international tax and accounting, Greater Chicago Area. Email, phone, and LinkedIn.",
};

const fits = [
  "International or federal tax roles with a real data component",
  "Tax technology, reporting, and finance transformation teams",
  "Anything where AI workflows are being pointed at professional-services work",
  "Conversations with students weighing community college into a Big Four track",
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        slug="Contact"
        locator={`${person.location} · CT (UTC−6)`}
        title={
          <>
            Say what you are{" "}
            <span className="text-blue-600">building</span>.
          </>
        }
        lead={
          <>
            I read everything that arrives and answer within a day or two.
            Recruiters, hiring managers, and students all welcome — a short note
            about the actual problem beats a formal introduction every time.
          </>
        }
      />

      <Section>
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <CopyField
                  label="Email"
                  value={person.email}
                  href={`mailto:${person.email}`}
                />
              </Reveal>
              <Reveal delay={60}>
                <CopyField
                  label="Phone"
                  value={person.phone}
                  href={`tel:${person.phoneHref}`}
                />
              </Reveal>
              <Reveal delay={120}>
                <CopyField
                  label="LinkedIn"
                  value={person.linkedinLabel}
                  href={person.linkedin}
                  external
                />
              </Reveal>

              <Reveal delay={180} className="mt-12 flex flex-wrap gap-3">
                <a
                  href={`mailto:${person.email}?subject=${encodeURIComponent(
                    "Hello Victor",
                  )}&body=${encodeURIComponent(
                    "Hi Victor,\n\nI came across your site. Here is what we are working on:\n\n",
                  )}`}
                  className="btn"
                >
                  Open a pre-filled email
                </a>
                <a
                  href="/victor-starkov-linkedin-profile.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  Profile (PDF)
                </a>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div className="plate bg-wash">
                <div className="border-b border-rule px-6 py-4">
                  <span className="t-meta text-ink-2">Good fits</span>
                </div>
                <ul className="px-6 py-2">
                  {fits.map((fit) => (
                    <li
                      key={fit}
                      className="flex gap-4 border-b border-rule py-4 last:border-b-0"
                    >
                      <Tick
                        variant="check"
                        className="mt-0.5 size-4 shrink-0 text-honey-500"
                      />
                      <span className="text-[0.9375rem] leading-relaxed text-ink-2">
                        {fit}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="hatch border-t border-rule px-6 py-5">
                  <p className="t-meta text-ink-3">Current status</p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink">
                    MAcc through May 2027, CPA exams in progress, returning to
                    PwC after graduation. Open to conversations before then.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

/**
 * Single source of truth for site content.
 * Sourced from Victor Starkov's LinkedIn profile export (Profile.pdf).
 */

export const person = {
  name: "Victor Starkov",
  initials: "VS",
  headline: "Tax, data, and the systems in between",
  role: "Incoming International Tax Associate, PwC",
  location: "Greater Chicago Area",
  email: "itsvictor55@gmail.com",
  phone: "630-277-1455",
  phoneHref: "+16302771455",
  linkedin: "https://www.linkedin.com/in/victor-starkov",
  linkedinLabel: "linkedin.com/in/victor-starkov",
  status: "MAcc ’27 · CPA Candidate",
} as const;

export const statusLine = [
  { label: "Now", value: "MAcc, Gies College of Business" },
  { label: "Next", value: "Tax Associate, PwC" },
  { label: "Track", value: "CPA Candidate" },
  { label: "Based", value: "Chicago, IL" },
] as const;

/** Hairline instrument strip under the hero. */
export const instruments = [
  "International tax",
  "Executive dashboards",
  "Agentic AI workflows",
  "Excel Expert (MOS)",
  "Section 174",
  "Sales & use tax",
  "Prompt engineering",
  "Bank reconciliation",
  "Data storytelling",
  "Knowledge management",
  "Payroll tax",
  "QuickBooks",
] as const;

/* ------------------------------------------------------------------ */
/* Career journey                                                      */
/* ------------------------------------------------------------------ */

export type Chapter = "practice" | "industry" | "foundation";

export const chapters: Record<
  Chapter,
  { label: string; note: string; dot: string; text: string; tint: string }
> = {
  practice: {
    label: "Public accounting",
    note: "Big Four tax practice — where the career is headed.",
    dot: "bg-blue-500",
    text: "text-blue-700",
    tint: "bg-blue-50",
  },
  industry: {
    label: "Industry & compliance",
    note: "In-house tax operations at scale.",
    dot: "bg-violet-500",
    text: "text-violet-700",
    tint: "bg-violet-500/8",
  },
  foundation: {
    label: "Foundation",
    note: "Books, payroll, people, and pressure.",
    dot: "bg-honey-500",
    text: "text-honey-700",
    tint: "bg-honey-100",
  },
};

export type Role = {
  org: string;
  title: string;
  start: string;
  end: string;
  span: string;
  place: string;
  chapter: Chapter;
  summary: string;
  points: string[];
};

export const roles: Role[] = [
  {
    org: "PwC",
    title: "International Tax Intern",
    start: "Jun 2026",
    end: "Aug 2026",
    span: "3 months",
    place: "Chicago, IL",
    chapter: "practice",
    summary:
      "Turned scattered engagement data into decision-ready reporting for an international tax practice — and returned with a full-time offer.",
    points: [
      "Built an interactive executive dashboard that transformed fragmented project data into actionable business insights.",
      "Applied AI-driven research and analysis techniques to generate executive-ready insights from large, unstructured datasets.",
      "Developed reporting and knowledge-management solutions that improved decision-making across multiple concurrent projects.",
      "Partnered with professionals across several service areas to support strategic transformation initiatives and deliver integrated solutions to complex business problems.",
      "Designed organizational models and strategic visualizations that simplified complex business structures for executive and stakeholder audiences.",
    ],
  },
  {
    org: "PwC",
    title: "Start Tax Intern",
    start: "Jun 2025",
    end: "Jul 2025",
    span: "2 months",
    place: "Chicago, IL",
    chapter: "practice",
    summary:
      "A first pass through Big Four consulting: user data in, a product recommendation out, in front of a room of partners.",
    points: [
      "Co-led a team presentation analyzing youth engagement data, proposing a feature concept projected to improve client retention by 20%.",
      "Synthesized insights from over 5,000 user interactions to recommend UX improvements, enhancing accessibility and relevance for underserved audiences.",
      "Initiated mentorship and shadowing across multiple service lines, gaining exposure to global tax strategy and real-world consulting services.",
      "Presented a capstone reflection on growth in time management, communication, and AI fluency.",
    ],
  },
  {
    org: "Cars Commerce",
    title: "Tax Accounting Intern",
    start: "Jun 2024",
    end: "Aug 2024",
    span: "3 months",
    place: "Chicago, IL",
    chapter: "industry",
    summary:
      "Owned recurring compliance for two legal entities and worked on a method change that moved real cash.",
    points: [
      "Projected and processed quarterly estimated payments with accuracy and timeliness.",
      "Assisted in a Section 174 accounting method change, reducing cash taxes paid for the current year.",
      "Managed over 30 monthly sales and use tax payments across two separate entities, maintaining compliance with state and local regulations.",
      "Gained proficiency in a range of control methods, improving the accuracy and reliability of financial data.",
    ],
  },
  {
    org: "Geneva Park District",
    title: "Kids' Zone Leader",
    start: "Oct 2023",
    end: "Jun 2024",
    span: "9 months",
    place: "Geneva, IL",
    chapter: "foundation",
    summary:
      "Ran a K–5 after-school program and re-cut its operations until ten more kids could get off the waitlist.",
    points: [
      "Coordinated and led a K–5 after-school program, organizing activities across a wide range of student interests.",
      "Established communication channels with school staff, parents, and students, keeping information moving cleanly between them.",
      "Implemented efficiency improvements in program operations, enabling an additional 10 children from the waitlist to participate.",
    ],
  },
  {
    org: "Naughton & Company",
    title: "Accounting Intern",
    start: "Jun 2023",
    end: "Aug 2023",
    span: "3 months",
    place: "St. Charles, IL",
    chapter: "foundation",
    summary:
      "First accounting seat: client books, reconciliations, and payroll tax for a small-firm client roster.",
    points: [
      "Handled client files and conducted monthly bank reconciliations for accurate financial record-keeping.",
      "Processed payroll taxes for client employees in line with tax law and regulation.",
      "Took on efficiency improvement projects and built hands-on experience with QuickBooks.",
    ],
  },
  {
    org: "Chick-fil-A Restaurants",
    title: "Team Member",
    start: "May 2021",
    end: "Aug 2021",
    span: "4 months",
    place: "Batavia, IL",
    chapter: "foundation",
    summary:
      "High-volume service work — the original lesson in throughput, standards, and staying calm at peak.",
    points: [
      "Managed high-volume order demand while holding to strict quality standards.",
      "Handled customer inquiries and complaints promptly and professionally.",
      "Worked as part of a team keeping restaurant operations efficient during peak service.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export type Education = {
  school: string;
  credential: string;
  detail?: string;
  start: string;
  end: string;
  current?: boolean;
};

export const education: Education[] = [
  {
    school: "Gies College of Business, University of Illinois Urbana-Champaign",
    credential: "Master of Accounting Science",
    detail: "MAcc — CPA licensure track",
    start: "Aug 2026",
    end: "May 2027",
    current: true,
  },
  {
    school: "Gies College of Business, University of Illinois Urbana-Champaign",
    credential: "B.S. Accountancy",
    detail: "Highest honors · James Scholar",
    start: "Aug 2024",
    end: "May 2026",
  },
  {
    school: "Elgin Community College",
    credential: "A.A. Accounting",
    detail: "Phi Theta Kappa Honor Society",
    start: "Aug 2022",
    end: "May 2024",
  },
];

/* ------------------------------------------------------------------ */
/* Evidence — the audit schedule                                       */
/* ------------------------------------------------------------------ */

export type EvidenceRow = {
  ref: string;
  claim: string;
  source: string;
};

export const evidence: EvidenceRow[] = [
  {
    ref: "A-1",
    claim: "Fragmented engagement data consolidated into one interactive executive dashboard",
    source: "PwC — International Tax",
  },
  {
    ref: "A-2",
    claim: "Section 174 method change cut current-year cash taxes paid",
    source: "Cars Commerce — Tax",
  },
  {
    ref: "A-3",
    claim: "30+ monthly sales and use tax payments filed across two entities",
    source: "Cars Commerce — Tax",
  },
  {
    ref: "A-4",
    claim: "5,000+ user interactions synthesized into accessibility and UX recommendations",
    source: "PwC — Start Program",
  },
  {
    ref: "A-5",
    claim: "Feature concept projected to lift client retention 20%, presented to practice leadership",
    source: "PwC — Start Program",
  },
  {
    ref: "A-6",
    claim: "60+ businesses supported across four finance and tax teams",
    source: "Cumulative, 2023–2026",
  },
  {
    ref: "A-7",
    claim: "Operational redesign opened 10 additional program seats from the waitlist",
    source: "Geneva Park District",
  },
];

/* ------------------------------------------------------------------ */
/* Capabilities                                                        */
/* ------------------------------------------------------------------ */

export const capabilities = [
  {
    n: "01",
    title: "Tax that holds up",
    body: "Federal and multistate compliance done the unglamorous way: estimated payments projected on time, sales and use filings reconciled entity by entity, payroll tax processed to the regulation. Method changes like Section 174 handled with the cash effect modeled before anyone signs.",
    tags: ["International tax", "Sales & use", "Payroll tax", "Sec. 174"],
  },
  {
    n: "02",
    title: "Data that answers a question",
    body: "Most finance reporting describes the past accurately and helps no one. I build the other kind — dashboards and models where a partner can open one screen and know what to do next. Excel to the certified limit, then past it when the problem is bigger than a grid.",
    tags: ["Executive dashboards", "Excel Expert (MOS)", "Data modeling", "Reporting design"],
  },
  {
    n: "03",
    title: "AI put to real work",
    body: "Not demos. Agentic workflows and prompt systems pointed at the parts of tax work that are genuinely mechanical — research synthesis, unstructured document review, knowledge capture — so the judgment calls get the hours they deserve.",
    tags: ["Agentic AI", "Prompt engineering", "Claude Code", "Knowledge management"],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Toolkit                                                             */
/* ------------------------------------------------------------------ */

export const toolkit = [
  {
    group: "Tax & accounting",
    accent: "blue" as const,
    items: [
      "International tax",
      "Federal & multistate compliance",
      "Sales & use tax",
      "Payroll tax",
      "Estimated payments",
      "Section 174",
      "Bank reconciliation",
      "Internal controls",
      "QuickBooks",
    ],
  },
  {
    group: "Data & systems",
    accent: "violet" as const,
    items: [
      "Executive dashboards",
      "Excel (MOS Expert)",
      "Financial modeling",
      "Reporting design",
      "Data visualization",
      "Knowledge management",
      "Process redesign",
      "Org & entity modeling",
    ],
  },
  {
    group: "AI & communication",
    accent: "honey" as const,
    items: [
      "Prompt engineering",
      "Agentic AI development",
      "Claude Code",
      "Research synthesis",
      "Executive presentation",
      "Stakeholder briefing",
      "Cross-functional teaming",
      "Bilingual (State Seal)",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Credentials                                                         */
/* ------------------------------------------------------------------ */

export const certifications = [
  { name: "Microsoft Office Specialist: Excel Expert", detail: "Office 2019" },
  { name: "Microsoft Office Specialist: Excel Associate", detail: "Office 2019" },
  { name: "Critical Thinking for Better Judgment and Decision-Making", detail: "" },
  { name: "Microsoft Excel 2019 — Advanced", detail: "" },
  { name: "Microsoft Excel 2019 — Introductory", detail: "" },
];

export const honors = [
  { name: "James Scholar", detail: "Gies College of Business" },
  { name: "Highest honors", detail: "B.S. Accountancy" },
  { name: "Phi Theta Kappa Honor Society", detail: "" },
  { name: "All-Illinois Academic Team", detail: "Member" },
  { name: "All-USA Academic Team", detail: "Nominee" },
  { name: "State Seal of Biliteracy", detail: "State of Illinois" },
];

/* ------------------------------------------------------------------ */
/* Portfolio — case studies in production                              */
/* ------------------------------------------------------------------ */

export type CaseStatus = "drafting" | "in-review" | "planned";

export const caseStudies: {
  ref: string;
  title: string;
  context: string;
  abstract: string;
  status: CaseStatus;
  tags: string[];
}[] = [
  {
    ref: "CS-01",
    title: "One screen for a fragmented practice",
    context: "PwC — International Tax",
    abstract:
      "Engagement data lived in a dozen places and agreed with itself in none of them. This is the story of consolidating it into a single interactive dashboard, what had to be reconciled first, and which decisions actually changed once leadership could see the whole picture.",
    status: "drafting",
    tags: ["Dashboard design", "Data reconciliation", "Executive reporting"],
  },
  {
    ref: "CS-02",
    title: "A Section 174 method change, start to finish",
    context: "Cars Commerce — Tax",
    abstract:
      "Walking the change through from the initial read of the rules to the modeled cash effect and the filing itself — including the parts of the analysis that are easy to get quietly wrong.",
    status: "planned",
    tags: ["Federal tax", "Method change", "Cash modeling"],
  },
  {
    ref: "CS-03",
    title: "Agents on the mechanical half of tax research",
    context: "Independent build",
    abstract:
      "A working teardown of the agentic workflows I use for research synthesis and unstructured document review: what they reliably handle, where they fail, and the review gates that make them safe to point at a client deliverable.",
    status: "drafting",
    tags: ["Agentic AI", "Prompt engineering", "Claude Code"],
  },
  {
    ref: "CS-04",
    title: "Compliance for two entities without a miss",
    context: "Cars Commerce — Tax",
    abstract:
      "The control design behind 30+ monthly sales and use tax payments across two legal entities — calendars, tie-outs, and the checks that catch a problem before a jurisdiction does.",
    status: "planned",
    tags: ["Sales & use tax", "Controls", "Process design"],
  },
];

export const caseStatusLabel: Record<CaseStatus, string> = {
  drafting: "Drafting",
  "in-review": "In review",
  planned: "Planned",
};

/* ------------------------------------------------------------------ */
/* Working principles                                                  */
/* ------------------------------------------------------------------ */

export const principles = [
  {
    title: "Tie it out before you tell the story",
    body: "A slide built on numbers that do not reconcile is worse than no slide. The reconciliation comes first, every time, and it is not the interesting part — which is exactly why people skip it.",
  },
  {
    title: "Automate the mechanical, never the judgment",
    body: "Research synthesis, document review, and knowledge capture are worth handing to a system. Deciding what a rule means for a client is not. Knowing where that line sits is most of the skill.",
  },
  {
    title: "Write for the person who has four minutes",
    body: "Partners and controllers read on the way to something else. If the finding is not legible in the first sentence and defensible in the tenth, the work has not landed yet.",
  },
  {
    title: "Leave the process better than the deliverable",
    body: "The file gets used once. The way it was produced gets used every quarter after that, by someone who was not in the room.",
  },
];

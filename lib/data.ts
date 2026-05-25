export const nav = {
  brand: "immohassan",
  links: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#why" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  headline:
    "I build AI-powered automation systems and scalable digital infrastructure.",
  subtitle:
    "Muhammad Hassan — Process Automation Engineer & Full-Stack Developer. PHP / Laravel, Make.com, n8n, Zapier, Google Apps Script.",
  tagline:
    "Turning manual operations into scalable systems — so your business runs while you sleep.",
  cta: { label: "Book a Free 30-Min Systems Audit", href: "#contact" },
  location: "Lahore, Pakistan · Remote-first",
  availability: "Available · 2026",
};

export type Project = {
  title: string;
  client?: string;
  url?: string;
  role: string;
  category: "Automation" | "Full-Stack" | "Integration";
  stack: string[];
  description: string;
  outcomes: string[];
};

export const work: Project[] = [
  {
    title: "Agentic Social Media Workflow",
    role: "Automation Architect",
    category: "Automation",
    stack: ["Make.com", "Google Sheets", "OpenAI", "Anthropic", "WordPress"],
    description:
      "Multi-channel content engine: AI generates posts, Google Sheets drives the schedule, Make.com publishes to Instagram, X, Facebook, and WordPress on a cadence.",
    outcomes: [
      "Dynamic post generation with OpenAI + Claude",
      "Cross-platform publishing without manual touch",
      "Consistent brand voice across 4+ channels",
    ],
  },
  {
    title: "Total Order Processing Automation",
    role: "RPA Developer",
    category: "Automation",
    stack: [
      "Make.com",
      "Google Apps Script",
      "Trellinator",
      "QuickBooks",
      "Pipedrive",
    ],
    description:
      "End-to-end order pipeline replacing a manual workflow. Trello used as the CRM surface; Make.com + GAS handle invoicing, back-orders, and deal creation. Integrated with QuickBooks and Pipedrive for finance + sales.",
    outcomes: [
      "Manual → 90% automated with 95% success rate",
      "Trello-driven CRM across the full order lifecycle",
      "Synced QuickBooks and Pipedrive in one flow",
    ],
  },
  {
    title: "Automated Hiring Pipeline",
    role: "Automation Developer",
    category: "Automation",
    stack: ["ClickUp", "Make.com", "Outlook", "CRM"],
    description:
      "Recruitment pipeline built in ClickUp + Make.com. Candidates evaluated against rules, auto-passed or rejected, personalized emails sent on outcome, hires pushed into the CRM.",
    outcomes: [
      "Rules-based candidate scoring",
      "Outcome-triggered personalized email",
      "Auto-enrollment of hires into CRM",
    ],
  },
  {
    title: "Eyeon Inspections — Property Platform",
    client: "eyeon.com.au",
    url: "https://eyeon.com.au",
    role: "Full-Stack / Legacy Modernization",
    category: "Full-Stack",
    stack: ["Custom PHP", "PL/SQL", "Docker", "Linux"],
    description:
      "Modernized a legacy custom-PHP property inspection platform. Rebuilt the admin panel, restructured the database, added new models, controllers and back-end logic; shipped key admin tools and frontend screens.",
    outcomes: [
      "Full admin panel rebuild on a legacy core",
      "Database restructured and re-modeled",
      "Static-to-semi-dynamic migration without breaking prod",
    ],
  },
  {
    title: "Momeni Carpets — API Backend",
    client: "momeni.com",
    url: "https://momeni.com",
    role: "Laravel Developer",
    category: "Integration",
    stack: ["Laravel", "PHP", "MySQL", "REST APIs"],
    description:
      "Worked the legacy Laravel backend powering momeni.com. Built site pages and wired third-party APIs into the existing stack, keeping data flow clean between external services and the legacy core.",
    outcomes: [
      "Third-party API integrations on a legacy backend",
      "New site pages on the existing Laravel stack",
      "Improved data-flow reliability across services",
    ],
  },
  {
    title: "LR Home — UI & API Integration",
    client: "lrhome.us",
    url: "https://lrhome.us",
    role: "Full-Stack Developer",
    category: "Full-Stack",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    description:
      "Front-end implementation and third-party API integration for LR Home. Lifted the UI quality while wiring external services through the legacy Laravel backend.",
    outcomes: [
      "UI implementation against existing CMS data",
      "External API integrations through the legacy stack",
      "Improved frontend responsiveness and reliability",
    ],
  },
  {
    title: "Ashtex — Internal Tools & Admin Panels",
    client: "Ashtex Solutions",
    role: "Back-End / Full-Stack Developer",
    category: "Full-Stack",
    stack: ["Laravel", "PHP", "MySQL", "jQuery", "Bootstrap"],
    description:
      "Upgraded internal admin panels and converted semi-dynamic sites to fully dynamic. API handling on the back-end, occasional front-end work, multi-client codebases.",
    outcomes: [
      "Admin panel upgrades across multiple clients",
      "Static → fully dynamic migrations",
      "API layer hardening on legacy Laravel apps",
    ],
  },
];

export const whyMe = {
  frontImage: "/images/portrait.jpg",
  backImage: "/images/mountaineer.jpg",
  lead: [
    "Systems engineer by profession.",
    "Mountaineer by instinct.",
  ],
  pullQuote: "Oh — your guy also climbs mountains.",
  body: [
    "Most developers build what you ask for. I engineer what you actually need.",
    "Mountaineering taught me how to operate under pressure, plan for failure, and execute when conditions aren't perfect. I bring the same discipline to every system I build — one that has to perform reliably, at scale, when it counts.",
  ],
};

export const howIBuild = [
  {
    title: "Understand the workflow",
    description: "Map every step, owner, and dependency.",
  },
  {
    title: "Identify friction points",
    description: "Find where time, money, or reliability is being lost.",
  },
  {
    title: "Design automation architecture",
    description: "Choose the right tools for the job, not the trendiest.",
  },
  {
    title: "Build integrations",
    description: "APIs, no-code, full-stack, whatever gets it done cleanly.",
  },
  {
    title: "Replace fragility with scalable systems",
    description: "Hand off something that runs without you.",
  },
];

export const services = [
  {
    icon: "Bot",
    title: "AI & Workflow Automation",
    description:
      "Make.com, n8n, Zapier, Google Apps Script. Multi-channel content engines, intake workflows, RPA pipelines that run 24/7.",
  },
  {
    icon: "LayoutGrid",
    title: "Full-Stack Development",
    description:
      "PHP / Laravel back-ends, admin panels, REST APIs, MySQL. Legacy modernization and new builds with Tailwind, Livewire, and Vue on the front.",
  },
  {
    icon: "Workflow",
    title: "Process & Systems Engineering",
    description:
      "CRM integrations (Pipedrive, HubSpot, ClickUp, Trello), payment integrations, internal tooling — clean, documented systems.",
  },
];

export const testimonials = [
  {
    quote:
      "He didn't just automate our process — he redesigned it. We went from 12 manual steps to 3, and the system hasn't missed a beat in six months.",
    attribution: "Operations Lead, Healthcare Client",
  },
  {
    quote:
      "Most freelancers deliver code. He delivered a system that actually runs our business.",
    attribution: "Founder, E-commerce Brand",
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Ashtex Solutions",
    role: "RPA Developer · Full-Stack / Laravel Developer",
    period: "Multi-year",
    description:
      "Automated business workflows across Trello, ClickUp, JotForms, Google Sheets/Docs, CRMs, APIs, and QuickBooks. Upgraded admin panels, converted semi-dynamic sites to fully dynamic, handled API integration, occasional front-end work.",
  },
  {
    company: "Freelance",
    role: "Process Automation Developer · Automation Consultant",
    period: "Ongoing",
    description:
      "Advising businesses on workflow streamlining and operational efficiency. Designing and implementing automation frameworks with Make.com, Zapier, GAS, n8n, and CRM integrations to replace manual tasks and optimize processes end-to-end.",
  },
];

export const education = {
  degree: "Bachelor of Business and Information Technology (BBIT)",
  school: "University of the Punjab, Lahore",
  period: "Dec 2021 — Jun 2025",
};

export const techStack = [
  {
    layer: "AI & LLMs",
    tools: ["OpenAI", "Claude", "Gemini", "Vertex AI", "Anthropic", "Vibe Coding"],
  },
  {
    layer: "Automation",
    tools: ["Make.com", "Zapier", "n8n", "Google Apps Script", "Airtable", "Trellinator"],
  },
  {
    layer: "Backend",
    tools: ["Laravel", "PHP", "Node.js", "MySQL", "PL/SQL"],
  },
  {
    layer: "Frontend",
    tools: ["Next.js", "React", "Tailwind", "Livewire", "Vue.js", "jQuery"],
  },
  {
    layer: "Systems & DevOps",
    tools: ["Docker", "Linux", "Shell", "Git", "GitHub"],
  },
  {
    layer: "Integrations",
    tools: [
      "REST APIs",
      "QuickBooks",
      "Pipedrive",
      "HubSpot",
      "ClickUp",
      "Trello",
      "Stripe",
      "Shopify",
      "WordPress",
    ],
  },
];

export const personalEdge = {
  body: [
    "Outside engineering, I train in high-altitude environments — where planning and execution decide survival.",
    "That context changes how I work. Deadlines feel lighter when you've navigated a whiteout at 5,000 meters. Complexity feels manageable when you've broken a summit into one step at a time.",
    "I don't just build systems. I build systems that hold.",
  ],
};

export const stats = [
  { value: "7+", label: "Production systems shipped" },
  { value: "90%", label: "Manual → automated workflow" },
  { value: "95%", label: "Order pipeline success rate" },
  { value: "24/7", label: "Always-on automation" },
];

export type Package = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const packages: Package[] = [
  {
    name: "Audit",
    price: "Free",
    cadence: "30-min call",
    blurb: "Map your workflow, find the friction, leave with a plan.",
    features: [
      "Process walk-through",
      "Friction map + ROI estimate",
      "Tool + stack recommendation",
      "No commitment",
    ],
    cta: "Book audit",
  },
  {
    name: "Workflow",
    price: "From $1.8k",
    cadence: "1–2 week sprint",
    blurb: "A single automation, scoped, built, documented, and handed off.",
    features: [
      "One end-to-end workflow",
      "Make.com / n8n / GAS build",
      "API + CRM integrations",
      "Documentation + Loom handover",
    ],
    highlighted: true,
    cta: "Start a sprint",
  },
  {
    name: "Systems",
    price: "From $5k",
    cadence: "monthly retainer",
    blurb: "Ongoing engineering — full-stack platforms, multiple automations, you stay focused.",
    features: [
      "Full-stack builds (Laravel / Next)",
      "Multiple automation flows",
      "CRM + payment integrations",
      "Priority maintenance",
    ],
    cta: "Talk retainer",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What kinds of projects do you take?",
    a: "Process automation, AI agents, CRM workflows, and full-stack web platforms (Laravel + Next.js). If it's manual, repetitive, or fragile — it's a candidate.",
  },
  {
    q: "Make.com, n8n, or Zapier — which one do you pick?",
    a: "Whichever fits the workflow. Make.com for visual scenarios with rich app coverage, n8n when self-hosting and custom logic matter, Zapier for simple triggers with non-technical owners.",
  },
  {
    q: "Do you work with existing developers / teams?",
    a: "Yes. I've shipped on legacy custom-PHP and Laravel codebases (Eyeon, Momeni, LR Home) alongside in-house teams, and integrate into existing CRMs (Pipedrive, HubSpot, ClickUp, Trello).",
  },
  {
    q: "How do engagements start?",
    a: "Free 30-minute audit. We walk the workflow, identify friction, and you leave with a scoped plan — even if you don't hire me.",
  },
  {
    q: "Where are you based?",
    a: "Lahore, Pakistan. Remote-first. Comfortable across timezones — most clients are in EU and North America.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. The Systems retainer covers maintenance, new builds, and priority response. Sprint engagements include 2 weeks of post-launch support by default.",
  },
];

export const contact = {
  heading: "Let's build something that scales.",
  body:
    "Whether you have a fully-formed spec or just a problem you're tired of working around — I can help you figure out the right system.",
  email: "immohassan06@gmail.com",
  phone: "+92-341-6903128",
  links: [
    { label: "Email Me", href: "mailto:immohassan06@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/immohassan",
    },
    {
      label: "Upwork",
      href: "https://upwork.com/freelancers/~018a82456f59e5febf",
    },
    { label: "Fiverr", href: "https://www.fiverr.com/immohassan/" },
  ],
};

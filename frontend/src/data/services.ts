export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  techStack: string[];
  timeframe: string;
  iconName: "code" | "rocket" | "palette" | "zap" | "database" | "shield";
};

export const services: Service[] = [
  {
    id: "web-development",
    title: "Full-Stack Web Development",
    shortDescription:
      "Modern, ultra-fast web applications built with Next.js, React, TypeScript, and modern backend systems.",
    fullDescription:
      "We design and engineer bespoke web solutions from the ground up, prioritizing clean code, responsive layouts, scalability, and seamless user experiences.",
    deliverables: [
      "Custom responsive web application",
      "Robust TypeScript code architecture",
      "API & Database integrations",
      "Automated CI/CD deployment pipeline",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    timeframe: "3 - 8 Weeks",
    iconName: "code",
  },
  {
    id: "mvp-engineering",
    title: "SaaS MVP Engineering",
    shortDescription:
      "Turn your product idea into a market-ready MVP rapidly without sacrificing architectural foundations.",
    fullDescription:
      "We help startup founders and innovators translate product concepts into tested, production-grade applications with authentication, billing, and core workflows ready for day one.",
    deliverables: [
      "Rapid end-to-end MVP launch",
      "User authentication & authorization",
      "Stripe payment & subscription billing",
      "Admin telemetry and dashboard",
    ],
    techStack: ["Next.js", "PostgreSQL", "Supabase", "Stripe", "Prisma"],
    timeframe: "4 - 6 Weeks",
    iconName: "rocket",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Design Systems",
    shortDescription:
      "Crafting intuitive, accessible user interfaces and reusable component design systems.",
    fullDescription:
      "Great software begins with thoughtful design. We create comprehensive component libraries, interactive prototypes, and unified design tokens that scale effortlessly.",
    deliverables: [
      "High-fidelity Figma prototypes",
      "Atomic design system & tokens",
      "Tailwind component implementation",
      "Accessibility (WCAG 2.1 AA) compliance",
    ],
    techStack: ["Figma", "Tailwind CSS", "Design Tokens", "Radix UI"],
    timeframe: "2 - 4 Weeks",
    iconName: "palette",
  },
  {
    id: "performance-optimization",
    title: "Performance & SEO Optimization",
    shortDescription:
      "Transform slow websites into sub-second powerhouses with perfect Core Web Vitals and organic search visibility.",
    fullDescription:
      "We perform deep performance audits, eliminate bundle bloat, optimize rendering paths, and implement strategic metadata to guarantee top-tier search rankings and user retention.",
    deliverables: [
      "Comprehensive performance & bundle audit",
      "95+ Google Lighthouse scores across all metrics",
      "Optimized Core Web Vitals (LCP, INP, CLS)",
      "Structured schema & OpenGraph SEO setup",
    ],
    techStack: ["Lighthouse", "Edge Caching", "Asset Compression", "Schema.org"],
    timeframe: "1 - 2 Weeks",
    iconName: "zap",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Scope",
    description:
      "We dive deep into your requirements, target users, technical constraints, and project objectives to establish an exact roadmap.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "We create interface wireframes, establish system data models, and finalize design specs before writing code.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Bi-weekly iterative milestones with interactive staging previews so you can test features and provide feedback in real time.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Production deployment, DNS & SSL setup, monitoring instrumentation, plus 30 days of post-launch guarantee and maintenance.",
  },
];


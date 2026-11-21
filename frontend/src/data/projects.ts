// To add a project, add one entry to this list.

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

// TODO: replace these placeholders with real projects.
export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A responsive marketing website with a focus on speed and SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
  },
  {
    title: "Project Beta",
    description: "A dashboard for tracking tasks and team progress.",
    tags: ["React", "Node.js"],
    liveUrl: "https://example.com",
  },
  {
    title: "Project Gamma",
    description: "An e-commerce storefront with a clean, minimal checkout.",
    tags: ["Next.js", "Stripe"],
    repoUrl: "https://github.com/",
  },
];

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: "Available" | "Live" | "Beta" | "Coming Soon";
  features: string[];
  tags: string[];
  demoUrl?: string;
  docsUrl?: string;
  githubUrl?: string;
  pricing?: string;
};

export const products: Product[] = [
  {
    id: "ad-benny-associates",
    name: "A D Benny Associates Web Platform",
    tagline: "Comprehensive digital legal portal with dynamic CMS blog & media press coverage",
    description:
      "A complete, production-deployed web application engineered for modern legal consultancy and advocacy. Includes an interactive consultation inquiry workflow, practice area directory, Google Maps location integration, and a dynamic Firebase-backed admin portal for publishing blog insights and press coverage.",
    category: "Web Applications",
    status: "Available",
    features: [
      "Dynamic Firebase Firestore blog & legal insights with reader modals",
      "Interactive media gallery & press cuttings showcase with lightbox viewer",
      "Comprehensive practice area directory with consultation request engine",
      "Secure authenticated admin management dashboard for live content updates",
      "High-performance responsive design with Google Maps integration",
    ],
    tags: ["Web App", "Firebase", "Firestore", "Authentication", "Vercel"],
    demoUrl: "https://a-d-benny.vercel.app/",
    pricing: "Live Production App",
  },
];

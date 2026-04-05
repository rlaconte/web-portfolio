import type { Experience, Education } from "@/types";

export const experience: Experience[] = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    bullets: [
      "Led development of a customer-facing API serving 10M+ requests/day with 99.9% uptime.",
      "Reduced deployment time by 60% by migrating CI/CD pipeline to GitHub Actions.",
      "Mentored 3 junior engineers through code reviews and bi-weekly 1:1s.",
    ],
  },
  {
    company: "Startup XYZ",
    role: "Full-Stack Engineer",
    period: "2020 – 2022",
    bullets: [
      "Built and shipped the core product from 0 to 1 — a SaaS platform for inventory management.",
      "Designed the PostgreSQL schema and implemented row-level security with Supabase.",
      "Integrated third-party payment processing with Stripe, including webhook handling.",
    ],
  },
  {
    company: "Agency Co.",
    role: "Junior Developer",
    period: "2018 – 2020",
    bullets: [
      "Delivered 15+ client websites using React, Next.js, and headless CMS platforms.",
      "Improved Lighthouse performance scores from an average of 62 to 91 across the portfolio.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "State University",
    degree: "B.S. Computer Science",
    period: "2014 – 2018",
  },
];

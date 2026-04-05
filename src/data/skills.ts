import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Bash", category: "Languages" },

  // Backend & Infra
  { name: "Node.js", category: "Backend & Infra" },
  { name: "Express", category: "Backend & Infra" },
  { name: "PostgreSQL", category: "Backend & Infra" },
  { name: "Redis", category: "Backend & Infra" },
  { name: "gRPC", category: "Backend & Infra" },
  { name: "Prisma", category: "Backend & Infra" },

  // AI & Tooling
  { name: "Claude API", category: "AI & Tooling" },
  { name: "OpenAI API", category: "AI & Tooling" },
  { name: "LangChain", category: "AI & Tooling" },
  { name: "RAG", category: "AI & Tooling" },
  { name: "Prompt Engineering", category: "AI & Tooling" },

  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Vercel", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
];

export const skillCategories = [
  "Languages",
  "Backend & Infra",
  "AI & Tooling",
  "DevOps",
] as const;

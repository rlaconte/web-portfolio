import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "Go",         category: "Languages" },
  { name: "Python",     category: "Languages" },
  { name: "SQL",        category: "Languages" },

  // Frameworks
  { name: "Next.js",  category: "Frameworks" },
  { name: "React",    category: "Frameworks" },
  { name: "Node.js",  category: "Frameworks" },
  { name: "Express",  category: "Frameworks" },

  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "Redis",      category: "Databases" },
  { name: "SQLite",     category: "Databases" },

  // Tools
  { name: "Docker",          category: "Tools" },
  { name: "Git",             category: "Tools" },
  { name: "Vercel",          category: "Tools" },
  { name: "GitHub Actions",  category: "Tools" },

  // AI & Workflow
  { name: "Claude",              category: "AI & Workflow" },
  { name: "Claude Code",         category: "AI & Workflow" },
  { name: "Cursor",              category: "AI & Workflow" },
  { name: "Prompt Engineering",  category: "AI & Workflow" },
  { name: "GitHub Copilot",      category: "AI & Workflow" },
];

export const skillCategories = [
  "Languages",
  "Frameworks",
  "Databases",
  "Tools",
  "AI & Workflow",
] as const;

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Project Alpha",
    description:
      "A full-stack web application for managing tasks and team collaboration. Features real-time updates and role-based access control.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlight: "Designed the RBAC model to support multi-tenant workspaces without schema-per-tenant complexity.",
  },
  {
    name: "CLI Toolkit",
    description:
      "A command-line tool that automates common development workflows, including scaffolding, linting, and deployment steps.",
    techStack: ["Go", "Cobra", "Docker"],
    githubUrl: "https://github.com",
    highlight: "Used Go's plugin system to make commands extensible — teams can ship custom subcommands without forking.",
  },
  {
    name: "API Gateway",
    description:
      "A lightweight reverse proxy and API gateway with rate limiting, JWT authentication, and request logging built in.",
    techStack: ["Node.js", "TypeScript", "Redis", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlight: "Rate limiting uses a sliding-window algorithm in Redis — handles burst traffic without sacrificing fairness.",
  },
  {
    name: "Data Pipeline",
    description:
      "An ETL pipeline that ingests, transforms, and loads data from multiple sources into a centralized data warehouse.",
    techStack: ["Python", "Apache Airflow", "BigQuery", "dbt"],
    githubUrl: "https://github.com",
    highlight: "Built idempotent DAGs so reruns are always safe — critical for backfilling months of historical data.",
  },
];

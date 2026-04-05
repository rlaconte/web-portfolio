import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Project Alpha",
    description:
      "A full-stack web application for managing tasks and team collaboration. Features real-time updates and role-based access control.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    name: "CLI Toolkit",
    description:
      "A command-line tool that automates common development workflows, including scaffolding, linting, and deployment steps.",
    techStack: ["Go", "Cobra", "Docker"],
    githubUrl: "https://github.com",
  },
  {
    name: "API Gateway",
    description:
      "A lightweight reverse proxy and API gateway with rate limiting, JWT authentication, and request logging built in.",
    techStack: ["Node.js", "TypeScript", "Redis", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    name: "Data Pipeline",
    description:
      "An ETL pipeline that ingests, transforms, and loads data from multiple sources into a centralized data warehouse.",
    techStack: ["Python", "Apache Airflow", "BigQuery", "dbt"],
    githubUrl: "https://github.com",
  },
];

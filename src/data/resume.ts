import type { Experience, Education } from "@/types";

export const experience: Experience[] = [
  {
    company: "Your Company",
    role: "Senior Backend Engineer",
    period: "2022 — Present",
    bullets: [
      "Designed and maintained event-driven payment processing pipelines handling millions of transactions daily with sub-100ms p99 latency.",
      "Led migration from monolith to microservices, reducing deployment risk and enabling independent service scaling.",
      "Built internal data platform integrating real-time streaming with batch analytics, cutting reporting lag from hours to minutes.",
      "Introduced AI-assisted code review and documentation tooling across the engineering org, measurably reducing review cycle time.",
    ],
  },
  {
    company: "Previous Company",
    role: "Backend Engineer",
    period: "2020 — 2022",
    bullets: [
      "Built and owned core financial reconciliation service processing end-of-day settlement across multiple payment rails.",
      "Designed REST and gRPC APIs consumed by 3+ internal teams and external partners.",
      "Implemented distributed tracing and alerting that reduced mean time to detection from 45 minutes to under 5.",
      "Mentored two junior engineers; established team coding standards and PR review guidelines.",
    ],
  },
  {
    company: "Early-Stage Startup",
    role: "Software Engineer",
    period: "2018 — 2020",
    bullets: [
      "Shipped backend features across the full product lifecycle — from zero to production on a two-person team.",
      "Wrote data ingestion pipelines for third-party financial data providers, handling schema drift and inconsistencies.",
      "Maintained 99.9% uptime SLA for a customer-facing API with on-call rotation.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Universidad de Buenos Aires (UBA)",
    degree: "Licenciatura en Ciencias de la Computación",
    period: "2019 — Present",
  },
];

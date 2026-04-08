import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Payment Pipeline",
    description:
      "Event-driven transaction processing system built for high-throughput fintech workloads. Handles settlement, reconciliation, and audit trails across multiple payment rails.",
    techStack: ["Go", "Kafka", "PostgreSQL", "Redis", "Kubernetes"],
    githubUrl: "https://github.com/rlaconte/payment-pipeline",
  },
  {
    name: "Data Platform",
    description:
      "Internal analytics platform combining real-time streaming with batch processing. Reduced reporting latency from hours to minutes for a team of 50+ analysts.",
    techStack: ["Python", "Apache Spark", "dbt", "Airflow", "BigQuery"],
    githubUrl: "https://github.com/rlaconte/data-platform",
  },
  {
    name: "API Gateway",
    description:
      "Lightweight rate-limiting and auth gateway built as an alternative to cloud-vendor solutions. Handles 10k+ req/s with configurable middleware chains.",
    techStack: ["Go", "Redis", "Docker", "Prometheus"],
    githubUrl: "https://github.com/rlaconte/api-gateway",
    liveUrl: "https://gateway.example.com",
  },
  {
    name: "LLM Evaluation Harness",
    description:
      "Testing framework for evaluating LLM outputs against domain-specific rubrics. Used to benchmark models for structured financial document extraction.",
    techStack: ["Python", "Claude API", "SQLite", "FastAPI"],
    githubUrl: "https://github.com/rlaconte/llm-eval",
  },
];

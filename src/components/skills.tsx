"use client";

import SectionWrapper from "@/components/section-wrapper";
import { skills, skillCategories } from "@/data/skills";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categoryAccent: Record<string, string> = {
  Languages:      "var(--accent)",
  Frameworks:     "var(--accent-secondary)",
  Databases:      "#a78bfa",
  Tools:          "var(--accent-warn)",
  "AI & Workflow": "var(--accent-warn)",
};

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="skills" title="Skills">
      <div ref={ref} data-reveal className="flex flex-col gap-8">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          const accent = categoryAccent[category] ?? "var(--accent)";
          return (
            <div key={category} className="flex flex-wrap items-center gap-2">
              <span
                className="font-[var(--font-mono)] text-sm tracking-wide mr-2 shrink-0"
                style={{ color: accent }}
              >
                {category.toLowerCase().replace(/\s+/g, "_")} /
              </span>
              {categorySkills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-base border border-[var(--border-subtle)] text-[var(--text-secondary)] px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors"
                  style={{ borderLeftColor: accent, borderLeftWidth: "2px" }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

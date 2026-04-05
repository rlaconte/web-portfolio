import SectionWrapper from "@/components/section-wrapper";
import ScrollReveal from "@/components/scroll-reveal";
import { skills, skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      sectionNumber="02"
      className="bg-stone-100/60 dark:bg-stone-900/40"
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, i) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <ScrollReveal key={category} delay={i * 100}>
              <div>
                <h3 className="font-[var(--font-mono)] text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="font-[var(--font-mono)] text-xs text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 px-2.5 py-1 rounded-md hover:border-emerald-400 dark:hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

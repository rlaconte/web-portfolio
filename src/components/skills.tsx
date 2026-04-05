import SectionWrapper from "@/components/section-wrapper";
import { skills, skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills" className="bg-gray-50">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <div key={category}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-sm bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

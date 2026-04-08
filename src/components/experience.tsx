import SectionWrapper from "./section-wrapper";
import Reveal from "./reveal";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="border-t border-border-subtle py-20 lg:py-28">
        <Reveal>
          <span className="font-mono text-text-tertiary text-xs tracking-[0.25em] uppercase block mb-16">
            Experience
          </span>
        </Reveal>

        <div>
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="border-t border-border-subtle py-10 lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Period */}
                <div className="lg:col-span-3 mb-4 lg:mb-0 lg:pt-1">
                  <span className="font-mono text-text-tertiary text-xs">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-9">
                  <h3 className="font-display text-text-primary text-xl lg:text-2xl mb-1">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-accent text-xs tracking-widest uppercase block mb-6">
                    {exp.company}
                  </span>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="font-mono text-text-secondary text-sm flex gap-3 leading-relaxed">
                        <span className="text-accent flex-shrink-0 mt-0.5 select-none">
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

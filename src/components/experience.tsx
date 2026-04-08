import SectionWrapper from "./section-wrapper";
import Reveal from "./reveal";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div
        className="border-t py-20 lg:py-28"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <Reveal>
          <span
            className="text-xs tracking-[0.25em] uppercase block mb-16"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--text-tertiary)",
            }}
          >
            Experience
          </span>
        </Reveal>

        <div>
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 70}>
              <div
                className="border-t py-10 lg:grid lg:grid-cols-12 lg:gap-8"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                {/* Period */}
                <div className="lg:col-span-3 mb-4 lg:mb-0 lg:pt-1">
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-9">
                  <h3
                    className="text-xl lg:text-2xl mb-1"
                    style={{
                      fontFamily: "var(--font-instrument-serif), serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <span
                    className="text-xs tracking-widest uppercase block mb-6"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--accent)",
                    }}
                  >
                    {exp.company}
                  </span>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm flex gap-3 leading-relaxed"
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono), monospace",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span
                          className="flex-shrink-0 mt-0.5 select-none"
                          style={{ color: "var(--accent)" }}
                        >
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

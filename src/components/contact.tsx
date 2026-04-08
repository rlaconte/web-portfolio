import SectionWrapper from "./section-wrapper";
import Reveal from "./reveal";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="border-t border-border-subtle py-24 lg:py-36">
        <Reveal>
          <h2 className="font-display text-text-primary text-5xl lg:text-7xl mb-8">
            Let&apos;s talk.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <a
            href="mailto:rodrigo@laconte.dev"
            className="link-hover-accent font-mono group text-sm lg:text-base inline-flex items-center gap-2 mb-12 block"
          >
            rodrigo@laconte.dev{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px">
              ↗
            </span>
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="font-mono flex items-center gap-6 text-xs">
            <a
              href="https://github.com/rlaconte"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover group inline-flex items-center gap-1"
            >
              github
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px">
                ↗
              </span>
            </a>
            <span className="text-border">/</span>
            <a
              href="https://linkedin.com/in/rlaconte"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover group inline-flex items-center gap-1"
            >
              linkedin
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px">
                ↗
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

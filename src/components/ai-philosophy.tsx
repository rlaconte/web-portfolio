import Reveal from "./reveal";

export default function AIPhilosophy() {
  return (
    <section className="relative z-10">
      <div style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <div className="flex gap-6 lg:gap-10">
              {/* Vertical accent bar */}
              <div
                className="w-[3px] flex-shrink-0 self-stretch rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden="true"
              />

              <div>
                <span
                  className="text-xs tracking-[0.25em] uppercase block mb-4"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    color: "var(--accent)",
                  }}
                >
                  On AI &amp; Engineering
                </span>
                <p
                  className="text-sm lg:text-base leading-[1.8] max-w-3xl"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    color: "var(--text-secondary)",
                  }}
                >
                  I treat AI as a senior pair programmer. Claude, Copilot, and
                  custom tooling are integrated into every stage of my workflow
                  — architecture reviews, code generation, debugging,
                  documentation. This is not a novelty. It is how I think
                  faster, catch issues earlier, and ship better systems.
                  Engineers who ignore these tools will be outpaced by those
                  who don&apos;t.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

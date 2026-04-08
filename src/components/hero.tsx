import Link from "next/link";

const socialLinks = [
  {
    label: "github",
    href: "https://github.com/rlaconte",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/rlaconte",
    external: true,
  },
  {
    label: "email",
    href: "mailto:rodrigo@laconte.dev",
    external: false,
  },
  { label: "résumé", href: "/resume", external: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left: Content — cols 1-7 */}
          <div className="lg:col-span-7 flex flex-col justify-center py-28 lg:py-0">
            {/* Pre-title */}
            <p
              className="load-fade-up-1 text-xs tracking-[0.3em] uppercase mb-7"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "var(--accent)",
              }}
            >
              Senior Backend Engineer
            </p>

            {/* Name — clip-path reveal */}
            <div className="load-reveal-name overflow-hidden mb-7">
              <h1
                className="text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  color: "var(--text-primary)",
                }}
              >
                Rodrigo
                <br />
                Laconte
              </h1>
            </div>

            {/* One-liner */}
            <p
              className="load-fade-up-2 text-sm leading-relaxed max-w-sm mb-10"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "var(--text-secondary)",
              }}
            >
              I build systems that process money,
              <br />
              move data, and don&apos;t break at 3AM.
            </p>

            {/* Social links */}
            <div
              className="load-fade-up-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {socialLinks.map((link, i) => (
                <span key={link.href} className="flex items-center gap-3">
                  {i > 0 && (
                    <span style={{ color: "var(--border)" }}>/</span>
                  )}
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover group inline-flex items-center gap-1"
                    >
                      {link.label}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="link-hover group inline-flex items-center gap-1"
                    >
                      {link.label}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px">
                        ↗
                      </span>
                    </Link>
                  )}
                </span>
              ))}
            </div>

            {/* Accent draw line */}
            <div className="mt-16 hidden lg:block">
              <div
                className="load-draw-line h-px w-20"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </div>
          </div>

          {/* Right: intentional negative space */}
          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="load-fade-up-3 absolute bottom-10 left-6 lg:left-12 flex items-center gap-3"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          color: "var(--text-tertiary)",
        }}
      >
        <div
          className="w-8 h-px"
          style={{ backgroundColor: "var(--border)" }}
        />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}

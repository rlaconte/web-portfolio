export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <span
          className="text-xs"
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            color: "var(--text-tertiary)",
          }}
        >
          {new Date().getFullYear()} Rodrigo Laconte
        </span>
        <span
          className="text-xs"
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            color: "var(--text-tertiary)",
          }}
        >
          Buenos Aires
        </span>
      </div>
    </footer>
  );
}

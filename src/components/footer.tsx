export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <span className="font-mono text-text-tertiary text-xs">
          {new Date().getFullYear()} Rodrigo Laconte
        </span>
        <span className="font-mono text-text-tertiary text-xs">
          Buenos Aires
        </span>
      </div>
    </footer>
  );
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const themes = ["light", "dark", "system"] as const;
type Theme = typeof themes[number];

const icons: Record<Theme, React.ReactNode> = {
  light:  <Sun size={15} />,
  dark:   <Moon size={15} />,
  system: <Monitor size={15} />,
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[68px] h-7" />;

  const current = (theme as Theme) ?? "system";

  function cycle() {
    const idx = themes.indexOf(current);
    setTheme(themes[(idx + 1) % themes.length]);
  }

  return (
    <button
      onClick={cycle}
      aria-label={`Switch theme (current: ${current})`}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border-subtle)] text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors text-xs font-[var(--font-mono)]"
    >
      {icons[current]}
      <span className="capitalize">{current}</span>
    </button>
  );
}

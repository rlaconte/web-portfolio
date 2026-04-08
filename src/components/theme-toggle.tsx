"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "./theme-provider";

const cycle: Record<Theme, Theme> = {
  light: "dark",
  dark: "system",
  system: "light",
};

const icons: Record<Theme, typeof Sun> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const Icon = icons[theme];

  return (
    <button
      onClick={() => setTheme(cycle[theme])}
      className="load-nav-5 link-hover flex items-center gap-1.5 cursor-pointer"
      aria-label={`Theme: ${theme}. Click to cycle.`}
    >
      <Icon size={13} strokeWidth={1.5} />
      <span
        className="text-xs tracking-widest uppercase hidden sm:inline"
        style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
      >
        {theme}
      </span>
    </button>
  );
}

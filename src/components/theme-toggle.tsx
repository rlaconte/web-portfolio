"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const order = ["light", "dark", "system"] as const;
const icons = { light: Sun, dark: Moon, system: Monitor };

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function cycle() {
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  }

  const Icon = icons[theme];

  return (
    <button
      onClick={cycle}
      aria-label={`Switch theme (current: ${theme})`}
      className="text-stone-400 dark:text-stone-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
    >
      <Icon size={16} />
    </button>
  );
}

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  resolvedTheme: ResolvedTheme;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: "dark",
});

export function useTheme() {
  return useContext(ThemeContext);
}

function resolveSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(t: Theme): ResolvedTheme {
  const resolved = t === "system" ? resolveSystemTheme() : t;
  document.documentElement.setAttribute("data-theme", resolved);
  return resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      if (t === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", t);
      }
    } catch {}
    const resolved = applyTheme(t);
    setResolvedTheme(resolved);
  }, []);

  useEffect(() => {
    // Read stored preference
    let stored: Theme = "system";
    try {
      const val = localStorage.getItem("theme");
      if (val === "light" || val === "dark") stored = val;
    } catch {}

    setThemeState(stored);
    const resolved = applyTheme(stored);
    setResolvedTheme(resolved);

    // Listen for system preference changes (only matters when theme === "system")
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      setThemeState((current) => {
        if (current === "system") {
          const r = applyTheme("system");
          setResolvedTheme(r);
        }
        return current;
      });
    };
    mq.addEventListener("change", handler);

    // Trigger page load animations
    document.body.setAttribute("data-loaded", "true");

    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

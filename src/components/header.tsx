"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo — serif italic */}
        <Link
          href="/"
          className="font-[var(--font-serif)] text-xl text-stone-900 dark:text-stone-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          YN<span className="text-emerald-500">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[var(--font-mono)] text-xs text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 tracking-wider uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-4 bg-stone-200 dark:bg-stone-800" />
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="sm:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[var(--font-mono)] text-xs text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 tracking-wider uppercase transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

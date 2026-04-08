"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg-primary) 88%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div
          className="border-b"
          style={{ borderColor: "var(--accent)", borderBottomWidth: "1px" }}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14">
            {/* Name */}
            <Link
              href="/"
              className="load-nav-1 site-name-link text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              rodrigo laconte
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link link-hover-up load-nav-${i + 2} text-xs tracking-widest uppercase`}
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile: toggle + burger */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(true)}
                className="link-hover"
                aria-label="Open menu"
              >
                <Menu size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div
            className="flex items-center justify-between h-14 px-6 border-b"
            style={{ borderColor: "var(--accent)" }}
          >
            <Link
              href="/"
              className="site-name-link text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              onClick={() => setMenuOpen(false)}
            >
              rodrigo laconte
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="link-hover"
              aria-label="Close menu"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col justify-center flex-1 px-6 gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="link-hover-primary text-5xl transition-colors duration-200"
                style={{ fontFamily: "var(--font-instrument-serif), serif" }}
              >
                {link.label.toLowerCase()}
              </Link>
            ))}
          </nav>
          <div
            className="px-6 pb-8 text-xs tracking-widest"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--text-tertiary)",
            }}
          >
            Buenos Aires, Argentina
          </div>
        </div>
      )}
    </>
  );
}

import type { Metadata } from "next";
import { Fraunces, DM_Mono, Epilogue } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

// Variable optical-size serif — unexpected on a technical portfolio, deliberately so
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "WONK"],
});

// Refined monospace for code labels and terminal elements
const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// Clean, characterful sans-serif for body
const epilogue = Epilogue({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Rodrigo Laconte — Backend Engineer",
  description:
    "Backend engineer who uses AI as a force multiplier. I design APIs, data pipelines, and infrastructure — shipping faster by automating what machines do better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${dmMono.variable} ${epilogue.variable}`}
    >
      <body className="min-h-screen flex flex-col font-[var(--font-body)] antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ThemeProvider>
          {/* Dot-grid overlay */}
          <div className="bg-grid" aria-hidden="true" />
          {/* Ambient glow blobs */}
          <div
            aria-hidden="true"
            className="fixed pointer-events-none z-0 top-[-200px] left-[10%] w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", opacity: 0.05 }}
          />
          <div
            aria-hidden="true"
            className="fixed pointer-events-none z-0 top-[40%] right-[-100px] w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)", opacity: 0.04 }}
          />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

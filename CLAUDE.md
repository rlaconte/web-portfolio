# Web Portfolio

## Stack
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Package manager/runtime:** Bun
- **Deployment:** Vercel

## Commands
- Use `bun` for all package/script commands (`bun add`, `bun dev`, `bun build`) — never npm/yarn/pnpm

## Decisions
- Use App Router, not Pages Router
- No blog yet, but MDX should be easy to add later
- Portfolio is dev-focused (projects, skills, resume) — not design-heavy

## Conventions
- Server components by default; add `"use client"` only when needed
- Tailwind for all styling — no CSS modules or inline styles
- No blog section yet — don't scaffold one

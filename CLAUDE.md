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

## Frontend Aesthetics
- Avoid "AI slop": make creative, distinctive frontends that surprise and delight
- **Typography:** Choose beautiful, unique, interesting fonts that elevate the aesthetic — avoid Inter, Roboto, Arial, and system fonts
- **Color & Theme:** Commit to a cohesive aesthetic with CSS variables; dominant colors + sharp accents outperform timid, evenly-distributed palettes; draw from IDE themes and cultural aesthetics
- **Motion:** Use animations for effects and micro-interactions; prioritize CSS-only solutions; use Motion library for React; focus on high-impact moments — one well-orchestrated page load with staggered reveals (`animation-delay`) creates more delight than scattered micro-interactions
- **Backgrounds:** Create atmosphere and depth — layer CSS gradients, geometric patterns, or contextual effects that match the overall aesthetic; avoid solid color defaults
- Avoid: overused font families (Inter, Roboto, Arial, system fonts), clichéd color schemes (purple gradients on white), predictable layouts, cookie-cutter patterns lacking context-specific character
- Interpret creatively and make unexpected choices genuinely suited to the context; vary between light/dark themes, fonts, and aesthetics — you converge on common choices (e.g. Space Grotesk) across generations, so it's critical to think outside the box

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Anan Sustainability Landing Page

- Build the public experience with Next.js App Router and TypeScript.
- Support `/ar` and `/en`; Arabic must use RTL and English must use LTR.
- Treat `DESIGN.md` as the source of truth for color, typography, spacing, radii, borders, and motion tone.
- Use Space Grotesk for display text, Geist for body copy, and JetBrains Mono for telemetry labels.
- Keep every component responsible for one job. Prefer shared data models and primitives over duplicated markup.
- Use Framer Motion for purposeful reveals and micro-interactions, and respect `prefers-reduced-motion`.
- Keep the page fully responsive at 320px, 390px, 768px, 1024px, and 1440px.
- Do not invent customer logos, testimonials, performance claims, or compliance claims. Use configurable placeholders until verified content is provided.
- Implement one landing-page section per iteration and validate it before adding the next section.
- Keep Dashboard visuals as replaceable mockups until real screenshots are supplied.

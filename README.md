# portfolio-latest

Personal portfolio of **Chetan Bhosale** — full stack software engineer, founding engineer at [Linkrunner](https://www.linkrunner.io).

Cream paper theme, document-style layout, smooth scrolling, and small motion touches everywhere.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) + shadcn/ui
- [motion](https://motion.dev) for animations, [lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [react-icons](https://react-icons.github.io/react-icons/) for brand tech badges
- [Bun](https://bun.sh) as package manager and runtime

## Features

- Hover preview cards (Aceternity style) on company links with logos, funding facts, and site screenshots
- Animated expand/collapse experience table
- Scroll-reveal sections, scroll progress bar, 3D tilt photo, flip-words
- SEO: Open Graph + Twitter cards, JSON-LD person schema, sitemap, robots.txt, and `llms.txt` for AI crawlers

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
bun run typecheck   # tsc --noEmit
bun run lint        # eslint
bun run build       # production build
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed URL so metadata, sitemap, and JSON-LD point at the right domain.

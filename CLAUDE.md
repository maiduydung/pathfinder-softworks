# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build static site
- `npm run preview` — Preview production build
- `npm run check` — Type-check with svelte-check

## Architecture

Marketing website for Pathfinder Softworks built with **SvelteKit + Svelte 5 + TypeScript + Tailwind CSS v4**, deployed as a fully prerendered static site (`@sveltejs/adapter-static`).

### Routing

- `/` — Homepage
- `/about` — Team & values
- `/services` — Offerings, process, tech stack
- `/work` — Case studies listing
- `/work/[slug]` — Individual case study (data-driven from `src/lib/data/case-studies.ts`)
- `/team/[slug]` — Individual team member (data-driven from `src/lib/data/team.ts`)
- `/contact` — Contact form (Web3Forms API, key in `.env` as `PUBLIC_WEB3FORMS_KEY`)

All routes are prerendered (`prerender = true` in `+layout.ts`). Dynamic routes use `entries()` for static generation.

### Data Layer

Content lives in TypeScript files under `src/lib/data/` — not a CMS. Case studies, team members, services, and tech stack are all typed interfaces exported from these files.

### Components

- `src/lib/components/` — Shared (Nav, Footer, Button, etc.)
- `src/lib/components/home/` — Homepage-specific (Hero, FeaturedWork, etc.)
- `src/lib/actions/inview.ts` — IntersectionObserver action for scroll animations

Uses Svelte 5 runes (`$state()`, `$props()`, `$derived()`).

### Styling

- **Tailwind CSS v4** with `@tailwindcss/vite` plugin (NOT PostCSS)
- Plugin order in `vite.config.ts`: `tailwindcss()` before `sveltekit()`
- Config in `src/app.css`: `@import "tailwindcss"` + `@theme {}` block for custom colors
- Icons: `lucide-svelte`

### Tailwind v4 + .gitignore Pitfall

Tailwind v4 uses `.gitignore` for auto content detection. The `.gitignore` must use `/lib/` (not `lib/`) to avoid matching `src/lib/`, which would silently skip all component utility classes.

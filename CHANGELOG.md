# Changelog

## 2026-02-13 — Complete Multi-Page Redesign (Xyflow-Inspired Theme)

### Overview

Overhauled the entire site from a single-page scrolling layout to a proper multi-page agency site. Design system rebuilt from scratch inspired by the Xyflow theme — minimal, tight spacing, white+blue color scheme, pill-shaped buttons, `rounded-3xl` cards, border-based content grids.

### New Pages

- **`/services`** — Detailed service cards (alternating 2-col layout), 4-step process, industries grid, full tech stack
- **`/about`** — Company story, team photo grid with locations, location cards (US/Poland/Vietnam), values grid
- **`/work`** — Case study listing with border-grid layout, tech badges, key metrics
- **`/work/[slug]`** — Full case study detail pages (Proplytics, Investment Intelligence, Nhu Tin) with problem/solution cards, results grid, tech badges, "next project" navigation
- **`/contact`** — 2-column layout: Web3Forms contact form + contact info cards (email, LinkedIn, Calendly)

### Design System Changes (`src/app.css`)

- Added new color tokens: `--color-foreground`, `--color-light`, `--color-muted`, `--color-border`, `--color-surface-alt`, `--color-primary-light`
- Replaced heavy `font-black` (900) with `font-bold` (700) across all headings
- Tightened section spacing from `py-24 md:py-32` to `my-16 lg:my-24` (xyflow pattern)
- Removed unused floating blob animations (`animate-float-1/2/3`)
- Simplified fade-in animation (shorter duration, smaller translateY)

### Navigation Redesign (`Nav.svelte`)

- Changed from hash-links (`/#services`, `/#work`) to page routes (`/services`, `/work`, `/about`, `/contact`)
- Added active route highlighting using `$page.url.pathname`
- Sticky nav with solid white background + bottom border (not floating/transparent)
- Full name "Pathfinder Softworks" in nav (not abbreviated)
- Pill-shaped "Book a call" CTA button (`rounded-full`)

### Footer Redesign (`Footer.svelte`)

- Expanded from single-line copyright to 4-column layout (brand, services, company, social, contact)
- White+blue color scheme matching site theme
- Blue uppercase category headers with gray link text

### CTA Banner (`CTABanner.svelte` — new)

- Reusable full-width CTA section used at the bottom of every page
- Light blue background (`bg-primary-light`) with white+blue buttons
- Customizable title, subtitle, button text, and links via props

### Shared Components (new)

- **`SectionHeader.svelte`** — Reusable H2 + subtitle with inview fade animation, optional centering
- **`Button.svelte`** — Primary/secondary/outline variants with size options (unused currently, available for future)
- **`CTABanner.svelte`** — Full-width CTA band with customizable copy
- **`WorldMap.svelte`** — Clean location stat cards (US/PL/VN) replacing the broken SVG dotted map
- **`TeamGrid.svelte`** — Reusable team member photo grid with compact option

### Data Files (new/modified)

- **`src/lib/data/case-studies.ts`** (new) — Structured case study data with slug, problem, solution, results array, tech stack, external links
- **`src/lib/data/services.ts`** (new) — Service definitions, process steps, industry list, tech stack categories (extracted from inline component data)
- **`src/lib/data/team.ts`** (modified) — Added `TeamLocation` type and `location` field (city, country, timezone) to each team member

### Home Page Components (new, `src/lib/components/home/`)

- **`Hero.svelte`** — Left-aligned hero with staggered entrance animation, pill CTA buttons
- **`FeaturedWork.svelte`** — 3-column border-grid of case studies linking to detail pages
- **`ServicesOverview.svelte`** — 2x2 service card grid with "View all services" link
- **`GlobalPresence.svelte`** — Section header + 3 location stat cards

### Layout Changes (`+layout.svelte`)

- Added `{#key $page.url.pathname}` for page transitions
- Removed hardcoded `<title>` and `<meta>` (now per-page via `<svelte:head>`)

### Team Member Pages (`/team/[slug]`)

- Restyled to match new design system (tighter spacing, `rounded-3xl` hero card, `font-bold` headings)
- "Back to team" now links to `/about` instead of `/#about`
- Added location info (city, country, timezone) in hero card

### Static Prerendering

All 13 pages prerender successfully with adapter-static:
- `/` (home)
- `/services`, `/about`, `/work`, `/contact`
- `/work/proplytics`, `/work/investment-intelligence`, `/work/nhu-tin`
- `/team/mai-duy-dung`, `/team/duy-tran`, `/team/felix`, `/team/quang-than`, `/team/thao-do`

### Files Added (17)
- `src/lib/components/Button.svelte`
- `src/lib/components/CTABanner.svelte`
- `src/lib/components/SectionHeader.svelte`
- `src/lib/components/TeamGrid.svelte`
- `src/lib/components/WorldMap.svelte`
- `src/lib/components/home/FeaturedWork.svelte`
- `src/lib/components/home/GlobalPresence.svelte`
- `src/lib/components/home/Hero.svelte`
- `src/lib/components/home/ServicesOverview.svelte`
- `src/lib/data/case-studies.ts`
- `src/lib/data/services.ts`
- `src/routes/about/+page.svelte`
- `src/routes/contact/+page.svelte`
- `src/routes/services/+page.svelte`
- `src/routes/work/+page.svelte`
- `src/routes/work/[slug]/+page.svelte`
- `src/routes/work/[slug]/+page.ts`

### Files Modified (8)
- `src/app.css`
- `src/lib/components/CaseStudies.svelte`
- `src/lib/components/Footer.svelte`
- `src/lib/components/Nav.svelte`
- `src/lib/data/team.ts`
- `src/routes/+layout.svelte`
- `src/routes/+page.svelte`
- `src/routes/team/[slug]/+page.svelte`

---

## 2026-02-11 — Team Section Redesign ("Council Model")

### What changed

**Architecture: Modal → Dedicated Pages**
- Replaced click-to-expand modals with individual team member pages (`/team/[slug]`)
- Each member gets their own hero page with equal layout and weight
- All 5 pages prerender with adapter-static

**Homepage Team Grid**
- Redesigned from card-based layout to clean equal-portrait grid (5 columns desktop)
- All members treated equally — no founder elevation on homepage
- Added "Trust Strip" with 4 credibility markers below the grid

**Individual Member Pages (`/team/[slug]`)**
- Hero card with portrait, role, name, and short intro (soft blue gradient)
- Full bio + LinkedIn CTA below the fold
- Founder page includes "Book a Call" button
- "Meet the rest of the team" grid at bottom of every page for cross-navigation

**Navigation**
- Added "Team" nav link pointing to founder's page as entry point
- Moved Nav/Footer from `+page.svelte` to `+layout.svelte` so team pages share them
- Updated nav links to `/#section` format for cross-page compatibility

**Copy**
- Rewrote all team bios: short, dense, outcome-focused
- Duy Tran gets subtle Sam Altman's Residency mention
- Section headline: "The People Who Build Your Systems"

### Files added
- `src/lib/data/team.ts` — shared team member data with slugs
- `src/routes/team/[slug]/+page.ts` — load function + static entries
- `src/routes/team/[slug]/+page.svelte` — individual member page

### Files modified
- `src/lib/components/About.svelte` — simplified to equal grid + trust strip
- `src/lib/components/Nav.svelte` — "Team" link, `/#` anchors, logo → `/`
- `src/routes/+layout.svelte` — added Nav + Footer
- `src/routes/+page.svelte` — removed Nav + Footer (now in layout)

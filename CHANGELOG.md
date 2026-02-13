# Changelog

## 2026-02-13 — Case Studies, Globe, Icons, UX Overhaul

### Overview

Major update to case study presentation, added interactive globe to hero, installed Lucide icon set, redesigned services and team member pages using UX design principles, and rewrote all copy to remove LLM-style em dashes.

### Case Study Enhancements

- **Image carousels** on case study detail pages: auto-scrolling (4s), prev/next arrows on hover, dot indicators, captions
- **2-column hero layout**: text + stats on left, image carousel on right (desktop), stacks on mobile
- **Proplytics**: updated link to proplytics.net, added 5 screenshots (landing, discovery, individual, financial breakdown, market heatmap), added founder badge linking to Duy Tran's team page with "FAANG Engineer, Sam Altman's Residency" credential pill
- **Nhu Tin**: added 5 screenshots (landing, shipment input, BOM results, Excel sync, invoice parser), rewrote summary/solution to match actual app functionality (BOM optimizer, weight constraints, invoice parsing)
- **Investment Intelligence**: updated stats to show "1B+" records, added Ruby on Rails to tech stack
- **Updated stats**: Proplytics "11.5% Avg ROI surfaced" replaced with "97.5% ROI coverage"
- **External link icon** (Lucide `ExternalLink`) next to project title instead of separate "Visit project" text link
- **Merged "Next project" + CTA banner** into one combined section at page bottom, eliminating empty gap

### Interactive Globe (`Globe.svelte` — new)

- **cobe** library (5KB WebGL) for rotating 3D globe in hero section
- Blue-tinted globe (soft blue base, blue glow) matching white+blue theme
- 3 marker dots at team locations: US (DC), Poland (Warsaw), Vietnam (HCMC)
- Dynamic import to avoid SSR issues, hidden on mobile
- Hero is now 2-column: text left, globe right

### Lucide Icons (`lucide-svelte` — new)

- Installed `lucide-svelte` as site-wide icon set (1400+ clean line icons)
- **Results section redesigned**: each result has a unique meaningful icon in a soft blue rounded box (2-column grid, vertically centered)
  - Proplytics: Database, TrendingUp, Users, Rocket
  - Investment Intelligence: Globe, Brain, Zap, Languages
  - Nhu Tin: Package, ShieldCheck, PiggyBank, Timer
- Results data changed from `string[]` to `{ text: string; icon: string }[]`
- Lucide icons used on team member pages (Linkedin, Calendar buttons)

### Tech Badge Links

- **`src/lib/data/tech-urls.ts`** (new): shared URL mapping for 30+ technologies
- Tech badges on case study detail pages now link to official sites (hover: blue border)
- Tech badges on services "Our stack" section now link to official sites (hover: blue bg)
- Non-linkable items (UX Research, SEO & SEM, etc.) remain as plain text

### Services Page Redesign

- **Replaced alternating 2-column layout** with 2x2 grid of self-contained cards
- Each card contains icon, title, outcome, description, and included items within one bordered region
- Follows UX principles: Law of Common Region (all info grouped), Law of Proximity (related content together), Chunking (each service is one scannable unit)

### Team Member Page Redesign

- **2-column layout**: photo + role + CTAs sticky on left, name + bio on right
- Photo changed from circle to `rounded-2xl`, larger on desktop (224px)
- LinkedIn/Book a Call buttons immediately below photo (Law of Proximity)
- Sticky sidebar on desktop (`lg:sticky lg:top-24`)
- Clean divider between intro and full bio

### Hero Copy Update

- Added credentials: "A team across 3 continents with FAANG alumni, Sam Altman-backed founders, and engineers who've shipped production systems at scale"

### Copy Cleanup (em dash removal)

- Rewrote all content sentences using em dashes across: Hero, GlobalPresence, ServicesOverview, services.ts, case-studies.ts
- Replaced with periods, commas, or restructured sentences for natural business language
- Title separators (e.g. "Services — Pathfinder Softworks") kept as standard format

### Dependencies Added

- `lucide-svelte` — icon library
- `cobe` — WebGL globe

### Files Added (8)

- `src/lib/components/Globe.svelte`
- `src/lib/data/tech-urls.ts`
- `static/past_works/nhutin/nhutin_bom.png`
- `static/past_works/nhutin/nhutin_excel_input.png`
- `static/past_works/nhutin/nhutin_invoice.png`
- `static/past_works/nhutin/nhutin_landing_page.png`
- `static/past_works/nhutin/nhutin_shipment_input_fake.png`
- `static/past_works/proplytics/` (4 new screenshots: financial_breakdown, individual_page, landing_page, market_page)

### Files Modified (13)

- `package.json`, `package-lock.json`
- `src/lib/components/CaseStudies.svelte`
- `src/lib/components/home/FeaturedWork.svelte`
- `src/lib/components/home/GlobalPresence.svelte`
- `src/lib/components/home/Hero.svelte`
- `src/lib/components/home/ServicesOverview.svelte`
- `src/lib/data/case-studies.ts`
- `src/lib/data/services.ts`
- `src/routes/services/+page.svelte`
- `src/routes/team/[slug]/+page.svelte`
- `src/routes/work/+page.svelte`
- `src/routes/work/[slug]/+page.svelte`

---

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

# Changelog

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

You are a senior product designer and full-stack developer building a conversion-focused landing page for a software agency called **Pathfinder Softworks** using **Reflex (Python)**.

## Design Requirements

- **Color scheme**: White and blue, minimalistic
- **Style**: Clean and modern — must invoke a sense of transparency, trust, and reliability
- **Framework**: Reflex (Python-to-React). All components must be written in Python using the Reflex library
- **Responsive**: Mobile-first, fully responsive across all breakpoints
- **Typography**: Professional, readable. Use a clean sans-serif font
- **Sections**: Hero, Pain Points, Services, Case Studies, About, How We Work, Tools, CTA/Contact

---

## Company Overview

**Pathfinder Softworks**

We help companies make sense of messy systems and stop bleeding money in places they can't see.

If you're running a growing business, there's a good chance your data is all over the place. Spreadsheets here. Dashboards there. Numbers that don't quite match.

Most teams live with it longer than they should — until something breaks, costs spike, or a bad decision slips through.

That's where we come in.

---

## What Usually Brings People Here

Founders don't come to us for "AI" or "data pipelines."

They come because:

- The numbers feel off, but no one can explain why
- Too much work is manual and fragile
- Systems were built quickly and never cleaned up
- Costs keep creeping up without a clear reason
- Everyone is busy, but visibility is getting worse

None of this means your team is bad. It usually means the company grew faster than the systems.

---

## What We Actually Do

We help you understand what's really happening inside your systems — then fix the parts that matter.

### Data & Operations

- Pull data out of messy sources (internal tools, APIs, scraping, spreadsheets)
- Clean it up so it actually means something
- Build simple, reliable pipelines that don't fall over quietly
- Create dashboards and reports you can trust
- Set up alerts when things break, drift, or stop making sense

The goal isn't more data. It's fewer surprises.

### AI (Only When It Makes Sense)

Sometimes AI helps. Sometimes it doesn't.

When it does, we use it to:

- Reduce repetitive operational work
- Watch systems and flag issues early
- Help teams act faster on real data

If it doesn't add clear value, we don't use it.

### Fixing Existing Systems

A lot of our work starts with:

- "This system is slow and no one wants to touch it"
- "We're pretty sure we're wasting money somewhere"
- "The guy who built this left"

We untangle, document, stabilize, and simplify — without blowing everything up.

---

## Case Studies

Include three case studies as separate expandable/navigable sections. Each should have a brief summary card that links to a detailed view.

---

### Case Study 1: Proplytics — Real Estate Investment Analytics Platform

**Summary card**: Data-driven real estate analytics platform that turns hours of spreadsheet work into instant, confidence-scored investment insights.

**Full detail**:

#### The Problem

Real estate investors face a fragmented data landscape. Property listings, rental estimates, market trends, school ratings, and financial projections live across dozens of disconnected sources. Evaluating a single property requires manually pulling data from Zillow, Airbnb, county records, and more — then running custom spreadsheet models to determine if the numbers actually work.

For portfolio investors analyzing dozens of properties across multiple markets, this process doesn't scale.

#### What We Built

A full-stack analytics platform backed by a distributed microservice architecture that continuously ingests, validates, and enriches property data across the United States.

**For Investors:**
- **Instant Investment Analysis** — ROI, cap rate, cash flow projections, and rent-to-price ratios calculated in real time
- **Dual Rental Strategy Comparison** — Side-by-side long-term vs. short-term (Airbnb) analysis with occupancy rates, daily rates, and revenue projections
- **Market-Level Intelligence** — Drill into markets at the state, county, and ZIP code level to identify high-performing areas
- **Similar Property Discovery** — ML-powered similarity engine using weighted scoring across distance, size, price, rent, and property characteristics
- **Interactive Map Exploration** — GPU-accelerated map visualization with custom region drawing
- **Portfolio Management** — Track owned properties, expenses, loans, and portfolio performance over time

**Under the Hood:**
1. **Web Application** — Next.js with server-side rendering, real-time search via Azure Cognitive Search, and interactive maps using Google Maps + deck.gl
2. **Data Ingestion Pipeline** — Automated scraping infrastructure with intelligent caching, retry logic, and fallback sources
3. **Data Validation & AI Enrichment** — Statistical validation (median absolute deviation scoring), LLM-based unit estimation, and confidence scoring
4. **Analytics Engine** — DuckDB-powered layer for market aggregations, similarity calculations, and validation computation with in-memory columnar performance

**Tech:** Next.js, TypeScript, React, Tailwind CSS, Python, FastAPI, Azure Functions, Azure Cosmos DB, DuckDB, Azure Cognitive Search, deck.gl, Google Maps API, Stripe, Sentry

**Key Challenges Solved:**
- Confidence scoring at scale — every data point gets a reliability score (25–100) using statistical validation
- Sub-second similarity search across hundreds of thousands of records using DuckDB's columnar engine
- Multi-source data reconciliation with intelligent caching and automatic fallback
- GPU-accelerated map visualization for rendering entire markets smoothly

**Results:**
- Processes and maintains property data across multiple U.S. states
- Delivers investment analysis that previously took hours in under seconds
- Supports both individual investors and portfolio-scale analysis
- Dual rental strategy comparison — a capability most platforms lack

---

### Case Study 2: AI-Powered Business Intelligence & Investment Scoring Platform

**Summary card**: Built the complete data-to-decision pipeline — distributed scraping, bilingual NLP, and ML-powered investment scoring — that turns raw web data into personalized investment ratings.

**Full detail**:

#### The Problem

Investors evaluating early-stage and growth companies face two bottlenecks: **data collection** and **data interpretation**.

Company information is scattered across LinkedIn, Instagram, Wantedly, StartupDB, and Japanese press release platforms. Gathering it manually doesn't scale. Once collected, the data is unstructured — raw descriptions, articles in multiple languages, inconsistent formats — and needs to be categorized, translated, and scored before it's useful for investment decisions.

The team needed a system that could continuously collect company data, enrich it with AI, and surface the most relevant opportunities based on each investor's specific criteria.

#### What We Built

Five interconnected systems forming a complete data-to-decision pipeline:

1. **Distributed Web Scraping Engine** — High-throughput async scraping system extracting structured company profiles from LinkedIn, Instagram, Wantedly, and StartupDB. Multi-provider proxy rotation (Luminati, PacketStream, Crawlera, Rayobyte), Chrome-like request signatures, automatic retries, and full task history tracking.

2. **Japanese News Scraping Pipeline** — Production pipeline continuously collecting press releases from Japan's largest press release distribution platform using three parallel producer-consumer pipelines: URL discovery (6-second RSS monitoring cycle), article extraction (20 async workers), and company profiling (Playwright-based browser workers scraping 200K+ profiles).

3. **AI-Powered News Enrichment** — NLP middleware processing raw articles through GPT-4o-mini for bilingual extraction (Japanese/English), multi-dimensional classification (industry, theme, geography, article type), and structured output mapped to database IDs.

4. **Revenue Stream Classifier** — ML system determining recurring vs. non-recurring revenue from business descriptions. Dual-model architecture: RoBERTa for English, SetFit for Japanese, both exported to ONNX for optimized inference. Runs as a continuous daemon with FastAPI on-demand endpoint.

5. **Investment Scoring Engine** — AutoML-powered scoring using PyCaret (LightGBM, XGBoost, CatBoost). Each investor gets a custom-trained classifier based on their specific criteria (target industries, funding stages, employee counts, etc.). Four-tier rating system (Love, Like, Later, Pass) with confidence scores. Batch prediction across the entire company database.

**Tech:** Python, aiohttp, asyncio, BeautifulSoup4, Playwright, FastAPI, OpenAI GPT-4o-mini, LangChain, RoBERTa, SetFit, PyCaret, LightGBM, XGBoost, CatBoost, ONNX Runtime, PostgreSQL, Docker, systemd, Sentry

**Key Challenges Solved:**
- Scraping at scale without getting blocked — multi-provider proxy rotation, Chrome request signatures, and async architecture for high throughput under rate limits
- Bilingual NLP across Japanese and English — language-specific models and carefully engineered prompts for dual-language processing
- Investor-specific model training — separate AutoML classifiers per investment profile rather than one generic scoring model
- Continuous data freshness — daemon-based re-classification on data changes, 6-second RSS monitoring, and on-demand model retraining

**Results:**
- Continuously scrapes and enriches company profiles from 4+ platforms and Japan's largest press release distributor
- Processes articles bilingually with automated industry, theme, and geography classification
- Classifies company revenue models at scale using dual-language ML with sub-second inference
- Generates personalized investment ratings tailored to each investor's specific criteria
- Fully automated pipeline — raw web data to scored investment opportunities — with no manual processing

---

### Case Study 3: Nhu Tin — Container Manufacturing Operations Platform

**Summary card**: Internal operations platform that replaced manual calculations and spreadsheet tracking with an optimization engine, automated inventory ingestion, and unified web interface for a Vietnamese manufacturing company.

**Full detail**:

#### The Problem

Container and trailer manufacturing involves tight margins. For every customer order, the operations team needs to answer: *given the receipt price and our target profit margin, what's the optimal combination of materials to use?*

This calculation depends on container type, dimensions, walking floor model, material specifications, current inventory levels, and dozens of weight constraints — changing with every order. The team was doing this manually: slow quoting, inconsistent margins, no visibility into profitability targets.

Inventory tracking lived in Excel spreadsheets on Google Drive, updated manually with Vietnamese-language reports. No centralized system connecting warehouse stock to build requirements.

#### What We Built

A three-part system: an optimization engine, an inventory pipeline, and a web application.

1. **Bill of Materials Optimizer** — 4-phase algorithm:
   - **Feasibility Check** — Validates weight and margin constraints before attempting optimization
   - **Fixed Items** — Adds deterministic components every build requires
   - **Weight Filling** — Reaches minimum weight target using the most cost-efficient material combination
   - **Margin Tuning** — Adjusts material mix to hit target profit margin, swapping cheaper/heavier for more expensive/lighter alternatives
   - Handles multiple container types (20ft, 40ft, Mooc Long trailers, truck bodies), walking floor models, and slat specs. Falls back to best-effort mode with actionable warnings when strict constraints can't be met.

2. **Automated Inventory Ingestion** — Automatically pulls Excel reports from Google Drive, parses Vietnamese-language spreadsheets with intelligent item classification (20+ types), typo correction for common Vietnamese input errors, unit normalization (kg, lit, cai, bo), price history tracking, and daily snapshots.

3. **Operations Web Application** — Built with Reflex (Python-to-React):
   - Calculate build orders with optimized BOM, cost breakdown, and weight analysis
   - Visualize weight constraints with color-coded progress bars
   - Real-time suggestions when parameters need adjustment
   - Process Vietnamese electronic invoices (XML and PDF)
   - Export reports in Excel, CSV, JSON, or PDF
   - Upload Excel files to trigger database ingestion

**Tech:** Reflex (Python), Tailwind CSS, FastAPI, Azure Functions, PostgreSQL, Google Drive API, Google OAuth 2.0, Plotly, Caddy, Docker, Azure Container Apps

**Key Challenges Solved:**
- Domain-specific optimization under multiple constraints — 4-phase approach with graceful degradation
- Vietnamese language data processing — typo correction, date parsing, unit normalization without requiring workflow changes
- Actionable guidance system — specific suggestions instead of generic errors (e.g., "reduce target margin to 15% to stay within weight limits")
- Zero-disruption adoption — wraps around existing Excel and invoice workflows

**Results:**
- Replaced 30+ minute manual BOM calculations with instant optimized results
- Automated inventory tracking from manual Excel data entry
- Unified invoice processing, build optimization, and inventory management in one platform
- Built-in profit margin targeting on every build order
- Zero workflow disruption — existing Excel and invoice formats continue unchanged

---

## About Me

Hi, I'm Mai. I run Pathfinder Softworks.

I'm from Vietnam. I got out through scholarships and engineering, not connections.

I started my career in Japan as a machine learning engineer. From the outside, it looked solid: good salary, stable job, clear path. Inside, I saw how often smart teams were stuck working around broken data, unclear systems, and decisions made with half the picture.

That experience shaped how I work now.

Since then, I've built data and software systems for teams in Tokyo, Shanghai, Vancouver, New York, and San Francisco — mostly startups and ops-heavy businesses that needed things to actually work, not just look good in a deck.

I'm not a consultant. I don't sell frameworks.

I come in, understand how your business actually runs, fix what's broken, and leave you with systems your team can own.

---


## Tools We Use (Because People Ask)

**Frontend & product:** Next.js, React, TypeScript, Figma

**Backend & data:** Python, FastAPI, PostgreSQL, DuckDB, ETL pipelines, APIs, scraping

**AI & ML:** LLM systems when useful, vector databases, production monitoring, PyCaret/AutoML

**Infrastructure:** Azure, Docker, Terraform

The tools matter less than the result. I use what fits the problem.

---

## Contact / CTA

If parts of this page felt uncomfortably familiar, we should probably talk.

No pressure. No sales script. Just a short call to see if there's something worth fixing.

- **Email**: maiduydungvn@gmail.com
- **LinkedIn**: (https://www.linkedin.com/in/maiduydung/)
- **Calendly**: (https://calendly.com/maiduydungvn/meeting-with-mai)

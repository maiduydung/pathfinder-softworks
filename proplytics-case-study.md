# Proplytics — Real Estate Investment Analytics Platform

## Overview

Proplytics is a data-driven real estate analytics platform that helps property investors make smarter decisions. It aggregates property data from multiple sources, runs financial models, and surfaces actionable investment metrics — turning what used to take hours of spreadsheet work into instant, confidence-scored insights.

## The Problem

Real estate investors face a fragmented data landscape. Property listings, rental estimates, market trends, school ratings, and financial projections live across dozens of disconnected sources. Evaluating a single property requires manually pulling data from Zillow, Airbnb, county records, and more — then running custom spreadsheet models to determine if the numbers actually work.

For portfolio investors analyzing dozens of properties across multiple markets, this process doesn't scale.

## What We Built

A full-stack analytics platform backed by a distributed microservice architecture that continuously ingests, validates, and enriches property data across the United States.

### For Investors

- **Instant Investment Analysis** — View ROI, cap rate, cash flow projections, and rent-to-price ratios for any property, calculated in real time
- **Dual Rental Strategy Comparison** — Side-by-side analysis of long-term rental vs. short-term (Airbnb) strategies, with occupancy rates, daily rates, and revenue projections
- **Market-Level Intelligence** — Drill into markets at the state, county, and ZIP code level to identify high-performing areas before they become obvious
- **Similar Property Discovery** — ML-powered similarity engine that finds comparable properties using weighted scoring across distance, size, price, rent, and property characteristics
- **Interactive Map Exploration** — GPU-accelerated map visualization with custom region drawing, allowing investors to define and analyze their own geographic boundaries
- **Portfolio Management** — Track owned properties, expenses, loans, and portfolio performance over time with snapshot history

### Under the Hood

The platform is composed of four core systems:

**1. Web Application**
The investor-facing Next.js application with server-side rendering, real-time search powered by Azure Cognitive Search, and interactive map visualization using Google Maps and deck.gl.

**2. Data Ingestion Pipeline**
Automated scraping infrastructure that collects property data — pricing, tax history, listing details, photos, school ratings, and more — with intelligent caching, retry logic, and fallback data sources.

**3. Data Validation & AI Enrichment**
Microservices that validate rental estimates using statistical models (median absolute deviation scoring), estimate multifamily unit counts using LLMs with web search, and assign confidence scores to every data point.

**4. Analytics Engine**
DuckDB-powered analytics layer that runs complex queries across the full property dataset — market aggregations, similarity calculations, and validation threshold computation — with in-memory performance on columnar data.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Web Application                       │
│              Next.js · TypeScript · React                │
│         Radix UI · Tailwind · deck.gl · Google Maps      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │  Data Scraper │  │  Validation  │  │   Similar     │  │
│  │  Pipeline     │  │  & AI        │  │   Properties  │  │
│  │              │  │  Enrichment  │  │   Engine      │  │
│  │  Python ·    │  │  Python ·    │  │  Python ·     │  │
│  │  Azure Func  │  │  Azure Func  │  │  FastAPI      │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬────────┘  │
│         │                 │                  │           │
├─────────┴─────────────────┴──────────────────┴───────────┤
│                    Data Layer                             │
│                                                          │
│  Azure Cosmos DB · DuckDB · Azure Cognitive Search       │
│  Azure Blob Storage · Azure Service Bus · Redis          │
└─────────────────────────────────────────────────────────┘
```

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | Next.js, TypeScript, React, Tailwind CSS, Radix UI, Framer Motion |
| **Maps & Geo** | Google Maps API, deck.gl, Turf.js, polygon-clipping |
| **Backend** | Next.js API Routes, Server Actions, TanStack Query |
| **Microservices** | Python, FastAPI, Azure Functions |
| **AI/ML** | OpenAI (unit estimation), custom similarity scoring, statistical validation models |
| **Database** | Azure Cosmos DB, DuckDB (analytics), Azure Data Tables |
| **Search** | Azure Cognitive Search |
| **Infrastructure** | Azure Blob Storage, Azure Service Bus, Azure Key Vault, Redis |
| **Payments** | Stripe |
| **Auth** | Custom OAuth implementation (Arctic/Oslo), Argon2 |
| **Monitoring** | Sentry |
| **Email** | React Email, Resend |
| **CI/CD** | GitHub Actions |

## Key Engineering Challenges

**Confidence Scoring at Scale**
Not all data sources are equally reliable. We built a statistical validation layer that scores every rental estimate using median absolute deviation analysis, giving investors a confidence level (25–100) for each data point rather than presenting unverified numbers as fact.

**Sub-Second Similarity Search**
Finding comparable properties across hundreds of thousands of records requires more than a database query. We pre-compute ZIP code spatial relationships and use DuckDB's columnar engine to run weighted multi-factor similarity calculations in memory, returning ranked results in milliseconds.

**Multi-Source Data Reconciliation**
Property data comes from multiple sources with different schemas, update frequencies, and reliability levels. The ingestion pipeline normalizes, deduplicates, and enriches records with intelligent caching (120-day windows) and automatic fallback between primary and secondary data sources.

**GPU-Accelerated Map Visualization**
Rendering thousands of property markers with real-time filtering on a map requires more than standard Google Maps. We integrated deck.gl for WebGL-powered rendering, enabling smooth interaction even when visualizing entire markets.

## Results

- Processes and maintains data on properties across multiple U.S. states
- Delivers investment analysis that previously took hours in under seconds
- Supports both individual investors and portfolio-scale analysis
- Handles dual rental strategy (short-term and long-term) comparison — a capability most platforms lack
- Continuously validates and confidence-scores data rather than presenting raw estimates

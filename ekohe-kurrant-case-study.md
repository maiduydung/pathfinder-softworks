# Kurrant — AI-Powered Business Intelligence & Investment Scoring Platform

## Overview

Kurrant is a business intelligence platform that helps investors evaluate companies at scale. We built the data infrastructure and AI systems behind it: a distributed scraping pipeline that collects company and news data from across the web, an NLP layer that enriches and classifies that data, and a machine learning scoring engine that rates companies against investor-defined criteria — turning thousands of raw data points into actionable investment signals.

## The Problem

Investors evaluating early-stage and growth companies face two bottlenecks: **data collection** and **data interpretation**.

Company information is scattered across LinkedIn, Instagram, Wantedly, StartupDB, and Japanese press release platforms. Gathering it manually doesn't scale. Once collected, the data is unstructured — raw descriptions, articles in multiple languages, inconsistent formats — and needs to be categorized, translated, and scored before it's useful for investment decisions.

The team needed a system that could continuously collect company data, enrich it with AI, and surface the most relevant opportunities based on each investor's specific criteria.

## What We Built

Five interconnected systems that form a complete data-to-decision pipeline.

### 1. Distributed Web Scraping Engine

A high-throughput scraping system that extracts structured company profiles from LinkedIn, Instagram, Wantedly, and StartupDB.

- **Async architecture** — Multiple worker processes running concurrently with async I/O, pulling jobs from a shared task queue
- **Anti-detection** — Rotating proxy providers (Luminati, PacketStream, Crawlera, Rayobyte), Chrome-like request headers, and organization-guest URL patterns to avoid bot detection
- **Resilient execution** — Automatic retries, proxy disconnection recovery, and detailed error tracking per job
- **Backend integration** — Workers pull scraping targets from and push structured results back to a Rails API, with full task history and progress tracking

### 2. Japanese News Scraping Pipeline

A production pipeline that continuously collects press releases from PR Times, Japan's largest press release distribution platform.

- **Three parallel pipelines** using a producer-consumer pattern:
  - **URL discovery** — Monitors PR Times RSS feed on a 6-second cycle, queuing new articles as they appear
  - **Article extraction** — 20 async workers scrape full articles, extracting titles, authors, publication dates, body text, categories, keywords, and images
  - **Company profiling** — Playwright-based browser workers scrape 200K+ company profiles with full JavaScript rendering
- **Runs as a systemd service** with proxy rotation, retry logic, and JST-to-UTC timestamp normalization

### 3. AI-Powered News Enrichment

An NLP middleware that processes raw articles through GPT-4o-mini to extract structured metadata.

- **Bilingual extraction** — Translates and summarizes articles in both Japanese and English
- **Multi-dimensional classification** — Categorizes each article by industry, theme (fundraising, product launch, partnership, etc.), geography (Japanese regions), and article type
- **Structured output** — Maps LLM responses to database IDs and pushes enriched data to the Kurrant API
- **Integrated with the scraping pipeline** — Called automatically from the Rails backend when new articles arrive

### 4. Revenue Stream Classifier

A machine learning system that automatically determines whether a company has recurring or non-recurring revenue based on its business description.

- **Dual-model architecture** — RoBERTa for English descriptions, SetFit for Japanese, both exported to ONNX for optimized inference
- **Continuous daemon mode** — Polls the database every 2 minutes, detecting when company descriptions change and re-classifying automatically
- **FastAPI endpoint** — On-demand prediction for individual companies with async database connection pooling
- **Batch processing** — Handles data from four sources (Chrome Extension, normalized records, web scraper, Japanese documents) with configurable batch sizes

### 5. Investment Scoring Engine

An AutoML-powered scoring system that rates companies against investor-defined investment profiles.

- **Investor-specific models** — Each investment profile (IP) defines criteria: target industries, funding stages, employee counts, founding years, countries, and funding types with custom weights
- **Automated model selection** — PyCaret trains and compares multiple classifiers (LightGBM, XGBoost, CatBoost, and others), automatically selecting the best performer
- **Four-tier rating system** — Companies are scored as Love, Like, Later, or Pass with confidence scores
- **Batch prediction at scale** — Processes the entire company database in batches of 1,000, storing ratings per investment profile
- **FastAPI service** — Async model training (with concurrency limits) and on-demand scoring endpoints

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Kurrant Platform (Rails)                   │
├──────────┬──────────┬──────────┬───────────┬─────────────────┤
│          │          │          │           │                  │
│  ┌───────┴──────┐  │  ┌───────┴───────┐   │  ┌────────────┐ │
│  │ HTTP Scraper │  │  │ News Summary  │   │  │ Investment │ │
│  │              │  │  │ (GPT-4o-mini) │   │  │ Scoring    │ │
│  │ LinkedIn     │  │  │               │   │  │ Engine     │ │
│  │ Instagram    │  │  │ LangChain ·   │   │  │            │ │
│  │ Wantedly     │  │  │ Bilingual NLP │   │  │ PyCaret ·  │ │
│  │ StartupDB    │  │  └───────────────┘   │  │ AutoML     │ │
│  └──────────────┘  │                      │  └────────────┘ │
│                    │                      │                  │
│  ┌─────────────────┴───┐  ┌───────────────┴──────────────┐  │
│  │ News Scraper        │  │ Revenue Stream Classifier    │  │
│  │                     │  │                              │  │
│  │ PR Times · RSS ·    │  │ RoBERTa · SetFit · ONNX     │  │
│  │ Playwright · 20     │  │ Daemon + API modes           │  │
│  │ async workers       │  │                              │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                       Data Layer                             │
│          PostgreSQL · Proxy Network · Model Storage          │
└──────────────────────────────────────────────────────────────┘
```

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Scraping** | Python, aiohttp, asyncio, BeautifulSoup4, Playwright, lxml |
| **Proxy Management** | Luminati, PacketStream, Crawlera, Rayobyte, Apify |
| **NLP / AI** | OpenAI GPT-4o-mini, LangChain, RoBERTa, SetFit |
| **ML / AutoML** | PyCaret, LightGBM, XGBoost, CatBoost, scikit-learn, ONNX Runtime |
| **APIs** | FastAPI, Uvicorn |
| **Database** | PostgreSQL (psycopg2, asyncpg) |
| **Data Processing** | Pandas, NumPy, SciPy, Dask |
| **Deployment** | Docker, systemd, Capistrano, Mina |
| **Monitoring** | Sentry |
| **Platform** | Rails backend (Kurrant core) |

## Key Engineering Challenges

**Scraping at Scale Without Getting Blocked**
Social platforms actively fight scraping. We built a multi-provider proxy rotation system, mimicked Chrome request signatures, and used organization-guest URL patterns to reduce detection. The async worker architecture allows high throughput while staying under rate limits — and when individual requests fail, the retry system handles recovery without losing jobs.

**Bilingual NLP Across Japanese and English**
The platform processes content in both Japanese and English, which rules out single-model approaches. The news enrichment pipeline uses GPT-4o-mini with carefully engineered prompts to handle both languages in a single pass. The revenue classifier uses separate models — RoBERTa for English, SetFit for Japanese — each optimized for its language and exported to ONNX for fast inference.

**Investor-Specific Model Training at Scale**
Every investor has different criteria. Rather than building one generic scoring model, the system trains a separate classifier per investment profile using PyCaret's AutoML. This means the model selection, feature weighting, and rating thresholds are all tuned to what each investor actually cares about — not a one-size-fits-all score.

**Continuous Data Freshness**
Company data goes stale fast. The revenue classifier runs as a daemon that watches for description changes and re-classifies automatically. The news scraper monitors RSS feeds on a 6-second cycle. The scoring engine can retrain models on demand when investment criteria change. The entire pipeline is designed to keep data current without manual intervention.

## Results

- Continuously scrapes and enriches company profiles from 40+ social platforms and Japan's largest press release distributor
- Processes articles bilingually (Japanese/English) with automated industry, theme, and geography classification
- Classifies company revenue models at scale using dual-language ML models with sub-second inference
- Generates personalized investment ratings for every company in the database, tailored to each investor's specific criteria
- Fully automated pipeline — from raw web data to scored investment opportunities — with no manual processing required

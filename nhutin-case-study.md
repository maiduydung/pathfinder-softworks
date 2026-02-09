# Nhu Tin — Container Manufacturing Operations Platform

## Overview

Nhu Tin is an internal operations platform built for a Vietnamese container and trailer manufacturing company. It automates three core workflows that were previously manual and error-prone: optimizing material usage for each build order, tracking warehouse inventory, and processing electronic invoices — all unified in a single system tailored to the business's specific constraints.

## The Problem

Container and trailer manufacturing involves tight margins. For every customer order, the operations team needs to answer: *given the receipt price the customer is paying and our target profit margin, what's the optimal combination of materials to use?*

This calculation depends on container type, dimensions, walking floor model, material specifications, current inventory levels, and dozens of weight constraints — and it changes with every order. The team was doing this manually, which meant slow quoting, inconsistent margins, and no visibility into whether they were actually hitting profitability targets.

On top of that, inventory tracking lived in Excel spreadsheets on Google Drive, updated manually with Vietnamese-language reports. There was no centralized system connecting what was in the warehouse to what was needed for each build.

## What We Built

A three-part system: an optimization engine that calculates the best Bill of Materials for any order, an inventory pipeline that automatically ingests warehouse data, and a web application that ties it all together for the operations team.

### Bill of Materials Optimizer

The core of the system is a 4-phase optimization algorithm that takes an order's specifications and returns the optimal material list:

1. **Feasibility Check** — Validates that the target weight and margin constraints are achievable given current inventory and pricing before attempting optimization
2. **Fixed Items** — Adds deterministic components that every build requires (walking floor, aluminum bars, hydraulic pump, oil, consumables)
3. **Weight Filling** — Reaches the minimum weight target using structural materials (steel types, sheets, plates), selecting the most cost-efficient combination
4. **Margin Tuning** — Adjusts the material mix to hit the target profit margin, swapping cheaper/heavier items for more expensive/lighter alternatives when needed

The optimizer handles multiple container types (20ft, 40ft, Mooc Long trailers, truck bodies), walking floor models (R2DX, KSD, KMD), and slat specifications — with weight targets that scale by container length (3.5t for 6m up to 8t for 15m).

When strict constraints can't be met, the system falls back to a best-effort mode and returns actionable warnings explaining what needs to change.

### Automated Inventory Ingestion

The warehouse team continues using their familiar Excel workflow. The system automatically pulls inventory reports from Google Drive, parses the Vietnamese-language spreadsheets, and ingests them into a structured database:

- **Intelligent item classification** — Automatically categorizes items into 20+ types (steel variants, walking floor models, hydraulic pumps, fuels, fasteners) with built-in typo correction for common Vietnamese input errors
- **Unit normalization** — Standardizes mixed units (kg, lit, cai, bo) into a consistent format
- **Price history tracking** — Extracts unit prices from import/export transactions to build pricing history over time
- **Daily snapshots** — Tracks initial, imported, exported, and final quantities and values per item per day

### Operations Web Application

A web interface where the operations team can:

- **Calculate build orders** — Input container specs, receipt price, and target margin; get back an optimized BOM with cost breakdown, weight analysis, and constraint validation
- **Visualize weight constraints** — See at a glance whether a build hits weight limits, with color-coded progress bars showing min/base max/effective max ranges
- **Receive intelligent guidance** — Get real-time suggestions when parameters need adjustment (e.g., "reduce target margin to 15% to stay within weight limits")
- **Process invoices** — View and parse Vietnamese electronic invoices (XML and PDF), extract line items, seller/buyer info, and VAT details
- **Export reports** — Generate results in Excel, CSV, JSON, or PDF for record-keeping and customer quotes
- **Manage inventory** — Upload Excel files to trigger database ingestion, with immediate feedback on record counts

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│              Operations Web Application                  │
│            Reflex (Python) · React · Tailwind            │
│          Google OAuth · Multi-format Export               │
├─────────────────────────────────────────────────────────┤
│                     Caddy Reverse Proxy                  │
├──────────────┬──────────────────┬────────────────────────┤
│              │                  │                         │
│  ┌───────────┴──┐  ┌───────────┴──┐  ┌────────────────┐ │
│  │  BOM         │  │  Inventory   │  │  Data          │ │
│  │  Optimizer   │  │  Ingestion   │  │  Visualization │ │
│  │              │  │              │  │                │ │
│  │  Python ·    │  │  Python ·    │  │  Python ·      │ │
│  │  Azure Func  │  │  Azure Func  │  │  Plotly        │ │
│  └──────┬───────┘  └──────┬───────┘  └───────┬────────┘ │
│         │                 │                   │          │
├─────────┴─────────────────┴───────────────────┴──────────┤
│                      Data Layer                          │
│                                                          │
│       PostgreSQL · Google Drive · Azure Blob Storage     │
└──────────────────────────────────────────────────────────┘
```

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | Reflex (Python-to-React), Tailwind CSS |
| **Backend** | Python, FastAPI, Azure Functions |
| **Database** | PostgreSQL |
| **Authentication** | Google OAuth 2.0 |
| **Data Sources** | Google Drive API (inventory Excel files), XML e-invoices |
| **Visualization** | Plotly, Gradio |
| **Export** | openpyxl (Excel), reportlab (PDF), CSV, JSON |
| **Infrastructure** | Azure Container Apps, Azure Container Registry, Docker |
| **Reverse Proxy** | Caddy (SSL termination, routing) |
| **Deployment** | Docker multi-platform builds, Azure Container Apps |

## Key Engineering Challenges

**Domain-Specific Optimization Under Multiple Constraints**
The BOM optimizer isn't a generic solver — it encodes deep domain knowledge about container manufacturing. Weight targets vary by container length, some items are mandatory regardless of cost, and margin tuning requires understanding which material swaps are physically valid. The 4-phase approach ensures feasibility is confirmed before any optimization begins, and graceful degradation returns the best possible result when perfect constraints can't be met.

**Vietnamese Language Data Processing**
Inventory reports arrive in Vietnamese with inconsistent formatting, abbreviated item names, and frequent typos. The normalizer handles all of this — mapping "riidx" to "r2dx", parsing dates in "Ngay DD thang MM nam YYYY" format, and normalizing Vietnamese units — without requiring the warehouse team to change how they work.

**Actionable Guidance System**
Rather than just returning "error: weight exceeded," the system analyzes the constraint violation and generates specific, actionable suggestions — "reduce target margin from 20% to 15%" or "switch from 112mm to 97mm slats to reduce weight by 340kg." This turns a technical optimization failure into a decision the operations team can act on immediately.

**Zero-Disruption Adoption**
The warehouse team keeps using Excel on Google Drive. The invoicing team keeps using their existing XML e-invoice format. The system wraps around existing workflows rather than replacing them, which meant the team could adopt it without retraining or process changes.

## Results

- Replaced manual BOM calculations that took 30+ minutes per order with instant, optimized results
- Automated inventory tracking that previously required manual data entry from Excel spreadsheets
- Unified invoice processing, build optimization, and inventory management into a single platform
- Built-in profit margin targeting ensures every build order meets the company's financial goals
- Operations team adopted the system with zero workflow disruption — existing Excel and invoice formats continue to work unchanged

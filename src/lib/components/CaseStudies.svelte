<script lang="ts">
	let expanded = $state<number | null>(null);

	function toggle(index: number) {
		expanded = expanded === index ? null : index;
	}

	const studies = [
		{
			title: "Proplytics",
			subtitle: "SaaS Platform",
			metric: "Hours → Seconds",
			metricDetail: "per investment analysis",
			summary:
				"A real estate investment platform that surfaces ROI, cap rate, cash flow, and financial breakdowns per property — metrics even Zillow doesn't offer. Investors go from hours of spreadsheet modeling to instant, confidence-scored decisions.",
			problem:
				"Real estate investors waste hours pulling data from Zillow, Airbnb, county records, and running spreadsheet models to evaluate a single property. For portfolio investors analyzing dozens of properties across markets, this process doesn't scale.",
			solution:
				"Full-stack SaaS platform with automated data ingestion from multiple sources, real-time financial modeling (ROI, cap rate, cash flow, rent-to-price), dual rental strategy comparison, ML-powered similar property discovery, and GPU-accelerated map visualization.",
			results: [
				"Investment analysis that took hours delivered in under 3 seconds",
				"Financial metrics (ROI, cap rate, cash flow) no competitor surfaces",
				"Confidence scoring on every data point — no unverified guesses",
				"Property financial breakdowns: mortgage, PMI, taxes, insurance, year-by-year projections",
			],
			tech: "Next.js, TypeScript, Python, FastAPI, Azure, DuckDB, Stripe",
		},
		{
			title: "AI-Powered Deal Sourcing Tool",
			subtitle: "AI Product",
			metric: "Zero",
			metricDetail: "manual processing needed",
			summary:
				"An automated pipeline for venture capital that scrapes company data across 40+ platforms, processes bilingual content (Japanese & English), and delivers personalized investment scores — completely hands-off.",
			problem:
				"VC investors evaluating early-stage companies can't scale manual research. Company information is scattered across social platforms and press releases in multiple languages. By the time they finish researching, the deal window has closed.",
			solution:
				"Five interconnected systems: distributed web scraping, bilingual news pipeline (Japanese/English), AI-powered enrichment with NLP, revenue stream classifier, and investor-specific scoring engine with personalized ratings.",
			results: [
				"Fully automated pipeline — raw data to scored opportunities",
				"Bilingual processing across Japanese and English sources",
				"Personalized investment ratings matching each investor's criteria",
				"Deals surfaced before competitors even finish their research",
			],
			tech: "Ruby on Rails, Python, FastAPI, Playwright, Hugging Face, PostgreSQL, Docker",
		},
		{
			title: "Nhu Tin",
			subtitle: "Digital Transformation",
			metric: "30 min → Instant",
			metricDetail: "per build calculation",
			summary:
				"Replaced 30-minute manual material calculations with instant, constraint-aware optimization for a container manufacturer — protecting margins on every order without changing their existing workflow.",
			problem:
				"Container manufacturing runs on razor-thin margins. Every order required manual material calculations taking 30+ minutes — leading to slow quoting, inconsistent margins, and zero visibility into profitability. Everything lived in Vietnamese-language Excel spreadsheets.",
			solution:
				"Three-part system: Bill of Materials optimizer with 4-phase algorithm, automated inventory ingestion from existing Google Drive Excel files, and a unified operations web application — all without disrupting their existing workflow.",
			results: [
				"30+ minute calculations replaced with instant results",
				"Built-in profit margin targeting on every build order",
				"Automated inventory tracking — no more manual Excel data entry",
				"Zero workflow disruption — kept their existing Excel formats",
			],
			tech: "Python, Reflex, FastAPI, Azure Functions, PostgreSQL, Google Drive API",
		},
	];
</script>

<section id="work" class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl">
			<h2 class="text-3xl font-bold text-heading md:text-4xl">
				Projects that delivered
			</h2>
			<p class="mt-4 text-lg text-text">
				Every project here solved a real business problem and produced a
				measurable outcome.
			</p>
		</div>

		<div class="space-y-6">
			{#each studies as study, i}
				<div
					class="rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
				>
					<button
						class="w-full cursor-pointer p-6 text-left md:p-8"
						onclick={() => toggle(i)}
						aria-expanded={expanded === i}
					>
						<div class="flex items-start justify-between gap-4">
							<div class="flex-1">
								<div class="flex flex-wrap items-center gap-3">
									<h3
										class="text-xl font-semibold text-heading"
									>
										{study.title}
									</h3>
									<span
										class="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary"
									>
										{study.subtitle}
									</span>
								</div>
								<div class="mt-3 flex items-baseline gap-2">
									<span
										class="text-2xl font-bold text-primary"
										>{study.metric}</span
									>
									<span class="text-sm text-text"
										>{study.metricDetail}</span
									>
								</div>
								<p class="mt-2 text-text">{study.summary}</p>
							</div>
							<span
								class="mt-1 shrink-0 text-primary transition-transform duration-200 {expanded ===
								i
									? 'rotate-180'
									: ''}"
							>
								<svg
									class="h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</span>
						</div>
					</button>

					{#if expanded === i}
						<div
							class="border-t border-gray-100 px-6 pb-6 md:px-8 md:pb-8"
						>
							<div class="grid gap-6 pt-6 md:grid-cols-3">
								<div>
									<h4
										class="text-sm font-semibold uppercase tracking-wide text-primary"
									>
										The Problem
									</h4>
									<p class="mt-2 text-sm text-text">
										{study.problem}
									</p>
								</div>
								<div>
									<h4
										class="text-sm font-semibold uppercase tracking-wide text-primary"
									>
										What We Built
									</h4>
									<p class="mt-2 text-sm text-text">
										{study.solution}
									</p>
								</div>
								<div>
									<h4
										class="text-sm font-semibold uppercase tracking-wide text-primary"
									>
										Outcomes
									</h4>
									<ul class="mt-2 space-y-1">
										{#each study.results as result}
											<li
												class="flex items-start gap-2 text-sm text-text"
											>
												<svg
													class="mt-0.5 h-4 w-4 shrink-0 text-primary"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M4.5 12.75l6 6 9-13.5"
													/>
												</svg>
												<span>{result}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
							<div class="mt-4 border-t border-gray-50 pt-4">
								<p class="text-xs text-text/60">
									<span class="font-medium">Tech:</span>
									{study.tech}
								</p>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

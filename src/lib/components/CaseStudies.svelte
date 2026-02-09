<script lang="ts">
	let expanded = $state<number | null>(null);

	function toggle(index: number) {
		expanded = expanded === index ? null : index;
	}

	const studies = [
		{
			title: "Proplytics",
			subtitle: "Real Estate Investment Analytics",
			summary:
				"Zillow-style property analytics with ROI tracking — turns hours of spreadsheet work into instant, confidence-scored investment insights.",
			problem:
				"Real estate investors face a fragmented data landscape. Property listings, rental estimates, market trends, and financial projections live across dozens of disconnected sources. Evaluating a single property requires manually pulling data from multiple platforms — then running custom spreadsheet models.",
			solution:
				"A full-stack analytics platform that continuously ingests, validates, and enriches property data. Instant ROI analysis, dual rental strategy comparison, ML-powered similar property discovery, and GPU-accelerated map visualization.",
			results: [
				"Investment analysis that took hours now delivered in seconds",
				"Confidence scoring on every data point — not unverified estimates",
				"Dual rental strategy comparison most platforms lack",
				"Property data across multiple U.S. states",
			],
			tech: "Next.js, TypeScript, Python, FastAPI, Azure, DuckDB",
		},
		{
			title: "AI-Powered Deal Sourcing Tool",
			subtitle: "VC Investment Intelligence",
			summary:
				"Automated deal sourcing pipeline for venture capital — scrapes, enriches, and scores companies across multiple platforms with personalized investment ratings.",
			problem:
				"Investors evaluating early-stage companies face two bottlenecks: data collection and data interpretation. Company information is scattered across social platforms and press releases in multiple languages. Gathering and scoring it manually doesn't scale.",
			solution:
				"Five interconnected systems: distributed web scraping across 4+ platforms, bilingual news pipeline, AI-powered enrichment with NLP, revenue stream classifier, and investor-specific scoring engine with personalized ratings.",
			results: [
				"Continuously scrapes and enriches company profiles from 4+ platforms",
				"Bilingual processing — Japanese and English — fully automated",
				"Personalized investment ratings per investor's criteria",
				"Zero manual processing from raw data to scored opportunities",
			],
			tech: "Ruby on Rails, Python, FastAPI, Playwright, Hugging Face, PostgreSQL, Docker",
		},
		{
			title: "Nhu Tin",
			subtitle: "Manufacturing Operations",
			summary:
				"Margin protection via container build optimization — replaced 30-minute manual calculations with instant, constraint-aware material planning.",
			problem:
				"Container manufacturing involves tight margins. For every order, the team needed to manually calculate optimal materials — slow quoting, inconsistent margins, no visibility into profitability. Inventory lived in Excel spreadsheets with Vietnamese-language reports.",
			solution:
				"A three-part system: Bill of Materials optimizer with 4-phase algorithm, automated inventory ingestion from Google Drive Excel files, and an operations web application unifying everything.",
			results: [
				"30+ minute manual calculations replaced with instant results",
				"Automated inventory tracking from manual Excel data entry",
				"Built-in profit margin targeting on every build order",
				"Zero workflow disruption — existing Excel formats unchanged",
			],
			tech: "Python, Reflex, FastAPI, Azure Functions, PostgreSQL, Google Drive API",
		},
	];
</script>

<section id="work" class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl">
			<h2 class="text-3xl font-bold text-heading md:text-4xl">
				Work we've done
			</h2>
			<p class="mt-4 text-lg text-text">
				Real problems, real systems, real results. Here are a few
				examples.
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
							<div>
								<div class="flex flex-wrap items-center gap-3">
									<h3
										class="text-xl font-semibold text-heading"
									>
										{study.title}
									</h3>
									<span
										class="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary"
										>{study.subtitle}</span
									>
								</div>
								<p class="mt-3 text-text">{study.summary}</p>
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
										Results
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
													><path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M4.5 12.75l6 6 9-13.5"
													/></svg
												>
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

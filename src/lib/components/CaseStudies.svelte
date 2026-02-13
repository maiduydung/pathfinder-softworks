<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { slide } from "svelte/transition";

	let expanded = $state<number | null>(null);

	function toggle(index: number) {
		expanded = expanded === index ? null : index;
	}

	const studies = [
		{
			title: "Proplytics",
			link: "https://www.linkedin.com/company/proplytics/",
			subtitle: "SaaS Platform",
			metric: "Hours → Seconds",
			metricDetail: "per investment decision",
			summary:
				"Hours of spreadsheet modeling replaced with instant, confidence-scored investment analysis.",
			problem:
				"Investors pulled data from a dozen sources and ran manual spreadsheet models for every property. Didn't scale.",
			solution:
				"A platform that gathers data automatically, runs financial models in real time, and scores every data point for reliability.",
			results: [
				"Hours of analysis reduced to seconds",
				"Financial insights no competitor offers",
				"Confidence scoring on every data point",
			],
		},
		{
			title: "Investment Intelligence Platform",
			link: null,
			subtitle: "AI & Data",
			metric: "40+",
			metricDetail: "data sources, zero manual work",
			summary:
				"Manual deal research across 40+ platforms and two languages, fully automated from start to finish.",
			problem:
				"VC investors couldn't research fast enough. Data scattered across dozens of platforms in multiple languages. Best deals gone before research finished.",
			solution:
				"An automated system that monitors 40+ sources, processes Japanese and English content, and delivers scored opportunities to each investor.",
			results: [
				"Raw data to scored opportunities, fully automated",
				"40+ sources consolidated into one view",
				"Deals surfaced before competitors see them",
			],
		},
		{
			title: "Nhu Tin",
			link: "https://nhutin.com/",
			subtitle: "Digital Transformation",
			metric: "30 min → Instant",
			metricDetail: "per customer quote",
			summary:
				"30-minute manual Excel calculations replaced with instant, margin-protected quotes.",
			problem:
				"Every order required 30+ minutes of manual material calculations in Excel. Slow quoting, inconsistent margins, no visibility into profitability.",
			solution:
				"An operations platform that optimizes materials instantly, tracks inventory automatically, and protects margins on every order.",
			results: [
				"Instant quotes instead of 30-minute calculations",
				"Profit margins protected automatically",
				"Zero workflow disruption for the team",
			],
		},
	];
</script>

<section id="work" class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl" use:inview>
			<h2 class="text-3xl font-bold text-heading md:text-4xl">
				Projects we delivered
			</h2>
			<p class="mt-4 text-lg text-text">
				Every project here solved a real business problem and produced a
				measurable outcome.
			</p>
		</div>

		<div class="space-y-6">
			{#each studies as study, i}
				<div
					class="rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
					use:inview={i * 120}
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
										{#if study.link}
											<a
												href={study.link}
												target="_blank"
												rel="noopener noreferrer"
												class="underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary/60"
												onclick={(e) =>
													e.stopPropagation()}
												>{study.title}</a
											>
										{:else}
											{study.title}
										{/if}
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
								class="mt-1 shrink-0 text-primary transition-transform duration-300 {expanded ===
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
							transition:slide={{ duration: 350 }}
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
										Our Solution
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
												<span>{result.text}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

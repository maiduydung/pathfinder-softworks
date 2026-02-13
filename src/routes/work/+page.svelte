<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { caseStudies } from "$lib/data/case-studies";
	import CTABanner from "$lib/components/CTABanner.svelte";
</script>

<svelte:head>
	<title>Our Work — Pathfinder Softworks</title>
	<meta
		name="description"
		content="Case studies of real projects we delivered with measurable business outcomes. SaaS platforms, AI systems, and digital transformation."
	/>
</svelte:head>

<section class="mx-auto max-w-[1400px] px-6 pt-12 pb-8 lg:pt-20">
	<div class="max-w-2xl" use:inview>
		<p class="text-sm font-bold uppercase tracking-widest text-primary">Our Work</p>
		<h1 class="mt-3 font-bold text-5xl leading-snug tracking-tight text-foreground lg:text-6xl">
			Projects we delivered
		</h1>
		<p class="mt-3 text-lg leading-relaxed text-light">
			Every project solved a real business problem and produced a measurable outcome.
		</p>
	</div>
</section>

<section class="my-8 lg:my-12">
	<div class="mx-auto max-w-[1400px] px-6 space-y-6">
		{#each caseStudies as study, i}
			<a
				href="/work/{study.slug}"
				class="group block overflow-hidden rounded-3xl border border-border transition-all hover:shadow-lg"
				use:inview={i * 100}
			>
				<div class="grid md:grid-cols-2">
					<div class="flex flex-col justify-center p-6 lg:p-10">
						<span class="text-xs font-medium text-primary">{study.subtitle}</span>
						<h2 class="mt-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-3xl">
							{study.title}
						</h2>
						<p class="mt-3 text-sm leading-relaxed text-light">{study.summary}</p>

						<div class="mt-6 flex gap-6">
							{#each study.stats as stat}
								<div>
									<p class="text-2xl font-bold tabular-nums text-primary">{stat.value}</p>
									<p class="text-xs text-light">{stat.label}</p>
								</div>
							{/each}
						</div>

						<div class="mt-6 flex flex-wrap gap-1.5">
							{#each study.tech as tech}
								<span class="rounded-full bg-muted px-2.5 py-0.5 text-xs text-light">{tech}</span>
							{/each}
						</div>

						<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
							Read case study
							<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
							</svg>
						</span>
					</div>

					<div class="relative bg-muted {i % 2 === 1 ? 'md:order-first' : ''}">
						{#if study.image}
							<img src={study.image} alt="{study.title} screenshot" class="h-full w-full object-cover object-left-top" />
						{:else}
							<div class="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 p-8">
								{#each study.stats as stat}
									<div class="w-full max-w-[260px] rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-sm">
										<p class="text-3xl font-bold tabular-nums text-primary">{stat.value}</p>
										<p class="mt-0.5 text-xs text-light">{stat.label}</p>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<CTABanner
	title="Have a project in mind?"
	subtitle="Tell us the outcome you need. We'll tell you how we'd get there."
/>

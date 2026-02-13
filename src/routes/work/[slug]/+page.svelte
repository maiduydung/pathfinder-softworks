<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import CTABanner from "$lib/components/CTABanner.svelte";

	let { data } = $props();
	const study = $derived(data.study);
	const nextStudy = $derived(data.nextStudy);
</script>

<svelte:head>
	<title>{study.title} — Case Study | Pathfinder Softworks</title>
	<meta name="description" content={study.summary} />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:pt-16">
	<a href="/work" class="inline-flex items-center gap-1.5 text-sm text-light transition-colors hover:text-primary">
		<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
		</svg>
		All projects
	</a>

	<div class="mt-6 max-w-3xl" use:inview>
		<span class="text-xs font-medium text-primary">{study.subtitle}</span>
		<h1 class="mt-2 font-bold text-4xl leading-snug tracking-tight text-foreground lg:text-5xl">
			{study.title}
		</h1>
		<p class="mt-3 text-lg leading-relaxed text-light">{study.summary}</p>
		{#if study.link}
			<a href={study.link} target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline">
				Visit project
				<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
				</svg>
			</a>
		{/if}
	</div>

	<!-- Metric -->
	<div class="mt-8 inline-flex items-baseline gap-3 rounded-3xl border border-border bg-white px-6 py-4" use:inview={100}>
		<span class="font-bold text-4xl tabular-nums text-primary">{study.metric}</span>
		<span class="text-light">{study.metricDetail}</span>
	</div>
</section>

<!-- Problem / Solution -->
<section class="my-12 lg:my-16">
	<div class="mx-auto max-w-[1400px] px-6">
		<div class="grid gap-8 md:grid-cols-2">
			<div class="rounded-3xl border border-border p-6 lg:p-8" use:inview>
				<p class="text-xs font-bold uppercase tracking-widest text-primary">The Problem</p>
				<h2 class="mt-2 font-bold text-xl text-foreground">What wasn't working</h2>
				<p class="mt-3 leading-relaxed text-light">{study.problem}</p>
			</div>
			<div class="rounded-3xl border border-border p-6 lg:p-8" use:inview={100}>
				<p class="text-xs font-bold uppercase tracking-widest text-primary">Our Solution</p>
				<h2 class="mt-2 font-bold text-xl text-foreground">What we built</h2>
				<p class="mt-3 leading-relaxed text-light">{study.solution}</p>
			</div>
		</div>
	</div>
</section>

<!-- Results -->
<section class="my-12 lg:my-16">
	<div class="mx-auto max-w-[1400px] px-6">
		<p class="text-xs font-bold uppercase tracking-widest text-primary" use:inview>Results</p>
		<div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
			{#each study.results as result, i}
				<div class="rounded-3xl border border-border p-5" use:inview={i * 60}>
					<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
					<p class="mt-2 text-sm font-medium text-foreground">{result}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Tech -->
<section class="my-12 lg:my-16">
	<div class="mx-auto max-w-[1400px] px-6">
		<p class="text-xs font-bold uppercase tracking-widest text-primary" use:inview>Built with</p>
		<div class="mt-3 flex flex-wrap gap-2" use:inview={60}>
			{#each study.tech as tech}
				<span class="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground">{tech}</span>
			{/each}
		</div>
	</div>
</section>

<!-- Next Project -->
<section class="border-t border-border py-10 lg:py-14">
	<div class="mx-auto max-w-[1400px] px-6 text-center" use:inview>
		<p class="text-sm text-light">Next project</p>
		<a href="/work/{nextStudy.slug}" class="mt-1 inline-flex items-center gap-2 font-bold text-2xl text-foreground transition-colors hover:text-primary lg:text-3xl">
			{nextStudy.title}
			<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
			</svg>
		</a>
	</div>
</section>

<CTABanner />

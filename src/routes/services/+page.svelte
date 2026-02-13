<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { services, processSteps, industries, techStack } from "$lib/data/services";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	import CTABanner from "$lib/components/CTABanner.svelte";
	import { techUrls } from "$lib/data/tech-urls";

	const iconPaths: Record<string, string> = {
		globe: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
		bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
		cpu: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z',
		terminal: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
	};
</script>

<svelte:head>
	<title>Services — Pathfinder Softworks</title>
	<meta name="description" content="SaaS products, digital transformation, AI & data intelligence, and custom business software. Built to deliver measurable outcomes." />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-[1400px] px-6 pt-12 pb-8 lg:pt-20">
	<div class="max-w-2xl" use:inview>
		<p class="text-sm font-bold uppercase tracking-widest text-primary">Services</p>
		<h1 class="mt-3 font-bold text-5xl leading-snug tracking-tight text-foreground lg:text-6xl">What we build</h1>
		<p class="mt-3 text-lg leading-relaxed text-light">
			Every engagement starts with the outcome you need. We work backwards to build it.
		</p>
	</div>
</section>

<!-- Services -->
<section class="my-12 lg:my-16">
	<div class="mx-auto max-w-[1400px] px-6">
		<div class="grid gap-6 md:grid-cols-2">
			{#each services as service, i}
				<div class="flex flex-col rounded-3xl border border-border p-6 lg:p-8" use:inview={i * 80}>
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
						<svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d={iconPaths[service.icon]} />
						</svg>
					</div>
					<h2 class="mt-4 font-bold text-xl text-foreground lg:text-2xl">{service.title}</h2>
					<p class="mt-1 text-sm font-medium text-primary">{service.outcome}</p>
					<p class="mt-3 text-sm leading-relaxed text-light">{service.description}</p>

					<ul class="mt-auto flex flex-col gap-2 border-t border-border pt-5 mt-5">
						{#each service.items as item}
							<li class="flex items-center gap-2.5 text-sm text-foreground">
								<svg class="h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
								</svg>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process Steps -->
<section class="my-16 lg:my-24">
	<div class="mx-auto max-w-[1400px] px-6">
		<SectionHeader title="How we work" subtitle="Outcome-first, every step of the way." />
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as step, i}
				<div class="relative" use:inview={i * 80}>
					<span class="font-bold text-5xl text-primary/15">{step.number}</span>
					<h3 class="mt-1 font-bold text-lg text-foreground">{step.title}</h3>
					<p class="mt-1 text-sm text-light">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Industries -->
<section class="my-16 lg:my-24">
	<div class="mx-auto max-w-[1400px] px-6">
		<SectionHeader title="Industries we serve" subtitle="We've built production systems for teams across these sectors." />
		<div class="flex flex-wrap gap-3">
			{#each industries as industry, i}
				<span
					class="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground"
					use:inview={i * 60}
				>{industry}</span>
			{/each}
		</div>
	</div>
</section>

<!-- Tech Stack -->
<section class="my-16 lg:my-24">
	<div class="mx-auto max-w-[1400px] px-6">
		<SectionHeader title="Our stack" subtitle="The tools matter less than the result, but here's what we work with." />
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each techStack as category, i}
				<div class="rounded-3xl border border-border p-5" use:inview={i * 60}>
					<h3 class="text-xs font-bold uppercase tracking-widest text-primary">{category.title}</h3>
					<div class="mt-3 flex flex-wrap gap-1.5">
						{#each category.tools as tool}
							{#if techUrls[tool]}
								<a href={techUrls[tool]} target="_blank" rel="noopener noreferrer" class="rounded-full bg-muted px-2.5 py-0.5 text-sm text-light transition-colors hover:bg-primary/10 hover:text-primary">{tool}</a>
							{:else}
								<span class="rounded-full bg-muted px-2.5 py-0.5 text-sm text-light">{tool}</span>
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<CTABanner />

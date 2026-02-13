<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { caseStudies } from "$lib/data/case-studies";
	import CTABanner from "$lib/components/CTABanner.svelte";
</script>

<svelte:head>
	<title>Our Work — Pathfinder Softworks</title>
	<meta
		name="description"
		content="Case studies of real Projects we delivered measurable business outcomes. SaaS platforms, AI systems, and digital transformation."
	/>
</svelte:head>

<section class="mx-auto max-w-[1400px] px-6 pt-12 pb-8 lg:pt-20">
	<div class="max-w-2xl" use:inview>
		<p class="text-sm font-bold uppercase tracking-widest text-primary">
			Our Work
		</p>
		<h1
			class="mt-3 font-bold text-5xl leading-snug tracking-tight text-foreground lg:text-6xl"
		>
			Projects we delivered
		</h1>
		<p class="mt-3 text-lg leading-relaxed text-light">
			Every project solved a real business problem and produced a
			measurable outcome.
		</p>
	</div>
</section>

<section class="my-8 lg:my-12">
	<div class="mx-auto max-w-[1400px] px-6">
		<div class="grid border-t border-border lg:grid-cols-2">
			{#each caseStudies as study, i}
				<a
					href="/work/{study.slug}"
					class="group border-b border-border px-6 py-8 transition-colors hover:bg-gray-50/50 lg:odd:border-r lg:py-10"
					use:inview={i * 80}
				>
					<div
						class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
					>
						<div class="flex-1">
							<span class="text-xs font-medium text-primary"
								>{study.subtitle}</span
							>
							<h2
								class="mt-1 font-bold text-2xl text-foreground transition-colors group-hover:text-primary"
							>
								{study.title}
							</h2>
							<p class="mt-2 text-sm leading-relaxed text-light">
								{study.summary}
							</p>
							<div class="mt-3 flex flex-wrap gap-1.5">
								{#each study.tech as tech}
									<span
										class="rounded-full bg-muted px-2.5 py-0.5 text-xs text-light"
										>{tech}</span
									>
								{/each}
							</div>
						</div>
						<div class="flex-shrink-0 md:text-right">
							<span
								class="font-bold text-3xl tabular-nums text-primary"
								>{study.metric}</span
							>
							<p class="text-sm text-light">
								{study.metricDetail}
							</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<CTABanner
	title="Have a project in mind?"
	subtitle="Tell us the outcome you need. We'll tell you how we'd get there."
/>

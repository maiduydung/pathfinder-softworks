<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { caseStudies } from "$lib/data/case-studies";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<section class="my-16 lg:my-24">
	<div class="mx-auto max-w-[1400px] px-6">
		<SectionHeader
			title="Projects we delivered"
			subtitle="Every project here solved a real business problem and produced a measurable outcome."
		/>

		<!-- Xyflow-style content grid with borders -->
		<div class="grid border-t border-border lg:grid-cols-3">
			{#each caseStudies as study, i}
				<a
					href="/work/{study.slug}"
					class="group border-b border-border px-6 py-8 transition-colors hover:bg-gray-50/50 lg:border-r lg:py-12 lg:last:border-r-0"
					use:inview={i * 80}
				>
					<span class="text-xs font-medium text-primary"
						>{study.subtitle}</span
					>
					<h3
						class="mt-2 font-bold text-2xl text-foreground transition-colors group-hover:text-primary"
					>
						{study.title}
					</h3>
					<div class="mt-3 flex items-baseline gap-2">
						<span
							class="font-bold text-2xl tabular-nums text-primary"
							>{study.metric}</span
						>
						<span class="text-sm text-light"
							>{study.metricDetail}</span
						>
					</div>
					<p class="mt-3 text-sm leading-relaxed text-light">
						{study.summary}
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

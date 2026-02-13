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

		<div class="space-y-6">
			{#each caseStudies as study, i}
				<a
					href="/work/{study.slug}"
					class="group block overflow-hidden rounded-3xl border border-border transition-all hover:shadow-lg"
					use:inview={i * 100}
				>
					<div class="grid md:grid-cols-2">
						<!-- Text side -->
						<div class="flex flex-col justify-center p-6 lg:p-10">
							<span class="text-xs font-medium text-primary">{study.subtitle}</span>
							<h3 class="mt-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-3xl">
								{study.title}
							</h3>
							<p class="mt-3 text-sm leading-relaxed text-light">{study.summary}</p>

							<!-- Stats row -->
							<div class="mt-6 flex gap-6">
								{#each study.stats as stat}
									<div>
										<p class="text-2xl font-bold tabular-nums text-primary">{stat.value}</p>
										<p class="text-xs text-light">{stat.label}</p>
									</div>
								{/each}
							</div>

							<div class="mt-6 flex flex-wrap gap-1.5">
								{#each study.tech.slice(0, 4) as tech}
									<span class="rounded-full bg-muted px-2.5 py-0.5 text-xs text-light">{tech}</span>
								{/each}
							</div>
						</div>

						<!-- Visual side -->
						<div class="relative bg-muted {i % 2 === 1 ? 'md:order-first' : ''}">
							{#if study.image}
								<img
									src={study.image}
									alt="{study.title} screenshot"
									class="h-full w-full object-cover object-left-top"
								/>
							{:else}
								<!-- Stats visual for projects without screenshots -->
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
	</div>
</section>

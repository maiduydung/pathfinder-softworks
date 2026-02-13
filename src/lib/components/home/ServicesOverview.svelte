<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { services } from "$lib/data/services";
	import SectionHeader from "$lib/components/SectionHeader.svelte";

	const iconPaths: Record<string, string> = {
		globe: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
		bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
		cpu: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z',
		terminal: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
	};
</script>

<section class="my-16 lg:my-24">
	<div class="mx-auto max-w-[1400px] px-6">
		<SectionHeader
			title="What we build"
			subtitle="Every engagement starts with the outcome you need. We work backwards to build it."
		/>

		<div class="grid gap-4 md:grid-cols-2">
			{#each services as service, i}
				<div
					class="rounded-3xl border border-border bg-white p-6 lg:p-8"
					use:inview={i * 80}
				>
					<svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d={iconPaths[service.icon]} />
					</svg>
					<h3 class="mt-3 font-bold text-xl text-foreground">{service.title}</h3>
					<p class="mt-1 text-sm font-medium text-primary">{service.outcome}</p>
					<ul class="mt-3 space-y-1.5">
						{#each service.items as item}
							<li class="flex items-start gap-2 text-sm text-light">
								<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
								</svg>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="mt-6 text-center" use:inview>
			<a href="/services" class="text-sm text-primary hover:underline">
				View all services and our process &rarr;
			</a>
		</div>
	</div>
</section>

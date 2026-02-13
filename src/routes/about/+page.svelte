<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { team } from "$lib/data/team";
	import WorldMap from "$lib/components/WorldMap.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	import CTABanner from "$lib/components/CTABanner.svelte";

	const values = [
		{
			title: 'Outcomes over output',
			description: 'We measure success by the business result, not the number of features shipped.',
		},
		{
			title: 'Direct access',
			description: 'No account managers or layers. You work directly with the people who build your systems.',
		},
		{
			title: 'Production-grade',
			description: 'We ship reliable systems, not demos. Everything is built to run in production from day one.',
		},
		{
			title: 'Global execution',
			description: 'US, Europe, and Asia coverage means there\'s always someone awake and shipping.',
		},
	];
</script>

<svelte:head>
	<title>About — Pathfinder Softworks</title>
	<meta name="description" content="Meet the team behind Pathfinder Softworks. Founder-led, no outsourcing, no handoffs. US, Poland, and Vietnam." />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-[1400px] px-6 pt-12 pb-8 lg:pt-20">
	<div class="max-w-3xl" use:inview>
		<p class="text-sm font-bold uppercase tracking-widest text-primary">About Us</p>
		<h1 class="mt-3 font-bold text-5xl leading-snug tracking-tight text-foreground lg:text-6xl">
			The people who build your systems
		</h1>
		<p class="mt-4 text-lg leading-relaxed text-light">
			Pathfinder Softworks is a founder-led software agency. No outsourcing. No handoffs. You work directly with the people who already shipped a full SaaS platform together.
		</p>
	</div>
</section>

<!-- Team Grid -->
<section class="my-12 lg:my-16">
	<div class="mx-auto max-w-[1400px] px-6">
		<div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
			{#each team as member, i}
				<a href="/team/{member.slug}" class="group text-center" use:inview={i * 60}>
					<div class="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-transparent transition-all group-hover:border-primary/30 group-hover:shadow-md md:h-28 md:w-28">
						<img src={member.image} alt={member.name} class="h-full w-full object-cover" />
					</div>
					<h3 class="mt-3 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
						{member.gridName || member.name}
					</h3>
					<p class="text-xs text-primary">{member.gridRole || member.role}</p>
					<p class="mt-0.5 text-xs text-light">{member.location.city}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Locations -->
<section class="my-16 lg:my-24">
	<div class="mx-auto max-w-[1400px] px-6">
		<SectionHeader title="Where we work" subtitle="Three continents, always-on coverage." />
		<WorldMap />
	</div>
</section>

<!-- Values -->
<section class="my-16 lg:my-24">
	<div class="mx-auto max-w-[1400px] px-6">
		<SectionHeader title="How we operate" subtitle="The principles behind every project." />
		<div class="grid gap-4 sm:grid-cols-2">
			{#each values as value, i}
				<div class="rounded-3xl border border-border p-6" use:inview={i * 60}>
					<h3 class="font-bold text-lg text-foreground">{value.title}</h3>
					<p class="mt-2 text-sm text-light">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CTABanner />

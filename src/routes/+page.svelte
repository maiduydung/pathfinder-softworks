<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import FeaturedWork from '$lib/components/home/FeaturedWork.svelte';
	import ServicesOverview from '$lib/components/home/ServicesOverview.svelte';
	import GlobalPresence from '$lib/components/home/GlobalPresence.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
</script>

<svelte:head>
	<title>Pathfinder Softworks — We Build Software That Delivers Results</title>
	<meta name="description" content="A full-service software agency that builds SaaS platforms, custom tools, and AI-powered products. We ship outcomes that save time, cut costs, and drive ROI." />
</svelte:head>

<Hero />
<FeaturedWork />
<ServicesOverview />
<GlobalPresence />
<CTABanner />

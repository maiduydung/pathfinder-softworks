<script lang="ts">
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	import WorldMap from "$lib/components/WorldMap.svelte";
</script>

<section class="my-16 lg:my-24">
	<div class="mx-auto max-w-[1400px] px-6">
		<SectionHeader
			title="Global team, local execution"
			subtitle="Our team spans three continents. There's always someone awake, building, and shipping."
		/>
		<WorldMap />
	</div>
</section>

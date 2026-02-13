<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { team } from "$lib/data/team";

	let { compact = false }: { compact?: boolean } = $props();
</script>

<div class="grid grid-cols-2 gap-x-6 gap-y-10 {compact ? 'md:grid-cols-3 lg:grid-cols-5' : 'md:grid-cols-3 lg:grid-cols-5'}">
	{#each team as member, i}
		<a
			href="/team/{member.slug}"
			class="group text-center"
			use:inview={i * 80}
		>
			<div class="mx-auto {compact ? 'h-24 w-24 md:h-28 md:w-28' : 'h-28 w-28 md:h-32 md:w-32'} overflow-hidden rounded-full border-2 border-transparent transition-all duration-200 group-hover:border-primary/30 group-hover:shadow-lg">
				<img
					src={member.image}
					alt={member.name}
					class="h-full w-full object-cover"
				/>
			</div>
			<h3 class="mt-4 text-base font-bold text-heading transition-colors group-hover:text-primary">
				{member.gridName || member.name}
			</h3>
			<p class="mt-0.5 text-xs font-medium uppercase tracking-wider text-primary">
				{member.gridRole || member.role}
			</p>
			{#if !compact}
				<p class="mt-1.5 text-xs text-text/70">
					{member.location.city}, {member.location.country}
				</p>
			{/if}
		</a>
	{/each}
</div>

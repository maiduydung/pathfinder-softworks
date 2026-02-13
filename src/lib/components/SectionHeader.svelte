<script lang="ts">
	import { inview } from "$lib/actions/inview";

	let { title, subtitle, centered = false }: { title: string; subtitle: string; centered?: boolean } = $props();
</script>

<div class="{centered ? 'text-center mx-auto' : ''} mb-8 max-w-2xl" use:inview>
	<h2 class="text-4xl font-bold leading-snug tracking-tight text-foreground lg:text-5xl">
		{title}
	</h2>
	<p class="mt-4 text-lg leading-relaxed text-light">
		{subtitle}
	</p>
</div>

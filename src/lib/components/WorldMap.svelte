<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { Globe, Clock, Zap } from "lucide-svelte";

	const stats = [
		{
			icon: Globe,
			value: "3",
			label: "Continents",
			detail: "US, Europe, and Vietnam",
		},
		{
			icon: Clock,
			value: "16h",
			label: "Daily Coverage",
			detail: "Always someone online",
		},
		{
			icon: Zap,
			value: "Same-day",
			label: "Response Time",
			detail: "No waiting across time zones",
		},
	];
</script>

<div>
	<div class="grid gap-4 sm:grid-cols-3" use:inview>
		{#each stats as stat, i}
			<div
				class="rounded-3xl border border-border bg-white px-6 py-6 text-center"
			>
				<div
					class="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
				>
					<stat.icon class="h-5 w-5 text-primary" />
				</div>
				<p class="font-bold text-3xl tabular-nums text-foreground">
					{stat.value}
				</p>
				<p class="mt-1 text-sm font-medium text-foreground">
					{stat.label}
				</p>
				<p class="mt-0.5 text-xs text-light">{stat.detail}</p>
			</div>
		{/each}
	</div>
	<p class="mt-4 text-center text-sm text-light">
		Strategy, design, and engineering, one team, one standard.
	</p>
</div>

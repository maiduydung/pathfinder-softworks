<script lang="ts">
	import { inview } from "$lib/actions/inview";
</script>

<div class="grid gap-4 sm:grid-cols-3" use:inview>
	<div class="rounded-3xl border border-border bg-white px-6 py-5">
		<p class="font-bold text-4xl tabular-nums text-primary">US</p>
		<p class="mt-1 text-sm font-medium text-foreground">San Francisco</p>
		<p class="mt-0.5 text-sm text-light">Strategy & US Market</p>
	</div>
	<div class="rounded-3xl border border-border bg-white px-6 py-5">
		<p class="font-bold text-4xl tabular-nums text-primary">PL</p>
		<p class="mt-1 text-sm font-medium text-foreground">Warsaw</p>
		<p class="mt-0.5 text-sm text-light">Product Design</p>
	</div>
	<div class="rounded-3xl border border-border bg-white px-6 py-5">
		<p class="font-bold text-4xl tabular-nums text-primary">VN</p>
		<p class="mt-1 text-sm font-medium text-foreground">Ho Chi Minh City</p>
		<p class="mt-0.5 text-sm text-light">Engineering & Operations</p>
	</div>
</div>

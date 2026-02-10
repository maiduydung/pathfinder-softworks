<script lang="ts">
	import { onMount } from "svelte";

	let visible = $state(false);

	onMount(() => {
		// Small delay for the entrance animation
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<section
	id="top"
	class="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-primary-light/40 to-white"
>
	<!-- Floating gradient blobs -->
	<div
		class="animate-float-1 pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl"
	></div>
	<div
		class="animate-float-2 pointer-events-none absolute -right-20 top-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.08] blur-3xl"
	></div>
	<div
		class="animate-float-3 pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-3xl"
	></div>

	<div class="relative mx-auto max-w-4xl px-6 py-32 text-center">
		<p
			class="mb-4 text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-700 ease-out {visible
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-4'}"
		>
			Full-service software agency
		</p>
		<h1
			class="text-4xl leading-tight font-bold text-heading transition-all duration-700 delay-150 ease-out md:text-5xl lg:text-6xl {visible
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-6'}"
		>
			We don't ship features.<br />We ship results.
		</h1>
		<p
			class="mx-auto mt-6 max-w-2xl text-lg text-text transition-all duration-700 delay-300 ease-out md:text-xl {visible
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-6'}"
		>
			SaaS platforms, custom tools, and AI-powered products built to save
			you time, cut costs, and drive real ROI.
		</p>
		<div
			class="mt-10 flex flex-col items-center gap-4 transition-all duration-700 delay-500 ease-out sm:flex-row sm:justify-center {visible
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-6'}"
		>
			<a
				href="https://calendly.com/maiduydungvn/meeting-with-mai"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg bg-primary px-8 py-3 text-lg font-medium text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30"
			>
				Book a free call
			</a>
			<a
				href="#work"
				class="rounded-lg border border-primary/20 px-8 py-3 text-lg font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary-light/50"
			>
				See our work
			</a>
		</div>
	</div>
</section>

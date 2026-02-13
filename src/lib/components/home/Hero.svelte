<script lang="ts">
	import { onMount } from "svelte";
	import Globe from "$lib/components/Globe.svelte";

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => { visible = true; }, 100);
	});
</script>

<section class="mx-auto max-w-[1400px] px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
	<div class="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
		<div class="max-w-2xl">
			<p
				class="text-sm font-bold uppercase tracking-widest text-primary transition-all duration-500 {visible ? 'opacity-100' : 'opacity-0 translate-y-3'}"
			>
				Full-service software agency
			</p>
			<h1
				class="mt-4 font-bold text-5xl leading-snug tracking-tight text-foreground transition-all duration-500 delay-100 lg:text-6xl {visible ? 'opacity-100' : 'opacity-0 translate-y-4'}"
			>
				We build software that <span class="text-primary">delivers results.</span>
			</h1>
			<p
				class="mt-4 max-w-xl text-lg leading-relaxed text-light transition-all duration-500 delay-200 {visible ? 'opacity-100' : 'opacity-0 translate-y-4'}"
			>
				A team across 3 continents with FAANG alumni, Sam Altman-backed founders, and engineers who've shipped production systems at scale. We build SaaS platforms, data pipelines, and AI products that save you time, cut costs, and drive real ROI.
			</p>
			<div
				class="mt-8 flex flex-wrap gap-3 transition-all duration-500 delay-300 {visible ? 'opacity-100' : 'opacity-0 translate-y-4'}"
			>
				<a
					href="https://calendly.com/maiduydungvn/meeting-with-mai"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-hover"
				>
					Book a free call
				</a>
				<a
					href="/work"
					class="rounded-full border border-border bg-white px-6 py-2.5 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-gray-50"
				>
					See our work
				</a>
			</div>
		</div>

		<!-- Rotating globe -->
		<div
			class="hidden lg:flex items-center justify-center transition-all duration-700 delay-200 {visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}"
		>
			<Globe />
		</div>
	</div>
</section>

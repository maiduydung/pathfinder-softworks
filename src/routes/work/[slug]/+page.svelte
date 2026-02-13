<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import CTABanner from "$lib/components/CTABanner.svelte";
	import { onMount, onDestroy } from "svelte";
	import {
		Database, TrendingUp, Users, Rocket,
		Globe, Brain, Zap, Languages,
		Package, ShieldCheck, PiggyBank, Timer,
		CircleCheck, ExternalLink,
	} from "lucide-svelte";
	import { techUrls } from "$lib/data/tech-urls";

	const iconMap: Record<string, typeof Database> = {
		'database': Database, 'trending-up': TrendingUp, 'users': Users, 'rocket': Rocket,
		'globe': Globe, 'brain': Brain, 'zap': Zap, 'languages': Languages,
		'package': Package, 'shield-check': ShieldCheck, 'piggy-bank': PiggyBank, 'timer': Timer,
	};

	let { data } = $props();
	const study = $derived(data.study);
	const nextStudy = $derived(data.nextStudy);

	let currentSlide = $state(0);
	let interval: ReturnType<typeof setInterval> | null = null;
	let carouselEl: HTMLDivElement | undefined = $state();

	const images = $derived(study.images ?? (study.image ? [{ src: study.image, alt: `${study.title} screenshot` }] : []));

	function startAutoplay() {
		stopAutoplay();
		if (images.length <= 1) return;
		interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % images.length;
		}, 4000);
	}

	function stopAutoplay() {
		if (interval) clearInterval(interval);
	}

	function goTo(index: number) {
		currentSlide = index;
		startAutoplay();
	}

	onMount(() => startAutoplay());
	onDestroy(() => stopAutoplay());
</script>

<svelte:head>
	<title>{study.title} — Case Study | Pathfinder Softworks</title>
	<meta name="description" content={study.summary} />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:pt-16">
	<a href="/work" class="inline-flex items-center gap-1.5 text-sm text-light transition-colors hover:text-primary">
		<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
		</svg>
		All projects
	</a>

	<div class="mt-6 grid items-start gap-8 lg:grid-cols-2">
		<!-- Left: text + stats -->
		<div use:inview>
			<span class="text-xs font-medium text-primary">{study.subtitle}</span>
			<h1 class="mt-2 flex items-center gap-3 font-bold text-3xl leading-snug tracking-tight text-foreground lg:text-4xl">
				{study.title}
				{#if study.link}
					<a href={study.link} target="_blank" rel="noopener noreferrer" class="text-light transition-colors hover:text-primary" title="Visit project">
						<ExternalLink size={22} />
					</a>
				{/if}
			</h1>
			<p class="mt-3 text-base leading-relaxed text-light">{study.summary}</p>

			{#if study.founder}
				<div class="mt-4 flex flex-wrap items-center gap-1.5 text-sm text-light">
					Founded by
					<a href="/team/{study.founder.slug}" class="font-medium text-primary hover:underline">{study.founder.name}</a>
					<span class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{study.founder.credential}</span>
				</div>
			{/if}

			<!-- Key Stats -->
			<div class="mt-6 flex flex-wrap gap-4" use:inview={100}>
				{#each study.stats as stat}
					<div class="rounded-2xl border border-border bg-white px-5 py-3 text-center">
						<p class="font-bold text-2xl tabular-nums text-primary">{stat.value}</p>
						<p class="mt-0.5 text-xs text-light">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Right: image carousel -->
		{#if images.length > 0}
			<div use:inview={100}>
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					bind:this={carouselEl}
					class="group relative overflow-hidden rounded-2xl border border-border bg-muted"
					onmouseenter={stopAutoplay}
					onmouseleave={startAutoplay}
				>
					<div class="relative w-full" style="aspect-ratio: 4/3;">
						{#each images as img, i}
							<img
								src={img.src}
								alt={img.alt}
								class="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 {i === currentSlide ? 'opacity-100' : 'opacity-0'}"
							/>
						{/each}
					</div>

					{#if images.length > 1}
						<button
							onclick={() => goTo((currentSlide - 1 + images.length) % images.length)}
							class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
							aria-label="Previous image"
						>
							<svg class="h-4 w-4 text-foreground" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
							</svg>
						</button>
						<button
							onclick={() => goTo((currentSlide + 1) % images.length)}
							class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
							aria-label="Next image"
						>
							<svg class="h-4 w-4 text-foreground" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
							</svg>
						</button>

						<div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
							{#each images as _, i}
								<button
									onclick={() => goTo(i)}
									class="h-2 rounded-full transition-all {i === currentSlide ? 'w-6 bg-primary' : 'w-2 bg-white/70 hover:bg-white'}"
									aria-label="Go to image {i + 1}"
								></button>
							{/each}
						</div>
					{/if}
				</div>
				{#if images[currentSlide]}
					<p class="mt-2 text-center text-xs text-light">{images[currentSlide].alt}</p>
				{/if}
			</div>
		{/if}
	</div>
</section>

<!-- Problem / Solution -->
<section class="my-12 lg:my-16">
	<div class="mx-auto max-w-[1400px] px-6">
		<div class="grid gap-8 md:grid-cols-2">
			<div class="rounded-3xl border border-border p-6 lg:p-8" use:inview>
				<p class="text-xs font-bold uppercase tracking-widest text-primary">The Problem</p>
				<h2 class="mt-2 font-bold text-xl text-foreground">What wasn't working</h2>
				<p class="mt-3 leading-relaxed text-light">{study.problem}</p>
			</div>
			<div class="rounded-3xl border border-border p-6 lg:p-8" use:inview={100}>
				<p class="text-xs font-bold uppercase tracking-widest text-primary">Our Solution</p>
				<h2 class="mt-2 font-bold text-xl text-foreground">What we built</h2>
				<p class="mt-3 leading-relaxed text-light">{study.solution}</p>
			</div>
		</div>
	</div>
</section>

<!-- Results -->
<section class="my-12 lg:my-16">
	<div class="mx-auto max-w-[1400px] px-6">
		<p class="text-xs font-bold uppercase tracking-widest text-primary" use:inview>Results</p>
		<div class="mt-4 grid gap-4 sm:grid-cols-2">
			{#each study.results as result, i}
				{@const Icon = iconMap[result.icon] ?? CircleCheck}
				<div class="flex items-center gap-4 rounded-2xl border border-border p-5" use:inview={i * 60}>
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
						<Icon size={20} class="text-primary" />
					</div>
					<p class="text-sm font-medium leading-relaxed text-foreground">{result.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Tech -->
<section class="my-12 lg:my-16">
	<div class="mx-auto max-w-[1400px] px-6">
		<p class="text-xs font-bold uppercase tracking-widest text-primary" use:inview>Built with</p>
		<div class="mt-3 flex flex-wrap gap-2" use:inview={60}>
			{#each study.tech as tech}
				{#if techUrls[tech]}
					<a href={techUrls[tech]} target="_blank" rel="noopener noreferrer" class="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">{tech}</a>
				{:else}
					<span class="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground">{tech}</span>
				{/if}
			{/each}
		</div>
	</div>
</section>

<!-- Next Project + CTA -->
<section class="border-t border-border bg-primary-light py-12 lg:py-16" use:inview>
	<div class="mx-auto max-w-[1400px] px-6 text-center">
		<p class="text-xs font-bold uppercase tracking-widest text-primary">Next project</p>
		<a href="/work/{nextStudy.slug}" class="mt-2 inline-flex items-center gap-2 font-bold text-2xl text-foreground transition-colors hover:text-primary lg:text-3xl">
			{nextStudy.title}
			<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
			</svg>
		</a>

		<hr class="mx-auto my-8 max-w-[120px] border-border" />

		<h2 class="font-bold text-2xl tracking-tight text-foreground lg:text-3xl">Have a project in mind?</h2>
		<p class="mx-auto mt-2 max-w-lg text-light">Tell us the outcome you need. We'll tell you how we'd get there.</p>
		<div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<a
				href="https://calendly.com/maiduydungvn/meeting-with-mai"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-hover"
			>
				Book a free call
			</a>
			<a
				href="/contact"
				class="rounded-full border border-border bg-white px-6 py-2.5 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-gray-50"
			>
				Get in touch
			</a>
		</div>
	</div>
</section>

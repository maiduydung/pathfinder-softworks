<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { team } from "$lib/data/team";
	import { Linkedin, Calendar } from "lucide-svelte";

	let { data } = $props();
	const member = $derived(data.member);
	const isFounder = $derived(member.slug === "mai-duy-dung");
	const isDuy = $derived(member.slug === "duy-tran");
	const otherMembers = $derived(team.filter((m) => m.slug !== member.slug));
</script>

<svelte:head>
	<title>{member.name} — {member.role} | Pathfinder Softworks</title>
	<meta name="description" content={member.intro} />
</svelte:head>

<section class="mx-auto max-w-[1400px] px-6 pt-10 lg:pt-16">
	<a href="/about" class="inline-flex items-center gap-1.5 text-sm text-light transition-colors hover:text-primary">
		<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
		</svg>
		Back to team
	</a>

	<!-- 2-column: identity left, content right -->
	<div class="mt-6 grid gap-8 lg:grid-cols-[280px_1fr]" use:inview>
		<!-- Left: photo + CTAs -->
		<div class="flex flex-col items-center lg:sticky lg:top-24 lg:self-start">
			<img
				src={member.image}
				alt={member.name}
				class="h-40 w-40 rounded-2xl border-4 border-white object-cover shadow-md lg:h-56 lg:w-56"
			/>
			<div class="mt-4 text-center">
				<p class="text-xs font-bold uppercase tracking-widest text-primary">{member.role}</p>
				<p class="mt-1 text-sm text-light">{member.location.city}, {member.location.country}</p>
				<p class="text-xs text-light">{member.location.timezone}</p>
			</div>
			<div class="mt-4 flex flex-col gap-2 w-full max-w-[220px]">
				<a
					href={member.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
				>
					<Linkedin size={16} />
					LinkedIn
				</a>
				{#if isFounder}
					<a
						href="https://calendly.com/maiduydungvn/meeting-with-mai"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-gray-50"
					>
						<Calendar size={16} />
						Book a Call
					</a>
				{/if}
			</div>
		</div>

		<!-- Right: name, intro, bio -->
		<div>
			<h1 class="font-bold text-3xl tracking-tight text-foreground lg:text-4xl">{member.name}</h1>
			<p class="mt-2 text-lg leading-relaxed text-light">{member.intro}</p>
			{#if isDuy}
				<p class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
					Selected to Sam Altman's Residency alongside elite global founders.
				</p>
			{/if}

			<hr class="my-6 border-border" />

			<div class="space-y-4">
				{#each member.description as paragraph}
					<p class="leading-relaxed text-light">{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Other members -->
<section class="mt-12 border-t border-border py-10 lg:mt-16 lg:py-14">
	<div class="mx-auto max-w-[1400px] px-6">
		<h2 class="mb-8 text-center font-bold text-xl text-foreground">Meet the rest of the team</h2>
		<div class="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
			{#each otherMembers as other}
				<a href="/team/{other.slug}" class="group text-center">
					<div class="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-transparent transition-all group-hover:border-primary/30 group-hover:shadow-md md:h-24 md:w-24">
						<img src={other.image} alt={other.name} class="h-full w-full object-cover" />
					</div>
					<h3 class="mt-2 text-sm font-bold text-foreground transition-colors group-hover:text-primary">{other.gridName || other.name}</h3>
					<p class="text-xs text-primary">{other.gridRole || other.role}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

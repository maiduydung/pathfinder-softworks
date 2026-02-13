<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { team } from "$lib/data/team";

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

	<!-- Hero card -->
	<div class="mt-6 rounded-3xl border border-border bg-muted p-6 md:p-8" use:inview>
		<div class="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
			<img
				src={member.image}
				alt={member.name}
				class="h-32 w-32 flex-shrink-0 rounded-full border-4 border-white object-cover shadow-sm md:h-36 md:w-36"
			/>
			<div class="text-center md:text-left">
				<p class="text-xs font-bold uppercase tracking-widest text-primary">{member.role}</p>
				<h1 class="mt-1 font-bold text-3xl tracking-tight text-foreground md:text-4xl">{member.name}</h1>
				<p class="mt-1 text-sm text-light">{member.location.city}, {member.location.country} &middot; {member.location.timezone}</p>
				<p class="mt-3 max-w-xl leading-relaxed text-light">{member.intro}</p>
				{#if isDuy}
					<p class="mt-2 text-sm text-light/70">Selected to Sam Altman's Residency alongside elite global founders.</p>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- Content -->
<section class="my-10 lg:my-14">
	<div class="mx-auto max-w-3xl px-6">
		<div class="space-y-3" use:inview>
			{#each member.description as paragraph}
				<p class="leading-relaxed text-light">{paragraph}</p>
			{/each}
		</div>

		<div class="mt-6 flex flex-wrap gap-3" use:inview={80}>
			<a
				href={member.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
			>
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
				View on LinkedIn
			</a>
			{#if isFounder}
				<a
					href="https://calendly.com/maiduydungvn/meeting-with-mai"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-gray-50"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
					</svg>
					Book a Call
				</a>
			{/if}
		</div>
	</div>
</section>

<!-- Other members -->
<section class="border-t border-border py-10 lg:py-14">
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

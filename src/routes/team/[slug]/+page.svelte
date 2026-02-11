<script lang="ts">
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

<div class="pt-28 pb-20 md:pt-36 md:pb-28">
	<div class="mx-auto max-w-5xl px-6">
		<!-- Back Link -->
		<a
			href="/#about"
			class="mb-8 inline-flex items-center gap-1.5 text-sm text-text/60 transition-colors hover:text-primary"
		>
			<svg
				class="h-4 w-4"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
				/>
			</svg>
			Back to team
		</a>

		<!-- Hero Card -->
		<div
			class="overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/80 p-8 md:p-12"
		>
			<div
				class="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12"
			>
				<!-- Portrait -->
				<img
					src={member.image}
					alt={member.name}
					class="h-36 w-36 flex-shrink-0 rounded-full border-4 border-white object-cover shadow-md md:h-44 md:w-44"
				/>

				<!-- Info -->
				<div class="text-center md:text-left">
					<p
						class="text-xs font-semibold uppercase tracking-widest text-primary"
					>
						{member.role}
					</p>
					<h1
						class="mt-2 text-3xl font-bold tracking-tight text-heading md:text-4xl"
					>
						{member.name}
					</h1>
					<p
						class="mt-5 max-w-xl text-base leading-relaxed text-text md:text-lg"
					>
						{member.intro}
					</p>
					{#if isDuy}
						<p class="mt-3 text-sm text-text/60">
							Selected to Sam Altman's Residency alongside elite
							global founders.
						</p>
					{/if}
				</div>
			</div>
		</div>

		<!-- Content Below -->
		<div class="mx-auto mt-12 max-w-3xl">
			<p class="text-lg leading-relaxed text-text">
				{member.description}
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-4">
				<a
					href={member.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
				>
					<svg
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/>
					</svg>
					View on LinkedIn
				</a>
				{#if isFounder}
					<a
						href="https://calendly.com/maiduydungvn/meeting-with-mai"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
					>
						<svg
							class="h-4 w-4"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
							/>
						</svg>
						Book a Call
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<!-- Other Team Members -->
<section class="border-t border-gray-100 bg-primary-light/30 py-16 md:py-20">
	<div class="mx-auto max-w-5xl px-6">
		<h2 class="mb-10 text-center text-xl font-bold text-heading">
			Meet the rest of the team
		</h2>
		<div
			class="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4"
		>
			{#each otherMembers as other}
				<a
					href="/team/{other.slug}"
					class="group text-center"
				>
					<div
						class="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-transparent transition-all duration-200 group-hover:border-primary/30 group-hover:shadow-lg md:h-28 md:w-28"
					>
						<img
							src={other.image}
							alt={other.name}
							class="h-full w-full object-cover"
						/>
					</div>
					<h3
						class="mt-3 text-sm font-bold text-heading transition-colors group-hover:text-primary"
					>
						{other.name}
					</h3>
					<p
						class="mt-0.5 text-xs font-medium uppercase tracking-wider text-primary"
					>
						{other.role}
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import { team } from "$lib/data/team";

	const trustPoints = [
		{
			text: "Shipped a full SaaS platform together",
			icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
		},
		{
			text: "US\u2013Asia timezone execution",
			icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418",
		},
		{
			text: "Production AI systems, not demos",
			icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z",
		},
		{
			text: "Direct access to every builder",
			icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
		},
	];
</script>

<section id="about" class="bg-primary-light/30 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-6">
		<!-- Section Header -->
		<div class="mb-16 max-w-2xl" use:inview>
			<h2
				class="text-3xl font-bold tracking-tight text-heading md:text-4xl"
			>
				The People Who Build Your Systems
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-text">
				Founder-led. No outsourcing. No handoffs. You work directly with
				the people who already shipped a full SaaS platform together.
			</p>
		</div>

		<!-- Team Grid — Equal Portraits -->
		<div
			class="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5"
		>
			{#each team as member, i}
				<a
					href="/team/{member.slug}"
					class="group text-center"
					use:inview={i * 80}
				>
					<div class="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-transparent transition-all duration-200 group-hover:border-primary/30 group-hover:shadow-lg md:h-32 md:w-32">
						<img
							src={member.image}
							alt={member.name}
							class="h-full w-full object-cover"
						/>
					</div>
					<h3
						class="mt-4 text-base font-bold text-heading transition-colors group-hover:text-primary"
					>
						{member.name}
					</h3>
					<p
						class="mt-0.5 text-xs font-medium uppercase tracking-wider text-primary"
					>
						{member.role}
					</p>
				</a>
			{/each}
		</div>

		<!-- Trust Strip -->
		<div
			class="mt-16 rounded-2xl border border-primary/10 bg-white px-8 py-7"
			use:inview
		>
			<div class="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
				{#each trustPoints as point}
					<div class="flex items-start gap-3">
						<svg
							class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d={point.icon}
							/>
						</svg>
						<p class="text-sm font-medium text-heading">
							{point.text}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

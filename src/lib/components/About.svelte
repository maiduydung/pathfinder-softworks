<script lang="ts">
	import { inview } from "$lib/actions/inview";

	const team = [
		{
			name: "Mai Duy Dung",
			role: "Founder - Data & AI",
			linkedin: "https://www.linkedin.com/in/maiduydung/",
			description:
				"Earned a scholarship to Japan, then shipped AI pipelines across Tokyo, Shanghai, Vancouver, and San Francisco. ML engineer who builds under pressure and founded Pathfinder to do it for clients.",
			image: "/dung_avatar.jpg",
		},
		{
			name: "Felicjan (Felix) Pavlak-Chiaradia",
			role: "Product Design",
			linkedin: "https://www.linkedin.com/in/felicjanp-c/",
			description:
				"Industrial design degree from Dublin, exchange semester at SF State, then straight into founding lead designer at Proplytics, where he built the entire design system from scratch. Multilingual, design-obsessed, and now designing products for our clients.",
			image: "/felix_avatar.jpg",
		},
		{
			name: "Quang Than",
			role: "Full-Stack Engineer",
			linkedin: "https://www.linkedin.com/in/quangthan/",
			description:
				"Started as an automation engineer in industrial plants, taught himself to code, went freelance, then shipped production apps at three companies before joining us. 10+ years of building things that work under pressure. Now he builds ours.",
			image: "/quang_avatar.jpg",
		},
		{
			name: "Thao (Flora) Do",
			role: "Marketing Lead",
			linkedin: "https://www.linkedin.com/in/quynhthao99/",
			description:
				"From Shopee campaigns in Vietnam to Google Ads across APAC, SEO in the US, and sales development in Malaysia. Colleagues call her 'the extra mile person.' She gets your product in front of the right people.",
			image: "/thao_avatar.jpg",
		},
	];
</script>

<section id="about" class="bg-primary-light/30 py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl" use:inview>
			<h2 class="text-3xl font-bold text-heading md:text-4xl">
				The team
			</h2>
			<p class="mt-4 text-lg text-text">
				Design, engineering, data, and growth: all in-house. No
				outsourcing, no handoffs to strangers. You work with the people
				who build your product.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each team as member, i}
				<div
					class="rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
					use:inview={i * 100}
				>
					<a
						href={member.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-primary-light transition-opacity hover:opacity-80"
					>
						{#if member.image}
							<img
								src={member.image}
								alt={member.name}
								class="h-16 w-16 rounded-full object-cover"
							/>
						{:else}
							<svg
								class="h-8 w-8 text-primary"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>
						{/if}
					</a>
					<p
						class="text-sm font-semibold uppercase tracking-wide text-primary"
					>
						{member.role}
					</p>
					<h3 class="mt-1 text-lg font-semibold text-heading">
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary/60"
						>
							{member.name}
						</a>
					</h3>
					<p class="mt-2 text-sm text-text">{member.description}</p>
				</div>
			{/each}
		</div>

		<div
			class="mt-12 rounded-xl border border-primary/10 bg-white p-8"
			use:inview
		>
			<p class="text-lg text-text">
				We built <a
					href="https://www.linkedin.com/company/proplytics/"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary-hover hover:decoration-primary/60"
					>Proplytics</a
				> together. A full real estate SaaS platform with financial analytics
				that none competing platforms don't offer. That's the kind of team
				you're hiring. Not freelancers pieced together for one project. A
				crew that's already shipped real products.
			</p>
		</div>
	</div>
</section>

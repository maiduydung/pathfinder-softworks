<script lang="ts">
	const team = [
		{
			name: 'Mai Duy Dung',
			role: 'Data & AI',
			description: 'AI/ML, web scraping, ETL pipelines, anomaly detection, microservices. Built systems for teams in Tokyo, Shanghai, Vancouver, New York, and San Francisco.',
			image: '/dung_avatar.jpg'
		},
		{
			name: 'Designer',
			role: 'Product Design',
			description: 'Figma, market research, UX strategy, sales design. If you\'re looking at this site — that\'s their work. Turns complex products into interfaces people actually want to use.',
			image: null
		},
		{
			name: 'Full-Stack Engineer',
			role: 'Engineering',
			description: 'React, Next.js, full-stack development. Builds production-grade web applications end to end — from database schema to deployed product.',
			image: null
		},
		{
			name: 'Marketing Lead',
			role: 'Growth & Outreach',
			description: 'Outreach, LinkedIn, cold calls, intros, content strategy. Gets the right people in front of the right product.',
			image: null
		}
	];
</script>

<section id="about" class="bg-primary-light/30 py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl">
			<h2 class="text-3xl font-bold text-heading md:text-4xl">The team</h2>
			<p class="mt-4 text-lg text-text">
				Design, engineering, data, and growth — all in-house. No outsourcing, no handoffs to strangers. You work with the people who build your product.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each team as member}
				<div class="rounded-xl bg-white p-6 shadow-sm">
					<div class="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-primary-light">
						{#if member.image}
							<img
								src={member.image}
								alt={member.name}
								class="h-16 w-16 rounded-full object-cover"
							/>
						{:else}
							<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							</svg>
						{/if}
					</div>
					<p class="text-sm font-semibold uppercase tracking-wide text-primary">{member.role}</p>
					<h3 class="mt-1 text-lg font-semibold text-heading">{member.name}</h3>
					<p class="mt-2 text-sm text-text">{member.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 rounded-xl border border-primary/10 bg-white p-8">
			<p class="text-lg text-text">
				We built <span class="font-semibold text-heading">Proplytics</span> together — a full SaaS platform with financial analytics that competing platforms don't offer. That's the kind of team you're hiring. Not freelancers pieced together for one project. A crew that's already shipped real products.
			</p>
		</div>
	</div>
</section>

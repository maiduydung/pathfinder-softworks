<script lang="ts">
	import { inview } from "$lib/actions/inview";

	const steps = [
		{
			number: "01",
			title: "Discovery",
			description:
				"We learn your business, your users, and the outcome you need. No generic questionnaires, we dig into what actually matters to your bottom line.",
		},
		{
			number: "02",
			title: "Design & Plan",
			description:
				"Our designer maps out the UX. Our engineers plan the architecture. You see mockups and a clear roadmap before a single line of code is written.",
		},
		{
			number: "03",
			title: "Build & Ship",
			description:
				"Iterative development with demos every week. You see real progress, not status reports. We ship working software, not slide decks.",
		},
		{
			number: "04",
			title: "Measure & Iterate",
			description:
				"We track the outcomes we promised: time saved, costs cut, revenue generated. Then we optimize based on real data, not assumptions.",
		},
	];
</script>

<section class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl" use:inview>
			<h2 class="text-3xl font-bold text-heading md:text-4xl">
				How we work
			</h2>
			<p class="mt-4 text-lg text-text">
				Outcome-first, every step of the way.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step, i}
				<div class="relative" use:inview={i * 120}>
					<span class="text-5xl font-bold text-primary/10"
						>{step.number}</span
					>
					<h3 class="mt-2 text-xl font-semibold text-heading">
						{step.title}
					</h3>
					<p class="mt-2 text-text">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

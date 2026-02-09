<script lang="ts">
	const steps = [
		{
			number: '01',
			title: 'Understand',
			description: 'We listen first. What does your business actually do? Where does it hurt? What have you already tried?'
		},
		{
			number: '02',
			title: 'Diagnose',
			description: 'We dig into the systems, data, and workflows. We find what\'s actually broken — not what looks broken on the surface.'
		},
		{
			number: '03',
			title: 'Fix',
			description: 'We build or repair what matters most. No overhauls. No grand redesigns. Targeted work that moves the needle.'
		},
		{
			number: '04',
			title: 'Hand off',
			description: 'We leave you with systems your team can run, documentation they can follow, and clarity that lasts after we\'re gone.'
		}
	];
</script>

<section class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl">
			<h2 class="text-3xl font-bold text-heading md:text-4xl">How we work</h2>
			<p class="mt-4 text-lg text-text">
				Simple, clear, no surprises.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step}
				<div class="relative">
					<span class="text-5xl font-bold text-primary/10">{step.number}</span>
					<h3 class="mt-2 text-xl font-semibold text-heading">{step.title}</h3>
					<p class="mt-2 text-text">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	const services = [
		{
			title: 'SaaS Development',
			outcome: 'Launch a revenue-generating product',
			description: 'From zero to live product. We handle design, engineering, and infrastructure — you get a SaaS platform that users pay for. Auth, payments, dashboards, the full stack.',
			items: [
				'Full-stack web applications from idea to launch',
				'User authentication, Stripe payments, admin dashboards',
				'Scalable architecture that grows with your user base',
				'Designed to convert — not just to function'
			],
			icon: `<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`
		},
		{
			title: 'Digital Transformation',
			outcome: 'Kill the spreadsheets, save the hours',
			description: 'Your team is drowning in manual work — copy-pasting between tools, updating Excel files, remembering steps. We replace that with software that runs itself.',
			items: [
				'Automate workflows that eat up your team\'s time',
				'Replace spreadsheet chaos with real-time dashboards',
				'Integrate the tools you already use — no rip-and-replace',
				'Measurable time savings from week one'
			],
			icon: `<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`
		},
		{
			title: 'AI & Data Products',
			outcome: 'Turn raw data into an unfair advantage',
			description: 'We build AI that works in production, not just in demos. Data pipelines, ML models, and intelligent features that give your product capabilities nobody else has.',
			items: [
				'AI-powered features that differentiate your product',
				'Data pipelines that clean, enrich, and score automatically',
				'Web scraping and aggregation from multiple sources',
				'Production-grade ML — not notebook prototypes'
			],
			icon: `<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>`
		},
		{
			title: 'Custom Business Software',
			outcome: 'Software that fits how you actually work',
			description: 'Inventory management, CRM, operations tools, internal platforms — built exactly for your workflow. No forcing your business into someone else\'s template.',
			items: [
				'Inventory, order, and operations management systems',
				'Internal tools your team will actually want to use',
				'Integrations with your existing tools and processes',
				'Zero workflow disruption — wraps around how you already work'
			],
			icon: `<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>`
		}
	];
</script>

<section id="services" class="bg-primary-light/30 py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl">
			<h2 class="text-3xl font-bold text-heading md:text-4xl">What we build</h2>
			<p class="mt-4 text-lg text-text">
				Every engagement starts with the outcome you need — then we work backwards to build it.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			{#each services as service}
				<div class="rounded-xl bg-white p-8 shadow-sm">
					{@html service.icon}
					<h3 class="mt-4 text-xl font-semibold text-heading">{service.title}</h3>
					<p class="mt-1 text-sm font-medium text-primary">{service.outcome}</p>
					<p class="mt-3 text-text">{service.description}</p>
					<ul class="mt-4 space-y-2">
						{#each service.items as item}
							<li class="flex items-start gap-2 text-sm text-text">
								<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

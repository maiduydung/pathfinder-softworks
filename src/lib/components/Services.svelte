<script lang="ts">
	const services = [
		{
			title: 'Data & Analytics',
			description: 'Your data is everywhere — spreadsheets, APIs, internal tools, third-party platforms. We connect it, clean it, and turn it into numbers your team can actually trust.',
			items: [
				'Connect and unify scattered data sources',
				'Build reliable pipelines that run without babysitting',
				'Dashboards and reports that reflect reality',
				'Alerts when things drift, break, or stop making sense'
			],
			icon: `<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v-5.5m3 5.5v-5.5m3 5.5v-5.5" /></svg>`
		},
		{
			title: 'AI & Machine Learning',
			description: "We build AI that works in production, not just in demos. From LLM-powered automation to custom ML scoring, we know where AI delivers real ROI — and how to get it there.",
			items: [
				'LLM systems for extraction, classification, and enrichment',
				'Custom ML models trained on your business data',
				'Agentic workflows that handle real operational tasks',
				'Production-grade deployment — not notebook prototypes'
			],
			icon: `<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>`
		},
		{
			title: 'Custom Platforms',
			description: "When off-the-shelf tools don't fit, we build exactly what your operations need. Internal tools, customer-facing platforms, optimization engines — purpose-built for your workflow.",
			items: [
				'Internal operations tools your team will actually use',
				'Customer-facing web applications and dashboards',
				'Optimization engines for domain-specific problems',
				'Zero-disruption adoption — wraps around how you already work'
			],
			icon: `<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>`
		},
		{
			title: 'Fixing What Exists',
			description: "\"This system is slow and no one wants to touch it.\" We untangle, document, stabilize, and simplify — without blowing everything up or starting from scratch.",
			items: [
				'Stabilize slow or fragile systems',
				'Document what exists so your team can own it',
				'Find and fix hidden cost leaks',
				'Modernize incrementally, not all at once'
			],
			icon: `<svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" /></svg>`
		}
	];
</script>

<section id="services" class="bg-primary-light/30 py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl">
			<h2 class="text-3xl font-bold text-heading md:text-4xl">What we actually do</h2>
			<p class="mt-4 text-lg text-text">
				We help you understand what's really happening inside your systems — then fix the parts that matter.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			{#each services as service}
				<div class="rounded-xl bg-white p-8 shadow-sm">
					{@html service.icon}
					<h3 class="mt-4 text-xl font-semibold text-heading">{service.title}</h3>
					<p class="mt-3 text-text">{service.description}</p>
					<ul class="mt-4 space-y-2">
						{#each service.items as item}
							<li class="flex items-start gap-2 text-sm text-text">
								<span class="mt-0.5 text-primary">-</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

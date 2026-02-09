<script lang="ts">
	const categories = [
		{
			title: 'Frontend & Product',
			tools: ['Next.js', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS', 'Figma'],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>`
		},
		{
			title: 'Backend & Data',
			tools: ['Python', 'FastAPI', 'PostgreSQL', 'DuckDB', 'Redis', 'REST APIs'],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`
		},
		{
			title: 'AI & Machine Learning',
			tools: ['OpenAI / LLMs', 'LangChain', 'Hugging Face', 'PyCaret', 'scikit-learn', 'ONNX'],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>`
		},
		{
			title: 'Scraping & Automation',
			tools: ['Playwright', 'BeautifulSoup', 'Async pipelines', 'Proxy networks', 'RSS feeds'],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" /></svg>`
		},
		{
			title: 'Infrastructure',
			tools: ['Azure', 'Docker', 'Terraform', 'GitHub Actions', 'Sentry'],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>`
		}
	];
</script>

<section class="bg-primary-light/20 py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl">
			<h2 class="text-3xl font-bold text-heading md:text-4xl">Tools we use</h2>
			<p class="mt-4 text-text">
				Because people ask. The tools matter less than the result — we use what fits the problem.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each categories as category}
				<div class="rounded-xl bg-white p-6 shadow-sm">
					<div class="flex items-center gap-2.5">
						{@html category.icon}
						<h3 class="text-sm font-semibold uppercase tracking-wide text-primary">{category.title}</h3>
					</div>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each category.tools as tool}
							<span class="rounded-md bg-gray-50 px-2.5 py-1 text-sm text-text">{tool}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

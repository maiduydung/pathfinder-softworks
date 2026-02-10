<script lang="ts">
	import { inview } from "$lib/actions/inview";

	const categories = [
		{
			title: "Design & Product",
			tools: [
				{ name: "Figma", url: "https://www.figma.com" },
				{ name: "Adobe Suite", url: "https://www.adobe.com/creativecloud.html" },
				{ name: "UX Research", url: null },
				{ name: "Prototyping", url: null },
				{ name: "Brand Identity", url: null },
				{ name: "Design Systems", url: null },
			],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>`,
		},
		{
			title: "Marketing & Growth",
			tools: [
				{ name: "Google Ads", url: "https://ads.google.com" },
				{ name: "Analytics", url: "https://marketingplatform.google.com/about/analytics/" },
				{ name: "SEO & SEM", url: null },
				{ name: "Content Strategy", url: null },
				{ name: "Social Media", url: null },
				{ name: "CRO", url: null },
			],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>`,
		},
		{
			title: "Frontend",
			tools: [
				{ name: "Next.js", url: "https://nextjs.org" },
				{ name: "React", url: "https://react.dev" },
				{ name: "Svelte", url: "https://svelte.dev" },
				{ name: "TypeScript", url: "https://www.typescriptlang.org" },
				{ name: "Tailwind CSS", url: "https://tailwindcss.com" },
			],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>`,
		},
		{
			title: "Backend & Automation",
			tools: [
				{ name: "Python", url: "https://www.python.org" },
				{ name: "FastAPI", url: "https://fastapi.tiangolo.com" },
				{ name: "PostgreSQL", url: "https://www.postgresql.org" },
				{ name: "DuckDB", url: "https://duckdb.org" },
				{ name: "Playwright", url: "https://playwright.dev" },
				{ name: "Scrapy", url: "https://scrapy.org" },
			],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`,
		},
		{
			title: "AI & Machine Learning",
			tools: [
				{ name: "LLMs", url: "https://openai.com" },
				{ name: "LangChain", url: "https://www.langchain.com" },
				{ name: "Hugging Face", url: "https://huggingface.co" },
				{ name: "PGVector", url: "https://github.com/pgvector/pgvector" },
				{ name: "Pytorch", url: "https://pytorch.org" },
			],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>`,
		},
		{
			title: "Infrastructure",
			tools: [
				{ name: "Azure", url: "https://azure.microsoft.com" },
				{ name: "Docker", url: "https://www.docker.com" },
				{ name: "Stripe", url: "https://stripe.com" },
				{ name: "GitHub Actions", url: "https://github.com/features/actions" },
				{ name: "Sentry", url: "https://sentry.io" },
			],
			icon: `<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>`,
		},
	];
</script>

<section class="bg-primary-light/20 py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl" use:inview>
			<h2 class="text-3xl font-bold text-heading md:text-4xl">
				Our stack
			</h2>
			<p class="mt-4 text-text">
				The tools matter less than the result, but since you're
				wondering, here's what we work with.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each categories as category, i}
				<div
					class="rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
					use:inview={i * 80}
				>
					<div class="flex items-center gap-2.5">
						{@html category.icon}
						<h3
							class="text-sm font-semibold uppercase tracking-wide text-primary"
						>
							{category.title}
						</h3>
					</div>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each category.tools as tool}
							{#if tool.url}
								<a
									href={tool.url}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded-md bg-gray-50 px-2.5 py-1 text-sm text-text transition-colors hover:bg-primary-light hover:text-primary"
								>{tool.name}</a
								>
							{:else}
								<span
									class="rounded-md bg-gray-50 px-2.5 py-1 text-sm text-text transition-colors hover:bg-primary-light hover:text-primary"
								>{tool.name}</span
								>
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { inview } from "$lib/actions/inview";

	let {
		title = "Ready to build something?",
		subtitle = "Tell us the outcome you need. We'll tell you how we'd get there.",
		buttonText = "Book a free call",
		buttonHref = "https://calendly.com/maiduydungvn/meeting-with-mai",
		secondaryText = "Get in touch",
		secondaryHref = "/contact",
	}: {
		title?: string;
		subtitle?: string;
		buttonText?: string;
		buttonHref?: string;
		secondaryText?: string;
		secondaryHref?: string;
	} = $props();
</script>

<section class="border-t border-border bg-primary-light py-16 lg:py-24" use:inview>
	<div class="mx-auto max-w-[1400px] px-6 text-center">
		<h2 class="font-bold text-3xl tracking-tight text-foreground lg:text-4xl">
			{title}
		</h2>
		<p class="mx-auto mt-3 max-w-lg text-lg text-light">
			{subtitle}
		</p>
		<div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<a
				href={buttonHref}
				target={buttonHref.startsWith('http') ? '_blank' : undefined}
				rel={buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
				class="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-hover"
			>
				{buttonText}
			</a>
			<a
				href={secondaryHref}
				class="rounded-full border border-border bg-white px-6 py-2.5 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-gray-50"
			>
				{secondaryText}
			</a>
		</div>
	</div>
</section>

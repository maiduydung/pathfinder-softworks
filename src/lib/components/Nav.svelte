<script lang="ts">
	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const links = [
		{ href: '#services', label: 'Services' },
		{ href: '#work', label: 'Work' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/95 shadow-sm backdrop-blur-sm'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="#top" class="flex items-center gap-2.5 text-lg font-semibold text-heading">
			<svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 22l10-5 10 5L12 2z" />
			</svg>
			<span>Pathfinder Softworks</span>
		</a>

		<!-- Desktop links -->
		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm text-text transition-colors hover:text-primary"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="https://calendly.com/maiduydungvn/meeting-with-mai"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
			>
				Book a free call
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="text-heading md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-gray-100 bg-white px-6 pb-4 md:hidden">
			{#each links as link}
				<a
					href={link.href}
					class="block py-3 text-sm text-text transition-colors hover:text-primary"
					onclick={closeMobile}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="https://calendly.com/maiduydungvn/meeting-with-mai"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-2 inline-block rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
				onclick={closeMobile}
			>
				Book a free call
			</a>
		</div>
	{/if}
</nav>

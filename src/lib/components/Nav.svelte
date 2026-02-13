<script lang="ts">
	import { page } from '$app/stores';

	let mobileOpen = $state(false);

	const links = [
		{ href: '/services', label: 'Services' },
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
	];

	function closeMobile() {
		mobileOpen = false;
	}

	function isActive(href: string, pathname: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	}
</script>

<nav class="sticky top-0 z-50 border-b border-border bg-white">
	<div class="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
		<a href="/" class="flex items-center gap-2 text-lg font-semibold text-foreground">
			<svg class="h-6 w-6 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 22l10-5 10 5L12 2z" />
			</svg>
			Pathfinder Softworks
		</a>

		<!-- Desktop -->
		<div class="hidden items-center gap-1 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="rounded-full px-4 py-1.5 text-sm transition-colors {isActive(link.href, $page.url.pathname)
						? 'text-primary font-medium'
						: 'text-light hover:text-foreground'}"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="https://calendly.com/maiduydungvn/meeting-with-mai"
				target="_blank"
				rel="noopener noreferrer"
				class="ml-4 rounded-full bg-primary px-5 py-2 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-hover"
			>
				Book a call
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="text-foreground md:hidden"
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

	{#if mobileOpen}
		<div class="border-t border-border bg-white px-6 pb-4 md:hidden">
			{#each links as link}
				<a
					href={link.href}
					class="block py-2.5 text-sm {isActive(link.href, $page.url.pathname)
						? 'text-primary font-medium'
						: 'text-light'}"
					onclick={closeMobile}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="https://calendly.com/maiduydungvn/meeting-with-mai"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-2 inline-block rounded-full bg-primary px-5 py-2 text-sm font-bold text-white"
				onclick={closeMobile}
			>
				Book a call
			</a>
		</div>
	{/if}
</nav>

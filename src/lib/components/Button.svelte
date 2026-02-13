<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		variant = 'primary',
		size = 'md',
		external = false,
		children,
	}: {
		href: string;
		variant?: 'primary' | 'secondary' | 'outline';
		size?: 'sm' | 'md' | 'lg';
		external?: boolean;
		children: Snippet;
	} = $props();

	const base = 'inline-flex items-center justify-center font-medium transition-all';

	const variants: Record<string, string> = {
		primary: 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30',
		secondary: 'bg-white text-primary border border-primary/20 hover:border-primary/40 hover:bg-primary-light/50',
		outline: 'border border-gray-200 text-heading hover:border-primary hover:text-primary',
	};

	const sizes: Record<string, string> = {
		sm: 'rounded-lg px-4 py-2 text-sm',
		md: 'rounded-xl px-6 py-3 text-base',
		lg: 'rounded-xl px-8 py-3.5 text-lg',
	};
</script>

<a
	{href}
	class="{base} {variants[variant]} {sizes[size]}"
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
>
	{@render children()}
</a>

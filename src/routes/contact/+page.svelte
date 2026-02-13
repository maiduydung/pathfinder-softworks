<script lang="ts">
	import { inview } from "$lib/actions/inview";
	import CTABanner from "$lib/components/CTABanner.svelte";

	const WEB3FORMS_KEY = "63a2e7aa-90e1-4413-8ecc-29dcbfda849b";

	let name = $state("");
	let email = $state("");
	let message = $state("");
	let status = $state<"idle" | "sending" | "sent" | "error">("idle");

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		status = "sending";
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					access_key: WEB3FORMS_KEY,
					name,
					email,
					message,
					subject: `New message from ${name} at Pathfinder Softworks`,
				}),
			});
			const data = await response.json();
			if (data.success) {
				status = "sent";
				name = "";
				email = "";
				message = "";
			} else {
				status = "error";
			}
		} catch {
			status = "error";
		}
	}
</script>

<svelte:head>
	<title>Contact — Pathfinder Softworks</title>
	<meta name="description" content="Get in touch with Pathfinder Softworks. Tell us the outcome you need." />
</svelte:head>

<section class="mx-auto max-w-[1400px] px-6 pt-12 pb-8 lg:pt-20">
	<div class="max-w-2xl" use:inview>
		<p class="text-sm font-bold uppercase tracking-widest text-primary">Contact</p>
		<h1 class="mt-3 font-bold text-5xl leading-snug tracking-tight text-foreground lg:text-6xl">
			Let's build something
		</h1>
		<p class="mt-3 text-lg leading-relaxed text-light">
			Got a product idea? A process bleeding time and money? Tell us the outcome you need.
		</p>
	</div>
</section>

<section class="my-8 lg:my-12">
	<div class="mx-auto max-w-[1400px] px-6">
		<div class="grid gap-12 lg:grid-cols-2">
			<!-- Form -->
			<div use:inview>
				<h2 class="font-bold text-xl text-foreground">Send us a message</h2>
				<p class="mt-1 text-sm text-light">We'll get back to you within 24 hours.</p>

				<form onsubmit={handleSubmit} class="mt-6 space-y-4">
					<div>
						<label for="name" class="block text-sm font-medium text-foreground">Name</label>
						<input
							id="name"
							type="text"
							bind:value={name}
							required
							class="mt-1 w-full rounded-xl border border-border px-4 py-2.5 text-foreground placeholder-light/40 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
							placeholder="Your name"
						/>
					</div>
					<div>
						<label for="email" class="block text-sm font-medium text-foreground">Email</label>
						<input
							id="email"
							type="email"
							bind:value={email}
							required
							class="mt-1 w-full rounded-xl border border-border px-4 py-2.5 text-foreground placeholder-light/40 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
							placeholder="you@company.com"
						/>
					</div>
					<div>
						<label for="message" class="block text-sm font-medium text-foreground">What outcome are you looking for?</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="4"
							class="mt-1 w-full rounded-xl border border-border px-4 py-2.5 text-foreground placeholder-light/40 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
							placeholder="e.g. I need a platform that..., We're spending too much time on..."
						></textarea>
					</div>
					<button
						type="submit"
						disabled={status === "sending"}
						class="w-full rounded-full bg-primary py-2.5 font-bold text-white shadow-md transition-colors hover:bg-primary-hover disabled:opacity-50"
					>
						{#if status === "sending"}
							Sending...
						{:else if status === "sent"}
							Sent!
						{:else}
							Get in touch
						{/if}
					</button>
					{#if status === "error"}
						<p class="text-sm text-red-600">Something went wrong. Please try emailing us directly.</p>
					{/if}
					{#if status === "sent"}
						<p class="text-sm text-green-600">Thanks! We'll get back to you within 24 hours.</p>
					{/if}
				</form>
			</div>

			<!-- Info -->
			<div use:inview={100}>
				<h2 class="font-bold text-xl text-foreground">Other ways to reach us</h2>
				<p class="mt-1 text-sm text-light">Prefer a direct conversation? Pick what works best.</p>

				<div class="mt-6 space-y-3">
					<a href="mailto:maiduydungvn@gmail.com" class="flex items-center gap-3 rounded-3xl border border-border p-4 transition-colors hover:bg-gray-50/50">
						<svg class="h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
						</svg>
						<div>
							<p class="text-sm font-medium text-foreground">Email</p>
							<p class="text-xs text-light">maiduydungvn@gmail.com</p>
						</div>
					</a>
					<a href="https://www.linkedin.com/company/pathfinder-softworks" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 rounded-3xl border border-border p-4 transition-colors hover:bg-gray-50/50">
						<svg class="h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
						<div>
							<p class="text-sm font-medium text-foreground">LinkedIn</p>
							<p class="text-xs text-light">Pathfinder Softworks</p>
						</div>
					</a>
					<a href="https://calendly.com/maiduydungvn/meeting-with-mai" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 rounded-3xl border border-border p-4 transition-colors hover:bg-gray-50/50">
						<svg class="h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
						</svg>
						<div>
							<p class="text-sm font-medium text-foreground">Book a call</p>
							<p class="text-xs text-light">Free 30-min consultation with our founder</p>
						</div>
					</a>
				</div>

				<div class="mt-6 rounded-3xl bg-muted p-5">
					<p class="text-sm font-medium text-foreground">Where we are</p>
					<p class="mt-1 text-sm text-light">San Francisco &middot; Warsaw &middot; Ho Chi Minh City</p>
					<p class="text-sm text-light">We cover US, European, and Asian business hours.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<CTABanner
	title="Prefer a call?"
	subtitle="Skip the form. Book a free 30-minute consultation."
	buttonText="Book a free call"
	buttonHref="https://calendly.com/maiduydungvn/meeting-with-mai"
	secondaryText="View our services"
	secondaryHref="/services"
/>

<script lang="ts">
	import { inview } from "$lib/actions/inview";
</script>

<section class="bg-white py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 text-center" use:inview>
			<h2 class="text-3xl font-bold text-heading md:text-4xl">
				What changes when you work with us
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text">
				We've helped companies replace manual work, consolidate
				scattered data, protect their margins, and make faster
				decisions, all without disrupting how their teams work.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div
				class="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
				use:inview={0}
			>
				<p class="text-4xl font-bold text-primary">Hours</p>
				<p class="text-lg font-semibold text-heading">
					back to your team
				</p>
				<p class="mt-2 text-sm text-text">
					Manual processes that eat up the week, replaced with
					systems that run themselves
				</p>
			</div>

			<div
				class="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
				use:inview={100}
			>
				<p class="text-4xl font-bold text-primary">40+</p>
				<p class="text-lg font-semibold text-heading">
					data sources unified
				</p>
				<p class="mt-2 text-sm text-text">
					Scattered platforms consolidated into one dashboard
				</p>
			</div>

			<div
				class="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
				use:inview={200}
			>
				<p class="text-4xl font-bold text-primary">Margins</p>
				<p class="text-lg font-semibold text-heading">
					protected automatically
				</p>
				<p class="mt-2 text-sm text-text">
					We build software with profitability guardrails baked in
				</p>
			</div>

			<div
				class="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
				use:inview={300}
			>
				<p class="text-4xl font-bold text-primary">Zero</p>
				<p class="text-lg font-semibold text-heading">
					workflow disruption
				</p>
				<p class="mt-2 text-sm text-text">
					New systems that work with your existing tools and
					processes. No retraining needed
				</p>
			</div>
		</div>

		<p class="mt-10 text-center text-text" use:inview>
			Every engagement starts with one question: <span
				class="font-semibold text-heading"
				>what's the outcome your business needs?</span
			>
		</p>
	</div>
</section>

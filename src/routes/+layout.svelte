<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<title>Pathfinder Softworks — We Build Software That Delivers Results</title>
	<meta
		name="description"
		content="A full-service software agency that builds SaaS platforms, custom tools, and AI-powered products. We don't just ship code — we ship outcomes that save time, cut costs, and drive ROI."
	/>
</svelte:head>

{@render children()}

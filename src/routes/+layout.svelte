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
	<title>Pathfinder Softworks — Data, Operations & Software for Growing Businesses</title>
	<meta
		name="description"
		content="We help companies make sense of messy systems and stop bleeding money in places they can't see. Data, operations, and software — fixed quietly, built to last."
	/>
</svelte:head>

{@render children()}

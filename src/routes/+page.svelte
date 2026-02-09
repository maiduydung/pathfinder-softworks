<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import PainPoints from '$lib/components/PainPoints.svelte';
	import Services from '$lib/components/Services.svelte';
	import CaseStudies from '$lib/components/CaseStudies.svelte';
	import About from '$lib/components/About.svelte';
	import HowWeWork from '$lib/components/HowWeWork.svelte';
	import Tools from '$lib/components/Tools.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />
<main>
	<Hero />
	<PainPoints />
	<Services />
	<CaseStudies />
	<About />
	<HowWeWork />
	<Tools />
	<Contact />
</main>
<Footer />

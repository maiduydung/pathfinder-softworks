<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	let canvasEl: HTMLCanvasElement | undefined = $state();
	let destroyFn: (() => void) | undefined;
	let phi = 0;

	const markers = [
		{ location: [38.9, -77.0], size: 0.08 },
		{ location: [52.2, 21.0], size: 0.08 },
		{ location: [10.8, 106.6], size: 0.08 },
	];

	onMount(async () => {
		if (!canvasEl) return;

		const cobe = await import("cobe");
		const createGlobe = cobe.default;

		const globe = createGlobe(canvasEl, {
			devicePixelRatio: 2,
			width: 500 * 2,
			height: 500 * 2,
			phi: 0,
			theta: 0.15,
			dark: 0,
			diffuse: 1.8,
			mapSamples: 20000,
			mapBrightness: 4,
			baseColor: [0.92, 0.95, 1],
			markerColor: [0.15, 0.39, 0.92],
			glowColor: [0.85, 0.91, 1],
			markers,
			onRender: (state: Record<string, number>) => {
				state.phi = phi;
				phi += 0.003;
			},
		});

		destroyFn = () => globe.destroy();
	});

	onDestroy(() => {
		destroyFn?.();
	});
</script>

<div class="h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
	<canvas
		bind:this={canvasEl}
		class="h-full w-full"
		width="1000"
		height="1000"
	></canvas>
</div>

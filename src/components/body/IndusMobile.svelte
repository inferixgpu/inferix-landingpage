<script lang="ts">
	import { onMount } from 'svelte';
	import In1 from '$images/png/industries_v1.png';
	import In2 from '$images/png/industries_v2.png';
	import In3 from '$images/png/industries_v3.png';
	import In4 from '$images/png/industries_v4.png';
	import In5 from '$images/png/industries_v5.png';

	let screenSize: number;
	let images = [In1, In2, In3, In4, In5];
	let currentX: number = 0;
	let imageWidth: number = 300;
	let imageSpacing: number = 24;
	let speed: number = 2;
	let imagesLoaded: number = 0;

	onMount(() => {
		moveSlider();
	});

	function moveSlider() {
		currentX -= speed; 

		if (currentX <= -(images.length * (imageWidth + imageSpacing))) {
			currentX = 0;
		}

		requestAnimationFrame(moveSlider);
	}

	function onImageLoad() {
		imagesLoaded += 1;
		if (imagesLoaded === images.length) {
			moveSlider();
		}
	}
</script>

<svelte:window bind:innerWidth={screenSize} />

<style>
	.slider-container {
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	.slider {
		display: flex;
		white-space: nowrap;
	}

	.slider img {
		width: 300px;
		height: auto;
		flex-shrink: 0;
		margin-right: 24px;
	}
</style>

<div class="slider-container">
	<div class="slider" style="transform: translateX({currentX}px);">
		{#each images as image (image)}
			<img src={image} alt="Industry Image" on:load={onImageLoad} />
		{/each}
		{#each images as image (image)}
			<img src={image} alt="Industry Image" on:load={onImageLoad} />
		{/each}
	</div>
</div>

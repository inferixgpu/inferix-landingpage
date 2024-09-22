<script lang="ts">
	import In1 from '$images/png/industries/1.jpg';
	import In2 from '$images/png/industries/2.jpg';
	import In3 from '$images/png/industries/3.jpg';
	import In4 from '$images/png/industries/4.jpg';
	import In5 from '$images/png/industries/5.jpg';

	let screenSize: number;
	let images = [In1, In2, In3, In4, In5];
	let currentX: number = 0;
	let imageWidth: number = 300; 
	let imageSpacing: number = 24;
	let speed: number = 2;


	function moveSlider() {
		currentX -= speed; 

		if (currentX <= -(images.length * (imageWidth + imageSpacing))) {
			currentX = 0;
		}

		requestAnimationFrame(moveSlider);
	}

	moveSlider();
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
	<div
		class="slider"
		style="transform: translateX({currentX}px);"
	>
		{#each images as image (image)}
			<img src={image} alt="Industry Image" />
		{/each}
		{#each images as image (image)}
		{/each}
	</div>
</div>

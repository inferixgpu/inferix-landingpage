<script lang="ts">
	const industriesData = [
		{
			title: 'Entertainment <br> and Media',
			description:
				'From blockbuster movies to immersive gaming experiences, Inferix brings life to visuals that captivate audiences worldwide.'
		},
		{
			title: 'Architecture <br> and Design',
			description:
				'Create photorealistic architectural visualizations and design concepts, transforming ideas into tangible, visually stunning realities'
		},
		{
			title: 'Product Development',
			description:
				'Steamline the design process with accelerated 3D rendering and simulations, enabling efficient prototyping and iteration.'
		},
		{
			title: 'Animation and VFX',
			description:
				'Power visual effects and animation pipelines with Inferix, speeding up production and enabling seamless integration of visual elements.'
		},
		{
			title: 'Virtual <br> and Augmented Reality',
			description:
				'Reality Build immersive virtual and agumented reality experiences that push the boundaries of interactive storytelling.'
		}
	];

	let scrollPosition = 0;

	function handleScroll(event: UIEvent) {
		const target = event.target as HTMLElement;
		scrollPosition = target.scrollLeft;
	}
</script>

<div class={`${scrollPosition > 0 ? '' : 'container mx-auto'}`}>
	<div
		class={`industryContainer flex gap-[25px] mt-[80px] hide-scroll overflow-auto absolute z-2 w-full h-full`}
		on:scroll={handleScroll}
	>
		{#each industriesData as industry, index}
			{#if index === 1}
				<div
					class="industry md:min-w-[519px] min-w-[300px] md:h-[392px] h-[250px] box-border md:pl-[55px] pl-4 md:pr-[30px] pr-4 md:pt-[161px] pt-[30px] flex flex-col justify-start"
				>
					<p class="font-pre md:text-[2rem] text-2xl font-extrabold text-secondary">
						{@html industry.title}
					</p>
					<p class="text-lightGrey font-pre md:text-xl text-base font-normal mt-5">
						{industry.description}
					</p>
				</div>
			{:else}
				<div
					class="industry md:min-w-[519px] min-w-[300px] md:h-[392px] h-[250px] box-border md:pl-[55px] pl-4 md:pr-[56px] pr-4 md:pt-[161px] pt-[30px] flex flex-col justify-start"
				>
					<p class="font-pre md:text-[2rem] text-2xl font-extrabold text-secondary">
						{@html industry.title}
					</p>
					<p class="text-lightGrey font-pre md:text-xl text-base font-normal mt-5">
						{industry.description}
					</p>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style lang="postcss">
	.hide-scroll::-webkit-scrollbar {
		display: none;
	}
	.hide-scroll {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.industryContainer {
		width: -webkit-fill-available;
	}
	.industryContainer > div {
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100% 100%;
	}
	.industryContainer > div:nth-child(1) {
		background-image: url('$images/png/Entertainment.png');
	}
	.industryContainer > div:nth-child(2) {
		background-image: url('$images/png/Architecture.png');
	}
	.industryContainer > div:nth-child(3) {
		background-image: url('$images/png/ProductDevelopment.png');
	}
	.industryContainer > div:nth-child(4) {
		background-image: url('$images/png/Animation.png');
	}
	.industryContainer > div:nth-child(5) {
		background-image: url('$images/png/Virtual.png');
	}
	.maxWidth {
		max-width: calc(100% - 60px);
	}
</style>

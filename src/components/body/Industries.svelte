<script lang="ts">
	import ArrowDown from '$images/icons/ArrowDown.svg';
	import EllipseBackground from '$images/png/EllipseBackground.png';
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

	let screenSize: number;

	let scrollPosition = 0;

	function handleScroll(event: UIEvent) {
		const target = event.target as HTMLElement;
		scrollPosition = target.scrollLeft;
	}
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="pb-[700px] background relative">
	<img
		src={EllipseBackground}
		alt="ellipse background"
		class="absolute inset-0 w-full h-full z-1"
	/>
	<img src={ArrowDown} alt="arrow down icon" class="absolute left-[50%] top-[-105px]" />
	<div class="container mx-auto md:pt-[307px] pt-[150px] md:px-0 px-5 box-border">
		<p class="font-pre text-[2.5rem] font-extrabold">Industries Empowered by Inferix</p>
		<p class="text-grey font-pre text-2xl max-w-[1028px] font-normal mt-5">
			Unlock the potential of Inferix across a diverse range of industries, where visual computing
			plays a pivotal role in innovation and success. Our cutting - edge distributed GPU
			infrastructure enhances productivity, acceierates creativity, and elevates results for the
			following sectors
		</p>
	</div>
	<div class={`${scrollPosition > 0 ? '' : 'container mx-auto'}`}>
		<div
			class={` industryContainer flex gap-[25px] mt-[80px] hide-scroll overflow-auto absolute z-2 w-full h-full`}
			on:scroll={handleScroll}
		>
			{#each industriesData as industry, index}
				{#if index === 1}
					<div
						class="industry min-w-[519px] h-[392px] box-border pl-[55px] pr-[30px] pt-[161px] flex flex-col justify-start"
					>
						<p class="font-pre text-[2rem] font-extrabold text-secondary">{@html industry.title}</p>
						<p class="text-lightGrey font-pre text-xl font-normal mt-5">{industry.description}</p>
					</div>
				{:else}
					<div
						class="industry min-w-[519px] h-[392px] box-border pl-[55px] pr-[56px] pt-[161px] flex flex-col justify-start"
					>
						<p class="font-pre text-[2rem] font-extrabold text-secondary">{@html industry.title}</p>
						<p class="text-lightGrey font-pre text-xl font-normal mt-5">{industry.description}</p>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div />
</div>

<style lang="postcss">
	.hide-scroll::-webkit-scrollbar {
		display: none;
	}
	.hide-scroll {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.background {
		background: linear-gradient(180deg, #101010 0%, #000 100%);
	}

	.industryContainer > div {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
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

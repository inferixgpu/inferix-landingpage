<script lang="ts">
	import Entertainment from '$images/png/Entertainment.png';
	import Architecture from '$images/png/Architecture.png';
	import ProductDevelopment from '$images/png/ProductDevelopment.png';
	import Animation from '$images/png/Animation.png';
	import Virtual from '$images/png/Virtual.png';
	import ArrowDown from '$images/icons/ArrowDown.svg';

	const industriesData = [
		{
			title: 'Entertainment and Media',
			description:
				'From blockbuster movies to immersive gaming experiences, Inferix brings life to visuals that captivate audiences worldwide.',
			url: '$images/png/Entertainment.png'
		},
		{
			title: 'Architecture and Design',
			description:
				'Create photorealistic architectural visualizations and design concepts, transforming ideas into tangible, visually stunning realities',
			url: '$images/png/Architecture.png'
		},
		{
			title: 'Product Development',
			description:
				'Steamline the design process with accelerated 3D rendering and simulations, enabling efficient prototyping and iteration.',
			url: '$images/png/ProductDevelopment.png'
		},
		{
			title: 'Animation and VFX',
			description:
				'Power visual effects and animation pipelines with Inferix, speeding up production and enabling seamless integration of visual elements.',
			url: '$images/png/Animation.png'
		},
		{
			title: 'Virtual and Augmented',
			description:
				'Reality Build immersive virtual and agumented reality experiences that push the boundaries of interactive storytelling.',
			url: '$images/png/Virtual.png'
		}
	];

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div
	class="pt-[397px] pb-[175px] bg-[url('$images/png/EllipseBackground.png')] background relative mt-[185px]"
>
	<img src={ArrowDown} alt="arrow down icon" class="absolute left-[50%] top-[-105px]" />
	<p class="font-pre text-[2.5rem] font-extrabold">Industries Empowered by Inferix</p>
	<p class="text-grey text-2xl max-w-[1028px] font-normal mt-5">
		Unlock the potential of Inferix across a diverse range of industries, where visual computing
		plays a pivotal role in innovation and success. Our cutting - edge distributed GPU
		infrastructure enhances productivity, acceierates creativity, and elevates results for the
		following sectors
	</p>
	<div class="industryContainer flex gap-[25px] mt-[80px] hide-scroll overflow-auto">
		{#each industriesData as industry}
			<div
				class="industry min-w-[519px] h-[392px] bg-[url('$images/png/Entertainment.png')] box-border pl-[55px] pr-[56px] pb-[44px] flex flex-col justify-end"
			>
				<p class="font-pre text-[2rem] font-extrabold text-secondary">{industry.title}</p>
				<p class="text-lightGrey text-xl font-normal mt-5">{industry.description}</p>
			</div>
		{/each}
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
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>

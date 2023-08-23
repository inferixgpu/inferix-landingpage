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
</script>

<div class="industryContainer mt-8 container mx-auto flex flex-col gap-3 items-center">
	{#each industriesData as industry}
		<div class="industry max-w-[350px] h-[147px] box-border flex flex-col justify-end rounded-2xl">
			<p class="font-pre text-base font-extrabold text-secondary">
				{@html industry.title}
			</p>
			<p class="text-lightGrey font-pre text-[0.625rem] font-normal mt-3">
				{industry.description}
			</p>
		</div>
	{/each}
</div>

<style lang="postcss">
	.industryContainer > div {
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100% 100%;
	}
	.industryContainer > div:nth-child(1) {
		background-image: url('$images/png/EntertainmentMobile.png');
		padding: 10px 32px 16px 29px;
	}
	.industryContainer > div:nth-child(2) {
		background-image: url('$images/png/ArchitectureMobile.png');
		padding: 10px 85px 20px 29px;
	}
	.industryContainer > div:nth-child(3) {
		background-image: url('$images/png/ProductDevelopmentMobile.png');
		padding: 10px 45px 20px 29px;
	}
	.industryContainer > div:nth-child(4) {
		background-image: url('$images/png/AnimationMobile.png');
		padding: 10px 57px 20px 29px;
	}
	.industryContainer > div:nth-child(5) {
		background-image: url('$images/png/VirtualMobile.png');
		padding: 10px 58px 20px 29px;
	}
</style>

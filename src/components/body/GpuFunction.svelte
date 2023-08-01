<script>
	import VFX from '$images/photos/VFX.png';
	import AiInference from '$images/photos/AiInference.png';
</script>

<div class="container mx-auto md:mt-[171px] mt-[144px]">
	<p class="text-secondary md:text-[2.5rem] text-[1.625rem] text-center font-bold font-outfit">
		GPU function as a service
	</p>
	<p class="mt-6 mx-auto md:text-2xl text-lg text-white font-outfit font-normal text-center">
		Unlock the power of GPU acceleration with our GPU Function as a Service, empowering developers
		and businesses to unleash high-performance computing for faster rendering, Al- driven
		experiences, and seamless gameplay.
	</p>
	<div
		class="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 md:mt-20 mt-[65.5px] md:gap-40 gap-[47px] w-full"
	>
		<img src={VFX} alt="VFX" class="mx-auto vfx" />
		<img src={AiInference} alt="AiInference" class="mx-auto aiInference" />
	</div>
</div>

<style lang="postcss">
	@media screen and (min-width: 767px) {
		.vfx {
			margin-left: auto !important;
			margin-right: 0;
		}
		.aiInference {
			margin-right: auto !important;
			margin-left: 0;
		}
	}
</style>

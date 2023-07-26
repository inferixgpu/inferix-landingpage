<script>
	import footerVideo from '$components/static/videos/footer.mp4';
	import InferixLogo from '$components/static/images/icons/inferixLogo.svg';
</script>

<div class="container mx-auto pb-[41px] mt-[200px]">
	<div class="max-w-[1600px] h-[435px] overflow-hidden rounded-[32px] relative">
		<video
			controls
			width="1600"
			height="435"
			autoplay
			muted
			loop
			Playsinline
			class="absolute top-[-35%]"
		>
			<source src={footerVideo} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div
			class="min-w-[1600px] h-[435px] overlay absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-8"
		>
			<p class="font-outfit text-[2rem] w-[1314px] text-center font-medium text-black">
				"Join us as a GPU provider and let's build our ecosystem together, harnessing the power of
				GPUs for seamless rendering, accelerated Al, and groundbreaking innovation."
			</p>
			<button class="bg-black text-white text-lg py-4 px-8 rounded-2xl hover:opacity-[0.8]">
				Join Inferix
			</button>
		</div>
	</div>
	<div class="mt-10 flex justify-between">
		<img src={InferixLogo} alt="Inferix logo" />
		<div class="flex gap-10 font-bold font-outfit text-lg">
			<p class="active">Twitter</p>
			<p>Medium</p>
			<p>Discord</p>
			<p>Lightpaper</p>
		</div>
	</div>
	<p class="font-outfit text-sm font-normal mt-[18px]">© 2023 Inferix. All rights reserved.</p>
</div>

<style>
	.overlay {
		background: linear-gradient(0deg, rgba(6, 255, 97, 0.7) 0%, rgba(6, 255, 97, 0.7) 100%);
	}
	.active {
		color: var(--green);
	}
</style>

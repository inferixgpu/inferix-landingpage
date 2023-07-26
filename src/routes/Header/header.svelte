<script>
	import InferixLogo from '$components/static/images/icons/inferixLogo.svg';
	import headerVideo from '$components/static/videos/headerVideo.mp4';
	import bodyLogo from '$components/static/images/icons/bodyLogo.svg';
</script>

<div class="background pt-[49.4px]">
	<nav class="flex justify-between w-full container mx-auto font-outfit font-normal">
		<div class="flex gap-4">
			<img src={InferixLogo} alt="logo" />
		</div>
		<div class="flex gap-10 text-lg">
			<li class="active"><a href="#">About</a></li>
			<li><a href="#">GPU Neywork</a></li>
			<li><a href="#">Roadmap</a></li>
		</div>
	</nav>
	<div class="mt-10 rounded-3xl overflow-hidden max-w-[1600px] max-h-[800px] mx-auto relative">
		<video controls width="1600" height="800" autoplay muted loop Playsinline>
			<source src={headerVideo} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div
			class="text-[5rem] font-normal absolute rounded-3xl min-w-[1600px] min-h-[800px] font-outfit flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 overlay"
		>
			<p class="text-center">Fastest 3d redering by</p>
			<p class="text-secondary text-center font-bold">interix decentralized GPU</p>
		</div>
	</div>
	<img class="w-[123px] h-[50px] mt-[127px] mx-auto" src={bodyLogo} alt="logo" />
</div>

<style lang="postcss">
	li {
		list-style-type: none;
	}
	.active {
		color: var(--green);
	}
	.overlay {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
	}
	.background {
		background: url('$components/static/images/icons/headerBackground.svg') no-repeat center center
			fixed;
		background-size: cover;
	}
</style>

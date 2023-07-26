<script>
import headerLogo from "$components/static/images/icons/headerLogo.svg"
import headerVideo from "$components/static/videos/headerVideo.mp4"
import bodyLogo from "$components/static/images/icons/bodyLogo.svg"

</script>

	<div>
		<nav class="flex justify-between w-full container mx-auto">
			<div class="flex gap-4">
				<img class="w-[99px] h-[20px]" src={headerLogo} alt="logo">
				<p class="text-base">Decentrazlied GPU Network</p>
			</div>
			<div class="flex gap-10 text-lg">
				<li class="active"><a href="#">About</a></li>
				<li><a href="#">GPU Neywork</a></li>
				<li><a href="#">Roadmap</a></li>
			</div>
		</nav>
		<div class="mt-10 rounded-3xl overflow-hidden max-w-[1600px] max-h-[800px] mx-auto relative">
			<video controls width="1600" height="800" autoplay muted loop Playsinline>
				<source src={headerVideo} type="video/mp4">
					Your browser does not support the video tag.
		</video>
		<div class="text-[5rem] font-normal absolute top-[50%] left-[25%] center">
			<p class="text-center">Fastest 3d redering by</p>
			<p class="text-secondary text-center font-bold">interix decentralized GPU</p>
		</div>
		</div>
	<img class="w-[123px] h-[50px] mt-[127px] mx-auto" src={bodyLogo} alt="logo">

	</div>

<style lang="postcss">
	li {
		list-style-type: none;
	}
	.active {
		color: var(--green);
	}
	.center {
		transform: translateY(-50%);
	}
</style>

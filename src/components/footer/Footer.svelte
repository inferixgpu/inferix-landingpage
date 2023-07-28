<script lang="ts">
	import footerVideo from '$videos/footer.mp4';
	import InferixLogo from '$images/icons/inferixLogo.svg';
	import LogoMobileBottom from '$images/icons/LogomobileBottom.svg';
	let activeTab = 1;

	const setActiveTab = (tab: number) => {
		activeTab = tab;
	};

	const medias = [
		{ id: 1, name: 'Twitter', href: '#tw' },
		{ id: 2, name: 'Medium', href: '#md' },
		{ id: 3, name: 'Discord', href: '#dc' },
		{ id: 4, name: 'Lightpaper', href: '#lp' }
	];
	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="container mx-auto pb-[41px] mt-[200px]">
	<div class="h-[435px] overflow-hidden rounded-[32px] relative">
		<video
			controls
			width="1600"
			height="435"
			autoplay
			muted
			loop
			Playsinline
			class="absolute md:top-[-35%] top-[30%] md:scale-0 scale-[2.5]"
		>
			<source src={footerVideo} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div
			class="h-[435px] overlay absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-8"
		>
			<p
				class="font-outfit md:text-[2rem] text-2xl box-border md:px-[140px] px-5 text-center font-medium text-black"
			>
				"Join us as a GPU provider and let's build our ecosystem together, harnessing the power of
				GPUs for seamless rendering, accelerated Al, and groundbreaking innovation."
			</p>
			<button class="bg-black text-white text-lg py-4 px-8 rounded-2xl hover:opacity-[0.8]">
				Join Inferix
			</button>
		</div>
	</div>
	<div class="mt-10 flex md:flex-row flex-col justify-between">
		<img
			src={screenSize > 768 ? InferixLogo : LogoMobileBottom}
			class="md:order-1 order-2 md:w-auto w-[200px] md:h-auto h-[56px] md:mt-0 mt-8 md:mx-0 mx-auto"
			alt="Inferix logo"
		/>
		<div
			class="flex md:gap-10 gap-8 font-bold w-fit font-outfit md:text-lg text-base md:order-2 order-1 mediaContainer"
		>
			{#each medias as media (media.id)}
				<div class={activeTab === media.id ? 'active' : ''} on:click={() => setActiveTab(media.id)}>
					<a href={media.href}>{media.name}</a>
				</div>
			{/each}
		</div>
	</div>
	<p class="font-outfit text-sm font-normal md:mt-[18px] mt-2 md:text-left text-center">
		© 2023 Inferix. All rights reserved.
	</p>
</div>

<style>
	.overlay {
		background: linear-gradient(0deg, rgba(6, 255, 97, 0.7) 0%, rgba(6, 255, 97, 0.7) 100%);
	}
	.active {
		color: var(--green);
	}
	@media screen and (max-width: 767px) {
		.mediaContainer {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>

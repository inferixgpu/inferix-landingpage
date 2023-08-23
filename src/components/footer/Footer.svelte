<script lang="ts">
	import footerVideo from '$videos/Footer.mp4';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';

	let activeTab = 1;

	const setActiveTab = (tab: number) => {
		activeTab = tab;
	};

	const medias = [
		{ id: 1, name: 'Twitter', href: '#' },
		{ id: 2, name: 'Medium', href: '#' },
		{ id: 3, name: 'Discord', href: '#' },
		{ id: 4, name: 'Lightpaper', href: '#' }
	];
	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="bg-darkGrey pb-[41px] md:pt-[249px] pt-[120px] md:px-0 px-5 box-border">
	<div
		class="md:h-[435px] h-[350px] container mx-auto overflow-hidden rounded-[32px] relative z-30"
	>
		<div class="md:top-[-35%] top-[30%] absolute z-10">
			<video width="1600" height="435" autoplay muted loop playsinline class="footerVideo">
				<source src={footerVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
		<div
			class="md:h-[435px] h-[350px] overlay absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center z-10"
		>
			<p
				class="font-outfit md:text-[2rem] text-base box-border md:px-[146px] px-5 text-center font-medium text-black"
			>
				"Join us as a GPU provider and let's build our ecosystem together, harnessing the power of
				GPUs for seamless rendering, accelerated Al, and groundbreaking innovation."
			</p>
			<p
				class="text-white cursor-pointer hover:opacity-[0.8] font-outfit text-lg text-center font-medium md:mt-[50px] mt-[32px] capitalize px-8 py-4 rounded-2xl bg-black"
			>
				Join Inferix now
			</p>
		</div>
	</div>
	<div class=" container mx-auto mt-20 flex md:flex-row flex-col justify-between">
		<div
			class="flex md:gap-4 gap-2 md:order-1 order-2 md:flex-row flex-col items-center md:items-start mt-8 md:mt-0"
		>
			<img src={HeaderLogo} alt="logo" class="w-[100px]" />
			<p class="font-base font-outfit font-normal text-white whitespace-nowrap">
				Decentrazlied GPU Network
			</p>
		</div>
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
	<div class="container mx-auto">
		<p class="font-outfit text-sm font-normal md:mt-[18px] mt-2 md:text-left text-center">
			© 2023 Inferix. All rights reserved.
		</p>
	</div>
</div>

<style>
	.overlay {
		background: linear-gradient(0deg, rgba(6, 255, 97, 0.7) 0%, rgba(6, 255, 97, 0.7) 100%);
	}
	.active {
		color: var(--green);
	}

	.footerVideo {
		transform: scale(1);
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		z-index: 0;
	}

	@media screen and (max-width: 767px) {
		.mediaContainer {
			margin-left: auto;
			margin-right: auto;
		}
		.footerVideo {
			transform: scale(2.5);
			-webkit-transform: scale(2.5);
			-moz-transform: scale(2.5);
			z-index: 0;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 1023px) {
		.mediaContainer {
			margin-left: auto;
			margin-right: auto;
		}
		.footerVideo {
			transform: scale(2);
			-webkit-transform: scale(2);
			-moz-transform: scale(2);
			z-index: 0;
		}
	}
</style>

<script lang="ts">
	import Close from '$images/icons/Close.svg';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import InferixIntro from '$videos/Earth_8.mp4';
	import Saos from 'saos';
	import SignUpModal from '$components/inferix/SignUpModal/SignUpModal.svelte';
	import DownloadFailed from '$components/inferix/Modals/DownloadFailed.svelte';
	import {Modal} from 'flowbite-svelte';

	import {afterUpdate, onMount} from 'svelte';
	import X from '$images/icons/Twitter.svg';
	import M from '$images/icons/M.svg';
	import D from '$images/icons/D.svg';
	import W from '$images/icons/warpcast.svg';
	import Y from '$images/icons/Ytb.svg';
	import buttonGPU from '$images/icons/ButtonGPU.png';
	import buttonGPUFocus from '$images/icons/ButtonGPUFocus.png';
	import buttonScreen from '$images/icons/ButtonScreen.png';
	import buttonScreenFocus from '$images/icons/ButtonScreenFocus.png';
	import DownloadIcon from '$images/icons/Download.svg';
	import background_download_1 from '$images/png/background-download-1.png';
	import background_download_2 from '$images/png/background-download-2.png';

	let textIndex = 0;

	let activeTab = 6;

	const setActiveTab = (tab: number) => {
		activeTab = tab;
	};

	const tabs = [
		{
			id: 1,
			title: 'About',
			href: '#about'
		},
		{
			id: 2,
			title: 'GPU Network',
			href: 'https://dash.inferix.io/'
		},
		{
			id: 3,
			title: 'Roadmap',
			href: '#roadmap'
		}
		// {
		// 	id: 5,
		// 	title: 'Docs',
		// 	href: 'https://docs.inferix.io/'
		// }
	];
	const register = {
		id: 6,
		title: 'Register',
		href: '#'
	};
	const medias = [
		{ id: 1, name: 'Twitter', href: 'https://twitter.com/inferixgpu', icon: X },
		{ id: 2, name: 'Medium', href: 'https://medium.com/@inferixgpu', icon: M },
		{ id: 3, name: 'Discord', href: 'https://discord.gg/NJvcWYcB9W', icon: D },
		{ id: 4, name: 'Youtube', href: 'https://www.youtube.com/@InferixGPU', icon: Y },
		{ id: 5, name: 'Warpcast', href: 'https://warpcast.com/inferixgpu', icon: W }
	];

	let screenSize: number;
	let y: number;

	let isOpen = false;
	let showModal = false;
	let downloadShowModal = false;

	afterUpdate(() => {
		if (typeof window !== 'undefined') {
			if (isOpen) {
				// Prevent scrolling when the menu is open
				document.documentElement.style.overflowY = 'hidden';
				document.addEventListener('touchmove', preventDefaultScroll, {
					passive: false
				});
			} else {
				// Re-enable scrolling when the menu is closed
				document.documentElement.style.overflowY = 'auto';
				document.removeEventListener('touchmove', preventDefaultScroll);
			}
		}
	});

	function preventDefaultScroll(e: TouchEvent) {
		e.preventDefault();
	}

	const toggleMenu = () => {
		isOpen = true;
	};

	const closeMenu = () => {
		isOpen = false;
	};

	function downloadMacOS() {
		downloadShowModal = true;
	}

	function handleClickTab(e: MouseEvent, id: number, href: string) {
		let tabItems = document.getElementsByClassName('tab-item');
		for (let i = 0; i < tabItems.length; i++) {
			tabItems[i].classList.remove('tab-active');
		}
		if (id != 6) document.getElementById(`item-tab-${id}`).classList.add('tab-active');
		if (id === 2 || id === 5) return;
		if (id === 6) {
			showModal = true;
		}

		e.preventDefault();
		const idTab = href.replace('#', '');
		const tab = document.getElementById(idTab);
		setActiveTab(id);
		const space = screenSize > 768 ? 100 : 270;

		if (tab) {
			window.scrollTo({
				top: tab.offsetTop - space,
				behavior: 'smooth'
			});
		}
		if (screenSize < 768) {
			isOpen = false;
		}
	}

	function autoPlay() {
		setTimeout(() => {
			textIndex = (textIndex + 1) % 2;
			autoPlay();
		}, 4000);
	}

	let is_close = true;

	function onCloseGuide() {
		is_close = false;
	}

	let forceUpdate = 0;

	function updateUI() {
		forceUpdate += 1;
	}

	onMount(() => {
		autoPlay();
		window.addEventListener('resize', updateUI);
	});

	let focusGPU = false;
	function focusButtonGPU(status) {
		if (screenSize < 768) return;
		focusGPU = status;
		const ele = document.querySelector('.item-border-1 > .item-download-1');
		if (status) {
			ele.classList.remove('back-leave');
			ele.classList.add('back-hover');
		} else {
			ele.classList.remove('back-hover');
			ele.classList.add('back-leave');
		}
	}

	let focusBtScreen = false;
	function focusButtonScreen(status) {
		if (screenSize < 768) return;
		focusBtScreen = status;
		const ele = document.querySelector('.item-border-2 > .item-download-2');
		if (status) {
			ele.classList.remove('back2-leave');
			ele.classList.add('back2-hover');
		} else {
			ele.classList.remove('back2-hover');
			ele.classList.add('back2-leave');
		}
	}


</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={y} />

<div class="header-container" style="font-family: Inter">
	<div id="header" class="flex flex-col fixed top-0 md:pb-0 pb-4 w-full z-50">
		{#if is_close}
			{#if screenSize > 800}
				<div class="transition-bar">
					<div class="absolute right-0 top-2 z-30 cursor-pointer" on:click="{onCloseGuide}">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x svelte-pwodhr" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
					</div>
					<div class="transition-action">
						<div class="transition-item">
							<div class="flex basis-1/3 justify-center shrink-0">
								<a href="https://docs.inferix.io/mvp-tutorial"
								   class="inline-flex h-full items-center gap-1">📌 MVP is live! <p class="text-black mt-1">Read the full blog ⟶</p></a>
							</div>
							<div class="flex basis-1/3 justify-center shrink-0">
								<a href="https://docs.inferix.io/por-release"
								   class="inline text-rainbow"
								>🚀 <span>Proof-of-Rendering Release</span></a>
							</div>
							<div class="flex basis-1/3 justify-center shrink-0">
								<a href="https://inferix.io/register"
								   class="inline"
								>🚀 Alliance Campaign is LIVE - <span class="text-black">  Join now!</span></a>
							</div>
						</div>
						<div class="transition-item">
							<div class="flex basis-1/3 justify-center shrink-0">
								<a href="https://docs.inferix.io/mvp-tutorial"
								   class="inline-flex h-full items-center gap-1">📌 MVP is live! <p class="text-black mt-1">Read the full blog ⟶</p></a>
							</div>
							<div class="flex basis-1/3 justify-center shrink-0">
								<a href="https://docs.inferix.io/por-release"
								   class="inline text-rainbow"
								>🚀 <span>Proof-of-Rendering Release</span></a>
							</div>
							<div class="flex basis-1/3 justify-center shrink-0">
								<a href="https://inferix.io/register"
								   class="inline"
								>🚀 Alliance Campaign is LIVE - <span class="text-black">  Join now!</span></a>
							</div>
						</div>
					</div>

				</div>
			{:else}
				<div class="transition-bar-mobile" id="guide-mobile">
					<div class="transition-action">
						<div class="flex basis-1/3 justify-center shrink-0">
							<a href="https://docs.inferix.io/mvp-tutorial"
							   class="inline-flex h-full items-center gap-1">📌 MVP is live! <p class="text-black mt-1">Read the full blog ⟶</p></a>
						</div>
						<div class="flex basis-1/3 justify-center shrink-0">
							<a href="https://docs.inferix.io/por-release"
							   class="inline text-rainbow"
							>🚀 <span>Proof-of-Rendering Release</span></a>
						</div>
						<div class="flex basis-1/3 justify-center shrink-0">
							<a href="https://inferix.io/register"
							   class="inline"
							>🚀 Alliance Campaign is LIVE - <span class="text-black">  Join now!</span></a>
						</div>
					</div>
				</div>
			{/if}
		{/if}

		<div class="header-bar">
			<img class="h-[24px]" src={HeaderLogo} />
			<div class="flex justify-center h-[32px] lg:gap-6 md:gap-0 md:mx-[40px]">
				{#each tabs as tab (tab.id)}
					<a
						href={tab.href}
						on:click={(e) => handleClickTab(e, tab.id, tab.href)}
						id="item-tab-{tab.id}"
						class="tab-item">{tab.title}</a
					>
				{/each}
			</div>
			<div class="register-button">
				<a
					href={register.href}
					on:click={(e) => handleClickTab(e, register.id, register.href)}
					class="whitespace-nowrap">{register.title}</a
				>
			</div>
		</div>
		<div class="header-bar-mobile">
			<img class="h-[24px]" src={HeaderLogo} />
			<div class="cursor-pointer" on:click={toggleMenu}>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="0.5" y="0.5" width="39" height="39" fill="#1A1A1A" />
					<rect x="0.5" y="0.5" width="39" height="39" stroke="#2A343E" />
					<rect x="10" y="11" width="20" height="2" fill="#FFF4E9" />
					<rect x="15.8334" y="19" width="14.1667" height="2" fill="#FFF4E9" />
					<rect x="12.5" y="27" width="17.5" height="2" fill="#FFF4E9" />
				</svg>
			</div>
		</div>
	</div>
	<div class="mx-auto flex flex-col bg-black relative justify-end items-center">
		<div class="w-full flex justify-center items-center">
			<div
				class="flex flex-col gap-4 md:w-[750px] max-md:w-full h-[141px] mx-auto md:mt-[500px] mt-[420px] absolute z-[20]"
				style={is_close ? '' : 'margin-top: 420px'}
			>
				<div class="flex flex-col items-center justify-center" style="padding: 0 15px;">
					{#if textIndex === 0}
						<p class="text-[24px] font-[400] opacity-60 text-center">
							Fastest 3D rendering & AI inference by
						</p>
						<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
							<p class="text-[48px] max-md:text-[40px] font-bold text-center">
								Inferix Decentralized GPU
							</p>
						</Saos>
					{:else}
						<p class="text-[24px] font-[400] opacity-60 text-center">Low-cost AI inference by</p>
						<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
							<p class="text-[48px] max-md:text-[40px] font-bold text-center">
								Inferix Crowdsourced GPU
							</p>
						</Saos>
					{/if}
				</div>
			</div>
		</div>

		<div class="overflow-hidden bg-black mx-auto md:mt-0 -mt-[200px] max-md:opacity-40 relative">
			<video
				autoplay
				muted
				loop
				playsinline
				class="h-[698px] md:w-[1526px] max-md:w-full object-contain mx-auto mt-[250px]"
			>
				<source src={InferixIntro} type="video/mp4" />
			</video>
		</div>
		<div class="md:hidden absolute mb-[300px] text-[16px font-normal">Available on desktop</div>
		<div
			class="flex md:flex-row flex-col md:mt-[50px] md:w-[560px] max-md:w-full h-[104px]
				items-center mx-auto justify-between z-40 md:-mb-[150px] max-md:mb-[180px] max-md:gap-0 absolute"
		>
			<div class="item-border-1">
				<div
					class="item-download-1 cursor-pointer"
					on:mouseenter={() => focusButtonGPU(true)}
					on:mouseleave={() => focusButtonGPU(false)}
				>
					<img src={background_download_1} alt="background" />
					<div class="basis-2/3 flex flex-col gap-2 h-[64px] max-md:justify-center md:justify-end">
						<p class="flex text-white text-[16px] font-bold justify-end">For GPU Owner</p>
						<div class="flex justify-between max-md:hidden">
							<a
								href="https://h3d.me/ifxworkerwin"
								class="inline-flex justify-between items-center gap-1 cursor-pointer"
							>
								<img src={DownloadIcon} />
								<p class="text-white font-normal text-[12px] opacity-60">Window</p>
							</a>
							<a
								href="#"
								on:click={() => downloadMacOS()}
								class="inline-flex justify-between items-center gap-1 cursor-pointer"
							>
								<img class="object-cover" src={DownloadIcon} />
								<p class="text-white font-normal text-[12px] opacity-60">MacOS</p>
							</a>
						</div>
					</div>

					<div class="basis-1/3 mt-4">
						{#if !focusGPU}
							<img class="ml-4" src={buttonGPU} />
						{:else}
							<img class="ml-4" src={buttonGPUFocus} />
						{/if}
					</div>
				</div>
			</div>
			<div class="item-border-2">
				<div
					class="item-download-2 cursor-pointer"
					on:mouseenter={() => focusButtonScreen(true)}
					on:mouseleave={() => focusButtonScreen(false)}
				>
					<img src={background_download_2} alt="back-download-2" />
					<div class="basis-1/3 mt-4">
						{#if !focusBtScreen}
							<img class="-ml-4" src={buttonScreen} />
						{:else}
							<img class="-ml-4" src={buttonScreenFocus} />
						{/if}
					</div>
					<div
						class="basis-2/3 flex flex-col gap-2 h-[64px] max-md:items-center max-md:justify-center"
					>
						<p class="flex text-white text-[16px] font-bold justify-start">
							3D Rendering & AI Inference
						</p>
						<div class="flex justify-between max-md:hidden">
							<a
								href="https://h3d.me/ifxaddonblenderwin"
								class="inline-flex justify-between items-center gap-1 cursor-pointer"
							>
								<img src={DownloadIcon} />
								<p class="text-white font-normal text-[12px] opacity-60">Window</p>
							</a>
							<a
								href="#"
								on:click={() => downloadMacOS()}
								class="inline-flex justify-between items-center gap-1 cursor-pointer"
							>
								<img class="object-cover" src={DownloadIcon} />
								<p class="text-white font-normal text-[12px] opacity-60">MacOS</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class={`${isOpen ? 'open' : 'close'} overlayMobile fixed inset-0 h-full z-50`}>
		<div
			class="flex gap-[20px] flex-col text-[20px] font-[600] items-start w-full h-full bg-bg box-border pt-[86px] relative p-[30px]"
		>
			<a href="https://inferix.io/" class="absolute top-[20px]" on:click={closeMenu}>
				<img src={HeaderLogo} alt="Inferix" class="w-[158px] h-[32px]" />
			</a>
			{#each tabs as tab (tab.id)}
				<div class="header-tab-mobile tab opacity-60">
					<a
						href={tab.href}
						on:click={(e) => handleClickTab(e, tab.id, tab.href)}
						class="whitespace-nowrap">{tab.title}</a
					>
				</div>
			{/each}
			<div class="flex justify-center opacity-60 gap-[20px] w-[100%] mt-[40px]">
				{#each medias as media (media.id)}
					<div>
						<a target="_blank" href={media.href}
							><img src={media.icon} class="h-[34px] w-[34px]" style="border-radius: 50%;" /></a
						>
					</div>
				{/each}
			</div>
		</div>

		<div
			class={`${isOpen ? 'block' : 'hidden'} top-4 absolute right-5 cursor-pointer z-20`}
			on:click={closeMenu}
		>
			<img src={Close} alt="close icon" />
		</div>
	</div>
	<Modal bind:open={downloadShowModal} defaultClass="!rounded-[20px]">
		<DownloadFailed />
	</Modal>
	<Modal bind:open={showModal} defaultClass="!rounded-[20px]">
		<SignUpModal />
	</Modal>
</div>

<style lang="postcss">
	.header-bar {
		@apply flex flex-row mx-auto xl:w-[1200px] md:w-[90%] my-[12px] items-center justify-between px-4 h-[56px] rounded-[16px] bg-cover max-md:hidden;
		background-image: url('$images/png/header-register.png');
		.tab-item {
			@apply text-[16px] font-normal text-white px-2 py-1 whitespace-nowrap text-header-transfer;
		}
		& > .register-button {
			@apply flex justify-center h-[32px] w-[104px] items-center text-black py-4 text-[16px] font-[500];
			border-radius: 4px;
			background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		}
	}

	.video-overlay-container {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
		@apply overflow-hidden absolute left-0 right-0 top-0 bottom-0 md:flex justify-center items-center flex-col;
	}

	.shadow-text {
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}

	.active {
		border-radius: 100px;
		background: var(--4, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		color: #00d6d9;
	}

	.overlay {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
	}

	.overlayMobile {
		transition: left 0.6s cubic-bezier(0.82, 0.085, 0.395, 0.895);
		overflow: hidden;
		width: 100%;
		left: -100%;
	}

	.overlayMobile.open {
		left: 0;
	}

	:global(strong) {
		color: #00d6d9 !important;
	}

	.centerPosition {
		transform: translateX(-50%);
	}

	.trialButton {
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		width: 160px;
		height: 54px;
	}

	.trialButton:hover {
		background: rgba(0, 0, 0, 0.69);
		border-radius: 28px;
	}

	.download-btn {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		@apply flex flex-row justify-start items-center w-[265px] h-[75px] md:w-[265px] md:h-[75px] drop-shadow text-xs md:text-lg;
		border-radius: 16px;
		background: var(--3, #2d2c30);
		padding: 16px 24px;
		gap: 24px;
	}

	.download-btn > span > img {
		@apply w-[30px] md:w-[40px] h-[30px] md:h-[40px];
	}

	.download-btn > img {
		@apply w-[12px] md:w-[14px] h-[12px] md:h-[14px];
	}

	.download-btn > div > span {
		color: #fff;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
	}

	.download-options {
		color: #fff;
		font-size: 12px;
		font-style: normal;
		font-weight: 100;
		line-height: normal;
		opacity: 0.6;
		@apply flex flex-row justify-center items-center gap-1;
	}
	h1 {
		line-height: normal;
	}
	.header-bar-mobile {
		@apply md:hidden flex justify-between items-center;
		border-bottom: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.3));
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(16px);
		padding: 8px 10px;
	}

	.item-border-1 {
		@apply relative;
		.item-download-1 {
			@apply flex w-[260px] px-5 py-4;
			align-items: center;
			border-radius: 20px 0px 0px 20px;
			position: relative;
			overflow: hidden;

			&::before {
				content: '';
				background: conic-gradient(transparent 270deg, rgb(0, 192, 133), white, transparent);
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				aspect-ratio: 1;
				width: 100%;
				//rotate: 0.1turn;
				//animation: rotate 1s linear infinite forwards;
			}

			&::after {
				content: '';
				background: inherit;
				border-radius: inherit;
				position: absolute;
				inset: 1px;
			}

			&.back-hover::before {
				animation: rotate 0.3s linear forwards;
			}

			&.back-leave::before {
				animation: revert_rotate 0.3s linear forwards;
			}
		}
	}

	@keyframes rotate {
		from {
			transform: translate(-50%, -50%) scale(1.4) rotate(65deg);
		}

		to {
			transform: translate(-50%, -50%) scale(1.4) rotate(-158deg);
		}
	}

	@keyframes revert_rotate {
		from {
			transform: translate(-50%, -50%) scale(1.4) rotate(-158deg);
		}

		to {
			transform: translate(-50%, -50%) scale(1.4) rotate(65deg);
		}
	}

	.item-download-1 > img:first-child {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - 0.8px);
		height: calc(100% - 0.8px);
	}

	.item-download-1 > div {
		z-index: 1;
	}

	.item-border-2 {
		@apply relative;
		.item-download-2 {
			@apply flex w-[260px] px-5 py-4;
			align-items: center;
			border-radius: 0 20px 20px 0;
			position: relative;
			overflow: hidden;

			&::before {
				content: '';
				background: conic-gradient(
					transparent 270deg,
					transparent,
					rgb(0, 192, 133),
					white,
					transparent
				);
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				aspect-ratio: 1;
				rotate: 5deg;
				width: 100%;
			}

			&::after {
				content: '';
				background: inherit;
				border-radius: inherit;
				position: absolute;
				inset: 1px;
			}

			&.back2-hover::before {
				animation: rotate2 0.3s linear forwards;
			}

			&.back2-leave::before {
				animation: revert_rotate2 0.3s linear forwards;
			}
		}
	}

	@keyframes rotate2 {
		from {
			transform: translate(-50%, -40%) scale(1.4) rotate(10deg);
		}

		to {
			transform: translate(-50%, -50%) scale(1.4) rotate(225deg);
		}
	}

	@keyframes revert_rotate2 {
		from {
			transform: translate(-50%, -50%) scale(1.4) rotate(225deg);
		}

		to {
			transform: translate(-50%, -50%) scale(1.4) rotate(10deg);
		}
	}

	.item-download-2 > img:first-child {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - 0.8px);
		height: calc(100% - 0.8px);
		//opacity: 0;
	}

	.item-download-2 > div {
		z-index: 1;
	}

	.text-header-transfer:hover {
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.tab-active {
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media screen and (max-width: 640px) {
		.header-bar {
			display: none;
		}
	}
	@keyframes rainbow {
		0% {
			color: red;
		}
		16.67% {
			color: sandybrown;
		}
		33.33% {
			color: navajowhite;
		}
		50% {
			color: green;
		}
		66.67% {
			color: blue;
		}
		83.33% {
			color: indigo;
		}
		100% {
			color: violet;
		}
	}

	.text-rainbow {
		animation: rainbow 2s linear infinite;
	}

	@media screen and (max-width: 768px) {
		.link_blog > svg {
			display: none;
		}

		.header-container > div:nth-child(2) > div:last-child {
			gap: 15px;
		}

		.item-border-1 {
			@apply relative;
			.item-download-1 {
				@apply flex w-[260px] px-5 py-0;
				align-items: center;
				background: linear-gradient(
					270deg,
					rgba(255, 255, 255, 0.01) 0%,
					rgba(255, 255, 255, 0.22) 100%
				);
				border-radius: 20px 0px 0px 20px;
			}
			&:before {
				opacity: 0.3;
				content: '';
				position: absolute;
				inset: 0;
				border-radius: 20px 0px 0px 20px;
				padding: 1px 0px 0px 1px;
				background-image: linear-gradient(
					to right bottom,
					#33ffce 10%,
					#f5d4ff 25%,
					#339dff 35%,
					#000000 40%,
					rgba(255, 255, 255, 0.2) 70%
				);
				-webkit-mask:
					linear-gradient(#fff 0 0) content-box,
					linear-gradient(#fff 0 0);
				-webkit-mask-composite: xor;
				mask-composite: exclude;
				pointer-events: none;
			}
		}

		.item-border-2 {
			@apply relative;
			.item-download-2 {
				@apply flex w-[260px] px-5 py-0;
				align-items: center;
				border-radius: 0 20px 20px 0;
				background: linear-gradient(
					270deg,
					rgba(255, 255, 255, 0.22) 0%,
					rgba(255, 255, 255, 0) 100%
				);
			}
			&:before {
				opacity: 0.3;
				content: '';
				position: absolute;
				inset: 0;
				border-radius: 0 20px 20px 0;
				padding: 1px 1px 0px 0px;
				background-image: linear-gradient(
					to left bottom,
					#33ffce 10%,
					#f5d4ff 25%,
					#339dff 35%,
					#000000 40%,
					rgba(255, 255, 255, 0.2) 70%
				);
				-webkit-mask:
					linear-gradient(#fff 0 0) content-box,
					linear-gradient(#fff 0 0);
				-webkit-mask-composite: xor;
				mask-composite: exclude;
				pointer-events: none;
			}
		}

		.header-bar-mobile > div:last-child {
			width: 35px;
			height: 35px;
		}

		.header-bar-mobile > div:last-child > svg {
			width: 100%;
			height: 100%;
		}
	}
	.transition-bar {
		@apply flex gap-[30px] shrink-0 relative;
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		.transition-action {
			@apply flex flex-row justify-between items-center w-full h-[40px] shrink-0 whitespace-nowrap ;
			animation: slide-left 30s linear infinite;
			&:hover {
				animation-play-state: paused;
			}
			.transition-item {
				@apply flex flex-row justify-between items-center w-full h-[40px] shrink-0 whitespace-nowrap gap-[30px];
			}
		}
	}
	.transition-bar-mobile {
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		.transition-action {

			@apply flex flex-row justify-between items-center w-full h-[40px] shrink-0 whitespace-nowrap gap-[30px] ;
			animation: slide-left 10s linear infinite;
			&:hover {
				animation-play-state: paused;
			}
		}
	}

	@keyframes slide-left {
		0% { transform: translateX(0%); }
		100% { transform: translateX(-110%); }
	}
</style>

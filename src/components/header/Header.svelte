<script lang="ts">
	import Close from '$images/icons/Close.svg';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import InferixIntro from '$videos/-3e4b-4024-8f7f-a8034323822f.mp4';

	import Saos from 'saos';
	import SignUpModal from '$components/inferix/SignUpModal/SignUpModal.svelte';
	import DownloadFailed from '$components/inferix/Modals/DownloadFailed.svelte';
	import {Modal} from 'flowbite-svelte';

	import {afterUpdate, onMount} from 'svelte';
	import X from '$images/icons/X.svg';
	import M from '$images/icons/M.svg';
	import D from '$images/icons/D.svg';
	import W from '$images/icons/warpcast.svg';
	import Y from '$images/icons/Ytb.svg';
	import buttonGPU from '$images/icons/ButtonGPU.png';
	import buttonGPUFocus from '$images/icons/ButtonGPUFocus.png';
	import buttonScreen from '$images/icons/ButtonScreen.png';
	import buttonScreenFocus from '$images/icons/ButtonScreenFocus.png';
	import DownloadIcon from  '$images/icons/Download.svg';


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
		},
		// {
		// 	id: 4,
		// 	title: 'Team',
		// 	href: '#team'
		// },
		{
			id: 5,
			title: 'Docs',
			href: 'https://docs.inferix.io/'
		},

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
		if (id === 2 || id === 5) return;
		if (id === 6) {
			showModal = true;
		}

		e.preventDefault();
		const idTab = href.replace('#', '');
		const tab = document.getElementById(idTab);
		setActiveTab(id);
		const space = screenSize > 768 ? 200 : 150;

		if (tab) {
			window.scrollTo({
				top: tab.offsetTop - 100,
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

	let is_close = false;

	function scroll() {
		// if (is_close) return;
		// const header = document.getElementById('header');
		// if (window.innerWidth <= 800) {
		// 	header.style.marginTop = 0;
		// 	return;
		// }
		// if (window.scrollY > 150) header.style.marginTop = '-40px';
		// else header.style.marginTop = 0;
	}

	function onCloseGuide() {
		is_close = true;
		const header = document.getElementById('header');
		header.style.marginTop = '-40px';
	}

	let forceUpdate = 0;

	function updateUI() {
		forceUpdate += 1;
		scroll();
	}

	onMount(() => {
		autoPlay();

		window.addEventListener('scroll', scroll);
		window.addEventListener('resize', updateUI);
	});
	let isHovered = false;

	function handleHoverRelease(status) {
		isHovered = status;
	}
	let focusGPU = false;
	function focusButtonGPU(status) {
		focusGPU = status;
	}

	let focusBtScreen = false;
	function focusButtonScreen(status) {
		focusBtScreen = status;
	}
</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={y} />

<div style="font-family: Inter">
	<div
		id="header"
		class={`flex flex-col fixed top-0 md:pb-0 pb-4 w-full z-40`}
	>
		<div class="header-bar">
			<img class="h-[24px]" src="{HeaderLogo}">
			<div class="flex justify-center h-[32px] gap-6">
				{#each tabs as tab (tab.id)}
					<a
							href={tab.href}
							on:click={(e) => handleClickTab(e, tab.id, tab.href)}
							class="text-[16px] font-normal text-white px-2 py-1 whitespace-nowrap">{tab.title}</a
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

	</div>
	<div class="mx-auto pt-[0px] flex flex-col bg-black relative justify-end items-center">
		<div class="w-full flex justify-center items-center">
			<div class="flex flex-col gap-4 w-[750px] h-[141px] mx-auto mt-[340px] absolute z-[20]">
				<div class="flex justify-center text-black">
				<a href="https://docs.inferix.io/por-release" target="_blank" class="flex bg-white border-[1px] border-solid border-white hover:bg-black hover:text-white gap-2 p-1 items-center rounded-[40px] cursor-pointer !filter-none" on:mouseenter={() => handleHoverRelease(true)} on:mouseleave={() => handleHoverRelease(false)}>
					🚀 <p class="text-[14px] font-[500]">Proof-of-Rendering Release</p>
					{#if !isHovered}
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
						  <path
								  d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM16.53 12.53L13.53 15.53C13.38 15.68 13.19 15.75 13 15.75C12.81 15.75 12.62 15.68 12.47 15.53C12.18 15.24 12.18 14.76 12.47 14.47L14.19 12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H14.19L12.47 9.53C12.18 9.24 12.18 8.76 12.47 8.47C12.76 8.18 13.24 8.18 13.53 8.47L16.53 11.47C16.82 11.76 16.82 12.24 16.53 12.53Z"
								  fill="black"
						  />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.03 12.53L13.03 15.53C12.88 15.68 12.69 15.75 12.5 15.75C12.31 15.75 12.12 15.68 11.97 15.53C11.68 15.24 11.68 14.76 11.97 14.47L13.69 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H13.69L11.97 9.53C11.68 9.24 11.68 8.76 11.97 8.47C12.26 8.18 12.74 8.18 13.03 8.47L16.03 11.47C16.32 11.76 16.32 12.24 16.03 12.53Z" fill="white"/>
						</svg>
					{/if}
				</a>
				</div>
				<div class="flex flex-col items-center justify-center">
					{#if textIndex === 0}
						<p class="text-[24px] font-[400] opacity-60">Fastest 3D rendering & AI inference by</p>
						<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
							<p class="text-[48px] font-bold ">INFERIX Decentralized GPU</p>
						</Saos>
					{:else }
						<p class="text-[24px] font-[400] opacity-60">Low-cost AI inference by</p>
						<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
							<p class="text-[48px] font-bold ">INFERIX Crowdsourced GPU</p>
						</Saos>
					{/if}

				</div>
			</div>
		</div>

		<div class="overflow-hidden bg-black mx-auto relative">
			<video autoplay muted loop playsinline class="h-[698px] w-[1526px] object-cover mx-auto mt-[160px]">
				<source src={InferixIntro} type="video/mp4" />
			</video>
		</div>
		<div class="flex flex-row mt-[50px] w-[560px] h-[104px] mx-auto justify-between z-50 -mb-[150px] absolute">
			<div class="item-download-1 cursor-pointer" on:mouseenter={() => focusButtonGPU(true)} on:mouseleave={() => focusButtonGPU(false)}>
				<div class="basis-2/3 flex flex-col gap-2 h-[64px] justify-end">
					<p class="flex text-white text-[16px] font-bold justify-end">FOR GPU OWNER</p>
					<div class="flex justify-between">
						<a href="https://h3d.me/ifxworkerwin" class="inline-flex justify-between items-center gap-1 cursor-pointer">
							<img src="{DownloadIcon}">
							<p class="text-white font-normal text-[12px] opacity-60">Window</p>
						</a>
						<a href="#" on:click={() => downloadMacOS()} class="inline-flex justify-between items-center gap-1 cursor-pointer">
							<img class="object-cover" src="{DownloadIcon}">
							<p class="text-white font-normal text-[12px] opacity-60">MacOS</p>
						</a>
					</div>
				</div>

				<div class="basis-1/3 mt-4">
					{#if !focusGPU}
						<img class="ml-4" src="{buttonGPU}">
					{:else }
						<img class="ml-4" src="{buttonGPUFocus}">
					{/if}

				</div>
			</div>
			<div class="item-download-2 cursor-pointer" on:mouseenter={() => focusButtonScreen(true)} on:mouseleave={() => focusButtonScreen(false)}>
				<div class="basis-1/3 mt-4">
					{#if !focusBtScreen}
						<img class="-ml-4" src="{buttonScreen}">
					{:else }
						<img class="-ml-4" src="{buttonScreenFocus}">
					{/if}

				</div>
				<div class="basis-2/3 flex flex-col gap-2 h-[64px]">
					<p class="flex text-white text-[16px] font-bold justify-start">3D RENDERING & AI INFERENCE</p>
					<div class="flex justify-between">
						<a href="https://h3d.me/ifxaddonblenderwin" class="inline-flex justify-between items-center gap-1 cursor-pointer">
							<img src="{DownloadIcon}">
							<p class="text-white font-normal text-[12px] opacity-60">Window</p>
						</a>
						<a href="#" on:click={() => downloadMacOS()} class="inline-flex justify-between items-center gap-1 cursor-pointer">
							<img class="object-cover" src="{DownloadIcon}">
							<p class="text-white font-normal text-[12px] opacity-60">MacOS</p>
						</a>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div class={`${isOpen ? 'open' : 'close'} overlayMobile fixed inset-0 h-screen z-40`}>
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
							><img src={media.icon} class="h-[34px] w-[34px]" /></a
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
		@apply flex flex-row mx-auto w-[1200px] my-[12px] items-center justify-between px-4 h-[56px] rounded-[16px] bg-cover;
		background-image: url("$images/png/header-register.png");
		& > .register-button {
			@apply flex justify-center h-[32px] w-[104px] items-center text-black py-4 text-[16px] font-[500];
			border-radius: 4px;
			background: var(--12, linear-gradient(45deg, #00D6D9 0%, #00C085 100%));
		}
	}
	#header {
		margin-top: 0;
		transition: margin-top 0.3s ease-in-out;
	}
	.link_blog_desktop,
	.link_blog {
		position: relative;
		width: 100%;
		height: 40px;
		background: linear-gradient(to right, #00d6d9, #00c085);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.link_blog_desktop > svg,
	.link_blog > svg {
		position: absolute;
		right: 5px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}

	.link_blog_desktop > div > div > a,
	.link_blog > div > div > a {
		color: #000;
		cursor: pointer;
	}

	.link_blog_desktop > div > div > a:nth-child(3),
	.link_blog > div > div > a:nth-child(3) {
		--tw-brightness: brightness(1);
	}

	.link_blog_desktop > div > div > a:nth-child(3) > span,
	.link_blog > div > div > a:nth-child(3) > span {
		animation: rainbow 2s linear infinite;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}

	.link_blog > div > div > a,
	.link_blog > div > div > span {
		font-size: 14px;
	}

	.link_blog_desktop > div > div > a:not(:nth-child(3)):hover,
	.link_blog > div > div > a:not(:nth-child(3)):hover {
		opacity: 0.8;
	}

	.link_blog_desktop,
	.link_blog {
		width: 100vw;
		position: relative;
		gap: 0;
	}

	.link_blog_desktop > div,
	.link_blog > div {
		position: relative;
		display: flex;
		width: 100vw;
		animation: tip_move 15s linear infinite;
	}

	.link_blog_desktop > div:hover,
	.link_blog > div:hover {
		animation-play-state: paused;
	}

	.link_blog_desktop > div > div,
	.link_blog > div > div {
		width: 100vw;
		min-width: 100vw;
		display: flex;
		justify-content: center;
		gap: 5px;
	}

	.link_blog_desktop > div > div > a:nth-child(3),
	.link_blog > div > div > a:nth-child(3) {
		margin-left: calc(calc(100vw) / 4);
	}
	@keyframes tip_move {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@media screen and (max-width: 800px) {
		#header {
			transition: none;
		}

		#header > div:nth-child(2) {
			height: 30px;
		}
	}

	.video-overlay-container {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
		@apply overflow-hidden absolute left-0 right-0 top-0 bottom-0 justify-center md:flex justify-center items-center flex-col;
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

	.item-download-1 {
		display: flex;
		width: 260px;
		padding: 20px 16px;
		align-items: center;
		border-radius: 20px 0 0 20px;
		background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.3) 100%);

	}
	.item-download-2 {
		display: flex;
		width: 260px;
		padding: 20px 16px;
		align-items: center;
		border-radius: 0 20px 20px 0;
		background: linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);

	}

	@media screen and (min-width: 768px) {
		.header-tab {
			font-size: 16px;
			font-weight: 700;
			line-height: 24px;
			text-align: left;
			padding: 12px 16px;
		}

		#header {
			background-color: unset;
		}

		.header-tab.active {
			display: flex;
			padding: 12px 16px;
			align-items: flex-start;
			border-radius: 100px;
			color: #08101d;
			background-color: #00d6d9;
		}
	}

	@media screen and (max-width: 768px) {
		.header-tab-mobile {
			font-weight: 600;
			padding-top: 12px;
			/*padding: 12px 16px;*/
		}
		.header-tab-mobile.active {
			color: #08101d;
		}
		.headerBackground {
			background-image: url('$images/icons/HeaderBackgroundMobile.svg');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}

		.text {
			margin-top: 20px;
		}
	}

	@keyframes -global-slide-up {
		0% {
			transform: translateY(100px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-puff-in-center {
		0% {
			transform: scale(1.02) translateY(120px);
			opacity: 0;
			text-align: center;
			filter: blur(4px);
		}
		100% {
			transform: scale(1) translateY(0);
			opacity: 1;
			text-align: center;
			filter: blur(0px);
		}
	}

	@keyframes -global-h1 {
		0% {
			transform: scale(1.1) translateY(120px);
			opacity: 0;
			text-align: center;
			filter: blur(7px);
		}
		100% {
			transform: scale(1) translateY(0);
			opacity: 1;
			text-align: center;
			filter: blur(0px);
		}
	}

	@keyframes -global-connector {
		0% {
			transform: translateY(-100px);
			z-index: 0;
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
			z-index: 100;
		}
	}

	@media screen and (max-width: 768px) {
		.link_blog_desktop > div > div > a:nth-child(3),
		.link_blog > div > div > a:nth-child(3) {
			margin-left: calc(calc(100vw) / 8);
		}
	}

	@media screen and (max-width: 580px) {
		.link_blog_desktop > div > div > a,
		.link_blog_desktop > div > div > span,
		.link_blog > div > div > a,
		.link_blog > div > div > span {
			font-size: 14px;
		}
		.link_blog_desktop > div > div > a:nth-child(3),
		.link_blog > div > div > a:nth-child(3) {
			margin-left: 25px;
		}
	}

	@media screen and (max-width: 480px) {
		.link_blog_desktop > div > div > a,
		.link_blog_desktop > div > div > span,
		.link_blog > div > div > a,
		.link_blog > div > div > span {
			font-size: 15px;
		}

		.link_blog_desktop > div > div > a:nth-child(3),
		.link_blog > div > div > a:nth-child(3) {
			margin-left: 25px;
		}
	}

	@media screen and (max-width: 380px) {
		.link_blog_desktop > div > div > a,
		.link_blog_desktop > div > div > span,
		.link_blog > div > div > a,
		.link_blog > div > div > span {
			font-size: 15px;
		}

		.link_blog_desktop > div > div > a:nth-child(3),
		.link_blog > div > div > a:nth-child(3) {
			margin-left: 19px;
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

</style>

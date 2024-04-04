<script lang="ts">
	import Close from '$images/icons/Close.svg';
	import DownloadIcon from '$images/icons/Download.svg';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import MobileMenu from '$images/icons/MobileMenu.svg';
	import IconScreen from '$images/icons/IconScreen.svg';
	import IconGpu from '$images/icons/IconGpu.svg';
	import InferixIntro from '$videos/InferixIntroLandingPage.mp4';

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

	let textIndex = 0;

	let activeTab = 5;

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
		{ id: 4, title: 'Team', href: '#team' },
		{
			id: 5,
			title: 'Register',
			href: '#'
		}
	];
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
		if (id === 2) return;
		if (id === 5) {
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
		if (is_close) return;
		const header = document.getElementById('header');
		if (window.innerWidth <= 800) {
			header.style.marginTop = 0;
			return;
		}
		if (window.scrollY > 150) header.style.marginTop = '-40px';
		else header.style.marginTop = 0;
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
</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={y} />

<div class="bg-lightDark relative headerBackground">
	<div
		id="header"
		class={`md:bg-[#141414] flex flex-col fixed top-0 md:pb-0 pb-4 w-full z-40`}
	>

		{#if screenSize > 800}
			<div class="link_blog_desktop md:flex lg:gap-8 md:gap-4 text-lg">
				<div>
					<div >
						<span  class="flex items-center">📌 MVP is live!</span>
						<a href="https://docs.inferix.io/mvp-tutorial" class="flex items-center"> Read the full blog ⟶</a>
						<a href="https://docs.inferix.io/por-release" class="flex bg-transparency !items-center !h-[40px] max-[840px]:!w-[35%] !w-[320px] justify-center"
							>🚀 <span>Proof-of-Rendering Release</span></a
						>
					</div>
					<div>
						<span  class="flex items-center">📌 MVP is live!</span>
						<a href="https://docs.inferix.io/mvp-tutorial"  class="flex items-center"> Read the full blog ⟶</a>
						<a href="https://docs.inferix.io/por-release" class="flex bg-transparency !items-center !h-[40px] max-[840px]:!w-[35%] !w-[320px] justify-center"
							>🚀 <span>Proof-of-Rendering Release</span></a
						>
					</div>
				</div>
				<svg
					on:click={() => onCloseGuide()}
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-x"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#597e8d"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M18 6l-12 12" />
					<path d="M6 6l12 12" />
				</svg>
			</div>
		{/if}
		{#if screenSize <= 800}
			<div class="link_blog md:flex lg:gap-8 md:gap-4 text-lg">
				<div>
					<div >
						<span  class="flex items-center whitespace-nowrap">📌 MVP is live!</span>
						<a href="https://docs.inferix.io/mvp-tutorial" class="flex items-center whitespace-nowrap"> Read the full blog ⟶</a>
						<a href="https://docs.inferix.io/por-release" class="flex bg-transparency !items-center !h-[40px] !w-[60%] justify-center whitespace-nowrap px-[10px]"
						>🚀 <span>Proof-of-Rendering Release</span></a
						>
					</div>
				</div>
				<svg
						on:click={() => onCloseGuide()}
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-x"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#597e8d"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M18 6l-12 12" />
					<path d="M6 6l12 12" />
				</svg>
			</div>
		{/if}
		<div />
		<div class="container mx-auto md:mb-5 md:px-0 box-border md:pt-0">
			<nav class="flex justify-between w-auto font-outfit font-normal">
				<div class="flex md:gap-4 gap-2 md:items-center items-start">
					<a href="https://inferix.io/">
						<img src={HeaderLogo} alt="Inferix" class="lg:w-[158px] lg:h-[32px] h-[24px]" />
					</a>
				</div>
				{#if screenSize > 800}
					<div class="md:flex lg:gap-8 md:gap-4 text-lg">
						{#each tabs as tab (tab.id)}
							<div
								class="header-tab {activeTab === tab.id ? 'active' : 'tab'}"
								on:click={(e) => handleClickTab(e, tab.id, tab.href)}
							>
								<a target="_blank" href={tab.href}>{tab.title}</a>
							</div>
						{/each}
					</div>
				{/if}
				{#if screenSize < 800}
					<img
						src={MobileMenu}
						on:click={toggleMenu}
						alt="menu"
						class="md:mb-0 mb-4 cursor-pointer ml-auto w-[24px] h-[24px]"
					/>
				{/if}
			</nav>
		</div>
	</div>
	<div class="mx-auto pt-[0px] box-border">
		<div class="overflow-hidden mx-auto relative">
			<video autoplay muted loop playsinline class="h-[700px] w-full object-cover">
				<source src={InferixIntro} type="video/mp4" />
			</video>
			<div style="display: flex" class="video-overlay-container">
				<div class="text">
					{#if textIndex === 0}
						{#if screenSize > 768}
							<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
								<h1
									class="text-xl md:text-[4.625rem] font-outfit text-center shadow-text font-bold"
								>
									Fastest 3D rendering by <br /> <strong>Inferix decentralized GPU</strong>
								</h1>
							</Saos>
						{/if}
						{#if screenSize < 768}
							<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
								<h1 style="font-size: 40px;font-weight: 700;margin-left: 100px;margin-right: 100px">
									Fastest 3D rendering by<br /> <strong>Inferix decentralized GPU</strong>
								</h1>
							</Saos>
						{/if}
					{/if}
					{#if textIndex === 1}
						{#if screenSize > 768}
							<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
								<h1
									class="text-xl md:text-[4.625rem] font-outfit text-center shadow-text font-bold"
								>
									Low-cost AI inference by <br /> <strong>Inferix crowdsourced GPU</strong>
								</h1>
							</Saos>
						{/if}
						{#if screenSize < 768}
							<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
								<h1 style="font-size: 40px;font-weight: 700;margin-left: 100px;margin-right: 100px">
									Low-cost AI inference by<br /> <strong>Inferix crowdsourced GPU</strong>
								</h1>
							</Saos>
						{/if}
					{/if}
				</div>
				<Saos
					top="200"
					once
					animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
				>
					<!--                    <p class="font-outfit text-white text-center font-semibold text-sm md:text-2xl shadow-text mt-5 md:mt-[107px]">-->
					<!--                        Start-->
					<!--                        free trial</p>-->
					<div
						class="flex gap-4 justify-center mt-[40px] md:mt-4 {screenSize > 768
							? 'flex-row'
							: 'flex-col'}"
					>
						<div class="download-btn">
							<span><img src={IconScreen} alt="download" /></span>
							<div class="items-start flex flex-col gap-[10px] leading-91 w-[153px]">
								<span>For Designer</span>
								<div class="flex flex-row gap-5">
									<a class="download-options" href="https://h3d.me/ifxaddonblenderwin">
										<img src={DownloadIcon} alt="download" />
										<span>Windows</span>
									</a>
									<a class="download-options" href="#" on:click={() => downloadMacOS()}>
										<img src={DownloadIcon} alt="download" />
										<span>MacOS</span>
									</a>
								</div>
							</div>
						</div>
						<div class="download-btn">
							<span><img src={IconGpu} alt="download" /></span>
							<div class="items-start flex flex-col gap-[10px] leading-91 w-[153px]">
								<span>For GPU Owner</span>
								<div class="flex flex-row gap-5">
									<a class="download-options" href="https://h3d.me/ifxworkerwin">
										<img src={DownloadIcon} alt="download" />
										<span>Windows</span>
									</a>
									<a class="download-options" href="#" on:click={() => downloadMacOS()}>
										<img src={DownloadIcon} alt="download" />
										<span>MacOS</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Saos>
			</div>
		</div>
	</div>
	<!--    <img-->
	<!--            src={InferixMobile}-->
	<!--            alt="InferixMobile"-->
	<!--            class="md:hidden flex w-[78px] h-[31px] mx-auto mt-[50px] pb-5 box-content"-->
	<!--    />-->
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
	#header {
		margin-top: 0;
		transition: margin-top 0.3s ease-in-out;
	}

	#header > div:nth-child(2) {
		height: 40px;
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
			font-size: 10px;
		}

		.link_blog_desktop > div > div > a:nth-child(3),
		.link_blog > div > div > a:nth-child(3) {
			margin-left: 19px;
		}
	}
	.bg-transparency {
		background: none !important;
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
</style>

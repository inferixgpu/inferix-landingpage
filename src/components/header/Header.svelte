<script lang="ts">
	import Close from '$images/icons/Close.svg';
	import DownloadIcon from '$images/icons/Download.svg';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import IconScreen from '$images/icons/IconScreen.svg';
	import IconGpu from '$images/icons/IconGpu.svg';
	import InferixIntro from '$videos/InferixIntroLandingPage.mp4';
	import backgroundHeader from '$images/png/header-register.png';

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
		{
			id: 4,
			title: 'Team',
			href: '#team'
		},
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
</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={y} />

<div class="bg-black relative">
	<div
		id="header"
		class={`bg-none fixed w-full z-40`}
	>
		<div />
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
	<div class="mx-auto pt-0 box-border">

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
		@apply flex flex-row mx-[155px] my-[12px]
		items-center justify-between px-4 h-[56px] rounded-[16px] bg-cover;
		background-image: url("$images/png/header-register.png");
		& > .register-button {
			@apply flex justify-center h-[32px] w-[104px] items-center text-black py-4 text-[16px] font-[500];
			border-radius: 4px;
			background: var(--12, linear-gradient(45deg, #00D6D9 0%, #00C085 100%));
		}
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

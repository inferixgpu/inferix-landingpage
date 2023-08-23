<script lang="ts">
	import HeaderVideo from '$videos/HeaderVideo.mp4';
	import MobileMenu from '$images/icons/MobileMenu.svg';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import MacOSDown from '$images/png/MacOSDown.png';
	import WindownDown from '$images/png/WindownDown.png';
	import Close from '$images/icons/Close.svg';
	import InferixMobile from '$images/icons/InferixMobile.svg';

	import { afterUpdate } from 'svelte';
	let activeTab = 1;

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
			href: '#network'
		},
		{
			id: 3,
			title: 'Roadmap',
			href: '#roadmap'
		}
	];

	let screenSize: number;
	let y: number;

	let isOpen = false;

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

	function handleClickTab(e: MouseEvent, id: number, href: string) {
		e.preventDefault();
		const idTab = href.replace('#', '');
		const tab = document.getElementById(idTab);
		setActiveTab(id);
		const space = screenSize > 768 ? 200 : 150;
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
</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={y} />

<div class="bg-lightDark relative headerBackground">
	<div
		id="header"
		class={`${
			y > 50 ? 'bg-lightDark' : 'bg-transparent'
		} md:h-[97.4px] h-[69px] flex fixed top-0 md:pb-0 pb-4 box-content w-full z-40 items-end`}
	>
		<div class="container mx-auto md:mb-5 mb-0 md:px-0 px-5 box-border md:pt-0 pt-[25.5px]">
			<nav class="flex justify-between w-auto container mx-auto font-outfit font-normal">
				<div class="md:flex hidden md:gap-4 gap-2 md:flex-row flex-col md:items-center items-start">
					<img src={HeaderLogo} alt="logo" class="w-[100px]" />
					<p
						class="md:font-base text-[0.5625rem] font-outfit font-normal text-white whitespace-nowrap"
					>
						Decentrazlied GPU Network
					</p>
				</div>
				<div class="md:flex gap-10 text-lg hidden">
					{#each tabs as tab (tab.id)}
						<div
							class="tab {activeTab === tab.id ? 'active' : ''}"
							on:click={(e) => handleClickTab(e, tab.id, tab.href)}
						>
							<a href={tab.href}>{tab.title}</a>
						</div>
					{/each}
				</div>
				<img
					src={MobileMenu}
					on:click={toggleMenu}
					alt="menu"
					class="md:mb-0 mb-4 cursor-pointer md:hidden flex ml-auto"
				/>
			</nav>
		</div>
	</div>
	<div class="container mx-auto pt-[110px] md:px-0 px-5 box-border">
		<div class="rounded-3xl overflow-hidden mx-auto relative">
			<video width="1600" height="800" autoplay muted loop playsinline>
				<source src={HeaderVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div
				class="overflow-hidden md:block hidden rounded-[28px] absolute lg:bottom-[20%] md:bottom-[15%] bottom-[20px] centerPosition left-[50%] cursor-pointer"
			>
				<p class="font-outfit text-white text-center font-semibold text-2xl">Start free trial</p>
				<div class="flex gap-3 mt-3">
					<img
						src={WindownDown}
						alt="window download button"
						class="md:w-auto w-[150px] trialButton"
					/>
					<img
						src={MacOSDown}
						alt="macos download button"
						class="md:w-auto w-[150px] trialButton"
					/>
				</div>
			</div>
		</div>
	</div>
	<img
		src={InferixMobile}
		alt="InferixMobile"
		class="md:hidden flex w-[78px] h-[31px] mx-auto mt-[50px] pb-5 box-content"
	/>
	<div class={`${isOpen ? 'open' : 'close'} overlayMobile fixed inset-0 h-screen z-40`}>
		<div
			class="flex gap-[60px] flex-col text-2xl font-normal items-center w-full h-full bg-bg box-border pt-[86px]"
		>
			{#each tabs as tab (tab.id)}
				<div class="tab {activeTab === tab.id ? 'active' : ''}">
					<a
						href={tab.href}
						on:click={(e) => handleClickTab(e, tab.id, tab.href)}
						class="whitespace-nowrap">{tab.title}</a
					>
				</div>
			{/each}
		</div>
		<div
			class={`${isOpen ? 'block' : 'hidden'} top-4 absolute right-5 cursor-pointer z-20`}
			on:click={closeMenu}
		>
			<img src={Close} alt="close icon" />
		</div>
	</div>
</div>

<style lang="postcss">
	.active {
		color: var(--green);
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
	.centerPosition {
		transform: translateX(-50%);
	}
	.trialButton:hover {
		background: rgba(0, 0, 0, 0.69);
		border-radius: 28px;
	}
	.text {
		background: rgba(0, 0, 0, 0.49);
		box-shadow: 0px 0px 33px 0px rgba(6, 255, 97, 0.08);
		border: 1px solid
			linear-gradient(90deg, rgba(6, 255, 97, 0.49) 100%, rgba(255, 255, 255, 0.49) 43%);
	}
	@media screen and (max-width: 768px) {
		.headerBackground {
			background-image: url('$images/icons/HeaderBackgroundMobile.svg');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
</style>

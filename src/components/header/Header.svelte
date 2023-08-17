<script lang="ts">
	import BodyLogo from '$images/icons/BodyLogo.svg';
	import HeaderVideo from '$videos/HeaderVideo.mp4';
	import MobileMenu from '$images/icons/MobileMenu.svg';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import TrialButton from '$images/png/TrialButton.png';
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

<div class="bg-lightDark relative">
	<div
		id="header"
		class={`${
			y > 50 ? 'bg-bg' : 'md:bg-transparent bg-bg'
		} md:h-[97.4px] h-[69px] flex fixed top-0 md:pb-0 pb-4 box-content w-full z-40 items-end`}
	>
		<div class="container mx-auto md:mb-5 mb-0">
			<nav class="flex justify-between w-auto container mx-auto font-outfit font-normal">
				<div class="flex md:gap-4 gap-2 md:flex-row flex-col md:items-center items-start">
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
					class="pr-10 md:mb-0 mb-4 cursor-pointer md:hidden flex"
				/>
			</nav>
		</div>
	</div>
	<div class="container mx-auto pt-[110px]">
		<div class="md:mt-5 mt-8 rounded-3xl overflow-hidden mx-auto relative">
			<video width="1600" height="800" autoplay muted loop playsinline>
				<source src={HeaderVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<img
				src={TrialButton}
				alt=""
				class="absolute lg:bottom-[20%] md:bottom-[15%] left-[50%] trialButton cursor-pointer"
			/>
		</div>
	</div>
	<div
		class={`${
			isOpen ? 'open' : 'close'
		} overlayMobile fixed top-0 bottom-0 left-0 right-0 h-screen z-40`}
	>
		<div class="flex gap-10 flex-col text-lg w-fit pr-20 h-full bg-bg box-border pt-5 pl-5">
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
			class={`${isOpen ? 'block' : 'hidden'} top-3 absolute right-5 cursor-pointer w-5 h-5 z-20`}
			on:click={closeMenu}
		>
			<svg
				class="overflow-hidden"
				width={20}
				height={20}
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line x1="1" y1="20" x2="20" y2="1" stroke="white" stroke-width="2" />
				<line x1="1" y1="1" x2="20" y2="20" stroke="white" stroke-width="2" />
			</svg>
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
		background-color: rgba(0, 0, 0, 0.5);
		transition: left 0.6s cubic-bezier(0.82, 0.085, 0.395, 0.895);
		overflow: hidden;
		width: 100%;
		left: -100%;
	}
	.overlayMobile.open {
		left: 0;
	}
	.trialButton {
		transform: translate(-50%);
	}
</style>

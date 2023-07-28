<script lang="ts">
	import InferixLogo from '$images/icons/inferixLogo.svg';
	import BodyLogo from '$images/icons/BodyLogo.svg';
	import MobileLogo from '$images/icons/mobileLogo.svg';
	import HeaderVideo from '$videos/HeaderVideo.mp4';
	import MobileMenu from '$images/icons/MobileMenu.svg';

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
			title: 'GPU Neywork',
			href: '#neywork'
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

	$: {
		if (typeof window !== 'undefined') {
			if (isOpen) {
				document.body.style.overflowY = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
		}
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

<div class="background relative">
	<div
		id="header"
		class={`${
			y > 50 ? 'bg-bg' : 'bg-transparent'
		} h-[97.4px] flex fixed top-0 w-full z-20 items-end`}
	>
		<div class="container mx-auto mb-5">
			<nav class="flex justify-between w-auto container mx-auto font-outfit font-normal">
				<div class="flex gap-4">
					<img src={screenSize > 768 ? InferixLogo : MobileLogo} alt="logo" />
				</div>
				{#if screenSize > 768}
					<div class="flex gap-10 text-lg">
						{#each tabs as tab (tab.id)}
							<div
								class="tab {activeTab === tab.id ? 'active' : ''}"
								on:click={(e) => handleClickTab(e, tab.id, tab.href)}
							>
								<a href={tab.href}>{tab.title}</a>
							</div>
						{/each}
					</div>
				{:else}
					<img src={MobileMenu} on:click={toggleMenu} alt="menu" class="pr-10 cursor-pointer" />
				{/if}
			</nav>
		</div>
	</div>
	<div class="container mx-auto pt-[110px]">
		<div
			class="md:mt-5 mt-8 rounded-3xl overflow-hidden md:max-w-[1600px] md:max-h-[800px] mx-auto relative"
		>
			<video controls width="1600" height="800" autoplay muted loop Playsinline>
				<source src={HeaderVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div
				class="md:text-[5rem] text-[3rem] font-normal absolute rounded-3xl max-w-[1600px] max-h-[800px] font-outfit flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 overlay"
			>
				{#if screenSize > 768}
					<p class="text-center">Fastest 3d redering by</p>
					<p class="text-secondary text-center font-bold">interix decentralized GPU</p>
				{/if}
			</div>
		</div>
		<img
			class="md:w-[123px] w-[80px] md:h-[50px] h-8 md:mt-[127px] mt-[50px] mx-auto"
			src={BodyLogo}
			alt="logo"
		/>
	</div>
	{#if isOpen}
		<div class="overlayMobile fixed top-0 bottom-0 left-0 right-0 w-full h-screen z-30">
			<div class="flex gap-10 flex-col text-lg w-[60%] h-full bg-bg box-border pt-5 pl-5">
				{#each tabs as tab (tab.id)}
					<div
						class="tab {activeTab === tab.id ? 'active' : ''}"
						on:click={(e) => handleClickTab(e, tab.id, tab.href)}
					>
						<a href={tab.href}>{tab.title}</a>
					</div>
				{/each}
			</div>
			<div class="top-5 absolute right-5 cursor-pointer w-5 h-5 z-20" on:click={closeMenu}>
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
	{/if}
</div>

<style lang="postcss">
	.active {
		color: var(--green);
	}
	.overlay {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
	}
	.background {
		background: url('$images/icons/headerBackground.svg') no-repeat center fixed;
		background-size: cover;
	}
	.overlayMobile {
		background-color: rgba(0, 0, 0, 0.5);
	}
	@media screen and (max-width: 767px) {
		.background {
			background-size: 600px;
			background-position-y: 19%;
		}
	}
</style>

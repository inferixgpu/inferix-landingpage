<script lang="ts">
	import Close from '$images/icons/Close.svg';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import InferixIntro from '$videos/Earth_8.mp4';
	import Saos from 'saos';
	import SignUpModal from '$components/inferix/SignUpModal/SignUpModal.svelte';
	import DownloadFailed from '$components/inferix/Modals/DownloadFailed.svelte';
	import Modal from '$components/utils/Modal.svelte';
	import { afterUpdate, onMount } from 'svelte';
	import X from '$images/icons/Twitter.svg';
	import M from '$images/icons/M.svg';
	import D from '$images/icons/D.svg';
	import W from '$images/icons/warpcast.svg';
	import Y from '$images/icons/Ytb.svg';
	import buttonGPU from '$images/png/gpu-owner.png';
	import Rendering from '$images/png/3d-rendering.png';
	import buttonGPUFocus from '$images/icons/ButtonGPUFocus.png';
	import buttonScreen from '$images/icons/ButtonScreen.png';
	import buttonScreenFocus from '$images/icons/ButtonScreenFocus.png';
	import DownloadIcon from '$images/icons/Download.svg';
	import background_download_1 from '$images/png/background-download-1.png';
	import background_download_2 from '$images/png/background-download-2.png';
	import img_content from '$images/png/img-content-back.png';
	import begin_content from '$images/png/begin-content-back.png';

	let textIndex = 0;
	let activeTab = 6;

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
		{ id: 4, title: 'Partners', href: '#partners' },
		{ id: 6, title: 'Node Sale', href: 'https://verifier.inferix.io/' },
		{
			id: 5,
			title: 'Docs',
			href: 'https://docs.inferix.io/'
		}
	];
	const register = {
		id: 6,
		title: 'Whitepaper',
		href: 'https://static.inferix.io/files/inferix-whitepaper.pdf'
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
	function closeDownloadModal() {
		downloadShowModal = false;
	}

	function closeModal() {
		showModal = false;
	}

	function handleClickTab(id: number, href: string) {
		document.querySelectorAll('.tab-item').forEach((item) => item.classList.remove('tab-active'));
		if (id !== 6) {
			document.getElementById(`item-tab-${id}`)?.classList.add('tab-active');
		}

		if (id === 2 || id === 5) {
			window.open(href);
		}

		if (id === 6 || id == 0) {
			// showModal = true;
			window.open(href);
			return;
		}

		activeTab = id;
		const space = id == 1 ? 150 : id === 4 ? 100 : screenSize > 768 ? -120 : 270;
		const idTab = href.replace('#', '');
		const tab = document.getElementById(idTab);

		if (tab) {
			window.scrollTo({
				top: tab.offsetTop - space,
				behavior: 'smooth'
			});
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
	let forceUpdate = 0;
	onMount(() => {
		autoPlay();
		window.addEventListener('resize', () => (forceUpdate += 1));
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

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={y} />
<div class="header-container" style="font-family: Inter">
	<div id="header" class="flex flex-col fixed top-0 md:pb-0 pb-4 w-full z-50">
		<div class="noti-campaign" style="">
			{#if is_close}
				{#if screenSize > 800}
					<div class="transition-bar">
						<div
							class="absolute right-0 top-2 z-30 cursor-pointer"
							role="button"
							tabindex="0"
							on:click={() => (is_close = false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-x svelte-pwodhr"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="#597e8d"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"
								></path><path d="M6 6l12 12"></path></svg
							>
						</div>
						<div class="transition-action">
							<div class="transition-item">
								<div class="flex justify-center shrink-0">
									<a
										href="https://docs.inferix.io/verifier-node-guide/verifier-node-sales/how-to-get-whitelisted"
										target="_blank"
										class="inline-flex h-full items-center gap-1"
										aria-label="Read more"
										>Node Whitelist Campaign - <p class="text-black">
											Only {new Date('2024/09/25 00:00:00').getDay() - new Date().getDay()} days left!
											⟶
										</p></a
									>
								</div>
							</div>
						</div>
					</div>
				{:else}
					<div class="transition-bar-mobile" id="guide-mobile">
						<div class="transition-action">
							<div class="flex basis-1/4 justify-center shrink-0">
								<a
									href="https://docs.inferix.io/verifier-node-guide/verifier-node-sales/how-to-get-whitelisted"
									target="_blank"
									class="inline-flex h-full items-center gap-1"
									aria-label="Read more"
									>Node Whitelist Campaign - <p class="text-black">
										Only {new Date('2024/09/25 00:00:00').getDay() - new Date().getDay()} days left!
										⟶
									</p></a
								>
							</div>
						</div>
					</div>
				{/if}
			{/if}
		</div>

		<div class="header-bar">
			<img
				class="h-[24px] cursor-pointer"
				src={HeaderLogo}
				alt="HeaderLogo"
				on:click={scrollToTop}
			/>
			<div class="flex justify-center h-[32px] xl:gap-[100px] lg:gap-12 md:gap-0 md:mx-[40px]">
				{#each tabs as tab (tab.id)}
					<div class="relative flex justify-center">
						<a
							on:click={() => handleClickTab(tab.id, tab.href)}
							id="item-tab-{tab.id}"
							class="tab-item cursor-pointer"
							aria-label="Read more">{tab.title}</a
						>
						{#if tab.id === 6}
							<div
								class="new-tag absolute top-[-6px] right-[-22px] h-[16px] px-[4px] leading-[16px] text-[10px] hover:text-white text-white rounded-[8px_0px] pointer-events-none"
								style="background: linear-gradient(90deg, rgb(255, 57, 188), rgb(137, 42, 242)); color:white !important"
							>
								New
							</div>
						{/if}
					</div>
				{/each}
			</div>
			<div class="register-button">
				<a
					on:click={() => handleClickTab(register.id, register.href)}
					class="whitespace-nowrap cursor-pointer"
					aria-label="Read more">{register.title}</a
				>
			</div>
		</div>
		<div class="header-bar-mobile">
			<img
				class="h-[24px] cursor-pointer"
				src={HeaderLogo}
				alt="header-logo-inferix"
				on:click={scrollToTop}
			/>
			<div style="flex: 1"></div>
			<div class="register-button">
				<a
					on:click={() => handleClickTab(register.id, register.href)}
					class="whitespace-nowrap cursor-pointer"
					aria-label="Read more">{register.title}</a
				>
			</div>
			<div class="cursor-pointer" on:click={() => (isOpen = true)}>
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
							Fastest 3D rendering & federated AI by
						</p>
						<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
							<p class="text-[48px] max-md:text-[40px] font-bold text-center">
								Inferix Decentralized GPU
							</p>
						</Saos>
					{:else}
						<p class="text-[24px] font-[400] opacity-60 text-center">
							Low-cost visual computing & AI by
						</p>
						<Saos once animation={'h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
							<p class="text-[48px] max-md:text-[40px] font-bold text-center">
								Inferix Crowdsourced GPU
							</p>
						</Saos>
					{/if}
				</div>
			</div>
		</div>

		<div
			class="overflow-hidden bg-black mx-auto md:mt-0 -mt-[200px] relative flex justify-center align-center max-md:pt-[200px] pt-[250px] max-lg:pb-[100px]"
		>
			<img src={begin_content} class="w-[90%] max-md:mt-[150px]" />
			<img
				src={img_content}
				class="absolute max-md:w-[100%] w-[60%] transform max-lg:translate-y-[165%] max-md:translate-y-[120%] translate-y-[120%]"
			/>
			<div
				class="absolute max-lg:top-[550px] max-xl:top-[360px] top-[420px] flex-col align-center justify-center"
			>
				<div class="md:hidden text-[16px] font-normal">MVP is live on desktop</div>
				<div
					class="flex lg:flex-row flex-col md:mt-[50px] max-md:w-full
				items-center mx-auto justify-between z-40 md:-mb-[150px] max-md:mb-[180px] gap-[16px]"
				>
					<div class="item-download">
						<div
							role="button"
							tabindex="0"
							class="cursor-pointer flex w-[100%] gap-[24px] align-center"
						>
							<div class="">
								<img class="ml-4" src={buttonGPU} alt="buttonGPU" />
							</div>
							<div style="flex: 1" class="flex flex-col">
								<p class="flex text-white text-[20px] font-bold justify-end">For GPU Owner</p>
								<div class="flex max-md:hidden gap-[16px]">
									<a
										href="https://h3d.me/ifxworkerwin"
										class="inline-flex justify-between items-center gap-1 cursor-pointer"
										aria-label="Read more"
									>
										<img src={DownloadIcon} alt="DownloadIcon" width="20px" />
										<p class="text-white font-normal text-[16px] opacity-60">Windows</p>
									</a>
									<a
										href="https://h3d.me/ifxworkerubuntu"
										role="button"
										tabindex="0"
										class="inline-flex justify-between items-center gap-1 cursor-pointer"
										aria-label="Read more"
									>
										<img class="object-cover" src={DownloadIcon} alt="DownloadIcon" width="20px" />
										<p class="text-white font-normal text-[16px] opacity-60">Linux</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="item-download">
						<div
							role="button"
							tabindex="0"
							class="cursor-pointer flex w-[100%] gap-[24px] align-center"
						>
							<div class="">
								<img class="ml-4" src={Rendering} alt="3d-rendering" />
							</div>
							<div style="flex: 1" class="flex flex-col">
								<p class="flex text-white text-[20px] font-bold justify-end">
									3D Rendering & AI Users
								</p>
								<div class="flex max-md:hidden gap-[16px]">
									<a
										href="https://h3d.me/ifxworkerwin"
										class="inline-flex justify-between items-center gap-1 cursor-pointer"
										aria-label="Read more"
									>
										<img src={DownloadIcon} alt="DownloadIcon" width="20px" />
										<p class="text-white font-normal text-[16px] opacity-60">Desktop PC</p>
									</a>
									<a
										href="https://a3d.inferix.io/"
										target="_blank"
										role="button"
										tabindex="0"
										class="inline-flex justify-between items-center gap-1 cursor-pointer"
										aria-label="Read more"
									>
										<img class="object-cover" src={DownloadIcon} alt="DownloadIcon" width="20px" />
										<p class="text-white font-normal text-[16px] opacity-60">Web-App</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class={`${isOpen ? 'open' : 'close'} overlayMobile fixed inset-0 h-full z-50`}>
		<div
			style="background: #000;"
			class="flex gap-[20px] flex-col text-[20px] font-[600] items-start w-full h-full box-border pt-[86px] relative p-[30px]"
		>
			<a
				href="https://inferix.io/"
				class="absolute top-[20px]"
				role="button"
				tabindex="0"
				on:click={() => (isOpen = false)}
			>
				<img src={HeaderLogo} alt="Inferix" class="w-[158px] h-[32px]" />
			</a>
			{#each tabs as tab (tab.id)}
				<div class="header-tab-mobile tab opacity-60">
					<a
						on:click={() => handleClickTab(tab.id, tab.href)}
						class="whitespace-nowrap cursor-pointer relative"
						aria-label="Read more"
						>{tab.title}
						{#if tab.id === 6}
							<div
								class="new-tag absolute top-[-6px] right-[-33px] h-[16px] px-[4px] leading-[16px] text-[10px] text-white rounded-[8px_0px] pointer-events-none"
								style="background: linear-gradient(90deg, rgb(255, 57, 188), rgb(137, 42, 242)); color:white"
							>
								New
							</div>
						{/if}
					</a>
				</div>
			{/each}
			<div class="flex justify-center opacity-60 gap-[20px] w-[100%] mt-[40px]">
				{#each medias as media (media.id)}
					<div>
						<a target="_blank" href={media.href}
							><img
								src={media.icon}
								alt={media.name}
								loading="lazy"
								class="h-[34px] w-[34px]"
								style="border-radius: 50%;"
							/></a
						>
					</div>
				{/each}
			</div>
		</div>

		<div
			class={`${isOpen ? 'block' : 'hidden'} top-4 absolute right-5 cursor-pointer z-20`}
			role="button"
			tabindex="0"
			on:click={() => (isOpen = false)}
		>
			<img src={Close} alt="close icon" />
		</div>
	</div>
	<Modal bind:show={downloadShowModal} on:close={closeDownloadModal}>
		<DownloadFailed />
	</Modal>
	<Modal bind:show={showModal} on:close={closeModal}>
		<SignUpModal />
	</Modal>
</div>

<style lang="postcss">
	.header-bar {
		@apply flex flex-row mx-auto w-[100%] h-[100px] my-[12px] items-center justify-between px-[40px] bg-cover max-md:hidden;
		background: #000;
		margin-top: 0;
		border-bottom: 1px solid #333333;
		.tab-item {
			@apply text-[16px] font-normal text-white px-2 py-1 whitespace-nowrap text-header-transfer;
		}
		& > .register-button {
			@apply flex justify-center w-[160px] h-[48px]  items-center text-black py-4 text-[16px] font-[700];
			padding: 12px 16px;
			background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
			&:hover {
				box-shadow: 0 0 10px #00d6d9;
				/* &::before {
					content: '';
					position: absolute;
					inset: -5px;
					transform: translate(10px, 8px);
					z-index: 0;
					background: linear-gradient(45deg, #00d6d9 0%, #fcc142 100%);
					filter: blur(10px);
				} */
			}
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
	.download-options {
		color: #fff;
		font-size: 12px;
		font-style: normal;
		font-weight: 100;
		line-height: normal;
		opacity: 0.6;
		@apply flex flex-row justify-center items-center gap-1;
	}
	.header-bar-mobile {
		@apply md:hidden flex items-center;
		border-bottom: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.3));
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(16px);
		padding: 24px;

		> .register-button {
			@apply flex justify-center w-[113px] h-[100%]  items-center text-black py-4 text-[16px] font-[700];
			padding: 8px 16px;
			background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
			margin-right: 16px;
			&:hover {
				box-shadow: 0 0 10px #00d6d9;
				/* &::before {
					content: '';
					position: absolute;
					inset: -5px;
					transform: translate(10px, 8px);
					z-index: 0;
					background: linear-gradient(45deg, #00d6d9 0%, #fcc142 100%);
					filter: blur(10px);
				} */
			}
		}
	}

	.item-download {
		width: 400px;
		height: 90px;
		border: 1px solid #ffffff33;
		background: radial-gradient(
			50% 100% at 50.15% 0%,
			rgba(255, 255, 255, 0.3) 0%,
			rgba(255, 255, 255, 0.1) 100%
		);
		padding: 0 24px;
		display: flex;
		gap: 24px;
		justify-content: center;
		align-items: center;

		&:hover {
			background: radial-gradient(
				50% 100% at 50.15% 0%,
				rgba(189, 189, 189, 0.3) 0%,
				rgba(156, 156, 156, 0.1) 100%
			);
		}

		> div {
			> div:nth-child(2) {
				align-items: flex-start;
				justify-content: space-between;
			}
		}
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
				width: 90%;
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

	@media screen and (max-width: 1024px) {
		.header-container {
			> div:nth-child(2) {
				> div:nth-child(2) {
					> div:nth-child(3) {
						top: 320px;
					}
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.header-container > div:nth-child(2) > div:last-child {
			gap: 15px;
		}

		.header-container {
			> div:nth-child(2) {
				> div:nth-child(2) {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 0;
					> img:nth-child(2) {
						position: relative;
						transform: none;
						width: calc(100vw - 48px);
					}
					> div:nth-child(3) {
						top: 500px;
						width: 100%;
						padding: 0 24px;
						display: flex;
						align-items: center;
						gap: 16px;
						margin-bottom: 0;

						> div:nth-child(3) {
							gap: 16px;
							margin-bottom: 0;
						}

						.item-download {
							width: 100%;
							height: 92px;
							> div {
								> div:nth-child(2) {
									justify-content: center;
								}
							}
						}
					}
				}
			}
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

	.new-tag {
		color: white !important;
	}
	.transition-bar {
		@apply flex gap-[30px] shrink-0 relative;
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		.transition-action {
			@apply flex flex-row justify-between items-center w-full h-[40px] shrink-0 whitespace-nowrap;
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
			@apply flex flex-row justify-between items-center w-full h-[40px] shrink-0 whitespace-nowrap gap-[30px];
			animation: slide-left 10s linear infinite;
			&:hover {
				animation-play-state: paused;
			}
		}
	}

	.noti-campaign .transition-bar {
		@apply flex gap-[30px] shrink-0 relative;
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		.transition-action {
			@apply flex flex-row justify-between items-center w-full h-[40px] shrink-0 whitespace-nowrap;
			animation: none;
			color: #fff;

			.transition-item {
				@apply flex flex-row justify-center items-center w-full h-[40px] shrink-0 whitespace-nowrap gap-[30px];
			}
		}
	}
	.noti-campaign .transition-bar-mobile {
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		.transition-action {
			@apply flex flex-row justify-center items-center w-full h-[40px] shrink-0 whitespace-nowrap gap-[30px];
			animation: none;
			color: #fff;
			font-size: 14px;

			&:hover {
				animation-play-state: paused;
			}
		}
	}

	@keyframes slide-left {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-110%);
		}
	}

	@media screen and (max-width: 500px) {
		.header-container {
			> div:nth-child(2) {
				> div:nth-child(2) {
					gap: 35vw;

					> div:nth-child(3) {
						top: 550px;

						.item-download {
							height: 80px;
						}
					}
				}
			}
		}
	}
</style>

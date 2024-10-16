<script lang="ts">
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import X from '$images/icons/Twitter.svg';
	import D from '$images/icons/D.svg';
	import M from '$images/icons/M.svg';
	import Y from '$images/icons/Ytb.svg';
	import W from '$images/icons/warpcast.svg';
	import LineRow from '$images/png/LineRow.svg';
	import LineCol from '$images/png/LineCol.svg';
	import FooterContent from '$images/png/FooterContent.png';

	let activeTab = 1;

	const setActiveTab = (tab: number) => {
		activeTab = tab;
	};

	const medias = [
		{ id: 1, name: 'Twitter', href: 'https://twitter.com/inferixgpu', icon: X },
		{ id: 2, name: 'Medium', href: 'https://medium.com/@inferixgpu', icon: M },
		{ id: 3, name: 'Discord', href: 'https://discord.gg/NJvcWYcB9W', icon: D },
		{ id: 4, name: 'Youtube', href: 'https://www.youtube.com/@InferixGPU', icon: Y },
		{ id: 5, name: 'Warpcast', href: 'https://warpcast.com/inferixgpu', icon: W }
	];
	let screenSize: number;
	let focusButtonJoinNow = false;
	function focusButtonJoin(status) {
		focusButtonJoinNow = status;
	}
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="bg-black flex flex-col items-center justify-center w-full">
	<div
		class="max-md:hidden md:h-[120px] max-md:h-[136px] w-full px-[156px] py-[24px] mt-[50px] flex md:flex-row flex-col justify-between bg-[rgb(17,17,17)]"
	>
		<div
			class="flex md:gap-4 gap-2 md:order-1 order-2 flex-col items-center md:items-start mt-8 md:mt-0"
			style="background: #111;"
		>
			<a href="https://inferix.io/">
				<img src={HeaderLogo} alt="Inferix" class="w-[152px] h-[32px]" />
			</a>
			<p class="font-base font-outfit font-normal mt-4 md:mt-0 text-white whitespace-nowrap">
				Decentralized GPU Network
			</p>
		</div>
		<div
			class="flex flex-row md:gap-10 justify-center items-start gap-8 font-bold mt-2 md:mt-0 w-fit font-outfit md:text-lg text-base md:order-2 order-1 mediaContainer"
		>
			{#each medias as media (media.id)}
				<div
					role="button"
					tabindex="0"
					class={activeTab === media.id ? 'active' : ''}
					on:click={() => setActiveTab(media.id)}
				>
					<a target="_blank" href={media.href} aria-label="Read more"
						><img src={media.icon} loading="lazy" style="border-radius: 50%;" alt="icon" /></a
					>
				</div>
			{/each}
		</div>
	</div>
	<div
		class="md:hidden flex flex-col gap-6 justify-center items-center w-full"
		style="background: #111; padding: 20px 0;"
	>
		<div class="flex flex-col items-center">
			<a href="https://inferix.io/">
				<img src={HeaderLogo} alt="Inferix" class="w-[152px] h-[32px]" />
			</a>
			<p class="font-base font-outfit font-normal mt-4 md:mt-0 text-white whitespace-nowrap">
				Decentralized GPU Network
			</p>
		</div>
		<div class="flex flex-row gap-5 mb-[20px]">
			{#each medias as media (media.id)}
				<div
					role="button"
					tabindex="0"
					class={activeTab === media.id ? 'active' : ''}
					on:click={() => setActiveTab(media.id)}
				>
					<a target="_blank" href={media.href} aria-label="Read more">
						<img src={media.icon} style="border-radius: 50%;" alt="icon" loading="lazy" />
					</a>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex h-[32px] w-full bg-[rgb(26,27,27)] items-center justify-center">
		<p class="font-outfit text-sm font-normal">© 2023 Inferix. All rights reserved.</p>
	</div>
</div>

<style>
	.footer-body {
		@apply flex md:flex-col flex-row justify-center items-center 2xl:my-[150px] my-[70px] w-[95%];
		& > .footer-content {
			@apply flex md:flex-row flex-col justify-center items-center md:h-[354px] 2xl:w-full max-w-[1250px] gap-0 md:mx-[60px] ml-1;
			& > .content {
				@apply flex md:flex-row flex-col md:h-[354px] w-full items-center justify-center md:m-0 gap-4 mt-[1px];
				background: var(
					--123,
					radial-gradient(
						100% 100% at 50% 0%,
						rgba(255, 255, 255, 0.12) 0%,
						rgba(255, 255, 255, 0) 100%
					)
				);
			}
		}
	}

	.footer-content-paragraph {
		@apply text-white font-normal opacity-60 leading-8 2xl:max-w-[507px] max-w-[400px] text-[20px] 2xl:text-[24px];
	}
	.footer-join {
		width: 140px;
		height: 24px;
		display: flex;
		padding: 4px 4px 4px 12px;
		align-items: center;
		gap: 8px;
		border-radius: 40px;
		background: #fff;
	}
	.join-footer-focus {
		@apply cursor-pointer filter-none;
		height: 24px;
		width: 265px;
		display: flex;
		padding: 4px 4px 4px 12px;
		align-items: center;
		gap: 8px;
		border-radius: 40px;
		border: 1px solid rgba(173, 173, 173, 0.45);
		background: rgba(255, 255, 255, 0.1);
		animation: slideFromLeft 0.7s ease-in-out forwards;
		& > p {
			@apply text-white text-[14px] font-normal whitespace-nowrap;
		}
	}
	@keyframes slideFromLeft {
		from {
			width: 150px;
			opacity: 0;
		}
		to {
			width: 256px;
			opacity: 1;
		}
	}

	@media screen and (max-width: 534px) {
		.footer-content > .content > div:nth-child(2) {
			padding: 20px;
		}
	}
	@media screen and (min-width: 1536px) {
		.footer-content-paragraph {
			line-height: 32px;
		}
	}
</style>

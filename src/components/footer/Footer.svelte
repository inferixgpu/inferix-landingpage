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

<div style="border-top:1px solid #333333" class="pt-[30px] flex flex-col items-center justify-center w-full bg-[#000000]">
	<!-- <div class="footer-body">
		<div class="flex flex-col gap-[18px] w-full max-md:hidden">
			<img class="w-full" src={LineRow} alt="LingRow" />
			<img class="w-full" src={LineRow} alt="LineRow" />
		</div>
		<div class="flex gap-[18px] md:hidden">
			<img src={LineCol} alt="icon" />
			<img src={LineCol} alt="icon" />
		</div>
		<div class="footer-content">
			<div class="flex gap-[18px] max-md:hidden">
				<img src={LineCol} alt="icon" />
				<img src={LineCol} alt="icon" />
			</div>
			<div class="flex flex-col gap-[18px] w-full md:hidden">
				<img class="w-full" src={LineRow} alt="icon" />
				<img class="w-full" src={LineRow} alt="icon" />
			</div>
			<div class="content">
				<img
					class="md:w-[49%] lg:h-full 2xl:max-h-[292px] xl:max-h-[292px] max-h-[200px]"
					loading="lazy"
					src={FooterContent}
					alt="FooterContent"
				/>
				<div class="md:w-[49%] flex flex-col gap-4 pr-2">
					<p class="footer-content-paragraph">
						"Join us as a GPU provider and let's build our ecosystem together, harnessing the power
						of GPUs for seamless rendering, accelerated Al, and groundbreaking innovation"
					</p>
					<div
						role="button"
						tabindex="0"
						class="max-md:mx-auto max-md:pb-[20px]"
						on:mouseenter={() => focusButtonJoin(true)}
						on:mouseleave={() => focusButtonJoin(false)}
					>
						{#if !focusButtonJoinNow}
							<div class="footer-join">
								<p class="text-black text-[14px] font-normal whitespace-nowrap">Join Inferix Now</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
								>
									<path
										d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM16.53 12.53L13.53 15.53C13.38 15.68 13.19 15.75 13 15.75C12.81 15.75 12.62 15.68 12.47 15.53C12.18 15.24 12.18 14.76 12.47 14.47L14.19 12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H14.19L12.47 9.53C12.18 9.24 12.18 8.76 12.47 8.47C12.76 8.18 13.24 8.18 13.53 8.47L16.53 11.47C16.82 11.76 16.82 12.24 16.53 12.53Z"
										fill="black"
									/>
								</svg>
							</div>
						{:else}
							<a
								class="join-footer-focus"
								href="https://docs.inferix.io/inferix-mvp/tutorial-mvp-for-designers-and-gpu-owners"
								target="_blank"
							>
								<p class="">Let's build our ecosystem together</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.03 12.53L13.03 15.53C12.88 15.68 12.69 15.75 12.5 15.75C12.31 15.75 12.12 15.68 11.97 15.53C11.68 15.24 11.68 14.76 11.97 14.47L13.69 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H13.69L11.97 9.53C11.68 9.24 11.68 8.76 11.97 8.47C12.26 8.18 12.74 8.18 13.03 8.47L16.03 11.47C16.32 11.76 16.32 12.24 16.03 12.53Z"
										fill="white"
									/>
								</svg>
							</a>
						{/if}
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-[18px] w-full md:hidden">
				<img class="w-full" src={LineRow} alt="icon" />
				<img class="w-full" src={LineRow} alt="icon" />
			</div>
			<div class="flex gap-[18px] max-md:hidden">
				<img src={LineCol} alt="icon" />
				<img src={LineCol} alt="icon" />
			</div>
		</div>
		<div class="flex flex-col gap-[18px] w-full max-md:hidden">
			<img class="w-full" src={LineRow} alt="icon" />
			<img class="w-full" src={LineRow} alt="icon" />
		</div>
		<div class="flex gap-[18px] md:hidden">
			<img src={LineCol} alt="icon" />
			<img src={LineCol} alt="icon" />
		</div>
	</div> -->
	<div
	style="background: #000000"
		class="bg-[#000000] max-md:hidden md:h-[120px] max-md:h-[136px] w-full px-[156px] py-[24px] flex md:flex-row flex-col justify-between bg-[rgb(17,17,17)]"
	>
		<div
			class="flex md:gap-4 gap-2 md:order-1 order-2 flex-col items-center md:items-start mt-8 md:mt-0"
			style="background: #000000;"
		>
			<a href="https://inferix.io/">
				<img src={HeaderLogo} alt="Inferix" class="w-[152px] h-[32px]" />
			</a>
			<p class="font-base font-normal mt-4 md:mt-0 text-white whitespace-nowrap" style="font-family: Inter">
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
		class="bg-[#000000] md:hidden flex flex-col gap-6 justify-center items-center w-full"
		style="background: #000000; padding: 20px 0;"
	>
		<div class="flex flex-col items-center">
			<a href="https://inferix.io/">
				<img src={HeaderLogo} alt="Inferix" class="w-[152px] h-[32px]" />
			</a>
			<p class="font-base font-normal mt-4 md:mt-0 text-white whitespace-nowrap" style="font-family: Inter">
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
	<div style="background: #000000" class="bg-[#000000] flex h-[32px] w-full bg-[rgb(26,27,27)] items-center justify-center">
		<p class="text-[12px] text-[#888888] font-normal" style="font-family: Inter">© 2023 Inferix. All rights reserved.</p>
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
		/* background: rgba(255, 255, 255, 0.1); */
		background-color: #000000;
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

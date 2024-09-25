<script>
	import X from '$images/png/x.png';
	import Medium from '$images/png/medium.png';
	import Discord from '$images/png/discord.png';
	import Youtube from '$images/png/youtube.png';
	import Close from '$images/png/close-icon.png';
	import Warpcast from '$images/icons/warpcast.svg';

	let showModal = false;
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			showModal = true;
		}, 10000);
	});

	const closeModal = () => {
		showModal = false;
	};
</script>

{#if showModal}
	<div
		style="font-family: Inter; backdrop-filter: blur(5px);"
		class="fixed inset-0 flex items-center justify-center w-full z-[99999]"
	>
		<div class="relative max-w-[872px] w-full p-[2px] rounded-lg bg-[#000000] mx-4 sm:mx-10">
			<div
				class="absolute inset-0 rounded-lg border-[2px] border-transparent"
				style="background: linear-gradient(45deg, #00D6D9, #00C085); 
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); 
          -webkit-mask-composite: destination-out; mask-composite: exclude;"
			></div>

			<div
				class="p-6 md:p-12 rounded-lg shadow-lg relative z-10"
				style="background: radial-gradient(88.61% 141.42% at 0% 0%, rgba(0, 214, 217, 0.20) 0%, rgba(0, 192, 133, 0.00) 100%); backdrop-filter: blur(13px)"
			>
				<div class="flex justify-between relative">
					<div>
						<div
							class="text-[24px] lg:text-[54px] leading-[60px] md:leading-[108px] font-semibold text-[#FFF]"
						>
							Start Buying Node!
						</div>
						<div
							class="mb-[20px] md:mb-[32px] font-medium leading-[40px] md:leading-[60px] text-[16px] lg:text-[20px] text-[#888]"
						>
							Download the product to start earning right now!
						</div>
					</div>
					<img
						class="hidden sm:flex w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] ml-2 cursor-pointer"
						src={Close}
						alt="X Icon"
						on:click={closeModal}
					/>
					<img
						class="flex absolute right-0 sm:hidden w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] ml-2 cursor-pointer"
						src={Close}
						alt="X Icon"
						on:click={closeModal}
					/>
				</div>
				<button
					on:click={() => window.open('https://verifier.inferix.io/')}
					class=" btn-buy px-4 py-3 h-[48px] md:h-[56px] w-[160px] text-[#08101D] text-[20px]"
				>
					Buy Now
				</button>
				<div class="w-full h-[1px] bg-[#333] my-4 md:my-8"></div>
				<div
					class="mb-[32px] font-medium leading-[40px] md:leading-[60px] text-[16px] lg:text-[20px] text-[#888] mb-[12px] md:mb-[40px]"
				>
					Don’t miss out – join our community!
				</div>
				<div class="flex gap-6 lg:gap-10">
					<a href="https://x.com/inferixgpu" target="_blank" rel="noopener noreferrer">
						<img class="w-[36px] h-[36px] md:w-[50px] md:h-[50px]" src={X} alt="X Icon" />
					</a>
					<a href="https://medium.com/@inferixgpu" target="_blank" rel="noopener noreferrer">
						<img class="w-[36px] h-[36px] md:w-[50px] md:h-[50px]" src={Medium} alt="Medium Icon" />
					</a>
					<a href="https://discord.com/invite/NJvcWYcB9W" target="_blank" rel="noopener noreferrer">
						<img
							class="w-[36px] h-[36px] md:w-[50px] md:h-[50px]"
							src={Discord}
							alt="Discord Icon"
						/>
					</a>
					<a href="https://www.youtube.com/@InferixGPU" target="_blank" rel="noopener noreferrer">
						<img
							class="w-[36px] h-[36px] md:w-[50px] md:h-[50px]"
							src={Youtube}
							alt="YouTube Icon"
						/>
					</a>
					<a href="https://warpcast.com/inferixgpu" target="_blank" rel="noopener noreferrer">
						<img
							class="w-[36px] h-[36px] md:w-[50px] md:h-[50px]"
							style="border-radius: 50% "
							src={Warpcast}
							alt="Warpcast Icon"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.btn-buy {
		border-radius: 8px;
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		font-weight: 500;

		&:hover {
			opacity: 1;
			box-shadow: 0 0 10px #00d6d9;
		}
	}
</style>

<script lang="ts">
	import RoadMapDesktop from './RoadMapDesktop.svelte';
	import RoadMapMobile from './RoadMapMobile.svelte';
	import InferixCycle from '$images/png/InferixCycle.png';
	import InferixCycleMobile from '$images/png/InferixCycleMobile.png';
	import Inferix from '$images/icons/Inferix.svg';
	import StraightDivider from '$images/icons/StraightDivider.svg';
	import PartnerAndInvestor from '$images/png/PartnerAndInvestor.png';
	import Industries from './Industries.svelte';
	import WhyInferix from './WhyInferix.svelte';
	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="about" class="">
	<div class="bg-lightDark">
		<div
			class="flex md:flex-row flex-col items-center mx-auto md:pt-[124px] pt-0 container md:px-0 px-5 box-border"
		>
			<img src={Inferix} alt="Inferix" class="md:flex hidden w-[196px] h-[76px]" />
			<img src={StraightDivider} alt="divider" class="ml-[54px] md:flex hidden mr-[74px]" />
			<p
				class="md:text-left text-center md:text-[1.75rem] text-sm font-pre font-normal leading-normal md:text-white text-textMobile"
			>
				An innovated platform using the power of Blockchain and Web3 technologies to redefin how we
				use and share GPU resoruce globally.
			</p>
		</div>
		<img
			src={InferixCycle}
			class="mx-auto container mt-[149px] md:flex hidden pb-[132px]"
			alt="inferix circle"
		/>
		<img
			src={InferixCycleMobile}
			class="mx-auto mt-[48px] pb-[52px] md:hidden flex box-border"
			alt="inferix circle"
		/>
	</div>
	<WhyInferix />
	<Industries />
	<div class="md:pt-[155px] pb-0 bg-darkGrey md:flex hidden">
		<div class="mx-auto container">
			<p class="text-center font-pre font-extrabold md:text-[2.5rem] text-2xl">
				Partner / Investor
			</p>
			<img src={PartnerAndInvestor} alt="Partner / Investor" class="mt-[60px] mx-auto" />
		</div>
	</div>
	{#if screenSize > 768}
		<RoadMapDesktop />
	{:else}
		<RoadMapMobile />
	{/if}
</div>

<style lang="postcss">
</style>

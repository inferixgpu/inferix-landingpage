<script lang="ts">
	import RoadMapDesktop from './RoadMapDesktop.svelte';
	import RoadMapMobile from './RoadMapMobile.svelte';
	import InferixCycle from '$images/png/InferixCycle.png';
	import InferixCicleMobile from '$images/icons/InferixCircleMobile.svg';
	import Inferix from '$images/icons/Inferix.svg';
	import StraightDivider from '$images/icons/StraightDivider.svg';
	import PartnerAndInvestor from '$images/png/PartnerAndInvestor.png';
	import Industries from './Industries.svelte';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="about" class="container mx-auto">
	<div class="flex items-center mx-auto mt-[133px]">
		<img src={Inferix} alt="Inferix" />
		<img src={StraightDivider} alt="divider" class="ml-[54px] mr-[74px]" />
		<p class="text-left md:text-2xl text-base font-suit font-normal">
			An innovated platform using the power of Blockchain and Web3 technologies to redefin how we
			use and share GPU resoruce globally.
		</p>
	</div>
	<img src={InferixCycle} class="mx-auto mt-[149px] md:flex hidden" alt="inferix circle" />
	<img src={InferixCicleMobile} class="mx-auto mt-[40px] md:hidden flex" alt="inferix circle" />
	<Industries />
	<div class="mt-[155px] mx-auto">
		<p class="text-center font-pre font-extrabold text-[2.5rem]">Partner / Investor</p>
		<img src={PartnerAndInvestor} alt="Partner / Investor" class="mt-[60px]" />
	</div>
	{#if screenSize > 768}
		<RoadMapDesktop />
	{:else}
		<RoadMapMobile />
	{/if}
</div>

<style lang="postcss">
</style>

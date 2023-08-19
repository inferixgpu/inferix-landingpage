<script lang="ts">
	import RoadMapDesktop from './RoadMapDesktop.svelte';
	import RoadMapMobile from './RoadMapMobile.svelte';
	import InferixCycle from '$images/png/InferixCycle.png';
	import InferixCicleMobile from '$images/icons/InferixCircleMobile.svg';
	import Inferix from '$images/icons/Inferix.svg';
	import StraightDivider from '$images/icons/StraightDivider.svg';
	import PartnerAndInvestor from '$images/png/PartnerAndInvestor.png';
	import Industries from './Industries.svelte';
	import WhyInferix from './WhyInferix.svelte';
	import Colligence from '$images/icons/Colligence.svg';
	import House3D from '$images/icons/House3D.svg';
	import MetaCity from '$images/icons/MetaCity.svg';
	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="about" class="">
	<div
		class="flex md:flex-row flex-col items-center mx-auto md:pt-[133px] pt-[60px] container md:px-0 px-5 box-border"
	>
		<img src={Inferix} alt="Inferix" />
		<img src={StraightDivider} alt="divider" class="ml-[54px] md:flex hidden mr-[74px]" />
		<p class="md:text-left text-center md:text-[1.75rem] text-base font-pre font-normal md:mt-0 mt-5 leading-normal">
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
		src={InferixCicleMobile}
		class="mx-auto mt-[40px] md:hidden flex md:px-0 px-5 box-border"
		alt="inferix circle"
	/>
	<WhyInferix />
	<Industries />
	<div class="md:pt-[155px] pt-[55px] md:pb-0 pb-[50px] bg-darkGrey">
		<div class="mx-auto container">
			<p class="text-center font-pre font-extrabold text-[2.5rem]">Partner / Investor</p>
			<img
				src={PartnerAndInvestor}
				alt="Partner / Investor"
				class="mt-[60px] mx-auto md:flex hidden"
			/>
			<div class="flex flex-col gap-4 md:hidden items-center md:mt-0 mt-4">
				<img src={Colligence} alt="Colligence logo" class="max-w-[300px]" />
				<img src={House3D} alt="House3D logo" class="max-w-[300px]" />
				<img src={MetaCity} alt="MetaCity logo" class="max-w-[300px]" />
			</div>
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

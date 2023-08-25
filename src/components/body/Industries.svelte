<script lang="ts">
	import ArrowDown from '$images/icons/ArrowDown.svg';
	import ArrowDownMobile from '$images/icons/ArrowDownMobile.svg';
	import EllipseBackground from '$images/png/EllipseBackground.png';
	import IndustryListDesktop from './IndustryListDesktop.svelte';
	import IndustryListMobile from './IndustryListMobile.svelte';
	import PartnerAndInvestorMobile from '$images/png/PartnerAndInvestorMobile.png';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="md:pb-[700px] background relative w-full">
	<img
		src={EllipseBackground}
		alt="ellipse background"
		class="absolute inset-0 md:w-full md:h-full z-1 object-cover md:scale-[1]"
	/>
	<img
		src={ArrowDown}
		alt="arrow down icon"
		class="absolute left-[50%] top-[-105px] md:flex hidden"
	/>
	<img
		src={ArrowDownMobile}
		alt="arrow down icon"
		class="absolute left-[50%] top-[-50px] md:hidden flex"
	/>
	<div class="container mx-auto md:pt-[307px] pt-[100px] md:px-0 px-5 box-border">
		<p class="font-pre md:text-[2.5rem] text-lg font-extrabold">Industries Empowered by Inferix</p>
		<p
			class="md:text-grey text-textGrey font-pre md:text-2xl text-[0.5625rem] max-w-[1028px] font-normal md:mt-5 mt-[18px]"
		>
			Unlock the potential of Inferix across a diverse range of industries, where visual computing
			plays a pivotal role in innovation and success. Our cutting - edge distributed GPU
			infrastructure enhances productivity, acceierates creativity, and elevates results for the
			following sectors
		</p>
	</div>
	{#if screenSize > 768}
		<IndustryListDesktop />
	{:else}
		<IndustryListMobile />
	{/if}
	<div class="mx-auto container mt-[96px] md:hidden flex flex-col gap-5">
		<p class="text-center font-pre font-extrabold md:text-[2.5rem] text-base">Partner / Investor</p>
		<img src={PartnerAndInvestorMobile} alt="Partner / Investor" class="mx-auto mb-[-3px]" />
	</div>
</div>

<style lang="postcss">
	.background {
		background: linear-gradient(180deg, #101010 0%, #000 100%);
	}
</style>

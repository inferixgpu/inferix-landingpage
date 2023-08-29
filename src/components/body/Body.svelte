<script lang="ts">
    import Inferix from '$images/icons/Inferix.svg';
    import StraightDivider from '$images/icons/StraightDivider.svg';
    import InferixCycle from '$images/png/InferixCycle.png';
    import InferixCycleMobile from '$images/png/InferixCycleMobile.png';
    import PartnerAndInvestor from '$images/png/PartnerAndInvestor.png';
    import PartnerAndInvestorMobile from '$images/png/PartnerAndInvestorMobile.png';
    import Industries from './Industries.svelte';
    import RoadMapDesktop from './RoadMapDesktop.svelte';
    import RoadMapMobile from './RoadMapMobile.svelte';
    import WhyInferix from './WhyInferix.svelte';

    let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize}/>

<div id="about" class="">
    <div class="bg-lightDark">
        <div
                class="flex md:flex-row flex-col items-center mx-auto md:pt-[124px] pt-0 container box-border"
        >
            <img src={Inferix} alt="Inferix" class="md:flex hidden w-[196px] h-[76px]"/>
            <img src={StraightDivider} alt="divider" class="ml-[54px] md:flex hidden mr-[74px]"/>
            <p
                    class="md:text-left text-center text-xs md:text-[1.75rem] font-pre font-normal leading-default md:text-white text-textMobile"
            >
                An innovated platform using the power of Blockchain and Web3 technologies to redefine how we
                use and share GPU resource globally.
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
    <WhyInferix/>
    <Industries/>
    <div class="md:pt-[155px] pb-0 bg-darkGrey md:flex hidden">
        <div class="mx-auto container">
            <p class="text-center font-pre font-extrabold md:text-[2.5rem] text-2xl">
                Partner / Investor
            </p>
            <img src={PartnerAndInvestor} alt="Partner / Investor" class="mt-[60px] mx-auto"/>
        </div>
    </div>
    <div class="mx-auto container pt-[48px] bg-darkGrey md:hidden flex flex-col gap-5">
        <p class="text-center font-pre font-extrabold md:text-[2.5rem] text-base">Partner / Investor</p>
        <img src={PartnerAndInvestorMobile} alt="Partner / Investor" class="mx-auto"/>
    </div>
    {#if screenSize > 768}
        <RoadMapDesktop/>
    {:else}
        <RoadMapMobile/>
    {/if}
</div>

<style lang="postcss">
</style>

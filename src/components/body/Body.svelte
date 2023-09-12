<script lang="ts">
    import Inferix from '$images/icons/Inferix.svg';
    import StraightDivider from '$images/icons/StraightDivider.svg';
    import InferixCycle from '$images/png/InferixCycle.png';
    import InferixCycleMobile from '$images/png/InferixCycleMobile.png';
    import PartnerAndInvestor from '$images/png/PartnerAndInvestor.png';
    import PartnerAndInvestorMobile from '$images/png/PartnerAndInvestorMobile.png';
    import Saos from "saos";
    import Industries from './Industries.svelte';
    import RoadMapDesktop from './RoadMapDesktop.svelte';
    import RoadMapMobile from './RoadMapMobile.svelte';
    import WhyInferix from './WhyInferix.svelte';

    let screenSize: number;

    const partners = [
        {
            id: 1,
            title: 'Colligence',
            href: 'https://colligence.io/'
        },
        {
            id: 2,
            title: 'House3D',
            href: 'https://house3d.com/'
        },
        {
            id: 3,
            title: 'Metacity',
            href: 'https://citiverse.io/'
        }
    ];
</script>

<svelte:window bind:innerWidth={screenSize}/>

<div id="about" class="">
    <div class="bg-lightDark">
        <Saos top="200" once animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <div
                    class="flex md:flex-row flex-col items-center mx-auto md:pt-[131px] pt-0 container box-border"
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
        </Saos>
        <Saos once top="200" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <img
                    src={InferixCycle}
                    class="mx-auto container mt-[149px] md:flex hidden pb-[132px]"
                    alt="inferix circle"
            />
        </Saos>
        <Saos once top="100" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <img
                    src={InferixCycleMobile}
                    class="mx-auto mt-[57px] pb-[52px] md:hidden flex box-border"
                    alt="inferix circle"
            />
        </Saos>

    </div>
    <WhyInferix/>
    <Industries/>
    <div class="bg-darkGrey">
        <div class="md:pt-[155px] pb-0 bg-darkGrey md:flex flex-col hidden mx-auto container ">
            <Saos once top="200" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <p class="text-center font-pre font-extrabold md:text-[2.5rem] text-2xl">
                    Partner / Investor
                </p>
            </Saos>
            <Saos once top="300" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <div class="partnerDiv mt-[60px] mx-auto">
                    <div class="partnerImg">
                        {#each partners as partner (partner.id)}
                                <a class="partnerLink" target="_blank" href={partner.href}></a>
                        {/each}
                    </div>
                </div>
                <!-- <img src={PartnerAndInvestor} alt="Partner / Investor" class="mt-[60px] mx-auto"/> -->
            </Saos>
        </div>
    </div>

    <div class="bg-darkGrey">
        <Saos once top="200" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <div class="mx-auto container pt-[48px] bg-darkGrey md:hidden flex flex-col gap-5">
                <p class="text-center font-pre font-extrabold md:text-[2.5rem] text-base">Partner / Investor</p>

                <div class="partner-mobile-div mt-[60px] mx-auto">
                    <div class="partner-mobile-img">
                        {#each partners as partner (partner.id)}
                                <a class="partner-mobile-link" target="_blank" href={partner.href}></a>
                        {/each}
                    </div>
                </div>

                <!-- <img src={PartnerAndInvestorMobile} alt="Partner / Investor" class="mx-auto"/> -->
            </div>
            
        </Saos>
    </div>
    {#if screenSize > 768}
        <RoadMapDesktop/>
    {:else}
        <RoadMapMobile/>
    {/if}
</div>

<style lang="postcss">
    .partnerDiv {
        padding: 0px 35px;
        height:224px;
        display: flex;
        justify-content: center;
    }

    .partnerImg {
        background-image: url('$images/png/PartnerAndInvestor.png');
        background-repeat: no-repeat;
        width: 1524.980px;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .partnerLink {
        display: flex;
        width: 33%;
        height: 100%;
        cursor: pointer;
    }

    .partner-mobile-div {
        height:50px;
        display: flex;
        justify-content: center;
    }

    .partner-mobile-img {
        background-image: url('$images/png/PartnerAndInvestorMobile.png');
        background-repeat: no-repeat;
        width: 350px;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    .partner-mobile-link{
        display: flex;
        width: 30%;
        height: 100%;
        cursor: pointer;
    }
</style>

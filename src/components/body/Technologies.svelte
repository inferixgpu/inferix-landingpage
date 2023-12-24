<script lang="ts">
    import ArrowDown from '$images/icons/ArrowDown.svg';
    import ArrowDownMobile from '$images/icons/ArrowDownMobile.svg';
    import Box from '$images/icons/Box.svg';
    import ProofOfRendering from '$images/icons/ProofOfRendering.svg';
    import DataHub from '$images/icons/DataHub.svg';
    import Vr from '$images/icons/Vr.svg';
    import EllipseBackground from '$images/png/EllipseBackground.png';
    import Saos from "saos";
    import IndustryListDesktop from './IndustryListDesktop.svelte';
    import Technologies from "$images/photos/Technologies.png";
    import TechnologiesWorkaround from "$images/icons/Technologies.svg";
    import TechnologiesMobileWorkaround from "$images/icons/TechnologiesMobile.svg";
    import WorksGroup from '$images/icons/WorksGroup.svg';

    let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize}/>

<div class="pb-[48px] bg-[#212023] flex justify-center relative w-full bg-cover bg-center">
    {#if screenSize > 800}
        <img style="width: 100%;margin-bottom: 160px" src="{TechnologiesWorkaround}">
    {:else}
        <img style="width: 100%;margin-bottom: 160px" src="{TechnologiesMobileWorkaround}">
    {/if}
<!--    <div class="flex flex-row  m-[5%]">-->
<!--        <div class="flex items-center">-->
<!--            <p class="text-[48px] font-bold">Technologies</p>-->
<!--        </div>-->

<!--        <div class="flex flex-col ml-[136px] gap-[100px]">-->
<!--            <div class="flex flex-row">-->
<!--                <img src="{Box}">-->
<!--                <div class="flex flex-col ml-[24px]">-->
<!--                    <span class="text-[24px] font-bold">Decentralized Render</span>-->
<!--                    <p class="text-[14px] font-light opacity-50">Creating virtual farms by harnessing decentralized resources across various locations,-->
<!--                        effectively allocating and handling rendering tasks</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="flex flex-row ">-->
<!--                <img src="{ProofOfRendering}">-->
<!--                <div class="flex-col ml-[24px]">-->
<!--                    <span class="text-[24px] font-bold">Proof of Rendering</span>-->
<!--                    <p class="text-[14px] font-light opacity-50">Analysis, consensus and validation algorithms for the rendering work of GPU resource providers</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="flex flex-row">-->
<!--                <img src="{DataHub}">-->
<!--                <div class="flex-col ml-[24px]">-->
<!--                    <span class="text-[24px] font-bold">Decentralized 3D Data Hub</span>-->
<!--                    <p class="text-[14px] font-light opacity-50">Analysis, consensus and validation algorithms for the rendering work of GPU resource providers</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="flex flex-row">-->
<!--                <img src="{Vr}">-->
<!--                <div class="flex-col ml-[24px]">-->
<!--                    <span class="text-[24px] font-bold">WebVR Auto-content</span>-->
<!--                    <p class="text-[14px] font-light opacity-50">Automated WebVR content creation from any kind of 3D datausing Inferix GPU lightmap baking solution</p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</div>

<style lang="postcss">

</style>

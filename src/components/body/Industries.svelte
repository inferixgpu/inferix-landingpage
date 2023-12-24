<script lang="ts">
    import ArrowDown from '$images/icons/ArrowDown.svg';
    import ArrowDownMobile from '$images/icons/ArrowDownMobile.svg';
    import EllipseBackground from '$images/png/EllipseBackground.png';
    import In1 from '$images/png/industries/1.png';
    import In2 from '$images/png/industries/2.png';
    import In3 from '$images/png/industries/3.png';
    import In4 from '$images/png/industries/4.png';
    import In5 from '$images/png/industries/5.png';
    import Saos from "saos";
    import IndustryListDesktop from './IndustryListDesktop.svelte';

    let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize}/>

<div class="pb-[48px] md:pb-[160px] mx-auto w-100% bg-[#212023] container mt-[160px]">
    <div class="flex flex-col justify-center items-center">
        <p class="text-[48px] text-center font-bold mb-[40px]">Industries</p>
        <div class="flex flex-row gap-[30px] w-[100%] justify-between">
            <div class="flex flex-col gap-[16px]">
                <img class="h-[280px]" src="{In1}">
                <p class="text-center">Entertainment & Media</p>
            </div>
            <div class="flex flex-col gap-[16px]">
                <img class="h-[280px]" src="{In2}">
                <p class="text-center">Architecture & Design</p>
            </div>
            <div class="flex flex-col gap-[16px]">
                <img class="h-[280px]" src="{In3}">
                <p class="text-center">Animation & VFX</p>
            </div>
            {#if (screenSize>900)}
                <div class="flex flex-col gap-[16px]">
                    <img class="h-[280px]" src="{In4}">
                    <p class="text-center">AR & VR</p>
                </div>
                {#if (screenSize>1000)}
                    <div class="flex flex-col gap-[16px]">
                        <img class="h-[280px]" src="{In5}">
                        <p class="text-center">Game Content</p>
                    </div>
                {/if}
            {/if}
        </div>
    </div>
</div>

<style lang="postcss">
</style>

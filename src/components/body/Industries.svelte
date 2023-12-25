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

<div class="pb-[48px] md:pb-[160px] mx-auto w-100% bg-[#212023] container mt-[160px] div-room">
    <div class="flex flex-col justify-center items-center font-bold">
        <p class="md:text-[48px] text-[32px] text-center mb-[40px]">Industries</p>
        {#if screenSize > 800}
            <div class="flex flex-row gap-[30px] md:w-[100%] justify-between">
                <div class="flex flex-col gap-[16px] w-[200px]">
                    <img class="h-[280px]" src="{In1}" alt="Entertainment & Media">
                    <p class="text-center">Entertainment & Media</p>
                </div>
                <div class="flex flex-col gap-[16px] w-[200px]">
                    <img class="h-[280px]" src="{In2}" alt="Architecture & Design">
                    <p class="text-center">Architecture & Design</p>
                </div>
                <div class="flex flex-col gap-[16px] w-[200px]">
                    <img class="h-[280px]" src="{In3}" alt="Animation & VFX">
                    <p class="text-center">Animation & VFX</p>
                </div>
                <div class="flex flex-col gap-[16px] w-[200px]">
                    <img class="h-[280px]" src="{In4}" alt="AR & VR">
                    <p class="text-center">AR & VR</p>
                </div>
                <div class="flex flex-col gap-[16px] w-[200px]">
                    <img class="h-[280px]" src="{In5}" alt="Game Content">
                    <p class="text-center">Game Content</p>
                </div>
            </div>
        {:else}
            <div class="flex flex-row gap-[30px] justify-between">
                <div class="flex flex-col gap-[16px] w-[200px] rooms">
                    <img class="h-[280px]" src="{In1}" alt="Entertainment & Media">
                    <p class="text-center">Entertainment & Media</p>
                </div>
                <div class="flex flex-col gap-[16px] w-[200px] rooms">
                    <img class="h-[280px]" src="{In2}" alt="Architecture & Design">
                    <p class="text-center">Architecture & Design</p>
                </div>
                <div class="flex flex-col gap-[16px] w-[200px] rooms">
                    <img class="h-[280px]" src="{In3}" alt="Animation & VFX">
                    <p class="text-center">Animation & VFX</p>
                </div>
                <div class="flex flex-col gap-[16px] w-[200px] rooms">
                    <img class="h-[280px]" src="{In4}" alt="AR & VR">
                    <p class="text-center">AR & VR</p>
                </div>
                <div class="flex flex-col gap-[16px] w-[200px] rooms">
                    <img class="h-[280px]" src="{In5}" alt="Game Content">
                    <p class="text-center">Game Content</p>
                </div>
            </div>
        {/if}
        
        
    </div>
</div>

<style lang="postcss">
.rooms{
    animation: textMove 5s linear infinite;
}
.div-room{
    overflow: hidden;
}
@keyframes textMove {
    0% {
        /* left: 0; */
        transform: translateX(0);
    }
    100% {
        /* left: -100%; */
        transform: translateX(-100%);
    }
}

</style>

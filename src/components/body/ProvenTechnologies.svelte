<script lang="ts">
    import Box from '$images/icons/Box.svg';
    import ProofOfRendering from '$images/icons/ProofOfRendering.svg';
    import DataHub from '$images/icons/DataHub.svg';
    import Vr from '$images/icons/Vr.svg';
    import House3D from '$images/png/House3D_white.svg';
    import Actif3D from '$images/png/actif3D.svg'

    let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize}/>

<div
        class="pt-20 pb-10 bg-[#212023] bg-cover bg-[url('$images/photos/Technologies.png')]"
>
    {#if screenSize > 900}
        <div class="flex flex-col w-full mx-auto box-border container">
            <div class="text-[48px] leading-[72px] font-bold">
                Proven Technologies
            </div>
            <div class="grid grid-cols-2 items-center w-full gap-5 my-10">
                <div class="flex flex-row bg-[#2D2C30] p-10 gap-10 h-[187px]">
                    <img src={Box} alt="Box"/>
                    <p class="text-[32px] leading-[48px] my-auto">
                        Decentralized Render
                    </p>
                </div>
                <div class="flex flex-row bg-[#2D2C30] p-10 gap-10 h-[187px]">
                    <img src={DataHub} alt="Box"/>
                    <p class="text-[32px] leading-[48px] my-auto">
                        Decentralized 3D Data Hub
                    </p>
                </div>
                <div class="flex flex-row bg-[#2D2C30] p-10 gap-10 h-[187px]">
                    <img src={ProofOfRendering} alt="Box"/>
                    <p class="text-[32px] leading-[48px] my-auto">
                        Proof of Rendering
                    </p>
                </div>
                <div class="flex flex-row bg-[#2D2C30] p-10 gap-10 h-[187px]">
                    <img src={Vr} alt="Box"/>
                    <span class="xl:flex xl:flex-row text-[32px] leading-[48px] my-auto gap-2">
                        <p>WebVR</p>
                        <p>Auto-content</p>
                    </span>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-10 mb-auto">
                <div class="my-auto">
                    <img class="h-[80px]" src={House3D} alt="House3D"/>
                </div>
                <div class="flex flex-col opacity-80">
                    <span class="text-[32px] font-bold leading-[50px]">260,000+ users</span>
                    <span class="font-light leading-[36px] text-[24px]">
                    from Southeast Asia and India
                    </span>
                </div>
                <div class="flex flex-col opacity-80 ">
                    <span class="text-[32px] font-bold leading-[50px] ">1,000,000+ designs</span>
                    <span class="font-light leading-[36px] text-[24px] ">
                    design renderings per year using H3D Distributed Rendering
                    </span>
                </div>

                <div class="">
                    <img class="object-cover" src={Actif3D} alt="Actif3D"/>
                </div>
                <div class="flex flex-col opacity-80">
                    <span class="text-[32px] font-bold leading-[50px]">20,000+ pro</span>
                    <span class="font-light leading-[36px] text-[24px]">
                    active professional designers
                    </span>
                </div>
                <div class="flex flex-col opacity-80 ">
                    <span class="text-[32px] font-bold leading-[50px]">500,000+ 3D models</span>
                    <span class="font-light leading-[36px] text-[24px]">
                    <span class="font-light leading-[36px] text-[24px] ">
                    of furniture and home accessories already inputted
                    </span>
                </div>

            </div>
        </div>
    {:else}
        <div class="flex flex-col w-full items-center gap-6 mx-auto box-border px-2">
            <div class="text-[32px] font-bold leading-[48px]">Proven Technologies</div>
            <div class="flex flex-col gap-5">
                <div class="flex flex-row h-[56px] gap-5">
                    <img src={Box} alt="Box"/>
                    <p class="text-[20px] leading-[24px] my-auto">
                        Decentralized Render
                    </p>
                </div>
                <div class="flex flex-row h-[56px] gap-5">
                    <img src={ProofOfRendering} alt="ProofOfRendering"/>
                    <p class="text-[20px] leading-[24px] my-auto">
                        Proof of Rendering
                    </p>
                </div>
                <div class="flex flex-row h-[56px] gap-5">
                    <img src={DataHub} alt="DataHub"/>
                    <p class="text-[20px] leading-[24px] my-auto">
                        Decentralized 3D Data Hub
                    </p>
                </div>
                <div class="flex flex-row h-[56px] gap-5">
                    <img src={Vr} alt="Vr"/>
                    <p class="text-[20px] leading-[24px] my-auto">
                        WebVR Auto-content
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-5 w-[280px] px-2">
                <div class="flex flex-col opacity-80 ">
                    <span class="text-[24px] font-bold leading-[30px]">260,000+ users</span>
                    <span class="font-light leading-[24px] text-[14px]">
                    from Southeast Asia and India
                    </span>
                </div>
                <div class="flex flex-col opacity-80 ">
                    <span class="text-[24px] font-bold leading-[30px]">1,000,000+ designs</span>
                    <span class="font-light leading-[24px] text-[14px]">
                    design renderings per year using H3D Distributed Rendering
                    </span>
                </div>
                <div class="flex flex-col opacity-80 ">
                    <span class="text-[24px] font-bold leading-[30px]">20,000+ pro</span>
                    <span class="font-light leading-[24px] text-[14px]">
                    active professional designers
                    </span>
                </div>
                <div class="flex flex-col opacity-80">
                    <span class="text-[24px] font-bold leading-[30px]">500,000+ 3D models</span>
                    <span class="font-light leading-[24px] text-[14px]">
                    of furniture and home accessories already inputted
                    </span>
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="postcss">
</style>

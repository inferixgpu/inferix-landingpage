<script lang="ts">
    import Dot from '$images/icons/Dot.svg';
    import In1 from '$images/png/industries/1.png';
    import RoadmapWorkaround from '$images/icons/Roadmap.svg';
    import RoadmapMobileWorkaround from '$images/icons/RoadmapMobile.svg';
    import Saos from "saos";

    let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize}/>


<div class="bg-[#212023]">
    <div id="roadmap" class="md:block container mx-auto w-100% mt-[60px]">
<!--        <p class="text-center text-[48px] font-bold mb-[60px]">Roadmap</p>-->
<!--        <div class="flex flex-row gap-[60px] justify-center relative">-->
<!--            <div class="flex flex-col gap-[300px]  mt-[50px] h-[1600px]">-->
<!--                <div></div>-->
<!--                <div class="bg-[#2D2C30] w-[600px] p-[24px]  mt-[-20px]">-->
<!--                    <p class="text-[32px] text-[#00D6D9]">Q3-2023</p>-->
<!--                    <ul class="flex flex-col opacity-50 p-[10px] gap-[12px]">-->
<!--                        <li>Inferix Team is formed with MVP concept</li>-->
<!--                        <li>Project planning</li>-->
<!--                        <li>Start the marketing & partnership activities</li>-->
<!--                        <li>Angel funding</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="bg-[#2D2C30] w-[600px] p-[24px] mt-[-90px]">-->
<!--                    <p class="text-[32px] text-[#00D6D9]">Q1-2024 & Q2-2024</p>-->
<!--                    <ul class="flex flex-col opacity-50 p-[10px] gap-[12px]">-->
<!--                        <li>Rendering Service beta release</li>-->
<!--                        <li>Proof-of-Rendering and BMW model</li>-->
<!--                        <li>Inferix Console Beta</li>-->
<!--                        <li>Strategic round funding</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="bg-[#2D2C30] w-[600px] p-[24px] mt-[-50px]">-->
<!--                    <p class="text-[32px] text-[#00D6D9]">Q4-2024</p>-->
<!--                    <ul class="flex flex-col opacity-50 p-[10px] gap-[12px]">-->
<!--                        <li>Stable Diffusion worker beta release</li>-->
<!--                        <li>Start R&D for LLM AI training & AI inference support</li>-->
<!--                        <li>Start Decentralized R&D activities</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="vertical-line">-->
<!--                <div class="flex flex-col absolute gap-[200px] ml-[-10px]">-->
<!--                    <div></div>-->
<!--                    <img src="{Dot}">-->
<!--                    <img src="{Dot}">-->
<!--                    <img src="{Dot}">-->
<!--                    <img src="{Dot}">-->
<!--                    <img src="{Dot}">-->
<!--                    <img src="{Dot}">-->
<!--                    <div></div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="flex flex-col gap-[300px] mt-[125px] h-[1600px]">-->
<!--                <div class="bg-[#2D2C30] w-[600px] p-[24px] mt-[-20px]">-->
<!--                    <p class="text-[32px] text-[#00D6D9]">From 2018 to Q2-2023</p>-->
<!--                    <ul class="flex flex-col opacity-50 p-[10px] gap-[12px]">-->
<!--                        <li>Build 3D/VR/AR core technologies</li>-->
<!--                        <li>Build House3D Cloud Rendering based on GPU</li>-->
<!--                        <li>100,000+ 3D design created and 1,000,000+ images rendered</li>-->
<!--                        <li>10,000+ active designers community built</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="bg-[#2D2C30] w-[600px] p-[24px] mt-[-60px]">-->
<!--                    <p class="text-[32px] text-[#00D6D9]">Q4-2023</p>-->
<!--                    <ul class="flex flex-col opacity-50 p-[10px] gap-[12px]">-->
<!--                        <li>Decentralized GPU MVP release</li>-->
<!--                        <li>Partnership with rendering & AI business</li>-->
<!--                        <li>Seed round funding</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="bg-[#2D2C30] w-[600px] p-[24px] mt-[-60px]">-->
<!--                    <p class="text-[32px] text-[#00D6D9]">Q3-2024</p>-->
<!--                    <ul class="flex flex-col opacity-50 p-[10px] gap-[12px]">-->
<!--                        <li>IDO/IEO campaign</li>-->
<!--                        <li>Payment & Reward system</li>-->
<!--                        <li>Actif3D and House3D integration</li>-->
<!--                        <li>Rendering Service official release</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div></div>-->
<!--            </div>-->

<!--        </div>-->
        <Saos once top="200" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
            <p class="md:text-center text-center font-pre font-extrabold md:text-[48px] text-[32px] mb-[60px]">Roadmap</p>
        </Saos>

        {#if (screenSize>800)}
            <img style="width: 100%;margin-bottom: 160px" src="{RoadmapWorkaround}">
          {:else}
            <img style="width: 100%;margin-bottom: 160px" src="{RoadmapMobileWorkaround}">
          {/if}

    </div>
</div>

<style lang="postcss">
    ul {
        list-style-type: '· ';
    }

    .vertical-line {
        width: 2px;
        height: 1600px;
        flex-shrink: 0;
        opacity: 1;
        background-color: #373639;
    }
</style>

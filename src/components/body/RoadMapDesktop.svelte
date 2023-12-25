<script lang="ts">
    import Dot from '$images/icons/Dot.svg';
    import In1 from '$images/png/industries/1.png';
    import RoadmapWorkaround from '$images/icons/Roadmap.svg';
    import RoadmapMobileWorkaround from '$images/icons/RoadmapMobile.svg';
    import Saos from "saos";

    let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize}/>


<div class="bg-[#212023] md:mt-[80px] mt-[80px] mb-[200px]">
    <div id="roadmap" class="md:block container mx-auto w-100%">
        <Saos once top="200" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
            <p class="md:text-center text-center font-pre font-extrabold md:text-[48px] text-[32px] mb-[80px]">
                Roadmap</p>
        </Saos>

        <div class="flex justify-between mb-[80px]">
            <span class="w-[50%] border-r-[1px] border-[#373639]">
                    <div class="p-6 flex flex-row justify-between relative mt-[236px]">
                        <div class="flex flex-col basis-11/12 justify-start gap-4 bg-[#2D2C30] p-6">
                            <p class="title-timeline-item">Q3-2023</p>
                            <ul class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6">
                                <li>Inferix Team is formed with MVP concept</li>
                                <li>Project planning</li>
                                <li>Start the marketing & partnership activities</li>
                                <li>Angel funding</li>
                            </ul>
                        </div>
                        <div class="absolute flex justify-end items-end right-[-13px] bottom-1/2">
                            <img src="{Dot}" class="max-w-[24px] max-h-[24px]"/>
                        </div>
                    </div>
                    <div class="p-6 flex flex-row justify-between relative mt-[180px]">
                        <div class="flex flex-col basis-11/12 justify-start gap-4 bg-[#2D2C30] p-6">
                            <p class="title-timeline-item">Q1-2024 & Q2-2024</p>
                            <ul class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6">
                                <li>Rendering Service beta release</li>
                                <li>Proof-of-Rendering and BMW model</li>
                                <li>Inferix Console Beta</li>
                                <li>Strategic round funding</li>
                            </ul>
                        </div>
                        <div class="absolute flex justify-end items-end right-[-13px] bottom-1/2">
                            <img src="{Dot}" class="max-w-[24px] max-h-[24px]"/>
                        </div>
                    </div>
                    <div class="p-6 flex flex-row justify-between relative mt-[200px]">
                        <div class="flex flex-col basis-11/12 justify-start gap-4 bg-[#2D2C30] p-6">
                            <p class="title-timeline-item">Q4-2024</p>
                            <ul class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6">
                                <li>Stable Diffusion worker beta release</li>
                                <li>Start R&D for LLM AI training & AI inference support</li>
                                <li>Start Decentralized R&D activities</li>
                            </ul>
                        </div>
                        <div class="absolute flex justify-end items-end right-[-13px] bottom-1/2">
                            <img src="{Dot}" class="max-w-[24px] max-h-[24px]"/>
                        </div>
                    </div>
            </span>
            <span class="w-[50%] border-l-[1px] border-[#373639]">
                <div class="p-6 flex flex-row justify-between relative">
                    <div class="absolute flex justify-start items-start left-[-13px] bottom-1/2">
                            <img src="{Dot}" class="max-w-[24px] max-h-[24px]"/>
                        </div>
                    <div class="basis-1/12"></div>
                    <div class="flex flex-col basis-11/12 justify-start gap-4 bg-[#2D2C30] p-6">
                            <p class="title-timeline-item">From 2018 to Q2-2023</p>
                            <ul class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6">
                                <li>Build 3D/VR/AR core technologies</li>
                                <li>Build House3D Cloud Rendering based on GPU</li>
                                <li>100,000+ 3D design created and 1,000,000+ images rendered</li>
                                <li>10,000+ active designers community built</li>
                            </ul>
                        </div>
                </div>
                <div class="p-6 flex flex-row justify-between relative mt-[200px]">
                    <div class="absolute flex justify-start items-start left-[-13px] bottom-1/2">
                            <img src="{Dot}" class="max-w-[24px] max-h-[24px]"/>
                        </div>
                    <div class="basis-1/12"></div>
                    <div class="flex flex-col basis-11/12 justify-start gap-4 bg-[#2D2C30] p-6">
                            <p class="title-timeline-item">Q4-2023</p>
                            <ul class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6">
                                <li>Decentralized GPU MVP release</li>
                                <li>Partnership with rendering & AI business</li>
                                <li>Seed round funding</li>
                            </ul>
                        </div>
                </div>
                <div class="p-6 flex flex-row justify-between relative mt-[210px]">
                    <div class="absolute flex justify-start items-start left-[-13px] bottom-1/2">
                            <img src="{Dot}" class="max-w-[24px] max-h-[24px]"/>
                        </div>
                    <div class="basis-1/12"></div>
                    <div class="flex flex-col basis-11/12 justify-start gap-4 bg-[#2D2C30] p-6">
                            <p class="title-timeline-item">Q3-2024</p>
                            <ul class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6">
                                <li>IDO/IEO campaign</li>
                                <li>Payment & Reward system</li>
                                <li>Actif3D and House3D integration</li>
                                <li>Rendering Service official release</li>
                            </ul>
                        </div>
                </div>
            </span>
        </div>
    </div>
</div>

<style lang="postcss">
    ul {
        list-style-type: '· ';
    }

    .title-timeline-item {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 166.667% */
        background: var(--4, linear-gradient(45deg, #00D6D9 0%, #00C085 100%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>

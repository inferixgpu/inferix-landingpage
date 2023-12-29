<script lang="ts">

    import WorksGroup from '$images/icons/WorksGroup.svg';
    import WorksGroupMobile from '$images/png/WorkgroupMobile.png';
    import Blender from '$images/photos/applications/blender.png';
    import House3d from '$images/photos/applications/house3d.png';
    import ThreeDMax from '$images/photos/applications/3dmax.png';
    import SketchUp from '$images/photos/applications/sketchup.png';
    import Babylon from '$images//photos/applications/babylon.png';
    import ThreeJs from '$images/photos/applications/threejs.png';
    import Unreal from '$images/photos/applications/unreal.png';
    import Unity from '$images/photos/applications/unity.png';

    import Worker from '$images/icons/Worker.svg';
    import Arrow1 from '$images/icons/Arrow1.svg';
    import Arrow2 from '$images/icons/Arrow2.svg';
    import Arrow3 from '$images/icons/Arrow3.svg';
    import {onMount} from 'svelte';

    let screenSize: number;

    onMount(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    });
</script>

<svelte:window bind:innerWidth={screenSize}/>
<div class="wk-bg mx-auto box-border container md:mt-[160px] mt-[80px] md:mb-[160px] mb-[80px]">
    <div class="overflow-hidden mx-auto relative">
        <div class="flex md:justify-center justify-center font-bold mb-[20px] md:text-[48px] text-[32px]">
            <p>How Inferix Works</p>
        </div>

        {#if screenSize > 1280}
            <div class="flex flex-col gap-y-[72px]">
                <div class="flex flex-row gap-[42px] w-full mx-auto relative">
                    <div class="flex flex-col basis-3/12 px-6 py-10 gap-8 bg-[#2D2C30] min-w-[280px]">
                        <p class="title-item-architect whitespace-nowrap">Client Apps</p>
                        <div class="flex flex-col max-w-[200px] max-h-[218px] justify-start gap-6 p-6 border-[2px] border-dashed border-[#67656A] relative">
                            <span class="absolute-span right-[-40px] top-[60px]">
                                <p class="absolute-text">Plugin</p>
                            </span>
                            <span class="font-bold text-[20px] leading-[30px]">Design Apps</span>
                            <div class="grid grid-cols-2 gap-6 max-w-[110px]">
                                <img src="{Blender}">
                                <img src="{House3d}">
                                <img src="{ThreeDMax}">
                                <img src="{SketchUp}">
                            </div>
                        </div>
                        <div class="flex flex-col justify-start gap-6 p-6 border-[2px] border-dashed border-[#67656A] max-w-[200px] relative">
                            <span class="absolute-span right-[-40px] top-[20px]">
                                <span class="absolute-text flex-col">
                                    <p>Plugin</p>
                                    <p>/ SDK</p>
                                </span>
                            </span>
                            <span class="font-bold text-[20px] leading-[30px] max-w-[153px] whitespace-nowrap">
                            <p>3D/VR Realtime</p>
                            <p>Renderers/</p>
                            <p>Game Engines</p>
                        </span>
                            <div class="flex flex-col gap-6 max-w-[153px]">
                                <img src="{Babylon}">
                                <div class="flex flex-row gap-6">
                                    <img src="{ThreeJs}">
                                    <img src="{Unreal}">
                                </div>
                                <img src="{Unity}">
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col basis-9/12 px-6 py-10 bg-[#2D2C30]">
                        <p class="title-item-architect">Inferix Rendering Network</p>
                        <div class="flex flex-row gap-6 mt-[2rem]">
                            <div class="flex flex-col gap-4 p-6 bg-[#413F45] rounded-2xl basis-3/5 h-[322px]">

                                <p class="text-center text-[20px] leading-[40px] font-bold not-italic">Manager Node</p>
                                <div class="flex flex-row gap-4 h-full">
                                    <div class="flex flex-col basis-7/12 gap-4 p-4 border-[2px] border-dashed border-[#67656A] relative">
                                        <div class="absolute -left-[60px] -top-[9px] -translate-x-1/2">
                                            <img src="{Arrow2}" class="opacity-50"/>
                                        </div>
                                        <div class="absolute -left-[60px] -bottom-[7px] -translate-x-1/2">
                                            <img src="{Arrow2}" class="opacity-50"/>
                                        </div>
                                        <p class="text-center">Service Locator</p>
                                        <div class="flex flex-col gap-2">
                                            <p class="span-network text-center">Image/Video Rendering</p>
                                            <span class="flex flex-col span-network">
                                            <p class="text-center">Lightmap/</p>
                                            <p class="text-center">Pre rendered contents</p>
                                        </span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col basis-5/12 gap-4 p-4 border-[2px] border-dashed border-[#67656A]">
                                        <p class="text-center">Job Controller</p>
                                        <div class="flex flex-col gap-2">
                                            <p class="span-network">Job 1</p>
                                            <p class="span-network">Job 2</p>
                                            <p class="span-network">...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4 p-6 bg-[#413F45] rounded-2xl basis-2/5 max-h-[322px]">

                                <p class="text-center text-[20px] leading-[40px] font-bold not-italic">Worker Node</p>
                                <div class="flex flex-row gap-4 h-full">
                                    <div class="flex flex-col basis-7/12 gap-4 p-4 border-[2px] border-dashed border-[#67656A] max-h-[220px]">
                                        <span class="text-center whitespace-nowrap">
                                            <p>Render Engine</p>
                                            <p>Controller</p>
                                        </span>
                                        <div class="flex flex-col gap-2">
                                            <p class="span-network">Cycles</p>
                                            <p class="span-network">Vray</p>
                                            <p class="span-network">...</p>
                                        </div>
                                    </div>
                                    <img src="{Worker}" class="basis-5/12 w-full max-h-[219px] object-contain">
                                </div>
                            </div>
                        </div>
                        <div class="px-12 mt-[120px] bg-[#413F45] rounded-2xl relative">
                            <img src="{Arrow3}"
                                 class="absolute max-h-[150px] opacity-50 -top-[135px] left-[26%] -translate-x-1/3">
                            <div class="flex flex-row items-center gap-4 absolute -top-[135px] 2xl:right-[14%] xl:right-[10%] lg:right-[5%] md:right-[0%] right-[8%]   -translate-x-[5%]">
                                <img src="{Arrow3}" class="max-h-[150px] opacity-50">
                                <div class="flex flex-col font-normal text-[16px] leading-5">
                                    <p>PoR Task Execute</p>
                                    <p>PoR verify</p>
                                    <p>BMW Reward</p>
                                </div>
                            </div>
                            <div class="flex flex-row justify-center 2xl:gap-24 xl:gap-12 lg:gap-4 md:gap-3 p-6">
                                <span class="span-block text-center">Crypto Payment</span>
                                <span class="flex text-center font-bold justify-center items-center text-[32px] leading-[40px]"><p>Blockchain</p></span>
                                <span class="span-block text-center">Proof-of-Rendering</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-8 bg-[#2D2C30] p-20 pb-10 relative ">
                    <img src="{Arrow3}"
                         class="absolute max-h-[150px] opacity-50 -top-[100px] left-[20%] -translate-x-1/2">
                    <img src="{Arrow3}"
                         class="absolute max-h-[150px] opacity-50 -top-[100px] right-[20%] -translate-x-1/2">

                    <div class="flex flex-row 2xl:gap-40 xl:gap-30 lg:gap-20 md:gap-10 justify-center items-center relative">
                    <span class="span-decentralized">
                        Decentralized 3D Models Hub
                        <div class="absolute-span top-[-40px] right-[-60px] ">
                            <p class="absolute-text w-[59px]">Polygon Digester</p>
                        </div>

                    </span>
                        <span class="flex flex-col gap-4">
                        <p class="w-[235px] text-center">Muti-resolution 3D data</p>
                        <div class="flex relative flex-row justify-between opacity-50">
                            <div class="absolute left-[-8px] top-[-6px] text-[20px] ">{"<"}</div>
                            <div class="border-t-[2px] border-dashed w-full absolute top-[7px]"></div>
                            <div class="absolute right-[-8px] top-[-6px] text-[20px]">{">"}</div>
                        </div>
                    </span>
                        <span class="span-decentralized">Cache/CDN</span>
                    </div>
                    <p class="text-[32px] text-center font-normal leading-10">Decentralized Storage (IPFS)</p>
                </div>
            </div>
        <!--{:else if screenSize > 768}-->
        <!--    <img src="{WorksGroup}" class="w-full h-full">-->
        {:else }
            <img src="{WorksGroup}" class="w-full h-full">
        {/if}

    </div>

</div>

<style>

    .wk-bg {
        background: #212023;
    }

    .span-network {
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
        background: var(--4, linear-gradient(45deg, #00D6D9 0%, #00C085 100%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-radius: 8px;
        border: 1px solid var(--4, #00D6D9);
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        align-self: stretch;
    }

    .span-block {
        display: flex;
        padding: 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 16px;
        border: 1px solid var(--4, #00D6D9);
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        background: var(--4, linear-gradient(45deg, #00D6D9 0%, #00C085 100%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .span-decentralized {
        display: flex;
        position: relative;
        width: 220px;
        height: 108px;
        padding: 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 16px;
        border: 1px solid var(--4, #00D6D9);
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 150% */
        background: var(--4, linear-gradient(45deg, #00D6D9 0%, #00C085 100%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .absolute-text {
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
        background: linear-gradient(267deg, #00D6D9 2.37%, #00C085 104.79%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .absolute-span {
        display: flex;
        padding: 12px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        position: absolute;
        border-radius: 16px;
        border: 1px solid #00D6D9;
        background: #413F45;
    }

    .title-item-architect {
        color: #FFF;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 125% */
    }
</style>
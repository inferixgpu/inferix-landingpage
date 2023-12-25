<script lang="ts">
    import WorksGroup from '$images/icons/WorksGroup.svg';
    import Blender from '$images/icons/Blender.svg';
    import House3d from '$images/icons/House3d.svg';
    import ThreeDMax from '$images/icons/3DMax.svg';
    import SketchUp from '$images/icons/SketchUp.svg';
    import Babylon from '$images/icons/Babylon.svg';
    import ThreeJs from '$images/icons/ThreeJs.svg';
    import Unreal from '$images/icons/Unreal.svg';
    import Unity from '$images/icons/Unity.svg';
    import Worker from '$images/icons/Worker.svg';
    import Arrow1 from '$images/icons/Arrow1.svg';
    import Arrow2 from '$images/icons/Arrow2.svg';
    import Arrow3 from '$images/icons/Arrow3.svg';
    import {onMount} from 'svelte';

    onMount(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    });
</script>

<div class="wk-bg mx-auto box-border container mt-[80px]">
    <div class="rounded-[8px] md:rounded-[24px] overflow-hidden mx-auto relative">
        <div class="font-bold mb-[20px] md:text-[48px] text-[32px]">
            <p>How Inferix Works</p>
        </div>
        <img style="width: 100%;margin-bottom: 160px" src="{WorksGroup}">
<!--        <div class="layout">-->
<!--            <div class="grid grid-rows-1 grid-flow-col gap-4 w-[100%]">-->
<!--                <div class="row-span-3 items-start h-[716px] gray-bg p-[24px]">-->
<!--                    <p class="font-bold text-center text-[32px]">Client Apps</p>-->
<!--                    <div class="items-start w-[80%] h-[218px] p-[24px] border-2 border-dashed mt-[32px]"-->
<!--                         style="border-color: rgba(255, 255, 255, 0.20)">-->
<!--                        <p class="justify-start font-bold text-left">Design Apps</p>-->
<!--                        <div class="grid gap-4 grid-cols-2 w-[153px] h-[124px] mt-[16px]">-->
<!--                            <img src="{Blender}">-->
<!--                            <img src="{House3d}">-->
<!--                            <img src="{ThreeDMax}">-->
<!--                            <img src="{SketchUp}">-->
<!--                        </div>-->
<!--                        <div class="absolute flex flex-row top-[19.5%] left-[18%] w-[20%]">-->
<!--                            <span class="span-custom p-[12px] w-[67px]" >Plugin</span>-->
<!--                            <img class="opacity-50 ml-[10%] w-[28%]" src="{Arrow2}">-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="items-start w-[80%] h-[322px] p-[24px] mt-[24px] border-2 border-dashed"-->
<!--                         style="border-color: rgba(255, 255, 255, 0.20)">-->
<!--                        <div class="absolute flex flex-row top-[34.6%] left-[18%] w-[20%]">-->
<!--                            <span class="span-custom p-[12px] w-[67px]">Plugin / SDK</span>-->
<!--                            <img class="opacity-50 ml-[10%] w-[28%]" src="{Arrow2}">-->
<!--                        </div>-->
<!--                        <div class="flex flex-col">-->
<!--                            <p>3d/VR Realtime</p>-->
<!--                            <p>Renderers/</p>-->
<!--                            <p>Game Engines</p>-->
<!--                        </div>-->
<!--                        <div class="w-[153px] h-[168px] mt-[16px] gap-[24px] self-stretch">-->
<!--                            <img src="{Babylon}">-->
<!--                            <div class="flex flex-row mt-[24px]">-->
<!--                                <img class="mr-[24px]" src="{ThreeJs}">-->
<!--                                <img src="{Unreal}">-->
<!--                            </div>-->
<!--                            <img class="mt-[24px]" src="{Unity}">-->

<!--                        </div>-->

<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-span-2 items-center h-[716px] gray-bg pt-[40px] pb-[40px] pl-[24px] pr-[24px]">-->
<!--                    <p class="text-[32px] font-bold text-center">Inferix Rendering Network</p>-->
<!--                    <div class="flex flex-row mt-[50px]">-->
<!--                        <div class="items-center p-[24px] w-[60%] h-[322px] bg-[#413F45] rounded-lg">-->
<!--                            <p class="text-[20px] text-center font-normal">Manager Node</p>-->
<!--                            <div class="flex flex-row mt-[16px] p-[16px]">-->
<!--                                <div class="p-[16px] items-center border-2 border-dashed w-[60%] h-[219px]"-->
<!--                                     style="border-color: rgba(255, 255, 255, 0.20)">-->
<!--                                    <p class="text-center mb-[16px] text-[16px]">Service Locator</p>-->
<!--                                    <span class="span-custom mb-[16px]">Image/Video Rendering</span>-->
<!--                                    <span class="flex flex-col span-custom">-->
<!--                                        <p>Lightmap /</p>-->
<!--                                        <p>Pre rendered contents</p>-->
<!--                                    </span>-->
<!--                                </div>-->
<!--                                <div class="ml-[16px] p-[16px] items-center flex flex-col border-2 border-dashed w-[40%] h-[219px]"-->
<!--                                     style="border-color: rgba(255, 255, 255, 0.20)">-->
<!--                                    <p class="text-center mb-[16px] text-[16px]">Job controller</p>-->
<!--                                    <span class="span-custom mb-[9px] w-[96px]">Job 1</span>-->
<!--                                    <span class="span-custom mb-[9px] w-[96px]">Job 2</span>-->
<!--                                    <span class="span-custom w-[96px]">...</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="row-span-4 bg-[#413F45] p-[24px] ml-[24px] rounded-lg h-[322px] w-[40%] ">-->

<!--                            <p class="text-[20px] text-center font-normal">Worker Node</p>-->
<!--                            <div class="flex flex-row p-[16px] mt-[16px] gap-4">-->
<!--                                <div class="flex flex-col row-span-4 items-center p-[16px] border-2 border-dashed w-[70%] h-[219px]"-->
<!--                                     style="border-color: rgba(255, 255, 255, 0.20)">-->
<!--                                    <p class="text-center mb-[10px] w-[114px]">Render Engine Controller</p>-->
<!--                                    <span class="span-custom w-[98px] mb-[8px]">Cycles</span>-->
<!--                                    <span class="span-custom w-[98px] mb-[8px]">Vray</span>-->
<!--                                    <span class="span-custom w-[98px]">...</span>-->
<!--                                </div>-->
<!--                                <div class="row-span-2">-->
<!--                                    <img src="{Worker}">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex flex-row w-[100%] flex gap-[5%] p-[24px] justify-center items-center mt-[120px] bg-[#413F45] rounded-lg">-->
<!--                        <div class="absolute flex flex-row top-[38%] left-[48%] w-[20%]">-->
<!--                            <img class="opacity-50 ml-[10%] h-1/3" src="{Arrow3}">-->
<!--                        </div>-->
<!--                        <div class="absolute flex flex-row top-[38%] left-[73%] w-[20%]">-->
<!--                            <img class="opacity-50 ml-[10%] h-1/3" src="{Arrow3}">-->
<!--                        </div>-->

<!--                        <span class="span-custom">Crypto Payment</span>-->
<!--                        <p class="text-[32px] font-normal">Blockchain</p>-->
<!--                        <span class="span-custom">Proof-of-Rendering</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="w-[100%] p-[40px] bg-[#2D2C30] mt-[40px] relative">-->
<!--                <div class="flex flex-row justify-center gap-[10%] text-[20px] pt-[40px]">-->
<!--                    <div class="absolute flex flex-row top-[-30%] left-[20%] w-[20%]">-->
<!--                        <img class="opacity-50 ml-[10%] h-1/2" src="{Arrow3}">-->
<!--                    </div>-->
<!--                    <div class="absolute flex flex-row top-[-30%] left-[70%] w-[20%]">-->
<!--                        <img class="opacity-50 ml-[10%] h-1/2" src="{Arrow3}">-->
<!--                    </div>-->

<!--                    <span class="span-custom p-[24px] h-[108px] w-[220px]">-->
<!--                        Decentralized 3D Models Hub-->
<!--                    </span>-->
<!--                    <div class="flex flex-col justify-center items-center h-[108px] w-[220px]">-->
<!--                        <p class="text-[16px] text-center mb-[16px]">Muti-resolution 3D data</p>-->
<!--                        <img src="{Arrow1}">-->
<!--                    </div>-->
<!--                    <span class="span-custom p-[24px] h-[108px] w-[220px]">-->
<!--                        Proof-of-Rendering-->
<!--                    </span>-->
<!--                </div>-->
<!--                <p class="text-center text-[32px] mt-[32px]">Decentralized Storage (IPFS)</p>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</div>

<style>

    .layout {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 200px;
    }

    .gray-bg {
        background: #2D2C30;
    }

    .wk-bg {
        background: #212023;
    }

    .span-custom {
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        border: 1px solid var(--4, #00D6D9);
        color: #00D6D9;
        text-align: center;
    }

    @media screen and (min-width: 740px) and (max-width: 1024px) {
        .btnPlay {
            width: 45px;
        }
    }

    @media screen and (max-width: 740px) {

        .title {
            font-size: 18px;
        }

        .MVP {
            margin-top: 15px;
            width: 100%;
        }

        .btnPlay {
            width: 35px;
        }
    }

</style>
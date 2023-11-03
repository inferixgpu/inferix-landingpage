<script lang="ts">
    import SignUpModal from "$components/inferix/SignUpModal/SignUpModal.svelte";
    import HeaderLogo from '$images/icons/HeaderLogo.svg';

    import footerVideo from '$videos/Footer.mp4';
    import {Modal} from "flowbite-svelte";
    import Saos from "saos";

    let activeTab = 1;
    let showModal = false

    const setActiveTab = (tab: number) => {
        activeTab = tab;
    };

    const medias = [
        {id: 1, name: 'Twitter', href: 'https://twitter.com/inferixgpu'},
        {id: 2, name: 'Medium', href: 'https://medium.com/@inferixgpu'},
        {id: 3, name: 'Discord', href: 'https://discord.gg/NJvcWYcB9W'},
        {id: 4, name: 'Lightpaper', href: '#'}
    ];
    let screenSize: number;

    function showSignUpModal() {
        showModal = true;
    }
</script>

<svelte:window bind:innerWidth={screenSize}/>

<div class="bg-darkGrey pb-[41px] md:pt-[249px] pt-[100px] md:px-0 px-5 box-border">
    <div
            class="md:h-[435px] h-[266px] container mx-auto overflow-hidden rounded-[32px] relative z-30"
    >
        <div class="md:top-[-35%] top-[30%] absolute z-10">
            <video width="1600" height="435" autoplay muted loop playsinline class="footerVideo">
                <source src={footerVideo} type="video/mp4"/>
            </video>
        </div>
        <div
                class="md:h-[435px] h-[266px] overlay absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center z-10"
        >
            <Saos once top="200" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <p
                        class="font-outfit text-base md:text-[2rem] leading-default mx-5 md:mx-[9vw]  box-border text-center font-medium text-black"
                >
                    "Join us as a GPU provider and let's build our ecosystem together, harnessing the power of
                    GPUs for seamless rendering, accelerated Al, and groundbreaking innovation"
                </p>
            </Saos>
            <Saos once top="200" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                <button
                        on:click={showSignUpModal}
                        class="text-white cursor-pointer hover:opacity-[0.8] font-outfit text-lg text-center font-medium mt-[32px] md:mt-[32px] capitalize px-8 py-4 rounded-2xl bg-black"
                >
                    Join Inferix now
                </button>
            </Saos>
        </div>
    </div>
    <div class=" container mx-auto mt-[39px] flex md:flex-row flex-col justify-between">
        <div
                class="flex md:gap-4 gap-2 md:order-1 order-2 md:flex-row flex-col items-center md:items-start mt-8 md:mt-0"
        >
            <img src={HeaderLogo} alt="logo" class="w-[100px]"/>
            <p class="font-base font-outfit font-normal mt-4 md:mt-0 text-white whitespace-nowrap">
                Decentralized GPU Network
            </p>
        </div>
        <div
                class="flex md:gap-10 gap-8 font-bold mt-2 md:mt-0 w-fit font-outfit md:text-lg text-base md:order-2 order-1 mediaContainer"
        >
            {#each medias as media (media.id)}
                <div class={activeTab === media.id ? 'active' : ''} on:click={() => setActiveTab(media.id)}>
                    <a target="_blank" href={media.href}>{media.name}</a>
                </div>
            {/each}
        </div>
    </div>
    <div class="container mx-auto">
        <p class="font-outfit text-sm font-normal md:mt-[18px] mt-2 md:text-left text-center">
            © 2023 Inferix. All rights reserved.
        </p>
    </div>

    <Modal bind:open={showModal} defaultClass="!rounded-[20px]">
        <SignUpModal/>
    </Modal>
</div>

<style>
    .overlay {
        background: linear-gradient(0deg, rgba(6, 255, 97, 0.7) 0%, rgba(6, 255, 97, 0.7) 100%);
    }

    .active {
        color: var(--green);
    }

    .footerVideo {
        transform: scale(1);
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        z-index: 0;
        border-radius: 32px;
    }

    @media screen and (max-width: 767px) {
        .mediaContainer {
            margin-left: auto;
            margin-right: auto;
        }

        .footerVideo {
            transform: scale(2.5);
            -webkit-transform: scale(2.5);
            -moz-transform: scale(2.5);
            z-index: 0;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        .mediaContainer {
            margin-left: auto;
            margin-right: auto;
        }

        .footerVideo {
            transform: scale(2);
            -webkit-transform: scale(2);
            -moz-transform: scale(2);
            z-index: 0;
        }
    }
</style>

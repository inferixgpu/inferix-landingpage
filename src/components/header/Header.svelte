<script lang="ts">
    import Close from '$images/icons/Close.svg';
    import DownloadIcon from '$images/icons/Download.svg';
    import HeaderLogo from '$images/icons/HeaderLogo.svg';
    import InferixMobile from '$images/icons/InferixMobile.svg';
    import MobileMenu from '$images/icons/MobileMenu.svg';
    import IconScreen from '$images/icons/IconScreen.svg';
    import IconGpu from '$images/icons/IconGpu.svg';
    import InferixHeader from '$images/photos/InferixHeader.png';
    import Saos from 'saos';
    import SignUpModal from "$components/inferix/SignUpModal/SignUpModal.svelte";
    import {Modal} from "flowbite-svelte";

    import {afterUpdate, onMount} from 'svelte';
    import X from "$images/icons/X.svg";
    import M from "$images/icons/M.svg";
    import D from "$images/icons/D.svg";
    import T from "$images/icons/T.svg";

    let textIndex = 0;

    let activeTab = 1;

    const setActiveTab = (tab: number) => {
        activeTab = tab;
    };

    const tabs = [
        {
            id: 1,
            title: 'About',
            href: '#about'
        },
        {
            id: 2,
            title: 'GPU Network',
            href: 'https://dash.inferix.io/'
        },
        {
            id: 3,
            title: 'Roadmap',
            href: '#roadmap'
        },
        {id: 4, title: 'Team', href: '#team'},
        {
            id: 5,
            title: 'Register',
            href: '#'
        }
    ];
    const medias = [
        {id: 1, name: 'Twitter', href: 'https://twitter.com/inferixgpu', icon: X},
        {id: 2, name: 'Medium', href: 'https://medium.com/@inferixgpu', icon: M},
        {id: 3, name: 'Discord', href: 'https://discord.gg/NJvcWYcB9W', icon: D},
        {id: 4, name: 'Telegram', href: 'https://t.me/inferixgpu', icon: T},
    ];

    let screenSize: number;
    let y: number;

    let isOpen = false;
    let showModal = false

    afterUpdate(() => {
        if (typeof window !== 'undefined') {
            if (isOpen) {
                // Prevent scrolling when the menu is open
                document.documentElement.style.overflowY = 'hidden';
                document.addEventListener('touchmove', preventDefaultScroll, {
                    passive: false
                });
            } else {
                // Re-enable scrolling when the menu is closed
                document.documentElement.style.overflowY = 'auto';
                document.removeEventListener('touchmove', preventDefaultScroll);
            }
        }
    });

    function preventDefaultScroll(e: TouchEvent) {
        e.preventDefault();
    }

    const toggleMenu = () => {
        isOpen = true;
    };

    const closeMenu = () => {
        isOpen = false;
    };

    function handleClickTab(e: MouseEvent, id: number, href: string) {
        if (id === 2) return;
        if (id === 5) {
            showModal = true;
        }

        e.preventDefault();
        const idTab = href.replace('#', '');
        const tab = document.getElementById(idTab);
        setActiveTab(id);
        const space = screenSize > 768 ? 200 : 150;

        if (tab) {
            window.scrollTo({
                top: tab.offsetTop - space,
                behavior: 'smooth'
            });
        }
        if (screenSize < 768) {
            isOpen = false;
        }
    }

    function autoPlay() {
        setTimeout(() => {
            textIndex = (textIndex + 1) % 2;
            autoPlay();
        }, 4000)
    }

    onMount(() => {
        if (screenSize > 768) {
            autoPlay();
        }

    })
</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={y}/>

<div class="bg-lightDark relative headerBackground">
    <div
            id="header"
            class={`md:bg-[#141414] md:h-[97.4px] h-[58px] flex fixed top-0 md:pb-0 pb-4 box-content w-full z-40 items-end`}
    >
        <div class="container mx-auto md:mb-5 md:px-0  box-border md:pt-0">
            <nav class="flex justify-between w-auto font-outfit font-normal">
                <div class="flex md:gap-4 gap-2 md:items-center items-start">
                    <a href="https://inferix.io/">
                        <img src={HeaderLogo} alt="Inferix" class="lg:w-[158px] lg:h-[32px] h-[24px]"/>
                    </a>
                </div>
                {#if (screenSize>800)}
                    <div class="md:flex lg:gap-8 md:gap-4 text-lg">
                        {#each tabs as tab (tab.id)}
                            <div
                              class="header-tab {activeTab === tab.id ? 'active' : 'tab'}"
                              on:click={(e) => handleClickTab(e, tab.id, tab.href)}
                            >
                                <a target="_blank" href={tab.href}>{tab.title}</a>
                            </div>
                        {/each}
                    </div>
                {/if}
                {#if (screenSize<800)}
                    <img
                      src={MobileMenu}
                      on:click={toggleMenu}
                      alt="menu"
                      class="md:mb-0 mb-4 cursor-pointer ml-auto w-[24px] h-[24px]"/>
                {/if}

            </nav>
        </div>
    </div>
    <div class=" mx-auto pt-[0px] box-border">
        <div class="overflow-hidden mx-auto relative">

            {#if (screenSize > 768)}
                <img src={InferixHeader} alt="Inferix" class="h-[175px] md:h-[1000px] w-full object-cover"/>
            {:else }
                <img src={InferixHeaderMobile} alt="Inferix" style="height: 800px" class="w-full object-cover"/>
            {/if}
            <div    style="display: flex"

                    class="video-overlay-container"
            >
                <div class="text">
                    {#if (textIndex === 0)}
                        <Saos once animation={"h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>

                            <h1 class="text-xl md:text-[4.625rem] font-outfit text-center shadow-text font-bold">
                                Fastest 3D rendering by <br> <strong>Inferix decentralized GPU</strong>
                            </h1>
                        </Saos>
                        {/if}
                        {#if (screenSize < 768)}
                            <Saos once animation={"h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                                <h1  style="font-size: 40px;font-weight: 700;margin-left: 100px;margin-right: 100px" >
                                    Fastest 3D rendering by<br> <strong>Inferix decentralized GPU</strong>
                                </h1>
                            </Saos>
                        {/if}


                    {/if}
                    {#if (textIndex === 1)}
                        {#if (screenSize > 768)}
                            <Saos once animation={"h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                                <h1 class="text-xl md:text-[4.625rem] font-outfit text-center shadow-text font-bold">
                                    Fastest 3D rendering by <br> <strong>Inferix decentralized GPU</strong>
                                </h1>
                            </Saos>
                        {/if}
                        {#if (screenSize < 768)}
                            <Saos once animation={"h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                                <h1  style="font-size: 40px;font-weight: 700;margin-left: 100px;margin-right: 100px" >
                                    Fastest 3D rendering by<br> <strong>Inferix decentralized GPU</strong>
                                </h1>
                            </Saos>
                        {/if}
                    {/if}

                </div>
                <Saos top="200" once animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                    <!--                    <p class="font-outfit text-white text-center font-semibold text-sm md:text-2xl shadow-text mt-5 md:mt-[107px]">-->
                    <!--                        Start-->
                    <!--                        free trial</p>-->

                    <div class="flex gap-4 justify-center mt-[40px] md:mt-4 {screenSize >768 ? 'flex-row' : 'flex-col'}">

                        <div class="download-btn">
                            <span><img src={IconScreen} alt="download"/></span>
                            <div class="items-start flex flex-col gap-[10px] leading-91 w-[153px]">
                                <span >For Designer</span>
                                <div class="flex flex-row gap-5">
                                    <a class="download-options" href="https://h3d.me/ifxaddonblenderwin">
                                        <img src={DownloadIcon} alt="download"/>
                                        <span>Windows</span>
                                    </a>
                                    <a class="download-options" href="https://h3d.me/ifxaddonblendermac">
                                        <img src={DownloadIcon} alt="download"/>
                                        <span>MacOS</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="download-btn">
                            <span><img src={IconGpu} alt="download"/></span>
                            <div class="items-start flex flex-col gap-[10px] leading-91 w-[153px]">
                                <span>For GPU Owner</span>
                                <div class="flex flex-row gap-5">
                                    <a class="download-options" href="https://h3d.me/ifxworkerwin">
                                        <img src={DownloadIcon} alt="download"/>
                                        <span>Windows</span>
                                    </a>
                                    <a class="download-options" href="https://h3d.me/ifxworkermac">
                                        <img src={DownloadIcon} alt="download"/>
                                        <span>MacOS</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Saos>
            </div>
        </div>
    </div>
<!--    <img-->
<!--            src={InferixMobile}-->
<!--            alt="InferixMobile"-->
<!--            class="md:hidden flex w-[78px] h-[31px] mx-auto mt-[50px] pb-5 box-content"-->
<!--    />-->
    <div class={`${isOpen ? 'open' : 'close'} overlayMobile fixed inset-0 h-screen z-40`}>
        <div
                class="flex gap-[20px] flex-col text-[20px] font-[600] items-start w-full h-full bg-bg box-border pt-[86px] relative p-[30px]"
        >
            <a href="https://inferix.io/" class="absolute top-[20px]" on:click={closeMenu}>
                <img src={HeaderLogo} alt="Inferix" class="w-[158px] h-[32px] "/>
            </a>
            {#each tabs as tab (tab.id)}
                <div class="header-tab-mobile tab opacity-60 ">
                    <a
                            href={tab.href}
                            on:click={(e) => handleClickTab(e, tab.id, tab.href)}
                            class="whitespace-nowrap">{tab.title}</a
                    >
                </div>
            {/each}
            <div class="flex justify-center opacity-60 gap-[20px] w-[100%] mt-[40px]">
                {#each medias as media (media.id)}
                    <div>
                        <a target="_blank" href={media.href}><img src="{media.icon}"  class="h-[34px] w-[34px]"></a>
                    </div>
                {/each}

            </div>

        </div>

        <div
                class={`${isOpen ? 'block' : 'hidden'} top-4 absolute right-5 cursor-pointer z-20`}
                on:click={closeMenu}
        >
            <img src={Close} alt="close icon"/>
        </div>
    </div>
    <Modal bind:open={showModal} defaultClass="!rounded-[20px]">
        <SignUpModal/>
    </Modal>
</div>

<style lang="postcss">

    .video-overlay-container {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
        @apply overflow-hidden absolute left-0 right-0 top-0 bottom-0 justify-center md:flex justify-center items-center flex-col;
    }

    .shadow-text {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .active {
        color: #00D6D9;
    }

    .overlay {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
    }

    .overlayMobile {
        transition: left 0.6s cubic-bezier(0.82, 0.085, 0.395, 0.895);
        overflow: hidden;
        width: 100%;
        left: -100%;
    }

    .overlayMobile.open {
        left: 0;
    }

    :global(strong) {
        color: #00D6D9 !important;
    }

    .centerPosition {
        transform: translateX(-50%);
    }

    .trialButton {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        width: 160px;
        height: 54px;
    }

    .trialButton:hover {
        background: rgba(0, 0, 0, 0.69);
        border-radius: 28px;
    }

    .download-btn {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        @apply flex flex-row justify-start items-center w-[102px] h-[35px] md:w-[265px] md:h-[75px] drop-shadow text-xs md:text-lg;
        border-radius: 16px;
        background: var(--3, #2D2C30);
        padding: 16px 24px;
        gap: 24px;
    }

    .download-btn > span > img {
        @apply w-[30px] md:w-[40px] h-[30px] md:h-[40px];
    }

    .download-btn > img {
        @apply w-[12px] md:w-[14px] h-[12px] md:h-[14px];
    }

    .download-btn > div > span {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 125% */
    }

    .download-options {
        color: #FFF;
        font-size: 12px ;
        font-style: normal;
        font-weight: 100;
        line-height: normal;
        opacity: 0.6;
        @apply flex flex-row justify-center items-center gap-1;
    }
    h1 {
        line-height: normal;
    }

    @media screen and (min-width: 768px) {
        .header-tab {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            text-align: left;
            padding: 12px 16px;
        }

        #header {
            background-color: unset;
        }

        .header-tab.active {
            display: flex;
            padding: 12px 16px;
            align-items: flex-start;
            border-radius: 100px;
            color: #08101D;
            background-color: #00D6D9;
        }
    }

    @media screen and (max-width: 768px) {
        .header-tab-mobile{
            font-weight: 600;
            padding-top: 12px;
            /*padding: 12px 16px;*/
        }
        .header-tab-mobile.active {
            color: #08101D;
        }
        .headerBackground {
            background-image: url('$images/icons/HeaderBackgroundMobile.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .text {
            margin-top: 20px;
        }
    }

    @keyframes -global-slide-up {
        0% {
            transform: translateY(100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes -global-puff-in-center {
        0% {
            transform: scale(1.02) translateY(120px);
            opacity: 0;
            text-align: center;
            filter: blur(4px);
        }
        100% {
            transform: scale(1) translateY(0);
            opacity: 1;
            text-align: center;
            filter: blur(0px);
        }
    }

    @keyframes -global-h1 {
        0% {
            transform: scale(1.1) translateY(120px);
            opacity: 0;
            text-align: center;
            filter: blur(7px);
        }
        100% {
            transform: scale(1) translateY(0);
            opacity: 1;
            text-align: center;
            filter: blur(0px);
        }
    }

    @keyframes -global-connector {
        0% {
            transform: translateY(-100px);
            z-index: 0;
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
            z-index: 100;
        }
    }
</style>

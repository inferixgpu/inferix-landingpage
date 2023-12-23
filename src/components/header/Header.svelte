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
        <div class="container mx-auto md:mb-5 mb-0 md:px-0 px-5 box-border md:pt-0 pt-[30px]">
            <nav class="flex justify-between w-auto container mx-auto font-outfit font-normal">
                <div class="md:flex hidden md:gap-4 gap-2 md:flex-row flex-col md:items-center items-start">
                    <img src={HeaderLogo} alt="logo" class="w-[158px] h-[32px]"/>
                    <!--                    <p-->
                    <!--                            class="hidden md:block text-base font-outfit font-normal text-white whitespace-nowrap"-->
                    <!--                    >-->
                    <!--                        Decentralized GPU Network-->
                    <!--                    </p>-->
                </div>
                <div class="md:flex gap-8 text-lg hidden">
                    {#each tabs as tab (tab.id)}
                        <div
                                class="header-tab tab {activeTab === tab.id ? 'active' : ''}"
                                on:click={(e) => handleClickTab(e, tab.id, tab.href)}
                        >
                            <a target="_blank" href={tab.href}>{tab.title}</a>
                        </div>
                    {/each}
                </div>
                <img
                        src={MobileMenu}
                        on:click={toggleMenu}
                        alt="menu"
                        class="md:mb-0 mb-4 cursor-pointer md:hidden flex ml-auto"/>
            </nav>
        </div>
    </div>
    <div class=" mx-auto pt-[0px] box-border">
        <div class="overflow-hidden mx-auto relative">
            <img src={InferixHeader} alt="logo" class="h-[175px] md:h-[800px] w-full object-cover"/>
            <div
                    class="video-overlay-container"
            >
                <div class="text">
                    {#if (textIndex === 0)}
                        <Saos once animation={"h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                            <h1 class="text-xl md:text-[4.625rem] font-outfit text-center shadow-text ">
                                Decentralized GPU Infrastructure<br>for <strong>Visual Computing</strong>
                            </h1>
                        </Saos>
                    {/if}
                    {#if (textIndex === 1)}
                        <Saos once animation={"h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                            <h1 class="text-xl md:text-[4.625rem] font-outfit text-center shadow-text ">Fastest 3D
                                rendering
                                by<br><strong>Inferix decentralized GPU</strong></h1>
                        </Saos>
                    {/if}
                </div>
                <Saos top="200" once animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                    <!--                    <p class="font-outfit text-white text-center font-semibold text-sm md:text-2xl shadow-text mt-5 md:mt-[107px]">-->
                    <!--                        Start-->
                    <!--                        free trial</p>-->
                    <div class="flex gap-4 justify-center mt-2 md:mt-4">
                        <div class="download-btn">
                            <span><img src={IconScreen} alt="download"/></span>
                            <div class="items-start flex flex-col gap-[10px] leading-91 w-[153px]">
                                <span >For Designer</span>
                                <div class="flex flex-row gap-5">
                                    <a class="download-options" href="https://h3d.me/ifxaddonblender">
                                        <img src={DownloadIcon} alt="download"/>
                                        <span>Window</span>
                                    </a>
                                    <a class="download-options" href="https://h3d.me/ifxaddonblender">
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
                                    <a class="download-options" href="https://h3d.me/ifxaddonblender">
                                        <img src={DownloadIcon} alt="download"/>
                                        <span>Window</span>
                                    </a>
                                    <a class="download-options" href="https://h3d.me/ifxaddonblender">
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
    <img
            src={InferixMobile}
            alt="InferixMobile"
            class="md:hidden flex w-[78px] h-[31px] mx-auto mt-[50px] pb-5 box-content"
    />
    <div class={`${isOpen ? 'open' : 'close'} overlayMobile fixed inset-0 h-screen z-40`}>
        <div
                class="flex gap-[60px] flex-col text-2xl font-normal items-center w-full h-full bg-bg box-border pt-[86px]"
        >
            {#each tabs as tab (tab.id)}
                <div class="tab {activeTab === tab.id ? 'active' : ''}">
                    <a
                            href={tab.href}
                            on:click={(e) => handleClickTab(e, tab.id, tab.href)}
                            class="whitespace-nowrap">{tab.title}</a
                    >
                </div>
            {/each}
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
        background: var(--3, #101319);
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

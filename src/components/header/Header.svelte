<script lang="ts">
    import Close from '$images/icons/Close.svg';
    import DownloadIcon from '$images/icons/Download.svg';
    import HeaderLogo from '$images/icons/HeaderLogo.svg';
    import InferixMobile from '$images/icons/InferixMobile.svg';
    import MobileMenu from '$images/icons/MobileMenu.svg';
    import HeaderVideo from '$videos/HeaderVideo.mp4';
    import Saos from 'saos';

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
        }
    ];

    let screenSize: number;
    let y: number;

    let isOpen = false;

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
        if(id === 2) return;
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
                    <img src={HeaderLogo} alt="logo" class="w-[100px]"/>
                    <p
                            class="hidden md:block text-base font-outfit font-normal text-white whitespace-nowrap"
                    >
                        Decentralized GPU Network
                    </p>
                </div>
                <div class="md:flex gap-10 text-lg hidden">
                    {#each tabs as tab (tab.id)}
                        <div
                                class="tab {activeTab === tab.id ? 'active' : ''}"
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
    <div class="container mx-auto pt-[110px] box-border">
        <div class="rounded-[8px] md:rounded-[24px] overflow-hidden mx-auto relative">
            <video width="1600" height="800" autoplay muted loop playsinline
                   class="h-[175px] md:h-[800px] w-full object-cover">
                <source src={HeaderVideo} type="video/mp4"/>
            </video>
            <div
                    class="video-overlay-container"
            >
                {#if (textIndex === 0)}
                    <Saos once animation={"h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                        <h1 class="text-xl md:text-[4.625rem] font-outfit text-center shadow-text ">
                            Decentralized GPU Infrastructure<br>for <strong>Visual Computing</strong>
                        </h1>
                    </Saos>
                {/if}
                {#if (textIndex === 1)}
                    <Saos once animation={"h1 0.7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                        <h1 class="text-xl md:text-[4.625rem] font-outfit text-center shadow-text ">Fastest 3D rendering
                            by<br><strong>Inferix decentralized GPU</strong></h1>
                    </Saos>
                {/if}
                <Saos top="200" once animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
                    <p class="font-outfit text-white text-center font-semibold text-sm md:text-2xl shadow-text mt-5 md:mt-[107px]">
                        Start
                        free trial</p>
                    <div class="flex gap-4 mt-2 md:mt-4">
                        <a class="download-btn"
                           href="https://h3d.me/ifxaddonblender">
                            <div class="flex flex-row gap-[10px] leading-91"><img src={DownloadIcon} alt="download"/>Windows
                            </div>
                            <span class="text-[11px] leading-91">Blender Add - on</span>
                        </a>
                        <div class="download-btn">
                            <div class="flex flex-row gap-[10px] leading-91"><img src={DownloadIcon} alt="download"/>MacOS
                            </div>
                            <span class="text-[11px] leading-91">coming soon</span>
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
</div>

<style lang="postcss">

    .video-overlay-container {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
        @apply overflow-hidden rounded-[8px] md:rounded-[24px] absolute left-0 right-0 top-0 bottom-0 hidden md:flex justify-center items-center flex-col;
    }

    .shadow-text {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .active {
        color: var(--green);
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
        color: #06FF61 !important;
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
        background-image: url('$images/png/ButtonBg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        @apply flex flex-col justify-center items-center w-[102px] h-[35px] md:w-[171px] md:h-[58px] drop-shadow text-xs md:text-lg font-semibold;
    }

    .download-btn span {
        @apply text-[8px] md:text-[11px] text-[#797979] mt-1;
    }

    .download-btn img {
        @apply w-[12px] md:w-[14px] h-[12px] md:h-[14px];
    }

    h1 {
        line-height: normal;
    }

    @media screen and (max-width: 768px) {
        .headerBackground {
            background-image: url('$images/icons/HeaderBackgroundMobile.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
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

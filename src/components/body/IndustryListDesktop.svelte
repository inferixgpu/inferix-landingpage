<script lang="ts">
    import ScrollArrow from '$images/icons/ScrollArrow.svg';

    let scroller;
    const industriesData = [
        {
            title: 'Entertainment <br> and Media',
            description:
                'From blockbuster movies to immersive gaming experiences, Inferix brings life to visuals that captivate audiences worldwide'
        },
        {
            title: 'Architecture <br> and Design',
            description:
                'Create photorealistic architectural visualizations and design concepts, transforming ideas into tangible, visually stunning realities'
        },
        {
            title: 'Product Development',
            description:
                'Steamline the design process with accelerated 3D rendering and simulations, enabling efficient prototyping and iteration'
        },
        {
            title: 'Animation and VFX',
            description:
                'Power visual effects and animation pipelines with Inferix, speeding up production and enabling seamless integration of visual elements'
        },
        {
            title: 'Virtual <br> and Augmented Reality',
            description:
                'Reality Build immersive virtual and agumented reality experiences that push the boundaries of interactive storytelling'
        }
    ];

    function scrollRight() {
        scroller.scrollBy({
            left: 520,
            behavior: 'smooth',
            top: 0
        })
    }

    function scrollLeft() {
        scroller.scrollBy({
            left: -520,
            behavior: 'smooth',
            top: 0
        })
    }

</script>

<button class="scroll-left" on:click={scrollLeft}>
    <img src={ScrollArrow} alt="scroll left"/>
</button>
<button class="scroll-right" on:click={scrollRight}>
    <img src={ScrollArrow} alt="scroll right"/>
</button>
<div
        bind:this={scroller}
        class={`z-[2] relative industryContainer flex flex-col mx-[17.5px] md:mx-auto md:flex-row gap-[25px] mt-[32px] md:mt-[80px] hide-scroll overflow-auto`}>

    {#each industriesData as industry, index}
        <div
                class="industry min-w-full h-[147px] md:min-w-[519px] md:h-[392px] box-border  pl-4 md:pl-[55px] pr-4 md:pt-[161px] pt-[30px] flex flex-col items-start justify-end"
        >
            <p class="font-pre text-base md:text-[2rem] text-left font-extrabold text-secondary leading-default">
                {@html industry.title}
            </p>
            <p class="text-lightGrey text-left font-pre text-[10px] md:text-xl font-normal mt-4 md:mt-5 leading-desc">
                {industry.description}
            </p>
        </div>
    {/each}
</div>
<style lang="postcss">
    .hide-scroll::-webkit-scrollbar {
        display: none;
    }

    .hide-scroll {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .industryContainer {
        width: -webkit-fill-available;
    }

    .industryContainer > div {
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        border: 1px solid rgba(255, 255, 255, 0.5);
        @apply rounded-[16px] md:rounded-[24px] pl-[29px] pb-[16px] md:pl-[55px] md:pb-[44px];
    }

    .industryContainer > div:nth-child(1) {
        background-image: url('$images/png/industries/1.jpg');
        @apply ml-[17.5] md:ml-[50px] xl:ml-[80px] 2xl:ml-[160px];
    }

    .industryContainer > div:nth-child(2) {
        background-image: url('$images/png/industries/2.jpg');
    }

    .industryContainer > div:nth-child(3) {
        background-image: url('$images/png/industries/3.jpg');
    }

    .industryContainer > div:nth-child(4) {
        background-image: url('$images/png/industries/4.jpg');
    }

    .industryContainer > div:nth-child(5) {
        background-image: url('$images/png/industries/5.jpg');
        @apply mr-[17.5] md:mr-[50px] xl:mr-[80px] 2xl:mr-[160px];
    }

    .maxWidth {
        max-width: calc(100% - 60px);
    }

    .scroll-left {
        @apply hidden md:block absolute z-50 left-[17.5] md:left-[50px] xl:left-[80px] 2xl:left-[160px] top-[calc(50%-25px)] ml-[-25px];
    }

    .scroll-right {
        @apply hidden md:block absolute z-50 right-[17.5] md:right-[50px] xl:right-[80px] 2xl:right-[160px] top-[calc(50%-25px)] mr-[-25px] rotate-180;
    }
</style>

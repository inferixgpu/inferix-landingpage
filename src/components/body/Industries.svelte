<script lang="ts">
    import ArrowDown from '$images/icons/ArrowDown.svg';
    import ArrowDownMobile from '$images/icons/ArrowDownMobile.svg';
    import EllipseBackground from '$images/png/EllipseBackground.png';
    import Saos from "saos";
    import IndustryListDesktop from './IndustryListDesktop.svelte';

    let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize}/>

<div class="pb-[48px] md:pb-[175px] background relative w-full">
    <img
            src={EllipseBackground}
            alt="ellipse background"
            class="absolute inset-0 md:w-full md:h-full z-1 object-cover md:scale-[1]"
    />
    <Saos top="200" once animation={"connector 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <img
                src={ArrowDown}
                alt="arrow down icon"
                class="absolute left-[50%] top-[-105px] md:flex hidden"
        />
        <img
                src={ArrowDownMobile}
                alt="arrow down icon"
                class="absolute left-[50%] top-[-50px] md:hidden flex"
        />
    </Saos>

    <div class="container mx-auto md:pt-[307px] pt-[100px] z-[2] relative box-border">
        <Saos once top="200" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <p class="font-pre md:text-[2.5rem] leading-default text-lg font-extrabold w-[198px] md:w-auto text-left">
                Industries
                Empowered by Inferix</p>
        </Saos>
        <Saos once top="300" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <p
                    class="md:text-grey text-textGrey font-pre text-left text-[0.5625rem] leading-[133.26%] md:leading-default md:text-2xl max-w-[1028px] font-normal mt-[18px] md:mt-5"
            >
                Unlock the potential of Inferix across a diverse range of industries, where visual computing
                plays a pivotal role in innovation and success. Our cutting - edge distributed GPU
                infrastructure enhances productivity, acceierates creativity, and elevates results for the
                following sectors
            </p>
        </Saos>

    </div>
    <!--    </Saos>-->
    <Saos once top="300" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <IndustryListDesktop/>
    </Saos>
</div>

<style lang="postcss">
    .background {
        background: linear-gradient(180deg, #101010 0%, #000 100%);
    }
</style>

<script lang="ts">
    import InferixMVP from '$videos/InferixMVP2.mp4';
    import MVPWalkthrough from '$images/icons/MVPWalkthrough.svg';
    import Play from '$images/icons/Play.svg';
    import {onMount} from 'svelte';
    import Saos from 'saos';

    let video;
    let observer;

    let paused = true;
    const playVideo = () => {
        paused = !paused;
    };

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Video is in view, play it
                video.play();
            } else {
                // Video is out of view, pause it
                video.pause();
            }
        });
    }


    onMount(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        },

            // Set up Intersection Observer
            observer = new IntersectionObserver(handleIntersection);
        observer.observe(video);

        // Clean up observer on component destruction
        return () => {
            observer.disconnect();
        };
    });
</script>

<div class="wk-bg mx-auto pt-[60px] box-border container">
    <div class=" rounded-[8px] md:rounded-[24px] overflow-hidden mx-auto relative">
        <Saos
				once
				top="200"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<p class="text-center font-pre font-extrabold md:text-[48px] text-[32px]">
					MVP Walkthrough
				</p>
			</Saos>

        <div class="video">

            <video autoplay controls muted playsinline loop bind:this={video} bind:paused={paused}
                   class="MVP object-cover">
                <source src={InferixMVP} type="video/mp4"/>
            </video>
            <div class="btnPlay" on:click={playVideo}>
                {#if paused}
                    <img src={Play}/>
                {/if}
                {#if paused}
                    <p></p>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>

    .img {
        display: flex;
        justify-content: center;
    }

    .img-1 {
        width: 25%;
    }

    .video {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .MVP {
        position: relative;
        border-radius: 15px;
        height: 100%;
        width: 100%;
        margin-top: 60px;
    }

    .btnPlay {
        cursor: pointer;
        display: flex;
        justify-content: center;
        position: absolute;
        /* bottom: 350px; */
    }

    .wk-bg {
        background: #212023;
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
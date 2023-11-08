<script lang="ts">
    import InferixMVP from '$videos/InferixMVP.mp4';
    import MVPWalkthrough from '$images/icons/MVPWalkthrough.svg';
</script>

<div class="bg-black mx-auto pt-[60px] box-border">
        <div class="container rounded-[8px] md:rounded-[24px] overflow-hidden mx-auto relative">
            <!-- <img
            src={MVPWalkthrough}
            alt="MVPWalkthrough"
            class="md:mx-auto md:w-[220px]  w-[99px] "/> -->
            <div class="title">
                <span class="text-[#06FF61]">MPV</span>
                <span>Walkthrough</span>
            </div>
            <video controls 
                   class="MVP object-cover">
                <source src={InferixMVP} type="video/mp4"/>
            </video>
        </div>
    </div>

<style>
    .title{
    font-family: Pretendard;
    font-size: 40px;
    font-weight: 800;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
    }

    .MVP{
        border-radius: 15px;
        height: 100%;
        width: 1600px;
        margin-top: 60px;
    }

    @media screen and (max-width: 740px) {
		.title{
        font-size: 18px;
        }
        .MVP{
            margin-top: 15px;
        }
	}
</style>
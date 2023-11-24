<script lang="ts">
	import InferixMVP from '$videos/InferixMVP2.mp4';
	import MVPWalkthrough from '$images/icons/MVPWalkthrough.svg';
	import Play from '$images/icons/Play.svg';

	let paused = true;
	const playVideo = () => {
		paused = !paused;
	};
</script>

<div class="bg-black mx-auto pt-[60px] box-border">
	<div class="container rounded-[8px] md:rounded-[24px] overflow-hidden mx-auto relative">
        <div class="img">
            <img   
                class="img-1"    
                src={MVPWalkthrough}
                alt="MVPWalkthrough"
                    
            />
        </div>
        
		<div class="video">
			<video controls bind:paused = {paused} class="MVP object-cover">
				<source src={InferixMVP} type="video/mp4" />
			</video>       
                <div class="btnPlay" on:click={playVideo}>    
                    {#if paused}
                     <img  src={Play}/>
                    {/if}
                    {#if paused}
                    <p></p>  
                    {/if}                            
               </div>           
		</div>
	</div>
</div>

<style>

    .img{
        display: flex;
        justify-content: center;
    }

    .img-1{
        width: 25%;
    }

    .video{
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .MVP {
        position: relative;
		border-radius: 15px;
		height: 100%;
		width: 85%;
		margin-top: 60px;
	}

	.btnPlay {
		cursor: pointer;
        display: flex;
        justify-content: center;
        position: absolute;
        /* bottom: 350px; */
	}


	@media screen and (min-width: 740px) and (max-width:1024px) {
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

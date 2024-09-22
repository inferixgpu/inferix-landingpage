  <script lang="ts">
    import models_fan from '$models/models_fan.glb';
    import ParameterProject from '$images/png/prameter-project.png';
	import { onMount } from 'svelte';

    let modelViewerLoaded = false;
	onMount(async () => {
    if (typeof window !== 'undefined') {
      const modelViewer = await import('@google/model-viewer');
      modelViewerLoaded = true;
    }
  });
  </script>
  
  <div class="flex-col text-white py-12 justify-center">
    <div class="hidden md:flex justify-center w-full">
        <div class="w-[500px] h-[800px]">
            {#if modelViewerLoaded}
                        <model-viewer
                        src={models_fan}
                        alt="model3d"
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls={false}
                        autoplay
                        disable-zoom
                        disable-tap
                        camera-orbit="-40deg 72deg 130%"
                        field-of-view="28deg"
                        style= "height: 100%; width: 100%"
                        >
                        </model-viewer>
                        {/if}
        </div>
    </div>
    <div class="container mx-auto hidden sm:block"  style="font-family: Inter">
        <h2 class="text-[32px] md:text-[55px] lg:text-[72px] font-bold text-center mb-8">DePIN Verification with</h2>
        <h2 class="text-[32px] md:text-[55px] lg:text-[72px] font-bold text-center mb-8">Proof - of - Rendering and FHE</h2>
        <div class="w-full flex justify-center">
            <img src={ParameterProject} alt={""} class="w-full h-full max-w-[1136px] max-h-[663px]" />
        </div>
      </div>
      <div class="px-[24px] mx-auto block sm:hidden"  style="font-family: Inter">
        <h2 class="text-[32px] md:text-[55px] lg:text-[72px] font-bold text-left md:text-center md:pl-[46px] leading-[48px]">DePIN Verification</h2>
        <h2 class="text-[32px] md:text-[55px] lg:text-[72px] font-bold text-left md:text-center md:pl-[46px] leading-[48px]">with Proof - of -</h2>
        <h2 class="text-[32px] md:text-[55px] lg:text-[72px] font-bold text-left md:text-center md:pl-[46px] leading-[48px]">Rendering and FHE</h2>
        <div class="w-full flex justify-center">
            <img src={ParameterProject} alt={""} class="w-full h-full max-w-[1136px] max-h-[663px]" />
        </div>
      </div>
  </div>
<script lang="ts">
  import DexRender from '$images/png/dex_render.png';
  import Froof from '$images/png/froof.png';
  import Issuance from '$images/png/issuance.png';
  import Platform from '$images/png/platform.png';
  import House3D from '$images/png/House3D_white.svg';
import Actif3D from '$images/png/actif3D.svg';
  let technologies = [
    { title: "Decentralized Rendering<br>& Federated AI", icon: DexRender },
    { title: "Proof-of-Rendering<br> with FHE", icon: Froof },
    { title: "BMW & IBME<br> Token Issuance", icon: Issuance },
    { title: "3D/VR Creative<br> Platform", icon: Platform }
  ];

  let logos = [
    { src: House3D, alt: "House3D" },
    { src: Actif3D, alt: "Actif3D" }
  ];
</script>

<div class="text-white pt-10 pb-[120px]">
  <div class="mx-auto">

    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-x-4 mx-auto px-6 md:px-10 xl:px-0 w-full lg:w-fit">
      <h2 class="absolute text-[48px] md:text-[56px] xl:text-[72px] font-bold text-left top-[-100px] pl-6 md:pl-10 xl:px-0">Technologies</h2>
      {#each technologies as tech, index}
        <div class="px-6 sm:px- bg-[radial-gradient(at_top_left,_#00D6D933_20%,_#00C08500)] hover:bg-gray-700 w-full lg:max-w-[560px] h-auto pt-6 pb-10 sm:w-full md:w-full lg:w-full flex flex-col-reverse items-center justify-center text-center border-[3px] mb-6 lg:mb-0"
             style="border: 3px solid #003935; position: relative; lg:{index > 1 ? 'top: -8px;' : ''}">
          <img src={tech.icon} alt={tech.title} class="mt-10 w-20 h-20 sm:w-40 sm:h-40" />
          <div class="w-full">
            <h3 style="font-family: Inter" class="text-[24px] text-left sm:text-[24px] md:text-[24px] lg:text-[36px] font-semibold mb-4">{@html tech.title}</h3>
          </div>
        </div>
      {/each}
    </div>

    <div class="flex flex-col sm:flex-row justify-center items-center sm:space-x-2 lg:space-x-[160px] space-y-4 sm:space-y-0 mt-20">
      {#each logos as logo}
        <img src={logo.src} alt={logo.alt} class="w-[320px] h-[96px]" />
      {/each}
    </div>
  </div>
</div>
<script lang="ts">
  let stats = [
    { value: "260,000+", label: "Users", description: "from Southeast Asia and India" },
    { value: "20,000+", label: "Pro", description: "active professional designers" },
    { value: "1,000,000+", label: "Designs", description: "design renderings per year using H3D Distributed Rendering" },
    { value: "500,000+", label: "3D models", description: "of furniture and home accessories already imported" }
  ];
</script>

<div class="bg-[radial-gradient(at_top_left,_#00D6D933_20%,_#00C08500)] items-center min-h-[400px] text-white py-12 flex justify-center">
  <div style="font-family: Inter" class="w-full px-3 md:px-2 sm:px-3 lg:px-10 mx-auto flex flex-col md:flex-row justify-between sm:gap-4 lg:gap-8 items-center">
  {#each stats as stat, i}
    <div class="text-left w-full md:text-center {i !== stats.length - 1 ? 'mb-16' : ''} md:mb-6 md:mb-0">
      <h3 class="text-[40px] sm:text-[36px] lg:text-[50px] xl:text-[60px] 2xl:text-[72px] font-bold leading-[48px] lg:leading-[108px]">{stat.value}</h3>
      <p class="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[32px] 2xl:text-[40px] text-[#00D6D9] font-medium mt-2 lg:mt-4 leading-[30px] lg:leading-[60px]">{stat.label}</p>
      <p class="text-[16px] sm:text-[18px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] mt-1 text-[rgba(255, 255, 255, 1)] opacity-60 leading-[24px]">{stat.description}</p>
    </div>
  {/each}
  </div>
</div>
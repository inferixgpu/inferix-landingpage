<script>
  import industries_v1 from '$images/png/industries_v1.png';
  import industries_v2 from '$images/png/industries_v2.png';
  import industries_v3 from '$images/png/industries_v3.png';
  import industries_v4 from '$images/png/industries_v4.png';
  import industries_v5 from '$images/png/industries_v5.png';
  import industries_v6 from '$images/png/industries_v6.png';
  import IndusMobile from './IndusMobile.svelte'
    const industries = [
      { title: 'Entertainment & Media', color: 'bg-red-500', url: industries_v1,  location:"left-[40px] bottom-[-5px]"},
      { title: 'Architecture & Design', color: 'bg-blue-500', url: industries_v2, location:"right-[30px]" },
      { title: 'AR & VR', color: 'bg-green-500', url: industries_v3, location:" bottom-[25px] right-[0]" },
      { title: 'Animation & VFX', color: 'bg-yellow-500', url: "", location:"" },
      { title: 'Game Content', color: 'bg-purple-500', url: industries_v5, location:"top-[-20px]" },
      { title: 'Game Content', color: 'bg-purple-500', url: industries_v6, location:"left-[0] top-[80px]" },
    ];
    function getGridArea(index) {
      const areas = [
        'area1', 'area2', 'area3',
        'area4', 'area5', 'area6',
      ];
      return `grid-area-${areas[index]}`;
    }
  </script>
  
  <div class=" text-white py-8 max-w-[1136px] mx-auto">
    <h2 class="text-[32px] md:text-[72px] font-bold text-left top-[-130px] px-3 lg:px-0 mb-[24px]">Industries</h2>
      <div class="desktop-grid grid grid-areas-industries gap-10 md:auto-rows-[400px] lg:auto-rows-[500px] max-w-[1136px] mx-auto">
        {#each industries as industry, i}
          <div class={`relative group ${getGridArea(i)} lg:w-full lg:h-full`}>
       {#if industry.url !== ""}
        <img class={`absolute ${industry.location} w-[calc(100%-50px)] lg:w-fit`} src={industry.url} alt="X Icon" />
        {/if}
          </div>
         
        {/each}
      </div>
      <div class="mobile-layout">
       <IndusMobile/>
      </div>
      
  </div>
  
  <style>
    .grid-areas-industries {
      display: grid;
      grid-template-areas:
        'area1 area2 area3' 
        'area4 area5 area6';
        
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0px;
    }
  
    .grid-area-area1 { grid-area: area1; }
    .grid-area-area2 { grid-area: area2; }
    .grid-area-area3 { grid-area: area3; }
    .grid-area-area4 { grid-area: area4; }
    .grid-area-area5 { grid-area: area5; }
    .grid-area-area6 { grid-area: area6; }

  .mobile-layout {
    display: none;
  }

  @media (min-width: 1024){

    .img_mobile{
      width: calc(100%-50px) !important;
    }
  }
    @media (max-width: 768px) {
  .desktop-grid {
    display: none !important;
  }

  .mobile-layout {
    display: block;
  }
}
  </style>
  
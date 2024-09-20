<script>
    const industries = [
      { title: 'Entertainment & Media', color: 'bg-red-500' },
      { title: 'Architecture & Design', color: 'bg-blue-500' },
      { title: 'AR & VR', color: 'bg-green-500' },
      { title: 'Animation & VFX', color: 'bg-yellow-500' },
      { title: 'Game Content', color: 'bg-purple-500' },
    ];
    function getGridArea(index) {
      const areas = [
        'area1', 'area2', 'area3',
        'area4', 'area5'
      ];
      return `grid-area-${areas[index]}`;
    }
  </script>
  
  <div class="min-h-screen bg-black text-white p-8">
    <h2 class="text-4xl mb-8">Industries</h2>
    <div class="grid grid-areas-industries gap-8 auto-rows-[300px]">
      {#each industries as industry, i}
        <div class={`relative group ${getGridArea(i)} ${industry.color}`}>
          <div class="h-full w-full rounded-lg transition-transform duration-300 transform group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-75 transition-opacity rounded-lg"></div>
          <h3 class="absolute bottom-4 left-4 text-xl group-hover:text-blue-400 transition-colors">{industry.title}</h3>
          <div class="absolute inset-0 border-4 border-transparent group-hover:border-blue-400 rounded-lg transition-all"></div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .grid-areas-industries {
      display: grid;
      grid-template-areas:
        'area1 area2'
        'area3 area4'
        'area5 area5';
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
  
    .grid-area-area1 { grid-area: area1; }
    .grid-area-area2 { grid-area: area2; }
    .grid-area-area3 { grid-area: area3; }
    .grid-area-area4 { grid-area: area4; }
    .grid-area-area5 { grid-area: area5; }
  </style>
  
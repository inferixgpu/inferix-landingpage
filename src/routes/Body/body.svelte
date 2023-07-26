<script>
  import Box from "$components/inferix/Box.svelte";
  import Line13 from "$components/static/images/icons/Line13.svg"
  import Line19 from "$components/static/images/icons/Line19.svg"
  import Arrow1 from "$components/static/images/icons/Arrow1.svg"
  import Arrow2 from "$components/static/images/icons/Arrow2.svg"
  </script>
  
    <div class="container mx-auto">
     <p class="text-center text-2xl font-normal mt-6 max-w-[1060px] mx-auto">An innovated platform using the power of Blockchain and Web3 technologies to redefin how we use and share GPU resoruce globally.</p>
     <div class="flex justify-between flex-col">
       <div class="flex justify-between">
         <Box>
          Underutilized GPUs
         </Box>
         <Box>
          B2B Client
         </Box>
       </div>
       <div class="circle1 w-[506px] h-[506px] rounded-full flex justify-center items-center mx-auto">
        <div class="circle2 w-[400px] h-[400px] rounded-full flex justify-center items-center">
          <div class=" circle3 w-[300px] h-[300px] rounded-full flex justify-center items-center">
            <div class="circle w-[200px] h-[200px] rounded-full flex justify-center items-center text-black text-[2rem] font-bold relative">
              Inferix
              </div>
          </div>
        </div>
       </div>
       <img src={Line13} class="w-[650px] rotate-x-180" alt="line"/>
       <img src={Line19} class="w-[650px] rotate-x-180" alt="line"/>
       <img src={Arrow1} class="w-[450px] rotate-x-180" alt="line"/>
       <img src={Arrow2} class="w-[450px] rotate-x-180" alt="line"/>
     </div>
    </div>
  
  <style lang="postcss">
  .circle1 {
    background: url("$components/static/images/icons/Ellipse1.svg") no-repeat center center fixed;
        background-size: cover;
  }
  .circle2 {
    background: url("$components/static/images/icons/Ellipse2.svg") no-repeat center center fixed;
        background-size: cover;
  }
  .circle3 {
    background: url("$components/static/images/icons/Ellipse3.svg") no-repeat center center fixed;
        background-size: cover;
  }
  .circle {
    background: url("$components/static/images/icons/Ellipse4.svg") no-repeat center center fixed;
        background-size: cover;
  }
  </style>
  
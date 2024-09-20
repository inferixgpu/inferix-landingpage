<script>
    import X from '$images/png/x.png';
    import Medium from '$images/png/medium.png';
    import Discord from '$images/png/discord.png';
    import Youtube from '$images/png/youtube.png';
    import Warpcast from '$images/icons/warpcast.svg';
  </script>
  
  <style>
    .fixed-menu {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      background: rgba(255, 255, 255, 0.2);
      padding: 10px;
      flex-direction: column;
      align-items: center;
      border-radius: 24px;
      margin-right: 32px;
      z-index: 99999;
    }
    
    .fixed-menu a {
      text-decoration: none;
      color: #333;
      margin: 10px 0;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
  
    .fixed-menu a img {
      width: 40px;
      height: 40px;
    }
  </style>
  
  <div class="fixed-menu hidden md:flex">
    <a href="https://x.com/inferixgpu" target="_blank" rel="noopener noreferrer">
      <img src={X} alt="X Icon" />
    </a>
    <a href="https://medium.com/@inferixgpu" target="_blank" rel="noopener noreferrer">
      <img src={Medium} alt="Medium Icon" />
    </a>
    <a href="https://discord.com/invite/NJvcWYcB9W" target="_blank" rel="noopener noreferrer">
      <img src={Discord} alt="Discord Icon" />
    </a>
    <a href="https://www.youtube.com/@InferixGPU" target="_blank" rel="noopener noreferrer">
      <img src={Youtube} alt="YouTube Icon" />
    </a>
    <a href="https://warpcast.com/inferixgpu" target="_blank" rel="noopener noreferrer">
      <img style="border-radius: 50% " src={Warpcast} alt="Warpcast Icon" />
    </a>
  </div>
  
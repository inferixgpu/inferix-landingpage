<script>
</script>

<div class="box py-[30px] px-10 w-[230px] box-content text-secondary text-2xl font-bold flex justify-center items-center rounded-[10px]">
  <slot></slot>
</div>

<style>
  .box {
    position: relative;
    background: #0D1524; 
  }
  .box::before {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: linear-gradient(to bottom, #232C49, #232C4900);
    z-index: -1;
    border-radius: 10px;
}
</style>

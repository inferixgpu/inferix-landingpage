<script>
    import WelcomeImg from '$images/png/Welcome.png';

</script>

<style lang="postcss">
    .subs-btn {
        border-radius: 40px;
        background: linear-gradient(152deg, #1CFF6F 0%, #93FFBB 100%);
        height: 54px;
        color: black;
        @apply font-semibold w-full lg:w-[140px];
    }

    .email-input {
        border-radius: 47px;
        background: #EDEDED;
        outline: none !important;
        border: none !important;
        height: 54px !important;
        @apply flex lg:flex-1 focus:outline-none px-[38px];
    }
</style>

<div class="flex flex-col leading-default gap-[32px] justify-center items-center px-8 py-10 font-outfit">
    <img src={WelcomeImg} alt="success" width="244px" height="74px"/>
    <h2 class="text-[2rem] leading-normal font-medium text-center text-black">Thank you for registering!</h2>
</div>

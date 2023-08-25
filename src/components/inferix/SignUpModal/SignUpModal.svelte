<script>
    import WelcomeImg from '$images/png/Welcome.png';
    let email = '';
    let success = false;

    async function sendEmail() {
        success = true;
        const res = await fetch(`/teaser_api?email=${email}`, {
            method: 'GET',
        })
        if (res.ok) {
            email = '';
            success = true;
        }
        console.log({res})
    }

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

{#if (success)}
    <div class="flex flex-col gap-12 justify-center items-center px-8 py-10 font-outfit">
        <img src={WelcomeImg} alt="success" width="244px" height="74px"/>
        <h2 class="text-[2rem] leading-normal font-medium text-center text-black">Thank you for registering!</h2>
    </div>
{:else }
    <div class="flex flex-col justify-center items-center px-3 py-8 font-outfit">
        <h2 class="text-[2.5rem] leading-normal font-bold text-black">Sign Up For Beta</h2>
        <span class="text-xl mt-[28px] text-[#898989]">public access is coming soon</span>
        <div class="flex mt-[44px] flex-col lg:flex-row lg:items-center gap-3 w-full">
            <input bind:value={email} type="email" class="email-input"
                   placeholder="Enter your e-mail"/>
            <button on:click={sendEmail} class="subs-btn">Subscribe</button>
        </div>
    </div>
{/if}
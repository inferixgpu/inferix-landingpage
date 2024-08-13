<script>
	import WelcomeImg from '$images/png/Welcome.png';

	let email = '';
	let success = false;

	async function sendEmail() {
		success = true;
		const res = await fetch(`/teaser_api?email=${email}`, {
			method: 'GET'
		});
		if (res.ok) {
			email = '';
			success = true;
		}
	}
</script>

{#if success}
	<div
		class="flex flex-col leading-default gap-[32px] justify-center items-center p-0 font-outfit"
	>
		<img src={WelcomeImg} alt="success" width="244px" height="74px" />
		<h2 class="text-[30px] leading-normal font-medium text-center text-black">
			Thank you for registering!
		</h2>
	</div>
{:else}
	<div class="flex flex-col justify-center items-center p-0 font-outfit">
		<h2 class="text-[30px] leading-[28px] font-bold text-black">Sign Up For Beta</h2>
		<span class="text-[18px] leading-[28px] mt-[20px] text-[#898989]">public access is coming soon</span
		>
		<div class="flex mt-[56px] flex-col lg:flex-row lg:items-center gap-3 w-full">
			<input bind:value={email} type="email" class="email-input" placeholder="Enter your e-mail" />
			<button on:click={sendEmail} class="subs-btn">Subscribe</button>
		</div>
	</div>
{/if}

<style lang="postcss">
	.subs-btn {
		border-radius: 40px;
		background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		height: 54px;
		color: black;
		@apply font-semibold w-full lg:w-[140px];
	}

	.email-input {
		border-radius: 47px;
		background: #ededed;
		outline: none !important;
		border: none !important;
		height: 54px !important;
		@apply flex lg:flex-1 focus:outline-none px-[38px] text-black;
	}
</style>

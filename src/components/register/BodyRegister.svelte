<script>
	import {onMount} from 'svelte';
	import gsap from 'gsap';
	import axios from 'axios';

	let input_step = 0;
	let count = 1;
	let showModal = false;
	var nodes = [{ id: 1, value: '' }];

	let isNullEmail = {status: true, message: ''};
	let isNullWallet = false;
	let isNullWorkers = false;
	let responseError = {error: false, message: ''};
	function addNode() {
		count++;
		nodes = [...nodes, { id: count, value: '' }];
	}

	function handleFocus(i) {
		const focus = document.querySelector(
			`.body-register > div:nth-child(${i}) > div:first-child > div:first-child > div`
		);

		let not_focus = document.querySelectorAll(
			`.body-register > div:not(:nth-child(${i})) > div:first-child > div:first-child > div`
		);

		if (input_step != i)
			gsap.to(focus, {
				height: '40px',
				width: '40px',
				background:
					'linear-gradient(180deg, rgba(244, 244, 244, 0.56) 0.01%, rgba(244, 244, 244, 0) 100%)',
				duration: 0.8,
				ease: 'none',
				border: 'none',
			});

		for (let i = 0; i < not_focus.length; i++) {
			gsap.to(not_focus[i], {
				height: '40px',
				width: '40px',
				background: 'none',
				duration: 0.8,
				ease: 'none',
				border: '1px solid rgba(244, 244, 244, 0.15)'
			});
		}
		input_step = i;
	}

	function onHoverSubmit() {
		const submit = document.querySelector('#submit_register');
		submit.addEventListener('mouseover', hoverSubmit);
		submit.addEventListener('mouseout', leaveSubmit);
	}

	function hoverSubmit() {
		const submit = document.querySelector('#submit_register');
		gsap.to(submit, {
			background: 'linear-gradient(45deg, #00D6D9 0%, #00C085 100%)',
			duration: 0.5,
			ease: 'none'
		});
	}

	function leaveSubmit() {
		const submit = document.querySelector('#submit_register');
		gsap.to(submit, {
			background: '#fff',
			duration: 0.5,
			ease: 'none'
		});
	}

	async function handleSubmit() {
		let inputWallet = document.getElementById("wallet-address-input").value;
		if (inputWallet) {
			isNullWallet = false;
		}
		let inputEmail = document.getElementById("email-address-input").value;
		if (inputEmail && isValidEmail(inputEmail)) {
			isNullEmail.status = false;
		}
		const inputWorkers = [];

		let elementWorkerIds = document.querySelectorAll('.workers-input input');
		elementWorkerIds.forEach(function(input) {
			if (input.value !== "") {
				inputWorkers.push(input.value);
			}
		});

		const formData = {
			"ownerAddress": inputWallet,
			"ownerEmail": inputEmail,
			"workerUUIDs": inputWorkers
		};
		if (validateFormData(formData)) {
			isNullEmail.status = isNullWallet = isNullWorkers = false;
			try {
				responseError.error = false;
				const response = await axios.post('https://testnet-core.inferix.io/api/workers/register', formData);
				if (response.data) {
					showModal = true;
				}
			} catch (e) {
				responseError.error = true;
				responseError.message = e.response.data.message;
			}

		}

	}

	function validateFormData(formData) {
		if (!formData.ownerAddress) {
			isNullWallet = true;
			return false;
		}
		if (!formData.ownerEmail) {
			isNullEmail.status = true;
			isNullEmail.message = "Email is required.";
			return false;
		}
		if (!isValidEmail(formData.ownerEmail)) {
			isNullEmail.status = true;
			isNullEmail.message = "Please enter a valid email address.";
			return false;
		}
		if (formData.workerUUIDs.length == 0) {
			isNullWorkers = true;
			return false;
		}
		return true;
	}
	function isValidEmail(value) {
		// Sử dụng biểu thức chính quy để kiểm tra định dạng email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	}
	function buttonDone() {
		showModal = false;
		document.getElementById("wallet-address-input").value = '';
		document.getElementById("email-address-input").value = '';
		nodes = [{ id: 1, value: '' }]
	}
	onMount(() => {
		handleFocus(1);
		onHoverSubmit();
	});
</script>
{#if responseError.error}
	<div class="text-white h-[56px] flex w-full  md:mb-[30px] whitespace-nowrap xl:px-[250px] min-[1025px]:px-[140px] max-lg:px-4 justify-end">
		<span class="md:w-[40%] max-lg:hidden"></span>
		<span class="flex items-center justify-start h-[56px] md:w-[60%] max-md:w-full">
			<p class="py-[8px] px-[18px] bg-red-600 h-[40px]">Registration failed!</p>
		</span>
	</div>
{/if}


<div class="body-register">
	<div class="wallet-register" on:click={() => handleFocus(1)}>
		<div class="wallet-desc">
			<div><div class="step"><div>1</div></div></div>
			<div>
				<div class={input_step == 1 ? 'desc-active' : ''}>Wallet Address</div>
				<div>
					Enter your wallet ioPay address so we can verify your account on the system
					(<a
						href="https://youtube.com/shorts/IkZ1jl-pFxc?si=8O3_72m7biKupZX3"
						class="text-blue-600 hover:text-yellow-200"
						target="_blank"
						>
					Click to view instructions</a>)
				</div>

			</div>
		</div>
		<div class="wallet-form">
			<div class="form-label flex gap-1">
				Please enter your wallet address
				<p class="text-red-600">*</p>
			</div>
			<input id="wallet-address-input" type="text" placeholder="Example: io3wfl8zgmdkw6j7yv9ncxenp5f..." on:focus={() => handleFocus(1) } />
			{#if isNullWallet}
				<div class="text-[12px] text-red-600">Wallet address is required.</div>
			{/if}
		</div>
	</div>
	<div class="email-register" on:click={() => handleFocus(2)}>
		<div class="email-desc">
			<div><div class="step"><div>2</div></div></div>
			<div>
				<div class={input_step == 2 ? 'desc-active' : ''}>Email Address</div>
				<div>Enter your email with us for enhanced support tailored to you</div>
			</div>
		</div>
		<div class="wallet-form ">
			<div class="form-label flex gap-1">
				Please enter your email
				<p class="text-red-600">*</p>
			</div>
			<input id="email-address-input" type="email" placeholder="example@domain.com" on:focus={() => handleFocus(2)}  />
			{#if isNullEmail.status}
				<div class="text-[12px] text-red-600">{isNullEmail.message}</div>
			{/if}
		</div>
	</div>
	<div class="node-register" on:click={() => handleFocus(3)}>
		<div class="node-desc">
			<div><div class="step"><div>3</div></div></div>
			<div>
				<div class={input_step == 3 ? 'desc-active' : ''}>Node ID</div>
				<div>The node IDs you are currently using in our system</div>
			</div>
		</div>
		<div class="wallet-form workers-input">
			<div class="form-label flex gap-1">
				Please enter your node ID
				<p class="text-red-600">*</p>
			</div>
			{#if isNullWorkers}
				<div class="text-[12px] text-red-600">Need at least 1 node ID.</div>
			{/if}
			{#each nodes as node (node.id)}
				<input
					placeholder="Example: e365eb20-283d-4dc2-8703-ae5b94286dbe"
					bind:value={node.value}
					on:focus={() => handleFocus(3)}
				/>
			{/each}
			<div class="add-node-register" on:click={addNode}><div>Add more +</div></div>
		</div>
	</div>
	<div class="submit-register">
		<div />
		<div>
			<div id="submit_register" on:click={handleSubmit}><div>Submit</div></div>
		</div>
	</div>
	<modal class="fixed inset-0 flex items-center justify-center z-50" style="display: {showModal ? 'block' : 'none'}">
		<div class="fixed inset-0 bg-black bg-opacity-90 items-center backdrop-blur-[13px]">
			<div class="flex p-8 rounded-lg shadow-xl z-10 w-full h-full items-center justify-center">
				<div class="modal-register-success">
					<div class="flex flex-col justify-center items-center">
						<p class="text-black text-center text-[36px] font-bold">Congratulations!</p>
						<p class="text-black text-center text-[16px] font-light">You have successfully registered</p>
					</div>
					<div class="flex w-[164px] h-[40px] bg-white text-black text-[16px]
					font-bold cursor-pointer justify-center items-center hover:bg-black hover:text-white"
						 on:click={() => buttonDone()}>Done</div>
				</div>
			</div>
		</div>
	</modal>
</div>

<style lang="postcss">
	.body-register {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0px 250px;
		gap: 24px;
	}

	.body-register > div {
		display: flex;
		width: 100%;
		cursor: pointer;
	}

	.body-register > div > div {
		display: flex;
	}

	.body-register > div > div:first-child {
		width: 40%;
		gap: 32px;
	}
	.body-register > div > div:last-child {
		flex: 1;
	}

	.wallet-desc > div:last-child,
	.email-desc > div:last-child,
	.node-desc > div:last-child {
		display: flex;
		flex-direction: column;
		padding-right: 32px;
	}

	.step {
		height: 40px;
		padding: 0 15px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid rgba(244, 244, 244, 0.15);
		background: transparent;
		transition: background 1s ease-in-out;
	}

	.step > div {
		width: 8px;
		font-size: 18px;
		font-weight: 500;
		line-height: 24px;
		text-align: center;
	}

	.wallet-desc > div:last-child > div:first-child,
	.email-desc > div:last-child > div:first-child,
	.node-desc > div:last-child > div:first-child {
		font-size: 22px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
	}

	.wallet-desc > div:last-child > div:last-child,
	.email-desc > div:last-child > div:last-child,
	.node-desc > div:last-child > div:last-child {
		color: #fff;
		font-size: 14px;
		font-weight: 300;
		line-height: 18px;
		word-wrap: break-word;
	}

	.desc-active {
		background: var(--33333, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.body-register > div > div:last-child {
		flex-direction: column;
		min-height: 105px;
		gap: 8px;
		border: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.15));
		padding: 16px;
		justify-content: space-between;
	}

	.body-register > div > div:last-child > input {
		height: 40px;
		background: none;
		border: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.15));
		background: #131313;
		padding: 8px;

		&::placeholder {
			color: #bdbdbd;
			font-size: 14px;
			font-weight: 300;
			line-height: 24px;
		}
	}

	.body-register > .submit-register > div:last-child {
		border: none;
		padding: 0;
	}

	.body-register > .submit-register > div:last-child > div {
		width: 100%;
		height: 40px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		& > div {
			color: #000;
			font-size: 16px;
			font-weight: 700;
			line-height: 24px;
			text-transform: uppercase;
		}
	}

	.add-node-register {
		width: fit-content;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 4px 8px;
		border: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.15));
		background: #464646;
		cursor: pointer;

		&:hover {
			opacity: 0.9;
		}
	}

	.add-node-register > div {
		color: #fff;
		font-size: 14px;
		font-weight: 400;
		line-height: 24px;
	}

	.animated {
		animation: changeBackground 0s ease-in-out forwards;
	}

	@keyframes changeBackground {
		0% {
			background: none;
		}
		100% {
			background: linear-gradient(
				180deg,
				rgba(244, 244, 244, 0.56) 0.01%,
				rgba(244, 244, 244, 0) 100%
			);
		}
	}

	.modal-register-success {
		@apply flex flex-col gap-[32px] h-[272px] w-[480px] p-[64px] items-center justify-center;
		background: var(--33333, linear-gradient(45deg, #00D6D9 0%, #00C085 100%));
	}
	@media screen and (max-width: 1280px) {
		.body-register {
			padding: 20px 140px;
		}
	}

	@media screen and (max-width: 1024px) {
		.body-register {
			padding: 16px;
		}
	}

	@media screen and (max-width: 768px) {
		.body-register {
			padding: 16px;
		}
		.body-register > div {
			flex-direction: column;
		}

		.body-register > div > div:first-child {
			width: 100%;
			margin-bottom: 16px;
		}
	}
</style>

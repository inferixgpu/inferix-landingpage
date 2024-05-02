<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import axios from 'axios';
	import lo from 'lodash';
	import moment from 'moment';
	import Popup from '$components/register/AddressPopup.svelte';

	import leaderboard_light from '$images/png/innovatedBackground.png';

	let input_step = 0;
	let count = 1;
	let showModal = false;
	var nodes = [{ id: 1, value: '' }];
	let nav = 1;
	let data = [];
	let is_mobile = false;
	let showed_address = '';
	let showed_index;

	let isNullEmail = { status: true, message: '' };
	let isNullWallet = false;
	let isNullWorkers = false;
	let responseError = { error: false, message: '' };
	function addNode() {
		count++;
		nodes = [...nodes, { id: count, value: '' }];
	}

	function clickNav(item, ele) {
		if (item == 'registration') nav = 1;
		else nav = 2;
	}

	function handleFocus(i) {
		const focus = document.querySelector(
			`.body-register > div:last-child > div:nth-child(${i}) > div:first-child > div:first-child > div:first-child`
		);

		let not_focus = document.querySelectorAll(
			`.body-register > div:last-child > div:not(:nth-child(${i})) > div:first-child > div:first-child > div:first-child`
		);

		if (input_step != i)
			gsap.to(focus, {
				height: '40px',
				width: '40px',
				background:
					'linear-gradient(180deg, rgba(244, 244, 244, 0.56) 0.01%, rgba(244, 244, 244, 0) 100%)',
				duration: 0.8,
				ease: 'none',
				border: 'none'
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
		let inputWallet = document.getElementById('wallet-address-input').value;
		if (inputWallet) {
			isNullWallet = false;
		}
		let inputEmail = document.getElementById('email-address-input').value;
		if (inputEmail && isValidEmail(inputEmail)) {
			isNullEmail.status = false;
		}
		const inputWorkers = [];

		let elementWorkerIds = document.querySelectorAll('.workers-input input');
		elementWorkerIds.forEach(function (input) {
			if (input.value !== '') {
				inputWorkers.push(input.value);
			}
		});

		const formData = {
			ownerAddress: inputWallet,
			ownerEmail: inputEmail,
			workerUUIDs: inputWorkers
		};
		if (validateFormData(formData)) {
			isNullEmail.status = isNullWallet = isNullWorkers = false;
			try {
				responseError.error = false;
				const response = await axios.post(
					'https://testnet-core.inferix.io/api/workers/register',
					formData
				);
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
			isNullEmail.message = 'Email is required.';
			return false;
		}
		if (!isValidEmail(formData.ownerEmail)) {
			isNullEmail.status = true;
			isNullEmail.message = 'Please enter a valid email address.';
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
		document.getElementById('wallet-address-input').value = '';
		document.getElementById('email-address-input').value = '';
		nodes = [{ id: 1, value: '' }];
	}

	async function fetchLeaderboard() {
		await axios
			.get('https://testnet-core.inferix.io/api/workers/statistics')
			.then((response) => {
				let temp_data = lo.map(lo.get(response, 'data.data'), (d) => {
					return {
						...d,
						...{
							fixed_point: lo.get(d, 'point', 0).toFixed(0),
							truncated_add: getTruncatedAddress(d.ownerAddress)
						}
					};
				});
				temp_data = lo.orderBy(temp_data, ['point'], ['desc']);
				data = lo.take(temp_data, 20);
			})
			.catch((error) => console.log('Error: ' + error));
	}

	function resize() {
		if (window.innerWidth <= 768) {
			is_mobile = true;
			let temp_data = lo.map(data, (d) => {
				return {
					...d,
					...{
						truncated_add: getTruncatedAddress(d.ownerAddress)
					}
				};
			});
			data = temp_data;
		} else {
			is_mobile = false;
		}
	}

	function getTruncatedAddress(add) {
		let width = window.innerWidth - 40 - (window.innerWidth - 40) * 0.28 - 62;
		let max_char = Number(width / 13);
		if (max_char > lo.size(add)) return add;
		let start = max_char - 8;
		return add.slice(0, start) + '...' + add.slice(-4);
	}

	onMount(async () => {
		handleFocus(1);
		//onHoverSubmit();
		resize();
		window.addEventListener('resize', resize);
		await fetchLeaderboard();
	});
</script>

{#if responseError.error}
	<div
		class="text-white h-[56px] flex w-full md:mb-[30px] whitespace-nowrap xl:px-[250px] min-[1025px]:px-[140px] max-lg:px-4 justify-end"
	>
		<span class="md:w-[40%] max-lg:hidden"></span>
		<span class="flex items-center justify-start h-[56px] md:w-[60%] max-md:w-full">
			<p class="py-[8px] px-[18px] bg-red-600 h-[40px]">Registration failed!</p>
		</span>
	</div>
{/if}

<div class={nav == 1 ? 'body-register' : 'body-register body-2'}>
	<div class="nav-bar">
		<div
			class={nav == 1 ? 'nav-item nav-item-active' : 'nav-item'}
			on:click={(ele) => clickNav('registration', ele)}
		>
			<div>Registration</div>
		</div>
		<div
			class={nav == 2 ? 'nav-item nav-item-active' : 'nav-item'}
			on:click={(ele) => clickNav('leaderboard', ele)}
		>
			<div>Leaderboard</div>
		</div>
	</div>
	{#if nav == 1}
		<div>
			<div class="wallet-register" on:click={() => handleFocus(1)}>
				<div class="wallet-desc">
					<div>
						<div class="step">
							<div>1</div>
						</div>
						<div class="line"></div>
					</div>
					<div>
						<div class={input_step == 1 ? 'desc-active' : ''}>Wallet Address</div>
						<div>
							Enter your wallet ioPay address so we can verify your account on the system (<a
								href="https://youtube.com/shorts/IkZ1jl-pFxc?si=8O3_72m7biKupZX3"
								class="text-blue-500 hover:underline hover:filter-none"
								target="_blank"
							>
								Click to view instructions</a
							>)
						</div>
					</div>
				</div>
				<div class="wallet-form">
					<div class="form-label flex gap-1">
						Please enter your wallet address
						<p class="text-red-600">*</p>
					</div>
					<input
						id="wallet-address-input"
						type="text"
						placeholder="Example: io3wfl8zgmdkw6j7yv9ncxenp5f..."
						on:focus={() => handleFocus(1)}
					/>
					{#if isNullWallet}
						<div class="text-[12px] text-red-600">Wallet address is required.</div>
					{/if}
				</div>
			</div>
			<div class="email-register" on:click={() => handleFocus(2)}>
				<div class="email-desc">
					<div>
						<div class="step">
							<div>2</div>
						</div>
						<div class="line"></div>
					</div>
					<div>
						<div class={input_step == 2 ? 'desc-active' : ''}>Email Address</div>
						<div>Enter your email with us for enhanced support tailored to you</div>
					</div>
				</div>
				<div class="wallet-form">
					<div class="form-label flex gap-1">
						Please enter your email
						<p class="text-red-600">*</p>
					</div>
					<input
						id="email-address-input"
						type="email"
						placeholder="example@domain.com"
						on:focus={() => handleFocus(2)}
					/>
					{#if isNullEmail.status}
						<div class="text-[12px] text-red-600">{isNullEmail.message}</div>
					{/if}
				</div>
			</div>
			<div class="node-register" on:click={() => handleFocus(3)}>
				<div class="node-desc">
					<div>
						<div class="step"><div>3</div></div>
					</div>
					<div>
						<div class={input_step == 3 ? 'desc-active' : ''}>Node ID</div>
						<div>The node IDs you are currently using in our system</div>
					</div>
				</div>
				<div class="wallet-form workers-input">
					<div class="form-label">
						Please enter your Inferix Worker's IDs (<a
							href="https://www.youtube.com/watch?v=trDVtn48WLY"
							class="text-blue-500 hover:underline hover:filter-none"
							target="_blank">Click to view instructions</a
						>)
						<span class="text-red-600">*</span>
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
			<modal
				class="fixed inset-0 flex items-center justify-center z-50"
				style="display: {showModal ? 'block' : 'none'}"
			>
				<div class="fixed inset-0 bg-black bg-opacity-90 items-center backdrop-blur-[13px]">
					<div class="flex p-8 rounded-lg shadow-xl z-10 w-full h-full items-center justify-center">
						<div class="modal-register-success">
							<div class="flex flex-col justify-center items-center">
								<p class="text-black text-center text-[36px] font-bold">Congratulations!</p>
								<p class="text-black text-center text-[16px] font-light">
									You have successfully registered
								</p>
							</div>
							<div
								class="flex w-[164px] h-[40px] bg-white text-black text-[16px]
					font-bold cursor-pointer justify-center items-center hover:bg-black hover:text-white"
								on:click={() => buttonDone()}
							>
								Done
							</div>
						</div>
					</div>
				</div>
			</modal>
		</div>
	{:else}
		<div class="leaderboard">
			<img src={leaderboard_light} alt="leaderboard-light" />
			<div class="leaderboard-content">
				<div>Leaderboard Top 20 Alliance Campaign</div>
				<div>Last Updated: {moment(new Date().getTime()).format('MM/DD/YYYY, hh:mm:ss A')}</div>
				<div class="leaderboard-table">
					<div class="table-header">
						<div>Rank</div>
						<div>Wallet address</div>
						<div>Point</div>
					</div>
					<div class="table-body">
						{#each data as item, index (index)}
							<div class="data-item">
								<div><div>{index + 1}</div></div>
								<div>
									<div>{is_mobile ? item.truncated_add : item.ownerAddress}</div>
									{#if is_mobile}
										<div
											on:click={() => {
												if (!showed_address) showed_address = item.ownerAddress;
												else showed_address = '';
												showed_index = index + 1;
											}}
										>
											{#if showed_index == index + 1 && showed_address}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="15"
													viewBox="0 0 20 15"
													fill="none"
												>
													<path
														d="M19.4993 7.39201C19.4062 7.78086 19.1382 8.04717 18.8488 8.30817C17.9263 9.14038 16.9429 9.89395 15.8723 10.539C15.7999 10.5829 15.7256 10.6239 15.6146 10.688C15.5324 10.5945 15.4541 10.4931 15.3635 10.4044C14.7883 9.84088 14.2116 9.27884 13.6324 8.71969C13.5581 8.64829 13.5363 8.59136 13.5749 8.48763C14.4102 6.25104 13.0394 3.92664 10.6311 3.50209C9.96768 3.38534 9.31421 3.45337 8.68253 3.68494C8.57056 3.72594 8.5007 3.7245 8.41152 3.63525C8.01567 3.23868 7.60991 2.85128 7.16699 2.42094C7.57325 2.32735 7.9369 2.2299 8.3055 2.16091C10.7163 1.70982 12.9457 2.24968 15.0672 3.35398C16.5654 4.13361 17.9006 5.13033 19.108 6.28819C19.2828 6.45559 19.3705 6.70936 19.4989 6.92308C19.4993 7.07891 19.4993 7.23522 19.4993 7.39201Z"
														fill="white"
													/>
													<path
														d="M4.05633 3.85045C3.78335 3.5851 3.52622 3.33472 3.26909 3.08481C2.85391 2.68101 2.43824 2.27721 2.02307 1.87292C1.59501 1.45609 1.56479 0.921066 1.94727 0.545727C2.33024 0.169906 2.88314 0.194993 3.31021 0.610374C6.67966 3.88952 10.0491 7.16916 13.4186 10.4483C14.3539 11.3587 15.2913 12.2666 16.2232 13.1799C16.7177 13.6647 16.5452 14.4511 15.9027 14.6653C15.5157 14.7946 15.1882 14.6861 14.9068 14.412C14.1553 13.6802 13.3987 12.9536 12.6566 12.2126C12.504 12.0601 12.3762 12.0269 12.1651 12.078C10.1606 12.5638 8.21005 12.3472 6.31056 11.6033C4.2337 10.7904 2.46153 9.53215 0.865238 8.02549C0.364353 7.5527 0.382685 6.77404 0.887037 6.29401C1.80458 5.42176 2.79991 4.64358 3.87698 3.9643C3.92851 3.93246 3.97954 3.89965 4.05633 3.85045ZM6.34524 6.06388C5.96177 7.58405 6.28182 8.87796 7.43272 9.91135C8.47561 10.8478 9.71865 11.088 11.1222 10.7339C10.7888 10.4083 10.4821 10.1053 10.169 9.80859C10.1368 9.7782 10.0669 9.77627 10.0144 9.7753C8.49097 9.74973 7.35345 8.64349 7.33115 7.16626C7.33016 7.1103 7.32323 7.03745 7.28805 7.00175C6.99029 6.69781 6.6856 6.40063 6.34524 6.06388Z"
														fill="white"
													/>
													<path
														d="M12.6337 7.69355C11.5735 6.66016 10.5291 5.64221 9.49316 4.63295C10.1605 4.42791 11.1103 4.64983 11.7177 5.1646C12.5104 5.83567 12.7982 6.68332 12.6337 7.69355Z"
														fill="white"
													/>
												</svg>{:else}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="11"
													viewBox="0 0 20 11"
													fill="none"
												>
													<g clip-path="url(#clip0_840_2030)">
														<path
															d="M10.1462 0C14.0508 0.156372 17.1953 1.79878 19.3608 5.08662C19.5465 5.3691 19.5449 5.62888 19.3619 5.91287C17.6513 8.56262 15.1981 10.2166 12.0017 10.8139C7.53479 11.6482 2.90552 9.61636 0.616804 5.8705C0.461296 5.61627 0.458651 5.37566 0.619449 5.12597C2.34643 2.43536 4.83615 0.790939 8.08118 0.18462C8.33296 0.137708 8.58791 0.0983629 8.84286 0.0766726C9.23057 0.043885 9.61934 0.0297611 10.1462 0ZM10.0065 9.28344C12.1778 9.28092 13.9593 7.58302 13.9635 5.51185C13.9677 3.43514 12.1773 1.72715 9.99806 1.72967C7.82571 1.7322 6.04477 3.43009 6.0416 5.50076C6.03789 7.57798 7.82888 9.28596 10.0065 9.28344Z"
															fill="white"
														/>
														<path
															d="M7.31006 5.50484C7.31006 4.08135 8.50705 2.93984 9.99918 2.93933C11.503 2.93883 12.6968 4.08085 12.6952 5.51745C12.6936 6.9369 11.4918 8.07488 9.99601 8.07388C8.50546 8.07287 7.31006 6.92933 7.31006 5.50484Z"
															fill="white"
														/>
													</g>
													<defs>
														<clipPath id="clip0_840_2030">
															<rect
																width="19"
																height="11"
																fill="white"
																transform="translate(0.5)"
															/>
														</clipPath>
													</defs>
												</svg>{/if}
										</div>{:else}
										<div></div>{/if}
									{#if showed_index == index + 1}<Popup bind:open={showed_address} />{/if}
								</div>
								<div><div>{item.fixed_point}</div></div>
							</div>{/each}
					</div>
				</div>
			</div>
		</div>{/if}
</div>

<style lang="postcss">
	.body-register {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0px 250px;
		gap: 24px;
	}

	.body-register > .nav-bar {
		width: fit-content;
		height: 32px;
		margin: 0 auto;
		display: flex;
		z-index: 1;
	}

	.body-register > div:last-child {
		display: flex;
		flex-direction: column;
	}

	.body-register > .nav-bar > .nav-item {
		width: fit-content;
		display: flex;
		padding: 4px 8px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border: none !important;
		min-height: 0;
		cursor: pointer;
	}

	.body-register > .nav-bar > .nav-item.nav-item-active {
		background: linear-gradient(90deg, rgba(0, 214, 217, 1) 0%, rgba(0, 192, 133, 1) 100%);
	}

	.nav-bar > .nav-item > div {
		color: #fff;
		font-size: 14px;
		font-weight: 400;
	}

	.nav-bar > .nav-item:hover > div {
		color: #fff;
		opacity: 0.5;
	}

	.nav-bar > .nav-item.nav-item-active > div {
		color: #000;
		opacity: 1;
	}

	.body-register > div:last-child > div {
		display: flex;
		width: 100%;
		cursor: pointer;
	}

	.body-register > div:last-child > div > div {
		display: flex;
	}

	.body-register > div:last-child > div > div:first-child {
		width: 40%;
		gap: 32px;
	}
	.body-register > div:last-child > div > div:last-child {
		flex: 1;
	}

	.wallet-desc > div:last-child,
	.email-desc > div:last-child,
	.node-desc > div:last-child {
		display: flex;
		flex-direction: column;
		padding-right: 32px;
		gap: 8px;
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

	.body-register > div:last-child > div > div:last-child {
		flex-direction: column;
		min-height: 105px;
		gap: 8px;
		border: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.15));
		padding: 16px;
		justify-content: space-between;
		margin-bottom: 24px;
	}

	.body-register > div:last-child > div > div:last-child > input {
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

	.body-register > div:last-child > .submit-register > div:last-child {
		border: none;
		padding: 0;
	}

	.body-register > div:last-child > .submit-register > div:last-child > div {
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
		background: var(--33333, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
	}

	.body-register.body-2 {
		padding: 0;
		gap: 65px;
	}

	.leaderboard {
		width: 100%;
		display: flex;
		position: relative;
	}

	.leaderboard * {
		cursor: auto;
	}

	.leaderboard > img {
		max-width: 500%;
		width: 1700px;
		position: absolute;
		top: -79%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 0;
	}

	.leaderboard-content {
		z-index: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.leaderboard-content > div {
	}

	.leaderboard-content > div:first-child {
		color: #fff;
		font-size: 32px;
		font-weight: 700;
		width: auto !important;
		text-align: center;
	}

	.leaderboard-content > div:nth-child(2) {
		color: #fff;
		font-size: 16px;
		font-weight: 300;
		opacity: 0.5;
		margin-top: 8px;
	}

	.leaderboard > .leaderboard-content > .leaderboard-table:last-child {
		max-width: 640px !important;
		width: 640px;
		border: none;
		gap: 0;
		margin-top: 24px;
		padding-top: 0;
		padding-bottom: 35px;
	}

	.table-header,
	.data-item {
		width: 100%;
		height: 35px;
		display: flex;
		align-items: center;
	}

	.table-header > div {
		display: flex;
		padding: 8px 16px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		background: #00ffd1;
		color: #000;
		height: 100%;
	}

	.data-item > div {
		height: 100%;
		display: flex;
	}

	.table-header > div:nth-child(1),
	.table-header > div:nth-child(2) {
		border-right: 1px solid #000;
	}

	.table-header > div:nth-child(1),
	.data-item > div:nth-child(1) {
		width: 10%;
		justify-content: center;
		align-items: center;
	}
	.table-header > div:nth-child(2),
	.data-item > div:nth-child(2) {
		flex: 72%;
	}
	.table-header > div:nth-child(3) {
		width: 18%;
		justify-content: center;
	}
	.data-item > div:nth-child(3) {
		width: 18%;
		justify-content: flex-end;
	}

	.data-item {
		height: 35px;

		background: linear-gradient(169deg, rgba(244, 244, 244, 0.46) -40%, rgba(128, 255, 209, 0) 50%);
	}

	.data-item > div {
		padding: 8px 16px;
		border-right: 1px solid #fff;
	}

	.data-item > div:nth-child(1) {
		border-left: 1px solid #fff;
		text-align: center;
	}

	.data-item > div:nth-child(3) {
		text-align: right;
	}

	.data-item > div:nth-child(2) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding-top: 0;
		padding-bottom: 0;
	}

	.data-item > div:nth-child(2) > div:first-child {
		flex: 1;
	}

	.data-item > div:nth-child(2) > div:nth-child(2) {
		cursor: pointer;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.data-item > div:nth-child(2) > div:nth-child(2) > svg {
		cursor: pointer;
	}

	.data-item > div:nth-child(2) > div:nth-child(2) > svg > g {
		cursor: pointer;
	}

	.data-item > div:nth-child(2) > div:nth-child(2) > svg > path {
		cursor: pointer;
	}

	.data-item > div:nth-child(2) > div:nth-child(2) > svg > g > path {
		cursor: pointer;
	}

	.data-item > div:nth-child(2) > div:nth-child(2) > defs {
		cursor: pointer;
	}

	.table-body {
		border-bottom: 1px solid #fff;
	}

	.wallet-desc > div:first-child,
	.email-desc > div:first-child {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.line {
		width: 1px;
		height: 100%;
		flex: 1;
		border-left: 1px solid rgba(244, 244, 244, 0.3);
		margin-bottom: 2px;
	}

	@media screen and (max-width: 1280px) {
		.body-register {
			padding: 20px 140px;
		}

		.body-register.body-2 {
			padding: 20px 0;
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
		.body-register > div:last-child > div {
			flex-direction: column;
		}

		.body-register > div:last-child > div > div:first-child {
			width: 100%;
		}

		.line {
			display: none;
		}
	}

	@media screen and (max-width: 674px) {
		.leaderboard > img {
			width: 250vw;
			top: 35px;
			transform: translate(-50%, -50%);
		}

		.leaderboard-content {
			padding: 0 20px;
		}

		.leaderboard > div:last-child > .leaderboard-table:last-child {
			width: 100%;
			padding: 0 0 20px 0;
		}

		.table-header > div:nth-child(1),
		.data-item > div:nth-child(1) {
			padding: 0;
			width: auto;
			min-width: 45px;
		}

		.data-item > div:nth-child(2) > div:first-child {
			max-width: calc(calc(100%) - 30px);
		}

		.table-header > div:nth-child(3),
		.data-item > div:nth-child(3) {
			min-width: 100px;
		}
	}

	@media screen and (max-width: 440px) {
		.leaderboard > img {
			width: 250vw;
			top: 25px;
			transform: translate(-50%, -52%);
		}
	}

	.data-item > div:nth-child(3) > div {
		font-family: 'Roboto Mono', monospace;
		font-size: 15px;
	}
</style>

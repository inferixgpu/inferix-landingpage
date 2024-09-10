<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import size from 'lodash.size';
	import find from 'lodash.find';
	import map from 'lodash.map';
	import orderBy from 'lodash.orderby';
	import take from 'lodash.take';
	import get from 'lodash.get';
	import moment from 'moment';
	import gsap from 'gsap';

	import leaderboard_light from '$images/png/innovatedBackground.png';

	let input_step = 0;
	let count = 1;
	let showModal = false;
	var nodes = [{ id: 1, value: '' }];
	let nav = 2;
	let data = [];
	let no_data_found = false;
	let is_mobile = false;
	let enter = false;
	let search_add = '';
	let searched_addresss = [];

	function onInputAddress(e) {
		search_add = e.target.value;
	}

	function handleKeydown(e) {
		if (e.key === 'Enter') {
			enter = true;
			searchAddress(search_add);
		}
	}

	function searchAddress(add) {
		if (!add) {
			searched_addresss = [];
			return;
		}
		searched_addresss = find(data, (item) => item.ownerAddress === add);
	}

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
				borderColor: '#5f5f5f'
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

	function getPointConverted(num) {
		return Number(num).toLocaleString('en-US');
	}

	async function fetchLeaderboard() {
		try {
			await axios
				.get('https://testnet-core.inferix.io/api/workers/statistics')
				.then((response) => {
					let temp_data = map(get(response, 'data.data'), (d, index) => {
						return {
							...d,
							...{
								id: index + 1,
								point_converted: getPointConverted(get(d, 'point', 0).toFixed(0)),
								truncated_add: getTruncatedAddress(d.ownerAddress)
							}
						};
					});
					data = orderBy(temp_data, ['point'], ['desc']);

					//data =  take(temp_data, 20);
					if (!size(take(temp_data, 20))) no_data_found = true;
				})
				.catch((error) => console.log('Error: ' + error));
		} catch (error) {
			no_data_found = true;
		}
	}

	function resize() {
		if (window.innerWidth <= 768) {
			is_mobile = true;
		} else {
			is_mobile = false;
		}
	}

	function getTruncatedAddress(add) {
		return add.slice(0, 5) + '...' + add.slice(-5);
	}

	onMount(async () => {
		if (nav == 1) {
			handleFocus(1);
			onHoverSubmit();
		}
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
				role="button"
				tabindex="0"
				class={nav == 1 ? 'nav-item nav-item-active' : 'nav-item'}
				on:click={(ele) => clickNav('registration', ele)}
			>
				<div>Registration</div>
			</div>
			<div
				role="button"
				tabindex="0"
				class={nav == 2 ? 'nav-item nav-item-active' : 'nav-item'}
				on:click={(ele) => clickNav('leaderboard', ele)}
			>
				<div>Leaderboard</div>
			</div>
		</div>
	{#if nav == 1}
		<div>
			<div role="button" tabindex="0" class="wallet-register" on:click={() => handleFocus(1)}>
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
							Enter your wallet ERC20 address so we can verify your account on the system 
							<!-- (<a
								href="https://youtube.com/shorts/IkZ1jl-pFxc?si=8O3_72m7biKupZX3"
								class="text-blue-500 hover:underline hover:filter-none"
								target="_blank"
							>
								Click to view instructions</a
							>) -->
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
						placeholder="Example: 0x0..."
						on:focus={() => handleFocus(1)}
					/>
					{#if isNullWallet}
						<div class="text-[12px] text-red-600">Wallet address is required.</div>
					{/if}
				</div>
			</div>
			<div class="email-register" role="button" tabindex="0" on:click={() => handleFocus(2)}>
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
			<div class="node-register" role="button" tabindex="0" on:click={() => handleFocus(3)}>
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
					<div class="add-node-register" role="button" tabindex="0" on:click={addNode}>
						<div>Add more +</div>
					</div>
				</div>
			</div>
			<div class="submit-register">
				<div />
				<div>
					<div id="submit_register" role="button" tabindex="0" on:click={handleSubmit}>
						<div>Submit</div>
					</div>
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
								class="flex w-[164px] h-[40px] bg-white text-black text-[16px] font-bold cursor-pointer justify-center items-center hover:bg-black hover:text-white"
								role="button"
								tabindex="0"
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
				<div>Leaderborad Top 20</div>
				<div>Inferix Node Whitelist Program</div>
				
				<div>
					Last Updated: {moment().format(
						'MM/DD/YYYY, hh:mm:ss A'
					)}
				</div>

				<div class="leaderboard-table">
					<div class="table-header">
						<div>Rank</div>
						<div>Wallet address</div>
						<div>Point</div>
					</div>
					{#if !no_data_found}<div class="table-body">
							{#each take(data, 20) as item, index (index)}
								<div class="data-item">
									<div><div>{item.id}</div></div>
									<div>
										<div>{item.truncated_add}</div>
									</div>
									<div><div>{item.point_converted}</div></div>
								</div>{/each}
						</div>
					{:else}<div class="no-data-found"><div>No data found!</div></div>{/if}
				</div>
				<div class="search_address" style="gap: 0">
					<input
						placeholder="Type your address and enter to search..."
						value={search_add}
						on:input={onInputAddress}
						on:keydown={handleKeydown}
					/>
					<div
						style="width: 18%; min-width: 135px; display: flex; align-items: center; justify-content: flex-end;"
					>
						<div style="font-family: 'Roboto Mono', monospace; font-size: 15px;">
							{enter ? get(searched_addresss, 'point_converted', 'Not found!') : ''}
						</div>
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
		//min-height: 105px;
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

	.modal-register-success > div > p:first-child {
		margin-bottom: 15px;
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
		top: -680px;
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
		font-size: 32px;
		font-weight: 700;
		width: auto !important;
		text-align: center;
	}

	.leaderboard-content > div:nth-child(3) {
		color: #fff;
		font-size: 16px;
		font-weight: 300;
		opacity: 0.5;
		margin-top: 8px;
	}

	.leaderboard > .leaderboard-content > .leaderboard-table {
		max-width: 395px !important;
		width: 100%;
		border: none;
		gap: 0;
		margin-top: 24px;
		padding-top: 0;
		padding-bottom: 35px;
		flex-direction: column;
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
		padding: 8px 10px;
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
		min-width: 50px;
		justify-content: center;
		align-items: center;
	}
	.table-header > div:nth-child(2),
	.data-item > div:nth-child(2) {
		flex: 72%;
	}
	.table-header > div:nth-child(3) {
		width: 18%;
		min-width: 135px;
		justify-content: center;
	}
	.data-item > div:nth-child(3) {
		width: 18%;
		min-width: 135px;
		justify-content: flex-end;
	}

	.data-item {
		height: 35px;

		background: linear-gradient(169deg, rgba(244, 244, 244, 0.46) -40%, rgba(128, 255, 209, 0) 50%);
	}

	.data-item > div {
		padding: 8px 10px;
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
	.table-body {
		border-bottom: 1px solid #fff;
	}

	.no-data-found {
		width: 100%;
		height: 35px;
		border: 1px solid #fff;
		border-top: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.no-data-found > div {
		color: #fff9;
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

	#submit_register:hover {
		//background: linear-gradient(45deg, #00d6d9 0%, #00c085 100%);
	}

	.body-register > div:last-child > div > .search_address:last-child {
		display: flex;
		padding: 0;
		border: none;
		flex-direction: row;

		& > input {
			color: #fff;
		}
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

		.body-register > div:last-child > div > div:first-child > div:last-child {
			padding-bottom: 15px;
		}
	}

	@media screen and (max-width: 674px) {
		.leaderboard > .leaderboard-content > .leaderboard-table {
			max-width: 350px;
			width: 100%;
		}
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
			min-width: 120px;
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

	.search_address {
		max-width: 395px;
		width: 100%;
		padding: 16px;
		padding-bottom: 0;

		& > input {
			width: 100%;
			height: 30px;
			padding-left: 10px;
			color: #000;
		}
	}
</style>

<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let input_step = 0;
	let count = 1;
	var nodes = [{ id: 1, value: '' }];

	function addNode() {
		count++;
		nodes = [...nodes, { id: count, value: '' }];
		console.log('eee', nodes);
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
				background:
					'linear-gradient(180deg, rgba(244, 244, 244, 0.56) 0.01%, rgba(244, 244, 244, 0) 100%)',
				duration: 0.8,
				ease: 'none'
			});

		for (let i = 0; i < not_focus.length; i++) {
			gsap.to(not_focus[i], {
				background: 'none',
				duration: 0.8,
				ease: 'none'
			});
		}
		input_step = i;
	}

	onMount(() => {
		handleFocus(1);
	});
</script>

<div class="body-register">
	<div class="wallet-register">
		<div class="wallet-desc">
			<div><div class="step"><div>1</div></div></div>
			<div>
				<div class="desc-active">Wallet Address</div>
				<div>Enter your wallet address so we can verify your account on the system</div>
			</div>
		</div>
		<div class="wallet-form">
			<div class="form-label">Make sure you have entered your correct wallet address here</div>
			<input placeholder="Enter wallet address" on:focus={() => handleFocus(1)} />
		</div>
	</div>
	<div class="email-register">
		<div class="email-desc">
			<div><div class="step"><div>2</div></div></div>
			<div>
				<div>Emaill Address</div>
				<div>Enter your wallet address so we can verify your account on the system</div>
			</div>
		</div>
		<div class="wallet-form">
			<div class="form-label">Make sure you have entered your correct wallet address here</div>
			<input placeholder="Enter email address" on:focus={() => handleFocus(2)} />
		</div>
	</div>
	<div class="node-register">
		<div class="node-desc">
			<div><div class="step"><div>3</div></div></div>
			<div>
				<div>Node ID</div>
				<div>Enter your wallet address so we can verify your account on the system</div>
			</div>
		</div>
		<div class="wallet-form">
			<div class="form-label">Make sure you have entered your correct wallet address here</div>
			{#each nodes as node (node.id)}<input
					placeholder="Enter node ID"
					bind:value={node.value}
					on:focus={() => handleFocus(3)}
				/>{/each}
			<div class="add-node-register" on:click={addNode}><div>Add more +</div></div>
		</div>
	</div>
	<div class="submit-register">
		<div />
		<div>
			<div><div>Submit</div></div>
		</div>
	</div>
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

		&:hover {
			opacity: 0.8;
		}
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

	@media screen and (max-width: 1280px) {
		.body-register {
			padding: 20px 140px;
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

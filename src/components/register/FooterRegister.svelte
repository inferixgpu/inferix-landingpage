<script>
	import SignUpModal from '$components/inferix/SignUpModal/SignUpModal.svelte';
	import HeaderLogo from '$images/icons/HeaderLogo.svg';
	import X from '$images/icons/X.svg';
	import D from '$images/icons/D.svg';
	import M from '$images/icons/M.svg';
	import Y from '$images/icons/Ytb.svg';
	import W from '$images/icons/warpcast.svg';

	const medias = [
		{ id: 1, name: 'Twitter', href: 'https://twitter.com/inferixgpu', icon: X },
		{ id: 2, name: 'Medium', href: 'https://medium.com/@inferixgpu', icon: M },
		{ id: 3, name: 'Discord', href: 'https://discord.gg/NJvcWYcB9W', icon: D },
		{ id: 4, name: 'Youtube', href: 'https://www.youtube.com/@InferixGPU', icon: Y },
		{ id: 5, name: 'Warpcast', href: 'https://warpcast.com/inferixgpu', icon: W }
	];
</script>

<div class="footer-register">
	<div class="flex">
		<div class="flex justify-between">
			<a href="https://inferix.io/">
				<img src={HeaderLogo} alt="Inferix" class="w-[152px] h-[32px]" />
			</a>
			<p class="font-base font-outfit font -normal mt-4 md:mt-0 text-white whitespace-nowrap">
				Decentralized GPU Network
			</p>
		</div>
		<div
			class="flex md:gap-10 justify-center gap-8 font-bold mt-2 md:mt-0 w-fit font-outfit md:text-lg text-base md:order-2 order-1 mediaContainer"
		>
			{#each medias as media (media.id)}
				<a target="_blank" href={media.href}><img src={media.icon} /></a>
			{/each}
		</div>
	</div>
	<div><div>© 2023 Inferix. All rights reserved.</div></div>
</div>

<style lang="postcss">
	.footer-register {
	}

	.footer-register > div:first-child {
		height: 120px;
		padding: 24px 156px;
		background: #111;
		justify-content: space-between;
	}

	.footer-register > div:first-child > div:first-child {
		flex-direction: column;
	}

	.footer-register > div:last-child {
		height: 32px;
		display: flex;
		background: #1a1b1b;
		justify-content: center;
		align-items: center;
	}

	.footer-register > div:last-child > div {
		color: rgb(255, 255, 255, 0.6);
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 18px;
	}

	@media screen and (max-width: 1280px) {
		.footer-register > div:first-child {
			padding: 24px 100px;
		}
	}

	@media screen and (max-width: 768px) {
		.footer-register > div:first-child {
			padding: 16px;
		}
	}

	@media screen and (max-width: 540px) {
		.footer-register > div:first-child {
			flex-direction: column;
			align-items: center;
			height: auto;
		}

		.footer-register > div:first-child > div:first-child {
			align-items: center;
			margin-bottom: 16px;
		}
	}
</style>

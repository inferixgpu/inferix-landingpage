<script>
	import { onMount, onDestroy } from 'svelte';
	import Header from '$components/register/HeaderRegister.svelte';
	import Body from '$components/register/BodyRegister.svelte';
	import Footer from '$components/register/FooterRegister.svelte';

	onMount(() => {
		const html = document.querySelector('html');
		html.style.minHeight = '100%';
		html.style.height = 'auto';
		const body = document.querySelector('body');
		body.style.minHeight = '100vh';
		body.style.height = '100%';
	});

	onDestroy(() => {
		return;
		const body = document.querySelector('body');
		body.style.height = '100vh';
	});
</script>

<div class="register">
	<Header />
	<Body />
	<Footer />
</div>

<style lang="postcss">
	.register {
		min-height: 100vh;
		width: 100%;
		height: 100%;
		background: #000;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	.register * {
		box-sizing: border-box;
	}
</style>

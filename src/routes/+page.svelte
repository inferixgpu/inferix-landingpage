<script>
	import Header from './Header/header.svelte';
	import Body from './Body/body.svelte';
	import Footer from './Footer/footer.svelte';
</script>

<div class="flex flex-col headerContainer">
	<Header />
	<Body />
	<Footer />
</div>

<style lang="postcss">
	.headerContainer {
		/* width: 100%; */
		height: 100vh;
	}
</style>

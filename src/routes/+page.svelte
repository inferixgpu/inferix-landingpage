<script>
	import Header from './Header/header.svelte';
	import Body from './Body/body.svelte';

</script>

<div class="flex flex-col w-full headerContainer">
	<Header />
	<Body />
</div>

<style lang="postcss">
	.headerContainer {
        background: url("$components/static/images/icons/headerBackground.svg") no-repeat center center fixed;
        background-size: cover;
		width: 100%;
		height: 100vh;
		@apply pt-[49.4px];
	}
</style>

<script lang="ts">
	import Header from '$components/header/Header.svelte';
	import Body from '$components/body/Body.svelte';
	import Footer from '$components/footer/Footer.svelte';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="h-screen px-5">
	<Header />
	<Body />
	{#if screenSize > 768}
		<Footer />
	{/if}
</div>

<style lang="postcss">
</style>

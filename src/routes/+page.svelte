<script>
	import Header from './Header/header.svelte';
</script>

<div class="flex flex-col w-full headerContainer">
	<Header />
    
</div>

<style lang="postcss">
	.headerContainer {
		background-color: red;
		width: 100%;
		height: 800px;
		@apply px-4 py-2.5 text-sm;
	}
</style>

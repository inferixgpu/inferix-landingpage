<script>
import headerLogo from "$images/icons/headerLogo.svg";
</script>

	<nav class="flex justify-between w-full headerContainer container mx-auto">
		<div class="flex gap-4">
			<!-- <img src={headerLogo} alt="logo"> -->
			<p class="text-base">Decentrazlied GPU Network</p>
		</div>
		<div class="flex gap-10 text-lg">
			<li class="active"><a href="#">About</a></li>
			<li><a href="#">GPU Neywork</a></li>
			<li><a href="#">Roadmap</a></li>
		</div>
	</nav>

<style lang="postcss">
	.headerContainer {
		background-color: black;
		@apply px-4 py-2.5 text-sm;
	}
	li {
		list-style-type: none;
	}
	.active {
		color: var(--green);
	}
</style>

<script>
	export let open;
</script>

{#if open}<div class="add-popup"><div>{open}</div></div>{/if}

<style scoped>
	.add-popup {
		height: 35px;
		position: absolute;
		top: 36px;
		z-index: 1;
		background: #fff;
		color: #000;
		border-radius: 8px;
		display: flex;
		align-items: center;
		padding: 0 10px;
	}

	@media screen and (max-width: 440px) {
		.add-popup {
			left: -20%;
		}
	}

	@media screen and (max-width: 380px) {
		.add-popup {
			padding: 0 7px;
			left: -29%;
			font-size: 15px;
		}
	}

	@media screen and (max-width: 340px) {
		.add-popup {
			left: -40%;
			font-size: 14px;
		}
	}
</style>

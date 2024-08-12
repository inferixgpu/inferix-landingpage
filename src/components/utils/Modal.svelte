<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let show = false;

	function close() {
		dispatch('close');
	}

	// Prevent click inside the modal from closing it
	function handleContentClick(event) {
		event.stopPropagation();
	}
</script>

<div
	class="modal"
	role="button"
	tabindex="0"
	on:click={close}
	style={show ? 'display: flex' : 'display: none'}
>
	<div class="modal-content" role="button" tabindex="0" on:click={handleContentClick}>
		<slot></slot>
	</div>
</div>

<style>
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		justify-content: center;
		align-items: center;
		z-index: 9999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		width: 60%;
		border-radius: 20px;
		background-color: white;
		padding: 25px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}
</style>

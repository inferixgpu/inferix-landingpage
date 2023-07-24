<script lang="ts">
    import {Modal, Spinner} from "flowbite-svelte";

    export let open: boolean;
    export let title: string;
</script>

<Modal title={title} bind:open={open} size="sm" permanent="true">
    <div class="text-center mx-auto" >
        <Spinner size="14"/>
    </div>
</Modal>
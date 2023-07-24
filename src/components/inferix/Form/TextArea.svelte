<script lang="ts">
    import {Label, Textarea} from "flowbite-svelte";

    export let label;
    export let value;

</script>
<style lang="postcss">
    :global(.textarea) {
        background-color: var(--grey-5);
        border-radius: 8px;
        outline: none !important;
        border: none !important;
        appearance: none !important;
        -webkit-appearance: none !important;
        @apply px-4 py-2.5 text-sm;
    }
</style>

<div class="flex flex-col gap-1">
    <Label class="text-sm font-light" for={$$props.name}>{label}</Label>
    <Textarea class="textarea" id={$$props.name} {...$$props} bind:value={value}/>
</div>
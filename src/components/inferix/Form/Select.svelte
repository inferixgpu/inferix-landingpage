<script lang="ts">
    import {Label, Select} from "flowbite-svelte";

    export let label: string;
    export let value;
    export let items: { value: string, name: string }[] = []

</script>
<style>

    :global(.selectInput) {
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
    <Select class="selectInput" id={$$props.name} items={items} {...$$props} bind:value={value}/>
</div>
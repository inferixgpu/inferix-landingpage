<script>

    import {browser} from '$app/environment'
    import {user} from "$stores/user.ts";

    $: if (!$user) {
        if (browser) {
            window.open('/signup');
        }
    }
</script>

{#if $user}
    <slot/>
{/if}
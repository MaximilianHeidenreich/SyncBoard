<script lang="ts">
import Toast from "./Toast.svelte";

export let toasts = [];
</script>

<div class="p-4">
    {#each toasts as toast}
        <Toast {...toast} />
    {/each}
</div>

<style lang="postcss">
div {
    position: absolute;
    top: 0;
    left: 0;
    //right: 0;
}
</style>
<script lang="ts">
import BoardItem from "./BoardItem.svelte";

export let items = [];
</script>

<div>
    {#if items.length <= 0}
        <h2 class="text-center">No items 😴</h2>
    {/if}
    <div class="grid grid-cols-3 grid-rows-3 gap-3">
        {#each items as item}
            <BoardItem on:itemCompletion {...item}/>
        {/each}
    </div>
</div>
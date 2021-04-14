<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { get } from 'svelte/store';
import { peerId } from '../routes/peerStore'

const dispatch = createEventDispatcher();

// PROPS
export let name, completed, completedBy, clazz;

let cssClass;
$: cssClass = !completed ? "open" : completedBy === get(peerId) ? "completedSelf" : "completedOther";

// FUNC
function completeItem() {
    dispatch("itemCompletion", {
        name: name
    });
}

</script>

<div on:click={completeItem} class="{clazz} {cssClass} rounded-lg flex p-6">
    <div class="self-center flex items-center justify-center w-full">
        <h5 class="text-center">{name}</h5>
    </div>
</div>

<style lang="postcss">
.open {
    @apply bg-gray-300 dark:bg-gray-300;
    @apply text-current dark:text-black;
    @apply cursor-pointer;
}
.completedSelf {
    @apply bg-purple-600;
    @apply text-white;
    @apply opacity-60 dark:bg-opacity-90;
    @apply cursor-not-allowed;
}
.completedOther {
    @apply bg-red-500;
    @apply text-white;
    @apply opacity-60 dark:bg-opacity-90;
    @apply cursor-not-allowed;
}
</style>
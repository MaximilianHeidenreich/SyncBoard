<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { get } from 'svelte/store';
import { peerId } from '../routes/peerStore'

const dispatch = createEventDispatcher();

// PROPS
export let name, completed, completedBy, clazz;

let background;
$: background = !completed ? "bg-gray-300" : completedBy === get(peerId) ? "bg-purple-600" : "bg-red-500";
let textColor;
$: textColor = !completed ? "" : "text-white"; 
let itemOpacity;
$: itemOpacity = !completed ? "" : "opacity-60";
let clickable;
$: clickable = completed ? "cursor-not-allowed" : "cursor-pointer";

// FUNC
function completeItem() {
    dispatch("itemCompletion", {
        name: name
    });
}

</script>

<div on:click={completeItem} class="{clazz} {background} {itemOpacity} {clickable} rounded-lg flex p-6">
    <div class="self-center flex items-center justify-center w-full">
        <h5 class="{textColor} text-center">{name}</h5>
    </div>
</div>
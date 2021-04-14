<script lang="ts">

export let id, type, message;

let color = "blue-600";
$: color = type === "error" ? "pink-600" : "blue-600";

</script>

<div class="mb-3">
    <div class="inline-flex items-center bg-white leading-none rounded-full p-2 shadow text-sm">
        <span class="inline-flex bg-{color} text-white rounded-full h-6 px-3 justify-center items-center">{type}</span>
        <span class="inline-flex text-black px-2">{message}</span>
    </div>
</div>

<style lang="postcss">

</style>
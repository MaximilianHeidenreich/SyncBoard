<script lang="ts">

export let id, type, message;

let color = type === "error" ? "pink-600" : type === "info" ? "purple-600" : "blue-600";

</script>

<div class="mb-3">
    <div class="inline-flex items-center bg-white leading-none text-{color} rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-{color} text-white rounded-full h-6 px-3 justify-center items-center">{type}</span>
        <span class="inline-flex px-2">{message}</span>
    </div>
</div>

<style lang="postcss">

</style>
<script lang="ts">
import { goto } from '$app/navigation';

// BINDINGS
let input_roomId = "";

// PAGE NAV
function newRoom() {
    goto("/new")
}
function joinRoom() {
    goto(`/${input_roomId}`)
}

</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>SyncBoard</title>
    <meta name="title" content="SyncBoard" />
    <meta name="description" content="A synchonized peer to peer board with checkable items." />
    <meta name="keywords" content="SyncBoard, Tools, Utility, Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript" />
    <meta name="author" content="maximilianheidenreich" />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://syncboard.maximilian-heidenreich.de/" />
    <meta property="og:title" content="SyncBoard" />
    <meta property="og:description" content="A synchonized peer to peer board with checkable items." />
    <meta
        property="og:image"
        content="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2/raw/master/screenshot.png"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://syncboard.maximilian-heidenreich.de/" />
    <meta property="twitter:title" content="SyncBoard" />
    <meta
        property="twitter:description"
        content="A synchonized peer to peer board with checkable items."
    />
    <meta
        property="twitter:image"
        content="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2/raw/master/screenshot.png"
    />
</svelte:head>


<h1 class="text-center mb-12">SyncBoard</h1>

<section class="flex space-x-12">
    <div class="w-4/12">
        <div class="flex space-x-4">
            <div class="w-full flex justify-center">
                <button on:click={joinRoom} class="center">Join existing room</button>
            </div>
        </div>
        <input bind:value={input_roomId} placeholder="Room key" class="mt-4">
    </div>
    <div class="flex w-4/12 justify-around">
        <h2 class="">OR</h2> <!-- self-center -->
    </div>
    <div class="w-4/12">
        <div class="w-full flex justify-center">
            <button on:click={newRoom}>Start a new board</button>
        </div>
    </div>
</section>

<h2 class="text-center mt-24">What?</h2>
<section class="text-center">
    <p>
        SyncBoard is a small tool, you can use to create shared, interactive task boards.
        Tasks on a board can be completed by either you, or any other connected peer.
        <br>
        TODO: Exampel img
    </p>
</section>

<!--
<blockquote class="text-xl p-2 bg-gray-200 dark:bg-gray-800 mb-2 transition-colors duration-500">
    <a href="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2"><b>Github repo</b></a>
</blockquote>
<p>
  Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.
</p>
<p>The title is using utility class, but all other elements is using style component.</p>
<p>Just check <code>src/routes/index.svelte</code> to see the code.</p>
-->

<style lang="postcss">

    p {
        @apply text-lg;
        @apply mt-0 mb-1;

    }
    code {
        @apply transition-colors duration-500;
        @apply px-1;
        @apply bg-gray-200;
        :global(.dark) & {
            @apply bg-gray-800;
        }
    }
    pre {
        @apply transition-colors duration-500;
        @apply text-left p-2 bg-gray-200;
        :global(.dark) & {
            @apply bg-gray-800;
        }
    }
</style>

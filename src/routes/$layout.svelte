<script lang="ts">
  import '../global.postcss'
  import { theme } from './store'
  import { onMount } from 'svelte'

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
</script>

<main>
  <slot />
</main>

<footer class="mt-6 text-center">
    <small class="opacity-100 text-gray-400 font-bold">Made with ❤️ by <a href="https://github.com/MaximilianHeidenreich" target="_blank">Maximilian Heidenreich</a> - <a href="https://github.com/MaximilianHeidenreich/SyncBoard" target="_blank">GitHub</a></small>
</footer>

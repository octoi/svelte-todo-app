<script lang="ts">
  import TodoInput from './components/TodoInput.svelte';
</script>

<main class="flex flex-col items-center mt-28">
  <h1 class="font-bold text-3xl">Svelte Todo</h1>
  <TodoInput />
</main>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

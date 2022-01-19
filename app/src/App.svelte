<script lang="ts">
  import TodoInput from './components/TodoInput.svelte';
  import TodoList from './components/TodoList.svelte';
</script>

<main class="flex flex-col items-center mt-28 p-5">
  <h1 class="font-bold text-3xl">Svelte Todo</h1>
  <TodoInput />
  <TodoList />
</main>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

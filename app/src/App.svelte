<script lang="ts">
  import TodoInput from './components/TodoInput.svelte';
  import TodoList from './components/TodoList.svelte';
</script>

<main class="flex flex-col mt-28 p-5 items-center">
  <div class="w-full md:w-1/3">
    <h1 class="font-bold text-3xl">Svelte Todo</h1>
    <TodoInput />
    <TodoList />
  </div>
</main>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  import { fade, scale } from 'svelte/transition';
  import { getTodos } from '../api';
  import { todoStore } from '../store/todoStore';
  import Todo from './Todo.svelte';

  onMount(() => {
    getTodos().then((todos: any) => todoStore.set(todos));
  });
</script>

<div class="mt-5">
  {#each $todoStore as todo (todo._id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <Todo {todo} />
    </div>
  {/each}
</div>

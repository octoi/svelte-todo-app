<script lang="ts">
  import { onMount } from 'svelte';
  import { getTodos } from '../api';
  import { todoStore } from '../store/todoStore';

  onMount(() => {
    getTodos().then((todos: any) => todoStore.set(todos));
  });
</script>

<div class="mt-5">
  <!-- todo details -->
</div>

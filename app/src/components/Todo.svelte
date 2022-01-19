<script lang="ts">
  import type { TodoType } from '../utils/types';

  export let todo: TodoType;

  $: resolved = todo.resolved;

  const handleChange = () => {
    resolved = !resolved;
  };
</script>

<div
  class="w-full p-4 bg-app-secondaryDark rounded-md mt-3 flex items-center justify-between"
  class:bg-app-wisteria={resolved}
>
  <h1
    class="text-xl text-gray-200 font-medium"
    class:line-through={resolved}
    class:text-app-secondaryDark={resolved}
  >
    {todo.todo}
  </h1>
  <div class="ml-2 flex items-center">
    <input
      type="checkbox"
      checked={resolved}
      on:change={handleChange}
      class="rounded-full checkbox border-app-wisteria mr-2 checked:border-app-secondaryDark checked:bg-app-wisteria"
    />
    <button>
      <i
        class="far fa-trash-alt text-xl text-app-wisteria"
        class:text-app-secondaryDark={resolved}
      />
    </button>
  </div>
</div>

<style>
  .checkbox {
    margin-left: 20px;
    width: 8px;
    height: 8px;
    -webkit-appearance: none;
    background-color: none;
    border-width: 2px;
    padding: 9px;
    /* border-radius: 3px; */
    display: inline-block;
    position: relative;
    overflow: none;
  }
</style>

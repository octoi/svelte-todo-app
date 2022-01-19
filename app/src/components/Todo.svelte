<script lang="ts">
  import type { TodoType } from '../utils/types';
  import { resolveTodo } from '../api';
  import { todoStore } from '../store/todoStore';

  export let todo: TodoType;

  $: resolved = todo.resolved;

  const handleChange = () => {
    resolved = !resolved;
    resolveTodo(todo._id, !todo.resolved)
      .then(() => {
        todoStore.update((todos) => {
          return todos.filter((todoItem) => {
            if (todoItem._id === todo._id) {
              todoItem.resolved = !todoItem.resolved;
            }
            return todoItem;
          });
        });
      })
      .catch((msg) => {
        alert(msg);
        resolved = todo.resolved;
      });
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
      class="rounded-full checkbox border-app-wisteria mr-2 checked:border-app-secondaryDark"
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
    display: inline-block;
    position: relative;
    overflow: none;
  }
</style>

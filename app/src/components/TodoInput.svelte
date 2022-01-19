<script lang="ts">
  import type { TodoType } from '../utils/types';
  import { todoStore } from '../store/todoStore';
  import { newTodo } from '../api';

  let todoValue: string = '';

  const handleFormSubmit = () => {
    newTodo(todoValue)
      .then((todo: TodoType) => {
        todoValue = '';

        // add new todo to todoStore
        todoStore.update((allTodos) => [todo, ...allTodos]);
      })
      .catch((err) => {
        alert(err);
      });
  };
</script>

<form on:submit|preventDefault={handleFormSubmit} class="mt-5 w-full flex">
  <input
    type="text"
    placeholder="New Todo"
    class="w-full bg-app-secondaryDark p-4 rounded-md text-xl border-2 border-app-secondaryDark outline-none focus:border-app-wisteria"
    bind:value={todoValue}
    required
  />
  <button
    class="font-medium text-xl ml-2 rounded-md px-3 bg-app-secondaryDark wrounded-full flex items-center justify-center transition-all hover:bg-app-wisteria hover:text-app-primaryDark"
    >Add
  </button>
</form>

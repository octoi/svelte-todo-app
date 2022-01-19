<script lang="ts">
  const handleFormSubmit = () => {
    alert('Form submit');
  };
</script>

<form
  on:submit|preventDefault={handleFormSubmit}
  class="mt-5 w-full flex justify-center"
>
  <input
    type="text"
    placeholder="New Todo"
    class="bg-app-secondaryDark p-4 rounded-md text-xl w-full md:w-1/3 border-2 border-app-secondaryDark outline-none focus:border-app-wisteria"
  />
  <button
    class="font-medium text-xl ml-2 rounded-md px-3 bg-app-secondaryDark wrounded-full flex items-center justify-center transition-all hover:bg-app-wisteria hover:text-app-primaryDark"
    >Add
  </button>
</form>

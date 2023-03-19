<template>
  <div class="p-10 h-[100vh] bg-teal-600 overflow-auto flex flex-col gap-5">
    <h1 class="text-4xl font-bold mb-5 text-white">My Trello Board</h1>
    <TrelloBoard />
    <footer>
      <p>
        Use <kbd>Backspace</kbd> or <kbd>Delete</kbd> to remove focused task.
      </p>
      <p>
        Drag <span class="drag-handle cursor-grab text-lg"> ⠋ </span> to move
        task and columns.
      </p>
      <p>Hold <kbd>alt</kbd> and drag to copy task.</p>
    </footer>
  </div>
</template>

<style scoped>
  p {
    @apply text-white text-2xl mt-5;
  }
  kbd {
    @apply text-red-300 border rounded-md bg-white;
  }
</style>

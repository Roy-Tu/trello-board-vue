<template>
  <div class="p-10 h-[100vh] bg-teal-600 overflow-auto flex flex-col gap-5">
    <h1 class="text-4xl font-bold mb-5 text-white">My Trello Board</h1>
    <TrelloBoard />
    <footer>
      <p>Hold <kbd>alt</kbd> and drag to copy task.</p>
      <p>
        Drag <span class="drag-handle cursor-grab text-lg"> ⠋ </span> to move
        task and columns.
      </p>
      <p>
        You can use <kbd>Backspace</kbd> or <kbd>Delete</kbd> to remove focused
        task.
      </p>
    </footer>
  </div>
</template>

<style scoped>
  p {
    @apply text-white text-2xl mt-5;
  }
  kbd {
    background-color: #eee;
    border-radius: 3px;
    border: 1px solid #b4b4b4;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
      0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
    color: #333;
    display: inline-block;
    font-size: 0.85em;
    font-weight: 700;
    line-height: 1;
    padding: 2px 4px;
    white-space: nowrap;
  }
</style>

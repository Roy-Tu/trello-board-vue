<script setup lang="ts">
  import type { ID, Task } from "~~/types";
  import { ref } from "vue";

  const props = defineProps<{
    task: Task;
  }>();

  const emit = defineEmits<{
    (e: "delete", payload: ID): void;
  }>();

  const focused = ref(false);
  const isDeleting = ref(false); // Add a ref to control the delete animation

  onKeyStroke(["Backspace", "Delete"], (e) => {
    if (focused.value) handleDelete();
  });

  // Method to handle the delete animation
  const handleDelete = async () => {
    isDeleting.value = true;
    await new Promise((resolve) => setTimeout(resolve, 200)); // Wait for the animation to complete
    emit("delete", props.task.id);
  };
</script>

<template>
  <div
    :title="new Date(task.createdAt).toLocaleDateString()"
    class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex items-start"
    :class="{ 'task-delete': isDeleting, hide: isDeleting }"
    @focus="focused = true"
    @blur="focused = false"
    tabindex="0"
  >
    <DragHandle class="pr-2" />
    <span class="w-4/5 break-words">
      {{ task.title }}
    </span>
    <DeleteButton @delete="handleDelete" class="min-w-[0.65rem]" />
  </div>
</template>

<style scoped>
  .task-delete {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.15s ease-out,
      transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .task-delete.hide {
    opacity: 0;
    transform: translateX(-100%);
  }
</style>

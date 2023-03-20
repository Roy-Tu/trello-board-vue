<script setup lang="ts">
  import type { ID, Task } from "~~/types";
  const props = defineProps<{
    task: Task;
  }>();

  const emit = defineEmits<{
    (e: "delete", payload: ID): void;
  }>();
  const focused = ref(false);

  onKeyStroke(["Backspace", "Delete"], (e) => {
    if (focused.value) emit("delete", props.task.id);
  });
</script>

<template>
  <div
    :title="new Date(task.createdAt).toLocaleDateString()"
    class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex items-start"
    @focus="focused = true"
    @blur="focused = false"
    tabindex="0"
  >
    <DragHandle class="pr-2" />
    <span class="w-4/5 pr-2 break-words">
      {{ task.title }}
    </span>
    <DeleteButton
      @delete="emit('delete', props.task.id)"
      class="min-w-[0.65rem]"
    />
  </div>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
  import type { Column, Task } from "~~/types";
  import draggable from "vuedraggable";

  defineProps<{
    column: Column;
    deleteColumn: Function;
  }>();
  const alt = useKeyModifier("Alt");
</script>

<template>
  <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
    <header class="font-bold mb-4 flex gap-2 items-center">
      <DragHandle />
      <input
        class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
        @keyup.enter="($event.target as HTMLInputElement).blur()"
        type="text"
        v-model="column.title"
      />
      <DeleteButton @delete="() => deleteColumn(column)" />
    </header>
    <draggable
      v-model="column.tasks"
      :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
      handle=".drag-handle"
      :animation="150"
      itemKey="id"
    >
      <template #item="{ element: task }: { element: Task }">
        <div>
          <TrelloBoardTask
            :task="task"
            @delete="column.tasks = column.tasks.filter((v) => v.id !== $event)"
          />
        </div>
      </template>
    </draggable>

    <footer>
      <NewTask @add="column.tasks.push($event)" />
    </footer>
  </div>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
  import type { Column } from "~~/types";
  import { nanoid } from "nanoid";
  import { ref } from "vue";
  const columns = ref<Column[]>([
    {
      id: nanoid(),
      title: "Backlog",
      tasks: [
        {
          id: nanoid(),
          title: "Create marketing landing page",
          createdAt: new Date(),
        },
      ],
    },
    {
      id: nanoid(),
      title: "My Todo List",
      tasks: [
        {
          id: nanoid(),
          title: "Do laundry",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Buy groceries",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Clean the house",
          createdAt: new Date(),
        },
      ],
    },
    {
      id: nanoid(),
      title: "My Todo List",
      tasks: [
        {
          id: nanoid(),
          title: "Do laundry",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Buy groceries",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Clean the house",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Finish homework",
          createdAt: new Date(),
        },
      ],
    },
    {
      id: nanoid(),
      title: "My Todo List",
      tasks: [
        {
          id: nanoid(),
          title: "Do laundry",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Buy groceries",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Clean the house",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Finish homework",
          createdAt: new Date(),
        },
      ],
    },
  ]);
</script>

<template>
  <div class="flex gap-4 overflow-x-auto items-start pb-10">
    <div
      v-for="column in columns"
      :key="column.id"
      class="column bg-gray-200 p-5 rounded min-w-[250px]"
    >
      <header class="font-bold mb-4">
        {{ column.title }}
      </header>
      <TrelloBoardTask v-for="task in column.tasks" :task="task" />
      <footer>
        <button class="text-gray-500">+ Add a Card</button>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

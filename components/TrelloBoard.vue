<script setup lang="ts">
  import type { Column, Task } from "~~/types";
  import { nanoid } from "nanoid";
  import draggable from "vuedraggable";
  import { ref } from "vue";
  let columns = useLocalStorage<Column[]>("trelloBoard", [
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

  const alt = useKeyModifier("Alt");

  const createColumn = () => {
    const column: Column = {
      id: nanoid(),
      title: "",
      tasks: [],
    };
    columns.value.push(column);
    nextTick(() => {
      (
        document.querySelector(
          ".column:last-of-type .title-input"
        ) as HTMLInputElement
      ).focus();
    });
  };

  const deleteColumn = (column: Column) => {
    column.title === ""
      ? (columns.value = columns.value.filter((c) => c.id !== column.id))
      : null;
  };
</script>

<template>
  <div class="flex items-start overflow-x-auto gap-4">
    <draggable
      v-model="columns"
      group="columns"
      :animation="150"
      handle=".drag-handle"
      itemKey="id"
      class="flex gap-4 items-start pb-10"
    >
      <template #item="{ element: column }: { element: Column }">
        <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="font-bold mb-4">
            <DragHandle />
            <input
              class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
              @keyup.enter="($event.target as HTMLInputElement).blur()"
              @keydown.backspace="() => deleteColumn(column)"
              type="text"
              v-model="column.title"
            />
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
                  @delete="
                    column.tasks = column.tasks.filter((v) => v.id !== $event)
                  "
                />
              </div>
            </template>
          </draggable>

          <footer>
            <NewTask @add="column.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggable>
    <button
      @click="createColumn"
      class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50"
    >
      + Add Another Column
    </button>
  </div>
</template>

<style scoped>
  .sortable-drag .task {
    transform: rotate(5deg);
  }

  .sortable-ghost .task {
    position: relative;
  }
  .sortable-ghost .task::after {
    content: "";
    @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
  }

  .task:focus,
  .task:focus-visible {
    @apply outline-gray-400 !important;
    outline: gray auto 1px;
  }
</style>

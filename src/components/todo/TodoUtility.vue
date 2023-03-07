<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoList from './TodoList.vue'

const todoStore = useTodoStore()
const { items, todoItems, completedItems } = storeToRefs(todoStore)
const { switchTodo } = todoStore

function handleSwitchTodo({ id, completed }) {
  switchTodo(id, completed)
}

onMounted(() => {
  items.value = [
    { id: 1, text: 'farina', completed: false },
    { id: 2, text: 'olio', completed: true },
    { id: 3, text: 'pane', completed: false },
    { id: 4, text: 'zucchero', completed: true },
    { id: 5, text: 'sale', completed: false },
  ]
})
</script>

<template>
  <h2>To-do Utility</h2>

  <TodoList
    v-if="todoItems.length > 0"
    title="To-do list"
    :items="todoItems"
    @shitchCompletedTodo="handleSwitchTodo"
  />
  <TodoList
    v-if="completedItems.length > 0"
    title="Completed list"
    :items="completedItems"
    @shitchCompletedTodo="handleSwitchTodo"
  />
</template>

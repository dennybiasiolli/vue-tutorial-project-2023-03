<script setup>
import { computed, onMounted, ref } from 'vue'
import TodoList from './TodoList.vue'

const items = ref([])
function filterTodoCondition(item) {
  return !item.completed
}
// const todoItems = computed(() => items.value.filter(item => !item.completed))
const todoItems = computed(() => items.value.filter(filterTodoCondition))
const completedItems = computed(() => items.value.filter(item => item.completed))

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
    title="To-do list"
    :items="todoItems"
  />
  <TodoList
    title="Completed list"
    :items="completedItems"
  />
</template>

<style scoped>
.item-completed {
  color: grey;
}
</style>
<script setup>
import { computed, onMounted, ref } from 'vue'

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

  <h4>To-do list</h4>
  <ul>
    <li
      v-for="item in todoItems"
      :key="item.id"
      :class="{ 'item-completed': item.completed }"
    >
      {{ item.text }}
    </li>
  </ul>

  <h4>Completed list</h4>
  <ul>
    <li
      v-for="item in completedItems"
      :key="item.id"
      :class="{ 'item-completed': item.completed }"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<style scoped>
.item-completed {
  text-decoration: line-through;
}
</style>
<script setup>
import { onMounted, ref } from 'vue'

const items = ref([])

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
  <ul>
    <li
      v-for="item in items"
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
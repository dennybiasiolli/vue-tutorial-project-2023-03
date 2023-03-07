<script setup>
import TodoItem from './TodoItem.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <h4>{{ title }}</h4>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
      :class="{ 'item-completed': item.completed }"
    >
      <TodoItem
        :text="item.text"
        :completed="item.completed"
      />
    </li>
  </ul>
</template>

<style scoped>
.item-completed {
  color: grey;
}
</style>

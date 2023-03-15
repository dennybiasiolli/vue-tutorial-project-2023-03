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
const emit = defineEmits(['shitchCompletedTodo', 'changeTodoText'])
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
        @todoChange="emit('shitchCompletedTodo', { id: item.id, completed: $event })"
        @textChanged="emit('changeTodoText', { id: item.id, text: $event })"
      />
    </li>
  </ul>
</template>

<style scoped>
.item-completed {
  color: grey;
}
</style>

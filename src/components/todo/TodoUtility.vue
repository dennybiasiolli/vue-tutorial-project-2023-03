<script setup>
import { storeToRefs } from 'pinia'
import { ref, watch, onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoList from './TodoList.vue'

const todoStore = useTodoStore()
const { todoItems, completedItems } = storeToRefs(todoStore)
const { switchTodo, addTodo, getTodoItems, updateTodo, deleteTodo } = todoStore

function handleSwitchTodo({ id, completed }) {
  switchTodo(id, completed)
}
function handleChangeTodoText({ id, text }) {
  updateTodo(id, text)
}

const formValid = ref(false)
const itemText = ref('')
function handleSubmit() {
  addTodo(itemText.value)
  itemText.value = ''
}
function validateForm() {
  formValid.value = !!itemText.value.trim()
}
watch(itemText, validateForm)

onMounted(() => {
  getTodoItems()
})
</script>

<template>
  <h2>To-do Utility</h2>

  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Add to-do item" v-model="itemText" />
    <button type="submit" :disabled="!formValid">Add</button>
  </form>

  <TodoList
    v-if="todoItems.length > 0"
    title="To-do list"
    :items="todoItems"
    @shitchCompletedTodo="handleSwitchTodo"
    @changeTodoText="handleChangeTodoText"
    @deleteTodo="deleteTodo"
  />
  <TodoList
    v-if="completedItems.length > 0"
    title="Completed list"
    :items="completedItems"
    @shitchCompletedTodo="handleSwitchTodo"
    @changeTodoText="handleChangeTodoText"
    @deleteTodo="deleteTodo"
  />
</template>

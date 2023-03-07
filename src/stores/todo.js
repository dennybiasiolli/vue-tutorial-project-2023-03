import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state() {
    return {
      items: [],
    }
  },
  getters: {
    todoItems() {
      return this.items.filter(item => !item.completed)
    },
    completedItems() {
      return this.items.filter(item => item.completed)
    },
  },
  actions: {
    switchTodo(id, completed) {
      const item = this.items.find(item => item.id === id)
      item.completed = completed
    },
  },
})

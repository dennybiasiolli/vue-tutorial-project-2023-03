import axios from 'axios'
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
    async getTodoItems() {
      try {
        const { data } = await axios.get('/todos')
        this.items = data
      } catch (error) {
        this.items = []
      }
    },
    async addTodo(text) {
      try {
        await axios.post('/todos', { text })
        await this.getTodoItems()
      } catch (error) { }
    },
    switchTodo(id, completed) {
      const item = this.items.find(item => item.id === id)
      item.completed = completed
    },
  },
})

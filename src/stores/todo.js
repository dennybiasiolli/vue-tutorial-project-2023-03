import { defineStore } from 'pinia'
import * as todoService from '@/services/todo'

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
        const { data } = await todoService.getTodos()
        this.items = data
      } catch (error) {
        this.items = []
      }
    },
    async addTodo(text) {
      try {
        await todoService.addTodo({ text })
        await this.getTodoItems()
      } catch (error) { }
    },
    async switchTodo(id, completed) {
      try {
        await todoService.switchTodo(id, { completed })
        await this.getTodoItems()
      } catch (error) { }
    },
    async updateTodo(id, text) {
      try {
        await todoService.updateTodo(id, { text })
        await this.getTodoItems()
      } catch (error) { }
    },
    async deleteTodo(id) {
      try {
        await todoService.deleteTodo(id)
        await this.getTodoItems()
      } catch {
      }
    },
  },
})

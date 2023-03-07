import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state() {
    return {
      count: 0,
    }
  },
  getters: {
    isEven() {
      return this.count % 2 === 0
    },
    isOdd() {
      return !this.isEven
    },
    isPositive() {
      return this.count > 0
    },
  },
  actions: {
    increment(value) {
      this.count += value
    },
    multiply(value) {
      this.count *= value
    },
  },
})

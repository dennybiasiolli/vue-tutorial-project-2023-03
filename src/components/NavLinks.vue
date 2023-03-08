<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { todoItems } = storeToRefs(todoStore)
</script>

<template>
  <nav>
    <router-link :to="{ name: 'HomePage' }">Home</router-link>
    |
    <router-link :to="{ name: 'Counter' }">Counter</router-link>
    |
    <router-link :to="{ name: 'CounterOptions' }">Counter Options</router-link>
    |
    <router-link :to="{ name: 'PlaygroundComponents' }">Playground</router-link>
    |
    <router-link :to="{ name: 'Inputs' }">Inputs</router-link>
    |
    <router-link :to="{ name: 'Watchers' }">Watchers</router-link>
    |
    <router-link :to="{ name: 'Forms' }">Forms</router-link>
    |
    <router-link :to="{ name: 'AxiosTest' }">AxiosTest</router-link>
    |
    <router-link :to="{ name: 'TodoUtility' }">
      Todo Utility
      <span v-if="todoItems.length > 0">
        ({{ todoItems.length }})
      </span>
    </router-link>
  </nav>
</template>

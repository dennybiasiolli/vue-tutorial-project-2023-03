<script setup>
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useStore } from '@/stores/main'

const store = useStore()
const { count, isEven, isOdd, isPositive } = storeToRefs(store)
const { increment, multiply } = store
const number = ref(123)

function isEvenFn() {
  console.log('isEvenFn is called')
  return count.value % 2 === 0
}

const evenOdd = computed(() => count.value % 2 === 0 ? 'even' : 'odd')
</script>

<template>
  <h2>Counter - Composition API</h2>
  <div>
    Count is {{ count }}<br>
    Is Even: {{ isEven }}<br>
    Is Odd: {{ isOdd }}<br>
    Is Positive: {{ isPositive }}

    <hr>

    <div>1. {{ count % 2 === 0 ? 'even' : 'odd' }}</div>
    <div>2. {{ isEvenFn() ? 'even' : 'odd' }}</div>
    <div>3. {{ isEven ? 'even' : 'odd' }}</div>
    <div>4. {{ evenOdd }}</div>
    {{ number }}
  </div>
  <button @click="increment(1)">+1</button>
  <button @click="increment(-1)">-1</button>
  <button @click="multiply(2)">*2</button>
  <button @click="multiply(0.5)">/2</button>
  <button @click="multiply(count)">^2</button>
</template>

<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const number = ref(123)

function isEvenFn() {
  console.log('isEvenFn is called')
  return count.value % 2 === 0
}

const isEven = computed(() => {
  console.log('isEven computed is called')
  return count.value % 2 === 0
})
const isOdd = computed(() => !isEven.value)
const evenOdd = computed(() => count.value % 2 === 0 ? 'even' : 'odd')
const isPositive = computed(() => count.value > 0)

function increment(value) {
  count.value += value
}
function multiply(value) {
  count.value *= value
}
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

<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

const isEven = computed(() => count.value % 2 === 0)
const isOdd = computed(() => !isEven.value)
const isPositive = computed(() => count.value > 0)

function increment(value) {
  count.value += value
}
function multiply(value) {
  count.value *= value
}
</script>

<template>
  <div>
    Count is {{ count }}<br>
    Is Even: {{ isEven }}<br>
    Is Odd: {{ isOdd }}<br>
    Is Positive: {{ isPositive }}
  </div>
  <button @click="increment(1)">+1</button>
  <button @click="increment(-1)">-1</button>
  <button @click="multiply(2)">*2</button>
  <button @click="multiply(0.5)">/2</button>
  <button @click="multiply(count)">^2</button>
</template>

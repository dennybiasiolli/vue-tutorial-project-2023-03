<script setup>
import { ref, computed, onMounted } from 'vue'

// reactive state
const count = ref(0)

const isEven = computed(() => count.value % 2 === 0)

// functions that mutate state and trigger updates
function increment(value) {
  count.value += value
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div>
    Count is: {{ count }}<br>
    Is Even: {{ isEven }}
  </div>
  <button @click="increment(1)">Increment</button>
  <button @click="increment(-1)">Decrement</button>
</template>

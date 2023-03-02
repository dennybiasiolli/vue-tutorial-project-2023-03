<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const n = ref(0)

function increment() {
  n.value++
}

onMounted(() => {
  console.log('Component4 mounted')
})
onUnmounted(() => {
  console.log('Component4 unmounted')
})

</script>

<template>
  <div>
  <h2>Component 4</h2>
    <div v-if="n > 2">
      Maggiore di 2
    </div>
    <div v-else-if="n < -2">
      Minore di -2
    </div>
    <div v-else>
      Tra 2 e -2
    </div>
  
    <div v-show="n > 2">
      Maggiore di 2
    </div>
    <div v-show="n <= 2">
      Minore o uguale a 2
    </div>
  
    <button @click="increment">Increment</button>
  </div>
</template>

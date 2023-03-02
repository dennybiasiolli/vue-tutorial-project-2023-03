<script setup>
import { nextTick, reactive, ref } from 'vue';

const state = reactive({ count: 0 })

function increment() {
  state.count++
  nextTick(() => {
    // access updated DOM
  })
}

const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // these will work as expected.
  obj.nested.count++
  obj.arr.push('baz')
}

const n1 = ref(1)
const n2 = reactive({ value: 1 })
function incrementN() {
  n1.value = n1.value + 1
  n2.value = n2.value + 1
}

const data = reactive({
  count: 0,
  n1: 1,
  n2: 234,
})
</script>

<template>
  <h2>Component 2</h2>
  <div>{{ state.count }}</div>
  <button @click="increment">Increment</button>

  <hr>

  <div>{{ obj }}</div>
  <button @click="mutateDeeply">Mutate deeply</button>


  <hr>

  {{ n1 }} {{ n2.value }}
  <button @click="incrementN">Increment N</button>
</template>

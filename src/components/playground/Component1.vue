<script setup>
import { ref, reactive } from 'vue';

const msg = 'Ciao 1'
const rawHtml = '<div style="color:red">Ciao 2</div>'
const myClass2 = 'my-class-2'
const objectOfAttrs = reactive({
  id: 'container',
  class: 'wrapper',
  style: 'color:blue',
})

const number = ref(0)
const ok = ref(true)
const message = 'This is my message'
const id = 'id123'
function getStyle() {
  if (ok.value) {
    return 'color:red;'
  }
  return 'color:blue;'
}
</script>

<template>
  <h2>Component 1</h2>
  <span>Message: {{ msg }}</span><br>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <hr>

  <div :class="myClass2">My DIV 1</div>
  <div v-bind="objectOfAttrs">My DIV 2</div>

  <hr>

  {{ number + 1 }}
  {{ ok ? 'YES' : 'NO' }}
  {{ message.split('').reverse().join('') }}
  <div
    :id="`list-${id}-${msg}-test`"
    :style="getStyle()"
  >My other div</div>
</template>

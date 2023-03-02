<script setup>
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue';

const isActive = ref(true)
const hasError = ref(false)
const error = ref(null)
const classObject = reactive({
  active: true,
  'text-danger': false
})
const classObject2 = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))

function getQualcosa() {
  try {
    // something
  } catch (err) {
    error.value = err
    hasError.value = true
    classObject['text-danger'] = true
  }
}

const activeColor = 'red'
const fontSize = 20

onMounted(() => {
  console.log('Component3 mounted')
})
onUnmounted(() => {
  console.log('Component3 unmounted')
})

</script>

<template>
  <div>
    <h2>Component 3</h2>
    <div class="static" :class="classObject">My DIV 1</div>
    <div class="static" :class="classObject2">My DIV 2</div>

    <div
      class="static"
      :class="{ 'my-active-class': isActive, 'text-danger': hasError }"
    ></div>

    <div :style="{ color: activeColor, fontSize: `${fontSize}px` }">Div style 1</div>
    <div :style="{ 'font-size': `${fontSize}px` }">Div style 2</div>
  </div>
</template>

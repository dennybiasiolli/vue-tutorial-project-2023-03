<script setup>
const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])

function changeSomething() {
  emit('update:modelValue', props.modelValue + 'CIAO')
}
</script>

<template>
  <h1 v-if="modelValue === 'CIAO'">CIAOOOOO</h1>
  <button @click="changeSomething">Change</button>
</template>

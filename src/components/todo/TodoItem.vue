<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['todoChange', 'textChanged'])

const showForm = ref(false)
const formValid = ref(false)
const innerText = ref('')
function handleEditClick() {
  innerText.value = props.text
  showForm.value = true
}
function handleCancelClick() {
  showForm.value = false
}
function handleSaveClick() {
  emit('textChanged', innerText.value)
  showForm.value = false
}
function validateForm() {
  formValid.value = !!innerText.value.trim()
}
watch(innerText, validateForm)
</script>

<template>
  <span v-if="!showForm">
    <input
      type="checkbox"
      :checked="completed"
      @change="emit('todoChange', $event.target.checked)"
    />
    {{ text }}
    <button @click="handleEditClick">Edit</button>
  </span>
  <span v-else>
    <input type="text" v-model="innerText" />
    <button type="button" @click="handleCancelClick">Cancel</button>
    <button type="button" :disabled="!formValid" @click="handleSaveClick">Save</button>
  </span>
</template>

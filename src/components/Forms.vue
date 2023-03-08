<script setup>
import { ref, watch } from 'vue'

const description = ref('')
const descriptionValid = ref(false)
function validateDescription() {
  console.log('validateDescription')
  descriptionValid.value = !!description.value.trim()
}

const username = ref('')
const password = ref('')
const formValid = ref(false)
function validateForm() {
  console.log('validateForm')
  formValid.value = !!(
    username.value.trim() && password.value.trim()
  )
}

const username2 = ref('')
const password2 = ref('')
function handleSubmit(e) {
  const isValid = !!(
    username2.value.trim() && password2.value.trim()
  )
  console.log('Form is valid?', isValid)
  if (!isValid) {
    // e.preventDefault()
    // do your thing
  }
}

const formValid3 = ref(false)
const username3 = ref('')
const password3 = ref('')
function validateForm3() {
  console.log('validateForm3')
  formValid3.value = !!(
    username3.value.trim() && password3.value.trim()
  )
}
watch([username3, password3], validateForm3)
</script>

<template>
  <h2>Forms</h2>

  <h4>VALIDATION ON INPUT CHANGE</h4>
  <p>
    <input type="text"
      placeholder="Description"
      v-model="description"
      @input="validateDescription"
    />
    <input type="text"
      placeholder="Description"
      v-model="description"
      @change="validateDescription"
    />
    Valid: {{ descriptionValid }}
  </p>

  <h4>VALIDATION ON FORM CHANGES</h4>
  <form @input="validateForm">
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit" :disabled="!formValid">Submit</button>
  </form>
  <form @change="validateForm">
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit" :disabled="!formValid">Submit</button>
  </form>

  <h4>VALIDATION ON FORM SUBMIT</h4>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="username2" placeholder="Username" />
    <input type="password" v-model="password2" placeholder="Password" />
    <button type="submit">Submit</button>
  </form>

  <h4>VALIDATION USING A WATCHER</h4>
  <form>
    <input type="text" v-model="username3" placeholder="Username" />
    <input type="password" v-model="password3" placeholder="Password" />
    <button type="submit" :disabled="!formValid3">Submit</button>
  </form>
</template>

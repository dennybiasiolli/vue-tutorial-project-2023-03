<script setup>
import { ref, watch } from 'vue'

const description = ref('')
const name = ref('')
const surname = ref('')

console.log('Setup')

// function changes1(newValue, oldValue) {
//   console.table(['OldValue', oldValue, 'NewValue:', newValue])
// }
// watch(description, changes1)
watch(description, (newValue, oldValue) => {
  console.table(['OldValue', oldValue, 'NewValue:', newValue])
}, { immediate: true })

watch([name, surname], ([newName, newSurname], [oldName, oldSurname]) => {
  console.table([
    'OldValue',
    JSON.stringify([newName, newSurname]),
    'NewValue:',
    JSON.stringify([oldName, oldSurname]),
  ])
})
</script>

<template>
  <h2>Watchers</h2>
  <div>
    Description: <input type="text" v-model="description" />
  </div>

  <div>
    Name: <input type="text" v-model="name" />
  </div>
  <div>
    Surname: <input type="text" v-model="surname" />
  </div>
</template>

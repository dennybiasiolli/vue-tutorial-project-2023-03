<script setup>
import { ref } from 'vue'

const message = ref('')
const checked = ref(false)

const people = [
  { id: 1, name: 'Jack' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Mike' },
]
const checkedNames = ref([])

const picked = ref('')
const selected = ref(null)
const muliSelected = ref([])

const num = ref(0)
const trimmedText = ref('')
</script>

<template>
  <h2>Inputs</h2>

  <h4>Text</h4>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />
  <p>Message (lazy) is: {{ message }}</p>
  <input v-model.lazy="message" placeholder="edit me" />
  <br>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <h4>Checkbox</h4>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>Checked names: {{ checkedNames }}</div>
  <template v-for="person in people" :key="person.id">
    <input type="checkbox" :id="person.id" :value="person.id" v-model="checkedNames">
    <label :for="person.id">{{ person.name }}</label>
  </template>

  <h4>Radio</h4>
  <div>Picked: {{ picked }}</div>
  <template v-for="person in people" :key="person.id">
    <input type="radio" :id="person.id" :value="person.id" v-model="picked" />
    <label :for="person.id">{{ person.name }}</label>
  </template>

  <h4>Select</h4>
  <div>Selected: {{ selected }}</div>
  <select v-model="selected">
    <option disabled :value="null">Please select one</option>
    <option
      v-for="person in people"
      :key="person.id"
      :value="person"
    >{{ person.name }}</option>
  </select>

  <div>Selected: {{ muliSelected }}</div>
  <select v-model="muliSelected" multiple>
    <option
      v-for="person in people"
      :key="person.id"
      :value="person"
    >{{ person.name }}</option>
  </select>

  <div>
    <p>Number is: {{ num }} --&gt; {{ num === 1 }}</p>
    <input type="number" v-model="num" placeholder="edit me" />
    <input type="text" v-model.number="num" placeholder="edit me" />
  </div>

  <div>Trimmed text is &quot;{{ trimmedText }}&quot;</div>
  <input v-model.trim="trimmedText" />
</template>

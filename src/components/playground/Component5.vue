<script setup>
import { ref, reactive } from 'vue';

const parentMessage = 'Parent'
const items = ref([{ id: 123, message: 'Foo' }, { id: 456, message: 'Bar' }])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
  <div>
    <h2>Component 5</h2>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>

    <ul>
      <li v-for="(value, key, index) in myObject">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>

    <ul>
      <li v-for="n in 10">
        {{ n }}
      </li>
    </ul>

    <ul>
      <template v-for="item in items" :key="item.id">
        <li>{{ item.message }}</li>
        <li class="divider" role="presentation"></li>
      </template>
    </ul>
  </div>
</template>

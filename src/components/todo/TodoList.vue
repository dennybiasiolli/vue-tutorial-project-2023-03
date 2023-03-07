<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <h4>{{ title }}</h4>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
      :class="{ 'item-completed': item.completed }"
    >
      <input type="checkbox" v-model="item.completed" /> {{ item.text }}
    </li>
  </ul>
</template>

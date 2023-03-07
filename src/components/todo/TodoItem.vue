<script setup>
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
const emit = defineEmits(['todoChange'])
</script>

<template>
  <input
    type="checkbox"
    :checked="completed"
    @change="emit('todoChange', $event.target.checked)"
  /> {{ text }}
</template>

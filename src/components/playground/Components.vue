<script setup>
import { ref } from 'vue'

import Component1 from '@/components/playground/Component1.vue'
import Component2 from '@/components/playground/Component2.vue'
import Component3 from '@/components/playground/Component3.vue'
import Component4 from '@/components/playground/Component4.vue'
import Component5 from '@/components/playground/Component5.vue'
import InputTests from '@/components/playground/InputTests.vue'

const canShow = ref(false)
function toggle() {
  canShow.value = !canShow.value
}
</script>

<template>
  <div>
    <h2>Components</h2>
    <InputTests />
    <Component5 />
    <button @click="toggle">Toggle show</button>
    <Component4 v-if="canShow" />
    <Component3 v-if="canShow" />
    <Component2 v-show="canShow" />
    <Component1 v-show="canShow" />
  </div>
</template>

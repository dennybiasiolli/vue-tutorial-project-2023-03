<script setup>
import { ref } from 'vue';
import InputCustom from '@/components/playground/InputCustom.vue'
import CustomComponent from '@/components/playground/CustomComponent.vue'

const searchText = ref('')
</script>

<template>
  <h2>Input tests</h2>

  <p>
    <label>Tipo 1 (html, v-model)</label><br>
    <input v-model="searchText" />
  </p>

  <p>
    <label>Tipo 2 (html, esplicito)</label><br>
    <input
      :value="searchText"
      @input="searchText = $event.target.value"
    />
  </p>

  <p>
    <label>Tipo 3 (componente custom, esplicito)</label><br>
    <InputCustom
      :model-value="searchText"
      @update:model-value="searchText = $event"
    />
  </p>

  <p>
    <label>Tipo 4 (componente custom, v-model)</label><br>
    <InputCustom v-model="searchText" />
  </p>

  <CustomComponent v-model="searchText" />
</template>

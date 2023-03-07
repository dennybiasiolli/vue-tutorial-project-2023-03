<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h2>Page Not Found</h2>
  <p>
    &quot;{{ route.fullPath }}&quot;
    does not exists.
  </p>

  Return to
  <router-link :to="{ name: 'HomePage' }">
    Home Page
  </router-link>
</template>

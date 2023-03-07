<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from '@/stores/main'

export default {
  computed: {
    ...mapState(useStore, ['count', 'isEven', 'isOdd', 'isPositive']),
  },
  methods: {
    ...mapActions(useStore, ['increment', 'multiply']),
  },
}
</script>

<template>
  <h2>Counter - Options API</h2>
  <div>
    Count is {{ count }}<br>
    Is Even: {{ isEven }}<br>
    Is Odd: {{ isOdd }}<br>
    Is Positive: {{ isPositive }}
  </div>
  <button @click="increment(1)">+1</button>
  <button @click="increment(-1)">-1</button>
  <button @click="multiply(2)">*2</button>
  <button @click="multiply(0.5)">/2</button>
  <button @click="multiply(count)">^2</button>
</template>

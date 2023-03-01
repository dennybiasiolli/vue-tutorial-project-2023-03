<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    isEven() {
      return this.count % 2 === 0
    },
    isOdd() {
      return !this.isEven
    },
    isPositive() {
      return this.count > 0
    },
  },
  methods: {
    increment(value) {
      this.count += value
    },
    multiply(value) {
      this.count *= value
    },
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

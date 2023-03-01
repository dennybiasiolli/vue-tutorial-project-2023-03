<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  computed: {
    isEven() {
      return this.count % 2 === 0
    },
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment(value=1) {
      this.count += value
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <div>
    Count is: {{ count }}<br>
    Is Even: {{ isEven }}
  </div>
  <button @click="increment">Increment</button>
  <button @click="increment(1)">Increment</button>
  <button @click="increment(-1)">Decrement</button>
</template>

<template>
  <nav>
    <router-link :to="{ name: 'HomePage' }">Home</router-link>
    |
    <router-link :to="{ name: 'Counter' }">Counter</router-link>
    |
    <router-link :to="{ name: 'CounterOptions' }">Counter Options</router-link>
    |
    <router-link :to="{ name: 'PlaygroundComponents' }">Playground</router-link>
    |
    <router-link :to="{ name: 'TodoUtility' }">Todo Utility</router-link>
  </nav>
</template>

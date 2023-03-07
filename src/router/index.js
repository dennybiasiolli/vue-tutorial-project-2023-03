import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

import Counter from '@/components/Counter.vue'
import CounterOptions from '@/components/CounterOptions.vue'
import HomePage from '@/components/HomePage.vue'
import PlaygroundComponents from '@/components/playground/Components.vue'
import TodoUtility from '@/components/todo/TodoUtility.vue'

export const routes = [
  {
    name: 'HomePage',
    path: '/',
    component: HomePage,
  },
  {
    name: 'Counter',
    path: '/counter',
    component: Counter,
  },
  {
    name: 'CounterOptions',
    path: '/counter-options',
    component: CounterOptions,
  },
  {
    name: 'PlaygroundComponents',
    path: '/playground-components',
    component: PlaygroundComponents,
  },
  {
    name: 'TodoUtility',
    path: '/todo-utility',
    component: TodoUtility,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

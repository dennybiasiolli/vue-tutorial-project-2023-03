import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

import Counter from '@/components/Counter.vue'
import CounterOptions from '@/components/CounterOptions.vue'
import PlaygroundComponents from '@/components/playground/Components.vue'
import TodoUtility from '@/components/todo/TodoUtility.vue'

export const routes = [
  {
    path: '/counter',
    component: Counter,
  },
  {
    path: '/counter-options',
    component: CounterOptions,
  },
  {
    path: '/playground-components',
    component: PlaygroundComponents,
  },
  {
    path: '/todo-utility',
    component: TodoUtility,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

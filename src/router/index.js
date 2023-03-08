import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

import Counter from '@/components/Counter.vue'
import CounterOptions from '@/components/CounterOptions.vue'
import HomePage from '@/components/HomePage.vue'
import Inputs from '@/components/Inputs.vue'
import NotFound from '@/components/NotFound.vue'
import PlaygroundComponents from '@/components/playground/Components.vue'
import TodoUtility from '@/components/todo/TodoUtility.vue'
import Watchers from '@/components/Watchers.vue'

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
    name: 'Inputs',
    path: '/inputs',
    component: Inputs,
  },
  {
    name: 'Watchers',
    path: '/watchers',
    component: Watchers,
  },
  {
    name: 'TodoUtility',
    path: '/todo-utility',
    component: TodoUtility,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

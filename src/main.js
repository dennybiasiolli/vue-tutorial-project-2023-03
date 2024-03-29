import { createApp } from 'vue'
import '@/plugins/axios'
import { router } from '@/router'
import { pinia } from '@/stores'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { MutationCache, QueryCache, QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.log('An error occured', error)
    }
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.log('An error occured', error)
    }
  }),
  defaultOptions: {
    mutations: {
      retry: 0
    },
    queries: {
      retry: 1,
      retryDelay: 1000,
      refetchOnWindowFocus: true,
      refetchOnMount: true
    }
  }
})

app.use(VueQueryPlugin, {
  queryClient
})

app.mount('#app')

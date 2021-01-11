import { createApp } from 'vue'
import components from '@/common'
import App from './App.vue'
import router from '@/router'
import './style/index.less'

const app = createApp(App)
app.use(router).use(components)

app.mount('#app')

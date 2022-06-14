import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios.js'
const app = createApp(App)

app.use(router).mount('#app')
app.use(axios)


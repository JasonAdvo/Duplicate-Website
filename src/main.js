import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '/src/router/router.js' // import the router configuration


const app = createApp(App)

app.use(router) // tell Vue to use the router
app.mount('#app')


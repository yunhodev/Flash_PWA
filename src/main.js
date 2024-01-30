import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@ruffle-rs/ruffle'
// import '@ruffle-rs/ruffle/ruffle.js'

createApp(App).use(router).mount('#app')

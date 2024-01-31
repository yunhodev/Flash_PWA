/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import '@webassemblyjs'
/*
import '@webassemblyjs/wasm-edit'
import '@webassemblyjs/wasm-gen'
import '@webassemblyjs/wasm-opt'
import '@webassemblyjs/wasm-parser'
import '@webassemblyjs/floating-point-hex-parser'
import '@webassemblyjs/helper-api-error'
import '@webassemblyjs/helper-buffer'
*/
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import '@ruffle-rs/ruffle'
import { Buffer } from 'buffer'

// WebAssembly.instantiateStreaming(fetch("@/assets/ruffle/.wasm"))

// WebAssembly.instantiate(Buffer)

createApp(App).use(router).mount('#app')

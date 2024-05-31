import { createApp } from 'vue'
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css

import './style.css'
import App from './App.vue'
import router from './router.js'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import './style.css'
import './assets/scss/style.scss'

import { gsap } from "gsap";
import * as bootstrap from 'bootstrap'



import App from './App.vue'
import router from './router.js'

createApp(App).use(router).mount('#app')

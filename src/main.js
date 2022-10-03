import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './routes/router'

import axios from 'axios'
import VueAxios from 'vue-axios'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to) => {

    let isAuthenticated = localStorage.getItem('user')

    if (!isAuthenticated && to.name !== 'Login' && to.name !== 'Register') return { name: 'Login' }
})

createApp(App).use(router).use(VueAxios, axios).mount('#app')
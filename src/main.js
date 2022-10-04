import { createApp } from 'vue'
// -----------------------------------------------
import { createRouter, createWebHistory } from 'vue-router'
// -----------------------------------------------
import { routes } from './routes/router'
// -----------------------------------------------
import App from './App.vue'
// -----------------------------------------------
import axios from 'axios'
import VueAxios from 'vue-axios'
// -----------------------------------------------
import store from './store'
// -----------------------------------------------
const router = createRouter({
    history: createWebHistory(),
    routes
})
// -----------------------------------------------
router.beforeEach(async (to) => {

    let isAuthenticated = !!store.getters.getUser

    if (!isAuthenticated && to.name !== 'Login' && to.name !== 'Register') return { name: 'Login' }
})
// -----------------------------------------------
createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
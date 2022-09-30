export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/CartView.vue')
    },
    {
        path: '/auth',
        name: 'Auth',
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('../views/LoginView.vue')
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('../views/RegisterView.vue')
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/UserView.vue')
    },
    {
        path: '/product/:storeId/:productId',
        name: 'Detail',
        component: () => import('../views/DetailView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue')
    },
]
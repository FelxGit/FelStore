import Login from './Login.vue'
import Register from './Register.vue'

const authRoutes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
];

export { authRoutes }

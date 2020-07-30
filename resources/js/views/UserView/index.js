import UserBoard from './Userboard.vue'
import Admin from './Admin.vue'

const userRoutes = [
    {
        path: '/admin/:page',
        name: 'admin-pages',
        component: Admin,
        meta: {
            requiresAuth: true,
            is_admin: true
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: {
            requiresAuth: true,
            is_admin: true
        }
    },
    {
        path: '/dashboard',
        name: 'userboard',
        component: UserBoard,
        meta: {
            requiresAuth: true,
            is_user: true
        }
    },
];

export { userRoutes }

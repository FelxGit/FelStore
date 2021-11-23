import UserBoard from './UserBoard'
import Admin from './Admin.vue'

const userRoutes = [
    // {
    //     path: '/admin',
    //     name: 'admin',
    //     component: Admin,
    //     meta: {
    //         requiresAuth: true,
    //         is_admin: true
    //     }
    // },
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

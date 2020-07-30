import Vue from 'vue'
import Router from 'vue-router'

import { appRoutes as app } from './views/ProductView';
import { authRoutes as auth } from './views/AuthView'
import { pageCodesRoutes as pageCodes } from './views/PageCodesView'
import { userRoutes as user } from './views/UserView'
// import { noteRoutes as note} from './views/notes'

Vue.use(Router);
const routes = [...app, ...auth, ...pageCodes, ...user ]; // spread operator(...) - spread properties from object to multiple arguments

const router = new Router({
  mode: 'history',
  routes
});

// this is like middleware for before each route
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) { //to a route that requires authentication
        if (localStorage.getItem('bigStore.jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('bigStore.user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.is_admin == 1) {
                    next()
                }
                else {
                    next({ name: 'userboard' })
                }
            }
            else if (to.matched.some(record => record.meta.is_user)) {
                if (user.is_admin == 0) {
                    next()
                }
                else {
                    next({ name: 'admin' })
                }
            }
            next()
        }
    } else {
        next()
    }
  })
  
export default router
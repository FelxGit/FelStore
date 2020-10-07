import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import { appRoutes as app } from '../views/ProductView';
import { authRoutes as auth } from '../views/AuthView'
import { pageCodesRoutes as pageCodes } from '../views/PageCodesView'
import { userRoutes as user } from '../views/UserView'
// import { noteRoutes as note} from './views/notes'

const routes = [...app, ...auth, ...pageCodes, ...user ]; // spread operator(...) - spread properties from object to multiple arguments

const router = new Router({
  mode: 'history',
  routes
});

// this is like one time middleware for every route
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) { //to a route that requires authentication
//         if (localStorage.getItem('felStore.jwt') == null) {
//             next({
//                 path: '/login', 
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             let user = JSON.parse(localStorage.getItem('felStore.user'))
//             if (to.matched.some(record => record.meta.is_admin)) {
//                 if (user.is_admin == 1) {
//                     next()
//                 }
//                 else {
//                     next({ name: 'userboard' })
//                 }
//             }
//             else if (to.matched.some(record => record.meta.is_user)) {
//                 if (user.is_admin == 0) {
//                     next()
//                 }
//                 else {
//                     next({ name: 'admin' })
//                 }
//             }
//             next()
//         }
//     } else {
//         next()
//     }
//   })

  router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    // NProgress.start()

    next()
  })
  
  router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    // NProgress.done()
  })
  
export default router
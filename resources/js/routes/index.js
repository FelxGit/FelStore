import Home from '../Product/Home.vue'
import SingleProduct from '../Product/SingleProduct.vue'
import Checkout from '../Product/Checkout.vue'
import Confirmation from '../Product/Confirmation.vue'
import Cart from '../Product/Cart.vue'
import UserBoard from '../User/Userboard.vue'

const appRoutes = [
    { path: '/', component: Home, name: 'home'},
    { path: '/cart', component: Cart, name: 'cart' },
    { path: '/products/:id', name: 'single-products', component: SingleProduct },
    { path: '/confirmation', name: 'confirmation', component: Confirmation },
    { path: '/checkout', name: 'checkout', component: Checkout },
    { path: '/dashboard', name: 'userboard', component: UserBoard }
];

export { appRoutes }; 

/***
 * prop, or a more like laravel route parameter
 * 
    { path: '/user/:id', component: User, props: true },
*/

/***
 * children, or a more like laravel route resource
 * 
{ 
    path: '/product',
    name: 'product.index',  
    component: ProductIndex,
    children: [
        create, store, show, edit, update, pdelete
    ]
}
*/

/***
 * meta, or a more like laravel middleware?
 * 
    meta: {
        requiresAuth: true,
        is_user: true
    }
}
*/

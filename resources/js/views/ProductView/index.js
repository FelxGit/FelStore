import Home from './Home.vue'
import SingleProduct from './SingleProduct.vue'
import Checkout from './Checkout.vue'
import Confirmation from './Confirmation.vue'
import Cart from './Cart.vue'

const appRoutes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/products/:id',
        name: 'single-products',
        component: SingleProduct
    },
    {
        path: '/confirmation',
        name: 'confirmation',
        component: Confirmation
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
        props: (route) => ({ pid: route.query.pid }) //hmm
    },
];

export { appRoutes }; 

// export default {
//     path: '/product',
//     name: 'product.index',
//     component: ProductIndex,
//     children: [
//       create, store, show, edit, update, pdelete
//     ]
//   }
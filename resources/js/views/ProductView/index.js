import Home from './Home.vue'
import SingleProduct from './SingleProduct.vue'
import Checkout from './Checkout.vue'
import Confirmation from './Confirmation.vue'

const appRoutes = [
    {
        path: '/',
        name: 'home',
        component: Home
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

export { appRoutes }; // only bec none default export can be renamed

// export default {
//     path: '/product',
//     name: 'product.index',
//     component: ProductIndex,
//     children: [
//       create, store, show, edit, update, pdelete
//     ]
//   }
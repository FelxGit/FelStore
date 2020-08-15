<template>
        <div>
            <div class="container-fluid hero-section d-flex align-content-center justify-content-center flex-wrap ml-auto">
                <h2 class="title">Admin Dashboard</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <ul style="list-style-type:none">
                            <li class="active"><button class="btn" @click="setComponent('maindashboard')">Dashboard</button></li>
                            <li><button class="btn" @click="setComponent('orders')">Orders</button></li>
                            <li><button class="btn" @click="setComponent('products')">Products</button></li>
                            <li><button class="btn" @click="setComponent('users')">Users</button></li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <component :is="activeComponent"></component>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    import MainDashboard from '../../components/AdminComponent/MainDashboard.vue'
    import Users from '../../components/AdminComponent/Users.vue'
    import Products from '../../components/AdminComponent/Products.vue'
    import Orders from '../../components/AdminComponent/Orders.vue'

    export default {
        data() {
            return {
                user: null,
                activeComponent: null
            }
        },
        components: {
            MainDashboard, Users, Products, Orders
        },
        beforeMount() {
        },
        methods: {
            setComponent(value) {
                switch(value) {
                    case "users":
                        this.activeComponent = Users
                        this.$router.push({name: 'admin-pages', params: {page: 'users'}})
                        break;
                    case "orders":
                        this.activeComponent = Orders
                        this.$router.push({name: 'admin-pages', params: {page: 'orders'}})
                        break;
                    case "products":
                        this.activeComponent = Products
                        this.$router.push({name: 'admin-pages', params: {page: 'products'}})
                        break;
                    default:
                        this.activeComponent = MainDashboard
                        this.$router.push({name: 'admin'})
                        break;
                }
            }
        }
    }
    </script>

    <style scoped>
    .hero-section { height: 20vh; background: #ababab; align-items: center; margin-bottom: 20px; margin-top: -20px; }
    .title { font-size: 60px; color: #ffffff; }
    </style>
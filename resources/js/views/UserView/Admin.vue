<template>
        <div>
            <header-title title="Admin Dashboard"></header-title>
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
                        break;
                    case "orders":
                        this.activeComponent = Orders
                        break;
                    case "products":
                        this.activeComponent = Products
                        break;
                    default:
                        this.activeComponent = MainDashboard
                        break;
                }
            }
        }
    }
    </script>

    <style scoped>
    </style>
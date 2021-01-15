<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand">Fel Store</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto"></ul>
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <router-link v-show="!isLoggedIn" :to="{ name: 'login' }" class="nav-link">Login</router-link>
                        <router-link v-show="!isLoggedIn" :to="{ name: 'register' }" class="nav-link">Register</router-link>
                        <router-link :to="{ name: 'cart' }" class="nav-link">Cart</router-link>
                        <router-link :to="{ name: 'checkout' }" class="nav-link">Checkout</router-link>
                        <router-link v-show="isLoggedIn" :to="{ name: 'userboard' }" class="nav-link"> Hi, {{name}}</router-link>
                        <router-link v-show="isLoggedIn" :to="{ name: 'userboard' }" class="nav-link"> Hi, {{name}}</router-link>
                        <li class="nav-link" > Logout</li>
                    </ul>
                </div>
            </div>
        </nav>
        <main class="py-4">
            <!-- emitted from login to trigger this event -->
            <router-view @loggedIn="change"></router-view>  
        </main>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.component('HeaderTitle', require('../components/TemplateParts/HeaderTitle.vue').default)
Vue.component('ContentSpinner', require('../components/LoadingAnimation/ContentSpinner.vue').default)
Vue.component('InputNumber', require('../components/TemplateParts/InputNumber.vue').default)

export default {
    data() {
        return {
            name: null,
            isLoggedIn: localStorage.getItem('fhive.jwt') != null
        }
    },
    mounted() {
        this.setDefaults()
    },
    methods : {
        setDefaults() {
            if (this.isLoggedIn) {
                let user = JSON.parse(localStorage.getItem('fhive.user'))
                this.name = user.name
            }
        },
        change() {
            this.isLoggedIn = localStorage.getItem('fhive.jwt') != null
            this.setDefaults()
        },
        logout(){
            localStorage.removeItem('fhive.jwt')
            localStorage.removeItem('fhive.user')
            this.change()
            this.$router.push('/') //redirect user to homepage  
        }
    }
}
</script>
import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './app-routes.js'

import App from './views/App'

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});


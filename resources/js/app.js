import Vue from 'vue'
import App from './views/App'
import router from './config/routes.js'
import axios from './config/axios.js'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.prototype.$http = axios
const app = new Vue({
    el: '#app',
    components: { App },
    router
})

    <template>
        <div>
            <header-title title="Your Orders"></header-title>
            <div class="container">
                <div class="row">
                    <content-spinner v-show="loading"></content-spinner>
                    <div class="col-md-12">
                        <br>
                        <div class="row">
                            <div class="col-md-4 product-box" v-for="(order,index) in orders" :key="index">
                                <img :src="order.products.image" :alt="order.products.name">
                                <h5><span v-html="order.products.name"></span><br>
                                    <span class="small-text text-muted">$ {{order.products.price}}</span>
                                </h5>
                                <hr>
                                <span class="small-text text-muted">Quantity: {{order.quantity}}
                                    <span class="float-right">{{order.is_delivered == 1? "shipped!" : "not shipped"}}</span>
                                </span>
                                <br><br>
                                <p><strong>Delivery address:</strong> <br>{{order.address}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                user : null,
                orders : []
            }
        },
        computed: {
            ...mapState(['loading'])
        },
        beforeMount() {
            this.user = JSON.parse(localStorage.getItem('felStore.user'))

            this.$http.get(`api/users/${this.user.id}/orders`)
                 .then(response => this.orders = response.data)         
        }
    }
    </script>
    
    <style scoped>
        .small-text { font-size: 14px; }
        .product-box { border: 1px solid #cccccc; padding: 10px 15px; }
    </style>
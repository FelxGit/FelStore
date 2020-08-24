 <template>
        <div class="row">
            <div class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text">
                <a href='/admin/orders'>Orders ({{orders.length}})</a>
            </div>
            <hr>
            <div class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text">
                <a href='/admin/products'>Products ({{products.length}})</a>
            </div>
            <div class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text">
                <a href='/admin/users'>Users ({{users.length}})</a>
            </div>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                user : null,
                orders : [],
                products : [],
                users : []
            }
        },
        beforeMount() {
            this.$http.get('/api/users/').then(response => this.users = response.data)
            this.$http.get('/api/products/').then(response => this.products = response.data)
            this.$http.get('/api/orders/').then(response => this.orders = response.data)
        }
    }
    </script>

    <style scoped>
    .big-text { font-size: 28px; }
    .product-box { border: 1px solid #cccccc; padding: 10px 15px; height: 20vh }
    </style>
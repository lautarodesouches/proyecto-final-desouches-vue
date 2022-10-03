<template>
  <div v-if='loading'>
    <Loading />
  </div>
  <div v-if='!loading' class='w-100 h-100'>
    <div class='text-center my-5 w-100 px-5' v-if='cart?.length > 0'>
      <div>
        <h2>Carrito</h2>
      </div>
      <div class='my-5'>
        <div class='row text-center mb-3'>
          <div class='col-3'>
            <h5>Nombre</h5>
          </div>
          <div class='col-3'>
            <h5>Imagen</h5>
          </div>
          <div class='col-3'>
            <h5>Precio</h5>
          </div>
          <div class='col-3'>
            <h5>Cantidad</h5>
          </div>
        </div>
        <CartItem v-for='item of cart' :item='item' :key='item.id' />
      </div>
      <div>
        <h5 class='text'>Subtotal: ${{subtotal}}</h5>
        <h5 class='text'>Envio: ${{shippingCost}}</h5>
        <h4>Total: ${{this.subtotal + this.shippingCost}}</h4>
        <div class='row align-items-center justify-content-center'>
          <div class='col-12 my-2 my-md-0 col-md-3'>
            <button class='w-100 btn btn-secondary mt-3 text-white' @click='goBack()'>Volver</button>
          </div>
          <div class='col-12 my-2 my-md-0 col-md-3'>
            <button class='w-100 btn btn-primary mt-3 text-white' @click='purchase()'>Finalizar compra</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if='cart.length < 1' class='text-center my-5'>
      <h2>El carrito se encuentra vacío</h2>
      <button class='btn btn-info mt-3 text-white' @click='goBack()'>Volver</button>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// ---------------------
import axios from 'axios'
import { API_URL } from '../utils/api.js'
// ---------------------
import CartItem from '../components/CartItem.vue'
import Loading from '@/components/Loading.vue'
// ---------------------
export default {
  name: 'CartView',
  data() {
    return {
      shippingCost: 5,
      cart: [],
      subtotal: 0,
      user: JSON.parse(localStorage.getItem('user')) || {},
      loading: true
    }
  },
  created() {

    this.getData()

  },
  methods: {
    getData() {
      axios.get(`${API_URL}users/${this.user.id}`)
        .then(res => {

          this.user = res.data

          this.cart = this.user.cart

          this.subtotal = this.cart.reduce((acc, item) => {
            acc += (item.price - item.price * item.discount / 100) * item.qty
            return acc
          }, 0)

          this.loading = false

        })
    },
    goBack() {
      this.$router.push('/')
    },
    purchase() {
      this.loading = true
      axios.put(`${API_URL}users/${this.user.id}`, { ...this.user, cart: [] }).then(() => this.getData())
    }
  },
  components: { CartItem, Loading }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 400;
}
</style>
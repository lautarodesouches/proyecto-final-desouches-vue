<template>
  <div v-if='loading'>
    <Loading />
  </div>
  <div v-if='!loading && !addingStore && !addingProduct'>
    <div class='row justify-content-around w-50 m-auto mt-3' v-if='user.admin'>
      <AddButton text='tienda' @click='openStoreForm()' />
      <AddButton text='producto' @click='openProductForm()' />
    </div>
    <StoreDetail v-for='store in stores' :store='store' :key='store.id' :add-to-cart='addToCart' />
  </div>
  <div v-if='addingProduct' class='p-5'>
    <ProductForm :cancel='cancelProduct' :sumbit='addProduct' />
  </div>
  <div v-if='addingStore' class='p-5'>
    <StoreForm :cancel='cancelStore' :sumbit='addStore' />
  </div>
  <div v-if='addedToCart' class='bg-primary text-white position-fixed top-0 end-0 py-1 px-3 rounded m-5 '>
    <h5>Se ha añadido un producto al carrito</h5>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>

import StoreDetail from '@/components/StoreDetail.vue';
import axios from 'axios'
import { API_URL } from '../utils/api.js'
import Loading from '@/components/Loading.vue';
import AddButton from '@/components/AddButton.vue';
import ProductForm from '@/components/ProductForm.vue';
import StoreForm from '../components/StoreForm.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      stores: [],
      loading: true,
      user: JSON.parse(localStorage.getItem('user')) || {},
      addingStore: false,
      addingProduct: false,
      addedToCart: false
    }
  },
  methods: {
    addToCart(product) {

      let data

      axios.get(`${API_URL}users/${this.user.id}`)
        .then(res => {

          let user = res.data

          let searchProduct = user.cart.find(cartProduct => cartProduct.id === product.id)

          if (searchProduct) {
            user.cart.map(cartProduct => {
              if (cartProduct.id === product.id) cartProduct.qty++
            })
          } else {
            user.cart.push({ ...product, qty: 1 })
          }

          data = { ...user, cart: user.cart }

          this.addedToCart = true

          setTimeout(() => {
            this.addedToCart = false
          }, 2000)

        })
        .then(() => {

          axios.put(`${API_URL}users/${this.user.id}`, data)

        })
        .catch(error => console.warn(error))

    },
    addProduct(product) {
      axios.post(`${API_URL}products`, product)
        .catch(error => console.warn(error))
    },
    addStore(store) {
      axios.post(`${API_URL}stores`, store)
        .catch(error => console.warn(error))
    },
    cancelStore() {
      this.addingStore = false
    },
    cancelProduct() {
      this.addingProduct = false
    },
    openProductForm() {
      this.addingProduct = true
    },
    openStoreForm() {
      this.addingStore = true
    }
  },
  created() {

    axios.get(`${API_URL}stores`)
      .then(response => this.stores = response.data)
      .then(() => {

        let products = []

        axios.get(`${API_URL}products`)
          .then(response => products = response.data)
          .then(() => {

            this.stores.map(store => {
              products.filter(product => product.storeId === parseInt(store.id))
              store.products = products.filter(product => product.storeId === parseInt(store.id))
            })

            this.loading = false

          })

      })
      .catch(error => console.warn(error))

  },
  components: { StoreDetail, Loading, AddButton, ProductForm, StoreForm }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.store {
  width: 90%;
  margin: auto;
}

.title {
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0 !important;
}

.stars {
  font-weight: 300;
  font-size: 1.2rem;
}
</style>
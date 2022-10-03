<template>
  <div class='bg-light rounded px-5 py-3 text-center my-5 border border-secondary shadow fadeIn' v-if='product?.name'>
    <h3 class='title'>{{product?.name}}</h3>
    <img :src="product.image" class='image'>
    <h5 class='text'>Precio: ${{product?.price - (product?.price * product?.discount / 100)}}</h5>
    <h5 class='text'>Ventas: {{product?.sales}}</h5>
    <div class='row align-items-center justify-content-center mt-4'>
      <div class='col-6'>
        <button class='btn btn-danger'>
          <router-link to="/" class='text-white text-decoration-none'>
            Volver
          </router-link>
        </button>
      </div>
      <div class='col-6'>
        <button class='btn btn-primary'>Agregar</button>
      </div>
    </div>
  </div>
  <div v-if='!product?.name'>
    <Loading />
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>

import axios from 'axios'
import { API_URL } from '../utils/api.js'

import Loading from '@/components/Loading.vue'

export default {
  name: "DetailView",
  data() {
    return {
      product: {}
    };
  },
  beforeMount() {
    console.log(`${API_URL}products/${this.$route.params.productId}`);
    axios.get(`${API_URL}products/${this.$route.params.productId}`)
      .then(response => {
        this.product = response.data
      })
      .catch(error => console.warn(error))
  },
  components: { Loading }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.title {
  font-size: 2.5rem;
  font-weight: 300;
}

.text {
  font-weight: 400;
}

.image{
  width: 200px;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 1rem 0;
}
</style>
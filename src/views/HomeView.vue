<template>
  <div v-if='stores.length < 1'>
    <Loading />
  </div>
  <div v-if='stores.length > 0'>
    <StoreDetail v-for='store in stores' :store='store' :key='store.id' :add-to-cart='addToCart' />
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>

import StoreDetail from '@/components/StoreDetail.vue';
import axios from 'axios'
import { API_URL } from '../utils/api.js'
import Loading from '@/components/Loading.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      stores: []
    }
  },
  methods: {
    addToCart() { }
  },
  created() {

    axios.get(`${API_URL}stores`)
      .then(response => this.stores = response.data)
      .catch(error => console.warn(error))

  },
  components: { StoreDetail, Loading }
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
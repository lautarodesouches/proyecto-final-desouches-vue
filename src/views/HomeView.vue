<template>
  <div>
    <StoreDetail v-for='store in data' :store='store' :key='store.id' :add-to-cart='addToCart'/>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>

import data from '../utils/data.json'
import StoreDetail from '@/components/StoreDetail.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      data
    }
  },
  methods: {
    addToCart() { }
  },
  components: { StoreDetail }
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
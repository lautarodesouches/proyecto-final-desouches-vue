<template>
  <Header :cart='cart' />
  <main class='main'>
    <StoreDetail v-for='store of data' :key='store' :store='store' :addToCart='addToCart' />
    <!-- <CustomInfo :product='data[0].products[0]' /> -->
    <!-- <UserLogin msg="Welcome to Your Vue.js App" /> -->
    <!-- <UserRegister msg="Welcome to Your Vue.js App" /> -->
  </main>
  <Footer />
</template>
<!------------------------------------------------------------------------------------------->
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './utils/data.json'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import StoreDetail from './components/StoreDetail.vue'
/* import CustomInfo from './components/CustomInfo.vue' */
/* import UserLogin from './components/UserLogin.vue' */
/* import UserRegister from './components/UserRegister.vue' */

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    StoreDetail
  },
  data() {
    return {
      data,
      cart: []
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product)
      console.log(this.cart);
    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style>
:root {
  --primary-bg: #e7e5e4;
  --primary-text: #000;
  --secondary-bg: #fff;
  --secondary-text: #000;
}

.header {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 6vh;
  background-color: var(--secondary-bg);
  color: var(--secondary-text);
}

.main {
  margin: 0;
  padding: 3rem 1rem;
  width: 100vw;
  min-height: 88vh;
  background-color: var(--primary-bg);
  color: var(--primary-text);
}

.footer {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 6vh;
  background-color: var(--secondary-bg);
  color: var(--secondary-text);
}

.cursor-pointer {
  cursor: pointer;
}
</style>
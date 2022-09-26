<template>
  <Header :cart='cart' />
  <main class='main'>
    <StoreDetail v-for='store of data' :key='store.id' :store='store' :addToCart='addToCart' />
    <CustomInfo :product='data[0].products[4]' />
    <UserRegister />
    <UserLogin />
    <AppCart :cart='cart' :subtotal='subtotal' />
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
import StoreDetail from './views/StoreDetail.vue'
import CustomInfo from './views/CustomInfo.vue'
import AppCart from './views/AppCart.vue';
import UserLogin from './views/UserLogin.vue'
import UserRegister from './views/UserRegister.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    StoreDetail,
    CustomInfo,
    AppCart,
    UserLogin,
    UserRegister
  },
  data() {
    return {
      data,
      cart: [],
      subtotal: 0
    }
  },
  methods: {
    addToCart(product) {

      let a = this.cart.find(item => item.id === product.id)

      console.log(a);

      if (a) {
        a.qty += 1
      } else {
        this.cart.push({ ...product, qty: 1 })
      }

      this.subtotal = Math.round(this.cart.reduce((acc, product) => acc + ((product.price - (product.price * product.discount / 100)) * product.qty), 0))
      console.log(this.cart);
    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style>
body {
  margin: 0;
}

:root {
  --primary-bg: #e7e5e4;
  --primary-text: #000;
  --secondary-bg: #fff;
  --secondary-text: #000;
}

.header {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 6vh;
  background-color: var(--secondary-bg);
  color: var(--secondary-text);
}

.main {
  margin: 0;
  padding: 3rem 1rem;
  width: 100%;
  min-height: 88vh;
  background-color: var(--primary-bg);
  color: var(--primary-text);
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 6vh;
  background-color: var(--secondary-bg);
  color: var(--secondary-text);
}

.cursor-pointer {
  cursor: pointer;
}
</style>
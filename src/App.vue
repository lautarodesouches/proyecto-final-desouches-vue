<template>
  <Header :cart='cart' />
  <main class='main'>
    <div>
      <router-link to="/">HOME</router-link>
    </div>
    <div>
      <router-link to="/cart">CART</router-link>
    </div>
    <div>
      <router-link to="/auth/login">LOGIN</router-link>
    </div>
    <div>
      <router-link to="/auth/register">REGISTER</router-link>
    </div>
    <div>
      <router-link to="/product/1">PRODUCTO</router-link>
    </div>
    <div>
      <router-link to="/test">TEST</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </main>
  <Footer />
</template>
<!------------------------------------------------------------------------------------------->
<script>
// ----------------------------------------------
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// ----------------------------------------------
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  data() {
    return {
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
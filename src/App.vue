<template>
  <Header :cart='cart' :user='user' />
  <main class='main'>
    <router-view />
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
      subtotal: 0,
      user: JSON.parse(localStorage.getItem('user')) || null
    }
  },
  methods: {
    addToCart(product) {

      let productInCart = this.cart.find(item => item.id === product.id)

      if (productInCart) {
        productInCart.qty += 1
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
  padding: 1vh 1rem;
  width: 100%;
  min-height: 88vh;
  background-color: var(--primary-bg);
  color: var(--primary-text);
  display: flex;
  align-items: center;
  justify-content: center;
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

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
  -webkit-animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes flash {

  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

@keyframes flash {

  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
</style>
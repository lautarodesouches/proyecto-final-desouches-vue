<template>
  <header class='header row align-items-center justify-content-center text-center'>
    <div class='col-12 col-md-4'>PeticiónIpsoFacto</div>
    <div class='col-12 col-md-4'>Ubicacion</div>
    <div class='col-12 col-md-4'>
      <CartIcon :cartLength='1' />
    </div>
  </header>
  <main class='main'>
    <CustomInfo msg="Welcome to Your Vue.js App" />
    <ProductList msg="Welcome to Your Vue.js App" />
    <UserLogin msg="Welcome to Your Vue.js App" />
    <UserRegister msg="Welcome to Your Vue.js App" />
  </main>
  <footer class='footer row align-items-center justify-content-center text-center'>
    <div class='col-12 col-md-6'>

    </div>
    <div class='col-12 col-md-6'>
      <span>Proyecto final Vue</span>
    </div>
  </footer>
</template>
<!------------------------------------------------------------------------------------------->
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomInfo from './components/CustomInfo.vue'
import ProductList from './components/ProductList.vue'
import UserLogin from './components/UserLogin.vue'
import UserRegister from './components/UserRegister.vue'
import CartIcon from './components/CartIcon.vue'

export default {
  name: 'App',
  components: {
    CustomInfo,
    ProductList,
    UserLogin,
    UserRegister,
    CartIcon
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
  padding: 0;
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
</style>
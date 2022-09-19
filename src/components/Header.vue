<template>
  <header class='header row align-items-center justify-content-center'>
    <div class='col-2 col-md-4'>
      <span class='cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </span>
    </div>
    <div class='col-7 col-md-4 text-center position-relative cursor-pointer'>
      <h1 class='title'>PeticiónIpsoFacto</h1>
    </div>
    <div class='col-3 col-md-4 text-center'>
      <div class="row justify-content-center align-items-center">
        <div class="col-4">
          <CartIcon :cartLength='cart.length' />
        </div>
        <div class="col-4" v-if='user'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-person-circle cursor-pointer"
            viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>
<!------------------------------------------------------------------------------------------->
<script>
import CartIcon from './CartIcon.vue';
export default {
  name: "AppCart",
  props: {
    cart: Array
  },
  data() {
    return {
      user: {}
    };
  },
  components: { CartIcon }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.title{
  font-size: 1.3rem !important;
  margin: 0 !important;
}
</style>
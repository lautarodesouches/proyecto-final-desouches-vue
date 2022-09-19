<template>
  <div class='text-center my-5' v-if='cart.length > 0' @click='getSub()'>
    <div>
      <h2>Carrito</h2>
    </div>
    <div class='my-5'>
      <CartItem v-for='item of cart' :item='item' :key='item.id' />
    </div>
    <div>
      <h5 class='text'>Subtotal: ${{subtotal}}</h5>
      <h5 class='text'>Envio: ${{shipping}}</h5>
      <h4>Total: ${{this.subtotal + this.shipping}}</h4>
    </div>
  </div>
  <div v-if='cart.length < 1' class='text-center my-5'>
    <h2>El carrito se encuentra vacío</h2>
    <button class='btn btn-info mt-3 text-white'>Volver</button>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
import CartItem from './CartItem.vue';
export default {
  name: "AppCart",
  props: {
    cart: Array,
    subtotal: Number
  },
  data() {
    return {
      shipping: 500
    }
  },
  components: { CartItem }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 400;
}
</style>
<template>
  <div class='text-center my-5' v-if='cart.length > 0' @click='getSub()'>
    <div>
      <h2>Carrito</h2>
    </div>
    <div class='my-5'>
      <div class="row text-center mb-3">
        <div class="col-3">
          <h5>Nombre</h5>
        </div>
        <div class="col-3">
          <h5>Descripción</h5>
        </div>
        <div class="col-3">
          <h5>Precio</h5>
        </div>
        <div class="col-3">
          <h5>Cantidad</h5>
        </div>
      </div>
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
import CartItem from '../components/CartItem.vue';
export default {
  name: 'CartView',
  props: {
    cart: Array,
    subtotal: Number
  },
  data() {
    return {
      shipping: 5
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
<template>
  <div class='card p-2 border border-secondary rounded bg-light cursor-pointer'>
    <h5 class='title'>{{product.name}}</h5>
    <img src="">
    <h5 class='price'>${{product.price - (product.price * product.discount / 100)}}</h5>
    <div class="row justify-content-center align-items-stretch">
      <div class="col-6">
        <button class='btn btn-dark'>
          <router-link :to="`/product/${product.id}`" class='text-white text-decoration-none'>
            Detalle
          </router-link>
        </button>
      </div>
      <div class="col-6">
        <button class='btn btn-primary' @click='addToCart(product)'>Añadir</button>
      </div>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object,
    addToCart: Function
  },
  data() {
    return {
      price: this.product.price - (this.product.price * this.product.discount / 100)
    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  min-height: 200px;
}

.title,
.price {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
</style>
<template>
  <div class='card p-2 border border-secondary rounded bg-light cursor-pointer'>
    <h5 class='title'>{{product.name}}</h5>
    <img src="">
    <h5 class='price'>${{product.price}}</h5>
    <button class='btn btn-primary' @click='addToCart(product)'>Añadir</button>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object,
    addToCart: Function
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
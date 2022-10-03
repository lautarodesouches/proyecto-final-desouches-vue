<template>
  <div class='card px-2 py-3 border border-secondary rounded bg-light shadow'>
    <h5 class='title'>{{product.name}}</h5>
    <img :src='product.image' class='image' loading='lazy'>
    <h5 class='price'>${{product.price - (product.price * product.discount / 100)}}</h5>
    <div class='row justify-content-center align-items-stretch'>
      <div class='col-6'>
        <button class='btn btn-dark'>
          <router-link :to='`/product/${storeId}/${product.id}`' class='text-white text-decoration-none'>
            Detalle
          </router-link>
        </button>
      </div>
      <div class='col-6'>
        <button class='btn btn-primary' @click='addToCart(product)'>Agregar</button>
      </div>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'ProductCard',
  props: {
    storeId: String,
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

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}

.title,
.price {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.image {
  max-width: 100%;
  max-height: 100px;
  border-radius: 5px;
  margin: 1rem 0;
}
</style>
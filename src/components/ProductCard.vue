<template>
  <div class='card px-2 py-3 rounded shadow'>
    <h5 class='title'>{{product.name}}</h5>
    <img :src='product.image' class='image' loading='lazy'>
    <h5 class='price'>${{product.price - (product.price * product.discount / 100)}}</h5>
    <div class='row justify-content-center align-items-stretch'>
      <div class='col-6'>
        <router-link :to='`/product/${storeId}/${product.id}`' class='text-white text-decoration-none'>
          <button class='button button__secondary'>
            Detalle
          </button>
        </router-link>
      </div>
      <div class='col-6'>
        <button class='button button__primary' @click='addToCart(product)'>Agregar</button>
      </div>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'ProductCard',
  props: {
    storeId: String,
    product: Object
  },
  data() {
    return {
      price: this.product.price - (this.product.price * this.product.discount / 100)
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
      this.$store.dispatch('setNotification', 'Se ha agregado ' + product.name)
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
  transition: all 1s;
  background: #f5f5f5;
  border: 1px solid #000;
}

.card:hover {
  color: #fff;
  border: none;
  transform: translateY(-5px);
  background-color: var(--primary-bg);
}

.card:hover .button__primary {
  background-color: #fff;
  color: var(--primary-bg);
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
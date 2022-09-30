<template>
  <div class='bg-light rounded px-5 py-3 text-center my-5 border border-secondary shadow'>
    <h3 class='title'>{{product.name}}</h3>
    <img src="">
    <h5 class='text'>Precio: ${{product.price - (product.price * product.discount / 100)}}</h5>
    <h5 class='text'>Ventas: {{product.sales}}</h5>
    <div class='row align-items-center justify-content-center mt-4'>
      <div class='col-6'>
        <button class='btn btn-danger'>
          <router-link to="/" class='text-white text-decoration-none'>
            Volver
          </router-link>
        </button>
      </div>
      <div class='col-6'>
        <button class='btn btn-primary'>Agregar</button>
      </div>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>

export default {
  name: 'DetailView',
  data() {
    return {
      product: {
        name: 'test',
        price: this.$route.params.id,
        discount: 0,
        sales: 2,
        id: 1
      }
    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.title {
  font-size: 3rem;
  font-weight: 300;
}

.text {
  font-weight: 400;
}
</style>
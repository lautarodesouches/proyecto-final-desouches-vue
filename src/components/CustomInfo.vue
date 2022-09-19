<template>
  <div class='bg-light rounded p-3 text-center my-5'>
    <h4 class='text'>{{product.name}}</h4>
    <img src="">
    <h5 class='text'>${{product.price - (product.price * product.discount / 100)}}</h5>
    <h5 class='text'>Ventas: {{product.sales}}</h5>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'CustomInfo',
  props: {
    product: Object
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 400;
}
</style>
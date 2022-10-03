<template>
  <div class='row text-center align-item-center justify-content-center my-2 bg-light py-2'>
    <div class='col-3'>
      <h5 class='text'>{{item.name}}</h5>
    </div>
    <div class='col-3'>
      <img :src='item.image' :alt='item.name' class='image'>
    </div>
    <div class='col-3'>
      <h5 class='text'>${{item.price - (item.price * item.discount / 100)}}</h5>
    </div>
    <div class='col-3'>
      <h5 class='text'>{{item.qty}}</h5>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'CartItem',
  props: {
    item: Object
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 300;
}
.image{
  width: 150px;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
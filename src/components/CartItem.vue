<template>
  <div class='row text-center align-item-center justify-content-center'>
    <div class='col-3'>
      <h5 class='text'>{{item.name}}</h5>
    </div>
    <div class='col-3'>
      <h5 class='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ut obcaecati hic quibusdam eum
        omnis molestias recusandae.</h5>
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
</style>
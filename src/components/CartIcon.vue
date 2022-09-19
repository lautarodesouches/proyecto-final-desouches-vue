<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-4">
      <span class='position-relative'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-cart4"
          viewBox="0 0 16 16">
          <path
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
        <div class='number' v-if='cartLength > 0'>
          <span class='number__text'>{{cartLength}}</span>
        </div>
      </span>
    </div>
    <div class="col-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-person-circle"
        viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
      </svg>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'CartIcon',
  props: {
    cartLength: Number
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.number {
  background-color: red;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: -50%;
  right: -50%;
}

.number__text {
  font-size: 1rem;
  color: #fff;
}
</style>
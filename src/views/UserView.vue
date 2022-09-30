<template>
  <div>
    <div>
      <button class='btn btn-danger' @click='logout()'>Cerrar sesión</button>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'UserView',
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$router.go('auth/login')
    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 400;
}
</style>
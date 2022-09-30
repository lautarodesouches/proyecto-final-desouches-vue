<template>
  <div>
    <h3 class='text-center'>{{user?.username}}</h3>
    <div class='mt-4'>
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
      user: JSON.parse(localStorage.getItem('user')) || {}
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
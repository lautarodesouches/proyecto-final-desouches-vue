<template>
  <form class='bg-white rounded p-3'>
    <div class="form-group mb-3">
      <label for="user">Usuario</label>
      <input type="text" class="my-2 form-control" id="user" placeholder="Usuario">
      <small id="userHelp" class="form-text text-danger">* Error!</small>
    </div>
    <div class="form-group mb-3">
      <label for="password">Contraseña</label>
      <input type="password" class="my-2 form-control" id="password" placeholder="Contraseña">
      <small id="passwordHelp" class="form-text text-danger">* Error!</small>
    </div>
    <div class='d-flex justify-content-center'>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </div>
  </form>
</template>
<!------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'UserLogin',
  props: {
    msg: String
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>

</style>
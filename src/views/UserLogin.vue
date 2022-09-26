<template>
  <form class='bg-white rounded p-3 my-5' @submit.prevent='validateForm()'>
    
    <div class='bg-dark rounded p-2 text-center w-25 m-auto text-white'>
      <h5>Credenciales</h5>
      <p class='m-0'>Usuario: test</p>
      <p class='m-0'>Contraseña: Test1!</p>
    </div>

    <div class="form-group mb-3">
      <label for="user">Usuario</label>
      <input type="text" class="my-2 form-control" id="loginUser" placeholder="Usuario" maxlength='10' v-model='username.value' required>
      <small id="loginUserHelp" class="form-text text-danger" v-if='username.error'>* {{username.error}}</small>
    </div>
    <div class="form-group mb-3">
      <label for="password">Contraseña</label>
      <input type="password" class="my-2 form-control" id="loginPassword" placeholder="Contraseña" maxlength='15' v-model='password.value' required>
      <small id="loginPasswordHelp" class="form-text text-danger" v-if='password.error'>* {{password.error}}</small>
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
  },
  data() {
    return {
      defaultUser: { username: 'test', password: 'Test1!' },
      username: { value: '', error: '' },
      password: { value: '', error: '' }
    }
  },
  methods: {
    resetValues(){
      this.username.value = '',
      this.password.value = ''
    },
    resetErrors(){
      this.username.error = '',
      this.password.error = ''
    },
    signIn(){
      this.resetValues()
    },
    validateForm(){

      this.resetErrors()

      if(this.username.value !== this.defaultUser.username){
        this.username.error = 'Usuario no existe'
        return
      }

      if(this.password.value !== this.defaultUser.password){
        this.password.error = 'Contraseña inválida'
        return
      }

      this.signIn()

    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>

</style>
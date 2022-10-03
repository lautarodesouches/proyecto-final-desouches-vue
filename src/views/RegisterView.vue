<template>
  <form class='form bg-white rounded p-3 my-5 fadeIn' @submit.prevent='validateForm()'>
    <div class="form-group mb-3">
      <label for="firstname">Nombre</label>
      <input type="text" class="my-2 form-control" id="firstname" placeholder="Nombre" v-model='firstname'>
    </div>
    <div class="form-group mb-3">
      <label for="lastname">Apellido</label>
      <input type="text" class="my-2 form-control" id="lastname" placeholder="Apellido" v-model='lastname'>
    </div>
    <div class="form-group mb-3">
      <label for="user">Usuario</label>
      <input type="text" class="my-2 form-control" id="user" placeholder="Usuario" v-model='username.value'
        maxlength='10'>
      <small id="userHelp" class="form-text text-danger" v-if='username.error'>* {{username.error}}</small>
    </div>
    <div class="form-group mb-3">
      <label for="password">Contraseña</label>
      <input type="password" class="my-2 form-control" id="password" placeholder="Contraseña" v-model='password.value'
        maxlength='15'>
      <small id="passwordHelp" class="form-text text-danger" v-if='password.error'>* {{password.error}}</small>
    </div>
    <div class="form-group mb-3">
      <label for="repeatPassword">Repetir contraseña</label>
      <input type="password" class="my-2 form-control" id="repeatPassword" placeholder="Repetir contraseña"
        v-model='repeatPassword.value' maxlength='15'>
      <small id="repeatPasswordHelp" class="form-text text-danger" v-if='repeatPassword.error'>*
        {{repeatPassword.error}}</small>
    </div>
    <div class='d-flex justify-content-center'>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </div>
    <div class='mt-4 text-center'>
      <span>Tenés cuenta? <router-link to="/auth/login" class='text-primary text-decoration-none fw-bold'>Ingresar
        </router-link></span>
    </div>
  </form>
</template>
<!------------------------------------------------------------------------------------------->
<script>
import axios from 'axios'
import { API_URL } from '../utils/api.js'

export default {
  name: 'RegisterView',
  props: {
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      username: { value: '', error: '' },
      password: { value: '', error: '' },
      repeatPassword: { value: '', error: '' }
    }
  },
  methods: {
    resetValues() {
      this.firstname = ''
      this.lastname = ''
      this.username.value = ''
      this.password.value = ''
      this.repeatPassword.value = ''
    },
    resetErrors() {
      this.username.error = ''
      this.password.error = ''
      this.repeatPassword.error = ''
    },
    addUser() {

      let newUser = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username.value,
        password: this.password.value
      }

      axios.get(`${API_URL}users`)
        .then(res => {

          if (res.data.find(user => user.username === newUser.username)) {
            this.username.error = 'El usuario ya existe'
            throw new Error('El usuario ya existe')
          }

        })
        .then(() => {
          axios.post(`${API_URL}users`, newUser)
            .then(res => {

              if (res.status === 201) {

                localStorage.setItem('user', JSON.stringify({
                  username: res.data.username,
                  id: res.data.id,
                  admin: res.data.admin
                }))

                this.resetValues()

                this.$router.push('/')

              }

            })
        })
        .catch(error => console.warn(error))

    },
    validateForm() {

      this.resetErrors()

      let required = 'El campo es requerido'

      if (this.username.value === '') {
        this.username.error = required
        return
      }

      if (this.password.value === '') {
        this.password.error = required
        return
      }

      if (this.repeatPassword.value === '') {
        this.repeatPassword.error = required
        return
      }

      if (!RegExp('^[a-z0-9_-]{3,10}$').test(this.username.value)) {
        this.username.error = 'El usuario solo debe contener letras y numeros. Y debe contener al menos 3 carácteres'
        return
      }

      if (!RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$').test(this.password.value)) {
        this.password.error = 'La contraseña debe tener mínimo cuatro caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
        return
      }

      if (this.password.value !== this.repeatPassword.value) {
        this.repeatPassword.error = 'Las contraseñas no coinciden'
        return
      }

      this.addUser()

    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.form {
  width: 400px;
  max-width: 100%;
}
</style>
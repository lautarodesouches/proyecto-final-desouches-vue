<template>
  <div class='fadeIn text-center bg-white p-4 rounded box' v-if='user?.username && !isEditing'>
    <div class='row align-items-center justify-content-center'>
      <div class='col-6'>
        <h4>ID: {{user?.id}}</h4>
      </div>
      <div class='col-6'>
        <h4>{{user?.username}}</h4>
      </div>
    </div>
    <div class='my-4'>
      <h4>{{user?.lastname}}, {{user?.firstname}}</h4>
    </div>
    <div class='row align-items-center justify-content-around mt-5'>
      <div class='col-6' v-if='user.admin'>
        <button class='w-100 btn btn-secondary' @click='openForm()'>Editar</button>
      </div>
      <div class='col-6'>
        <button class='w-100 btn btn-danger' @click='logout()'>Cerrar sesión</button>
      </div>
    </div>
  </div>
  <div v-if='!user?.username'>
    <Loading />
  </div>
  <div v-if='isEditing' class='fadeIn bg-white p-4 rounded'>
    <form @submit.prevent>
      <div class='form-group mb-3'>
        <label for='name'>Nombre</label>
        <input type='text' class='my-2 form-control' id='name' placeholder='Nombre' v-model='form.firstname'>
      </div>
      <div class='form-group mb-3'>
        <label for='lastname'>Apellido</label>
        <input type='text' class='my-2 form-control' id='lastname' placeholder='Apellido' v-model='form.lastname'>
      </div>
      <div class='form-group mb-3'>
        <label for='user'>Usuario</label>
        <input type='text' class='my-2 form-control' id='user' placeholder='Usuario' v-model='form.username'
          maxlength='10'>
      </div>
      <div class='form-group mb-3'>
        <label for='password'>Contraseña</label>
        <input type='password' class='my-2 form-control' id='password' placeholder='Contraseña' v-model='form.password'
          maxlength='15'>
      </div>
      <div class='form-group mb-3'>
        <label for='admin'>Admin</label>
        <input type='checkbox' id='admin' v-model='form.admin' class='d-block mt-2'>
      </div>
      <div class='row justify-content-center mt-4'>
        <div class='col-6'>
          <button class='btn btn-danger w-100' @click='cancel()'>Cancelar</button>
        </div>
        <div class='col-6'>
          <button class='btn btn-primary w-100' @click='edit()'>Editar</button>
        </div>
      </div>
      <div v-if='form?.status'>
        <h5 class='text-center mt-4'>* {{form?.status}}</h5>
      </div>
    </form>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
import axios from 'axios'
import { API_URL } from '../utils/api.js'
import Loading from '@/components/Loading.vue'

export default {
  name: 'UserView',
  props: {},
  data() {
    return {
      user: {},
      isEditing: false,
      form: {}
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$router.push('/auth/login')
    },
    openForm() {
      this.form = {
        firstname: this.user?.firstname,
        lastname: this.user?.lastname,
        username: this.user?.username,
        password: this.user?.password,
        admin: this.user?.admin,
      }
      this.isEditing = true
    },
    edit() {

      this.form.status = 'Procesando'

      axios.put(`${API_URL}users/${this.user.id}`, this.form)
        .then(response => {
          if (response.statusText === 'OK') this.isEditing = false
          else this.form.status = 'No se pudo editar, intente mas tarde'
        })
        .catch(error => console.warn(error))

    },
    cancel() {
      this.isEditing = false
    }
  },
  beforeCreate() {

    let localUser = JSON.parse(localStorage.getItem('user'))

    axios.get(`${API_URL}users/${localUser.id}`)
      .then(response => {
        this.user = response.data

      })
      .catch(error => console.warn(error));
  },
  components: { Loading }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 400;
}

.box {
  width: 450px;
  max-width: 100%;
}
</style>
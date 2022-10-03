<template>
  <div class='bg-light rounded px-5 py-3 text-center my-5 border border-secondary shadow fadeIn position-relative'
    v-if='product?.name && !isEditing && !confirmDelete'>
    <div class='icon rounded p-1 bg-danger cursor-pointer' v-if='isAdmin' @click='openConfirmDelete()'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-trash3-fill"
        viewBox="0 0 16 16">
        <path
          d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
      </svg>
    </div>
    <h3 class='title'>{{product?.name}}</h3>
    <img :src="product.image" class='image'>
    <h5 class='text'>Precio: ${{product?.price - (product?.price * product?.discount / 100)}}</h5>
    <h5 class='text'>Ventas: {{product?.sales}}</h5>
    <div class='row align-items-center justify-content-center mt-4'>
      <div class='col-4'>
        <button class='w-100 btn btn-danger'>
          <router-link to="/" class='text-white text-decoration-none'>
            Volver
          </router-link>
        </button>
      </div>
      <div class='col-4' v-if='isAdmin'>
        <button class='w-100 btn btn-dark' @click='edit()'>Editar</button>
      </div>
      <div class='col-4'>
        <button class='w-100 btn btn-primary'>Agregar</button>
      </div>
    </div>
  </div>
  <div v-if='!product?.name && !isEditing'>
    <Loading />
  </div>
  <div v-if='isEditing'>
    <form @submit.prevent class='bg-white p-4 rounded row align-items-center justify-content-center form fadeIn'>
      <div class="col-12 mb-3">
        <h5 class='text-center'>ID - {{product.id}}</h5>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <label for="name">Nombre</label>
        <input type="text" class="my-2 form-control" id="firstname" placeholder="Nombre" v-model='product.name'>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <label for="price">Precio</label>
        <input type="number" class="my-2 form-control" id="price" placeholder="Precio" v-model='product.price'>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <label for="discount">Porcentaje de descuento</label>
        <input type="number" class="my-2 form-control" id="discount" placeholder="Porcentaje de descuento"
          v-model='product.discount'>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <label for="sales">Ventas</label>
        <input type="number" class="my-2 form-control" id="sales" placeholder="Ventas" v-model='product.sales'>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <label for="storeId">Id de tienda</label>
        <input type="number" class="my-2 form-control" id="storeId" placeholder="Id de tienda"
          v-model='product.storeId'>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <label for="image">URL imagen</label>
        <input type="text" class="my-2 form-control" id="image" placeholder="URL imagen" v-model='product.image'>
      </div>
      <div class='row mt-4 justify-content-around'>
        <div class='col-4'>
          <button class='btn btn-danger w-100' @click='cancel()'>Cancelar</button>
        </div>
        <div class='col-4'>
          <button class='btn btn-primary w-100' @click='sumbitForm()'>Editar</button>
        </div>
      </div>
      <span class='text-center mt-4' v-if='status'>* {{status}}</span>
    </form>
  </div>
  <div v-if='confirmDelete' class='text-center bg-white fadeIn p-4 rounded'>
    <h5>Estas seguro que querés eliminar el producto?</h5>
    <div class="row mt-4">
      <div class="col-6">
        <button class='btn btn-secondary' @click='closeConfirmDelete()'>Cancelar</button>
      </div>
      <div class="col-6">
        <button class='btn btn-danger' @click='deleteProduct()'>Eliminar</button>
      </div>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>

import axios from 'axios'
import { API_URL } from '../utils/api.js'

import Loading from '@/components/Loading.vue'

export default {
  name: "DetailView",
  data() {
    return {
      product: {},
      isAdmin: JSON.parse(localStorage.getItem('user')) || false,
      isEditing: false,
      status: '',
      confirmDelete: false
    };
  },
  beforeMount() {
    axios.get(`${API_URL}products/${this.$route.params.productId}`)
      .then(response => {
        this.product = response.data
      })
      .catch(error => console.warn(error))
  },
  methods: {
    edit() {
      this.isEditing = true
    },
    sumbitForm() {

      this.status = 'Realizando cambios'

      axios.put(`${API_URL}products/${this.product.id}`, this.product)
        .then(() => {
          this.status = ''
          this.isEditing = false
        })
        .catch(error => this.status = error.message)

    },
    cancel() {
      this.isEditing = false
    },
    deleteProduct() {
      axios.delete(`${API_URL}products/${this.product.id}`)
        .then(() => {
          this.$router.push('/')
        })
    },
    openConfirmDelete(){
      this.confirmDelete = true
    },
    closeConfirmDelete(){
      this.confirmDelete = false
    }
  },
  components: { Loading }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.title {
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: 300;
}

.text {
  font-weight: 400;
}

.image {
  width: 200px;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 1rem 0;
}

.form {
  width: 80%;
  margin: auto;
}

.icon {
  position: absolute;
  top: 20px;
  right: 20px;
}

@media (min-width: 768px) {
  .form {
    width: 33%;
  }
}
</style>
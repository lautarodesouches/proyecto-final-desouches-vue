<template>
  <div class='bg-light rounded px-5 py-3 text-center my-5 border border-secondary shadow fadeIn position-relative'
    v-if='product?.name && !isEditing && !confirmDelete'>
    <div class='icon rounded p-1 bg-danger cursor-pointer' v-if='this.$store.getters.getUser.admin'
      @click='openConfirmDelete()'>
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='white' class='bi bi-trash3-fill'
        viewBox='0 0 16 16'>
        <path
          d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z' />
      </svg>
    </div>
    <h3 class='title'>{{product?.name}}</h3>
    <img :src='product.image' class='image'>
    <h5 class='text'>Precio: ${{product?.price - (product?.price * product?.discount / 100)}}</h5>
    <h5 class='text'>Ventas: {{product?.sales}}</h5>
    <div class='row align-items-center justify-content-center mt-4'>
      <div class='col-12 my-2 my-md-0 col-md-4'>
        <button class='w-100 btn btn-danger'>
          <router-link to='/' class='text-white text-decoration-none'>
            Volver
          </router-link>
        </button>
      </div>
      <div class='col-12 my-2 my-md-0 col-md-4' v-if='this.$store.getters.getUser.admin'>
        <button class='w-100 btn btn-dark' @click='edit()'>Editar</button>
      </div>
      <div class='col-12 my-2 my-md-0 col-md-4'>
        <button class='w-100 btn btn-primary' @click='addToCart(product)'>Agregar</button>
      </div>
    </div>
  </div>
  <!---->
  <Loading v-if='!product?.name && !isEditing' />
  <!---->
  <ProductForm v-if='isEditing' :cancel='cancel' :sumbit='sumbit' :initialProduct='product' />
  <!---->
  <ConfirmModal v-if='confirmDelete' message='Estas seguro que querés eliminar el producto?' action='Eliminar'
    :cancel='closeConfirmDelete' :confirm='deleteProduct' />
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
import axios from 'axios'
import { API_URL } from '../utils/api.js'
// -------------------------------------------
import Loading from '@/components/Loading.vue'
import ProductForm from '@/components/ProductForm.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
// -------------------------------------------
export default {
  name: 'DetailView',
  data() {
    return {
      product: {},
      isEditing: false,
      status: '',
      confirmDelete: false
    };
  },
  beforeMount() {
    axios.get(`${API_URL}products/${this.$route.params.productId}`)
      .then(response => this.product = response.data)
      .catch(error => this.status = error.message)
  },
  methods: {
    edit() {
      this.isEditing = true
    },
    sumbit(product) {

      this.status = 'Realizando cambios'

      axios.put(`${API_URL}products/${this.product.id}`, product)
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
      this.$store.dispatch('deleteProduct', this.product.id)
      this.$router.push('/')
    },
    openConfirmDelete() {
      this.confirmDelete = true
    },
    closeConfirmDelete() {
      this.confirmDelete = false
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
  },
  components: { Loading, ProductForm, ConfirmModal }
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
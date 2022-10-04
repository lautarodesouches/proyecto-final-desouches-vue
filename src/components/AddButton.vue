<template>
  <div class='col-12 col-md-auto cursor-pointer bg-dark text-white px-3 py-2 rounded my-2 my-md-0 mx-md-2'>
    Agregar {{text}}
    <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='white' class='bi bi-plus-circle-fill'
      viewBox='0 0 16 16'>
      <path
        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
    </svg>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'AddButton',
  props: {
    text: String
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>

</style>
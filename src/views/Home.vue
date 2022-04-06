<template>
  <div class="contenido">
    <h1>HOLA MUNDO</h1>
      
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>

<style scoped>
.contenido{
  min-height: calc(100vh - 70px - 70px);
}
</style>
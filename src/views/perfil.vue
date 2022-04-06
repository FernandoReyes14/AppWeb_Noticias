<template>
  <div class="contenido">
      <Perfil />
  </div>
</template>

<script>
  
  import Perfil from '@/components/perfilComponente.vue'

  export default {
    name: 'perfil',

    components: {
      Perfil,
    }
  }
</script>

<style scoped>
.contenido{
  min-height: calc(100vh - 70px - 74px);
  padding-top: 4vh;
}
</style>
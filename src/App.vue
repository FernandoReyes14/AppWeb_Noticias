<template>
  <v-app>  
    <v-main>
      <BarraLateral/>
      <navTitulo/>
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import navTitulo from '@/components/navTitulo.vue'
import BarraLateral from '@/components/BarraLateral.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components:{
    navTitulo,
    BarraLateral,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
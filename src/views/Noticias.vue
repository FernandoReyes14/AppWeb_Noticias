<template>
        <div class="contenido">
                <ListarNoticias />
        </div>
</template>

<script>

import ListarNoticias from '@/components/MisNoticias.vue'

export default {
        components:{
                ListarNoticias
        }
}

</script>

<style scoped>
.contenido{
  min-height: calc(100vh - 70px - 70px);
}
</style>
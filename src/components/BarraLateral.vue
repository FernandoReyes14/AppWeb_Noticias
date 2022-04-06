<template>
  <v-card class="rounded-0">
  <!-- :mini-variant.sync="mini" es para hacer la barra lateral retraible -->
    <v-navigation-drawer
      v-model="drawer"
      width="230"
      mini-variant-width="100"
      permanent
      app
      dark
      color="#242424"
    >
    <v-list>
      <div class="align-center">
        <v-list-item-title class="title px-14">
        </v-list-item-title>
      </div>
        <v-divider class="invisible"></v-divider>
      <v-list-item class="px-14">
          <v-list-item-avatar
          size="128"
          >
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
      </v-list-item>
        <v-list-item
          class="px-14"
          link
          v-for="usuario in datos"
          :key="usuario.dato"
        >
      <v-list-item-content>

        <v-list-item-title class="text-h6">
          <router-link class="link" :to="`${usuario.path}`">{{usuario.dato}}</router-link>
        </v-list-item-title>

        <v-list-item-subtitle
            v-for="mail in mail"
            :key="mail.mail"
        >
          <router-link class="link" :to="`${mail.path}`">{{mail.mail}}</router-link>
        </v-list-item-subtitle>
      
      </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list extended>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <router-link class="link" :to="`${item.path}`">{{item.title}}</router-link>
        </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Publica tu noticia', icon: 'mdi-format-list-checkbox', path: '/CrearNoticia' },
          { title: 'Mis noticias', icon: 'mdi-format-list-checkbox', path: '/Noticias' },
          { title: 'Mi perfil', icon: 'mdi-account-edit-outline', path: '/perfil' }
        ],
        datos:[
            {dato: 'Sandra Adams', path: '/perfil'}
            
        ],
        mail:[
            {mail: 'sandra_a88@gmail.com', path: '/perfil'}
        ]
      }
    },
  }
</script>

<style scoped>
.link{
  text-decoration: none;
  color: white;
}
</style>
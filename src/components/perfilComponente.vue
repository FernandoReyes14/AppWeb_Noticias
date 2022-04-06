<template>
  <div>
    <v-card
      width="800"
      class="mx-auto"
      color="#fff"
    >
      <v-container>
        <v-row >
          <v-col>
        <v-card
          elevation="10"
          class="mx-auto"
          max-width="500"
          height="450"
          max-height="450"
        >
            <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
                height="400px"
                max-height="400"
            >
            </v-img>
                <v-list-item-title class="title text-center">
                    Hola Sandra!
                </v-list-item-title>
        </v-card>
          </v-col>
          <v-col>
            <v-card
              elevation="10"
              class="mx-auto"
              max-width="500"
              height="450"
              max-height="450"
            >
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="indigo">
                            mdi-account
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>1400 Main Street</v-list-item-title>
                        <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="indigo">
                            mdi-phone
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>(650) 555-1234</v-list-item-title>
                        <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                        <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>(323) 555-6789</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-email
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>aliconnors@example.com</v-list-item-title>
                    <v-list-item-subtitle>Personal</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>ali_connors@example.com</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-map-marker
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>1400 Main Street</v-list-item-title>
                    <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>
      
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Resumen', icon: 'mdi-home-city', path: '/' },
          { title: 'Publica tu negocio', icon: 'mdi-format-list-checkbox', path: '/CrearNegocio' },
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

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Inicio_sesion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio_sesion.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/perfil.vue')
  },
  {
    path: '/CrearNoticia',
    name: 'CrearNoticia',
    component: () => import('../views/CrearNoticia.vue')
  },
  {
    path: '/test',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Noticias',
    name: 'Noticias',
    component: () => import('../views/Noticias.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

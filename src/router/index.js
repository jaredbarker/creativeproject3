import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catfacts from '../views/Catfacts.vue'
import Dogfacts from '../views/Dogfacts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catfacts',
    name: 'Catfacts',
    component: Catfacts
  },
  {
    path: '/dogfacts',
    name: 'Dogfacts',
    component: Dogfacts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

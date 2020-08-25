import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: () => import('../views/Signup')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated !== false) {
        next('/login')
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

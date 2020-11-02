import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store'

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated || store.getters.inTryOutMode) {
    next()
    return
  }
  next('/')
}


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: ifAuthenticated,
  }
]

const router = new VueRouter({
  routes
})

export default router

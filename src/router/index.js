import Vue from 'vue'
import VueRouter from 'vue-router'
import Portal from '../views/Portal.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Portal',
    component: Portal
  },
  {
    path: '/LabAction',
    name: 'LabAction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LabAction/LabAction.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/order/:type',
    name: 'Order',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

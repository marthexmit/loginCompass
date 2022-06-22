import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'loginPage',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'homePage',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router

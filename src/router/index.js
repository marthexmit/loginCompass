import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
import Error401 from '../components/Error 401/Error401.vue'
import Error404 from '../components/Error 404/Error404.vue'
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
    component: Home,
  },
  {
    path: '/error401',
    name: 'errorPage401',
    component: Error401,
   
  },
  {
    path: '*',
    name: 'errorPage404',
    component: Error404
  }
  
]

const router = new VueRouter({
  routes
});


export default router

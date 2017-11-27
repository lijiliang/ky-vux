import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import New from '@/components/new/New'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

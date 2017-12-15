import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import New from '@/components/new/new'
import NewId from '@/components/new/newid'
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
      path: '/new/:id',
      name: 'NewId',
      component: NewId
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

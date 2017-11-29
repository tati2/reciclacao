import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Acoes from '@/components/Acoes'
import Menu from  '@/components/Menu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/Acoes',
    	name: 'Acoes',
    	component: Acoes
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    }  
  ]
})

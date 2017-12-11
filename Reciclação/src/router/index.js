import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Acoes from '@/components/Acoes'
import Menu from  '@/components/Menu'
import AcoesComponent from '@/components/AcoesComponent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/AcoesC',
    	name: 'Acoes',
    	component: Acoes
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/AcoesComponent',
      name: 'AcoesComponent',
      component: AcoesComponent
    }  
  ]
})

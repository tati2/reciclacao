import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Acoes from '@/components/Acoes'
import Menu from  '@/components/Menu'
import Encontros from '@/components/AcoesComponents/Encontros'


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
      path: '/Encontros',
      name: 'Encontros',
      component: Encontros
    }  
  ]
})

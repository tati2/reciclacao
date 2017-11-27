import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Acoes from '@/components/Acoes'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/Acoes',
    	name: 'Acoes',
    	component: Acoes
    }  
  ]
})

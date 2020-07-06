import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Item from '@/page/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    }
  ]
})

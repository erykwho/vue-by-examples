import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import YesNo from '@/components/YesNo'
import Parent from '@/components/Parent'
import BootstrapPlay from '@/components/BootstrapPlay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/yesno',
      name: 'YesNo',
      component: YesNo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/bootstrap-play',
      name: 'BootstrapPlay',
      component: BootstrapPlay
    },
    {
      path: '/emit-trigger',
      name: 'Parent',
      component: Parent
    }
  ]
})

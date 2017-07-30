import Hello from '@/components/Hello'
import About from '@/components/About'
import YesNo from '@/components/YesNo'
import Parent from '@/components/Parent'
import BootstrapPlay from '@/components/BootstrapPlay'
import Routing from '@/components/Routing'

var routes = [
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
  },
  {
    path: '/routing',
    name: 'Routing',
    component: Routing
  },
  {
    path: '/routing/:id/routed/:routed_id',
    name: 'RoutingPage',
    component: Routing
  }
]

export default routes

import VueByExamples from '@/components/VueByExamples'
import About from '@/components/About'

// Cool Stuff
import YesNo from '@/components/cool-stuff/YesNo'
import BootstrapLearning from '@/components/cool-stuff/BootstrapLearning'
import GoodDaddy from '@/components/cool-stuff/good-daddy/GoodDaddy'

// Routing
import DynamicRouting from '@/components/routing/DynamicRouting'

var routes = [
  {
    path: '/',
    name: 'Vue By Examples',
    component: VueByExamples
  },
  {
    path: '/yesno',
    name: 'Yes or No',
    component: YesNo
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/bootstrap-play',
    name: 'Bootstrap Learning',
    component: BootstrapLearning
  },
  {
    path: '/good-daddy',
    name: 'Good Daddy',
    component: GoodDaddy
  },
  {
    path: '/dynamic-routing',
    name: 'Dynamic Routing',
    component: DynamicRouting
  },
  {
    path: '/dynamic-routing/:id/routed/:routed_id',
    name: 'Dynamic Routing (Route within route)',
    component: DynamicRouting
  }
]

export default routes

import VueByExamples from '@/components/VueByExamples'
import About from '@/components/About'
// Cool Stuff
import YesNo from '@/components/cool-stuff/YesNo'
import BootstrapLearning from '@/components/cool-stuff/BootstrapLearning'
import GoodDaddy from '@/components/cool-stuff/good-daddy/GoodDaddy'
// Routing
import DynamicRouting from '@/components/routing/DynamicRouting'
import RoutingUser from '@/components/routing/user/User'
import routeGroups from './groups.js'

const routes = [
  {
    path: '/',
    name: 'Vue By Examples',
    component: VueByExamples
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/yesno',
    name: 'Yes or No',
    category: routeGroups.coolStuff.category,
    component: YesNo
  },
  {
    path: '/bootstrap-play',
    name: 'Bootstrap Learning',
    category: routeGroups.coolStuff.category,
    component: BootstrapLearning
  },
  {
    path: '/good-daddy',
    name: 'Good Daddy',
    category: routeGroups.coolStuff.category,
    component: GoodDaddy
  },
  {
    path: '/dynamic-routing',
    name: 'Dynamic Routing',
    category: routeGroups.routing.category,
    component: DynamicRouting
  },
  {
    path: '/dynamic-routing/:id/routed/:routed_id',
    name: 'Dynamic Routing (Route within route)',
    component: DynamicRouting
  },
  {
    path: '/user',
    name: 'Nested Routing (User)',
    category: 'routing',
    component: RoutingUser
  }
]

export default routes

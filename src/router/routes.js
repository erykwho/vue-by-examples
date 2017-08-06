import VueByExamples from '@/components/VueByExamples'
import About from '@/components/About'
// Cool Stuff
import YesNo from '@/components/cool-stuff/YesNo'
import BootstrapLearning from '@/components/cool-stuff/BootstrapLearning'
import GoodDaddy from '@/components/cool-stuff/good-daddy/GoodDaddy'
// Routing
import DynamicRouting from '@/components/routing/DynamicRouting'
import User from '@/components/routing/nested-views/User'

import Main from '@/components/routing/named-views/Main'
import Default from '@/components/routing/named-views/Default'
import Second from '@/components/routing/named-views/Second'
import Third from '@/components/routing/named-views/Third'

import routeGroups from './groups.js'
import userRoutes from './userRoutes.js'

import UserProps from '@/components/routing/passing-props/User'

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
    path: '/nested-views/:id',
    name: 'User',
    category: routeGroups.routing.category,
    component: User,
    children: userRoutes
  },
  {
    path: '/named-views',
    category: routeGroups.routing.category,
    component: Main,
    children: [
      {
        path: '',
        components: {
          default: Default,
          second: Second,
          third: Third
        }
      }
    ]
  },
  {
    path: '/user-props/:id',
    name: 'User Props',
    category: routeGroups.routing.category,
    component: UserProps,
    props: true
  }
]

export default routes

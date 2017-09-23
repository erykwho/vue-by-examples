import Profile from '@/components/routing/nested-views/Profile'
import Posts from '@/components/routing/nested-views/Posts'

import routeGroups from './groups.js'

const userRoutes = [
  {
    // UserPosts will be rendered inside User's <router-view>
    // when /nested-views/:id/posts is matched
    path: 'posts',
    name: 'UserPosts',
    category: routeGroups.routing.category,
    component: Posts
  },
  {
    // UserProfile will be rendered inside User's <router-view>
    // when /nested-views/:id/profile is matched
    path: 'profile',
    name: 'UserProfile',
    category: routeGroups.routing.category,
    component: Profile
  }
]

export default userRoutes

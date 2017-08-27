import EXD from '@/components/expenses-diary/Index'
import EXDLogin from '@/components/expenses-diary/Login'
import EXDSignUp from '@/components/expenses-diary/SignUp'
import Expenses from '@/components/expenses-diary/Expenses'

import routeGroups from './groups.js'

const exdRoutes = [
  {
    path: '/exd',
    name: 'expenses-diary-index',
    category: routeGroups.expensesDiary.category,
    component: EXD
  },
  {
    path: '/exd/login',
    name: 'expenses-diary-login',
    category: routeGroups.expensesDiary.category,
    component: EXDLogin
  },
  {
    path: '/exd/sign-up',
    name: 'expenses-diary-sign-up',
    category: routeGroups.expensesDiary.category,
    component: EXDSignUp
  },
  {
    path: '/exd/expenses',
    name: 'expenses',
    category: routeGroups.expensesDiary.category,
    component: Expenses
  }
]

export default exdRoutes

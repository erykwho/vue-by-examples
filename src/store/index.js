import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import expenses from './modules/expenses-diary/expenses'
import authentication from './modules/expenses-diary/authentication'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    posts,
    expenses,
    authentication
  }
})

if (module.hot) {
  module.hot.accept(['./modules/posts'], () => {
    const NewPost = require('./modules/posts').default
    const NewExpense = require('./modules/expenses-diary/expenses').default
    const NewAuthentication = require('./modules/expenses-diary/authentication').default
    store.hotUpdate({
      modules: {
        posts: NewPost,
        expensesDiary: NewExpense,
        authentication: NewAuthentication
      }
    })
  })
}

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import expenses from './modules/expenses-diary/expenses'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    posts,
    expenses
  }
})

if (module.hot) {
  module.hot.accept(['./modules/posts'], () => {
    const NewPost = require('./modules/posts').default
    const NewExpense = require('./modules/expenses-diary/expenses').default
    store.hotUpdate({
      modules: {
        posts: NewPost,
        expenses: NewExpense
      }
    })
  })
}

export default store

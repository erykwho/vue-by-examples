import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    posts
  }
})

if (module.hot) {
  module.hot.accept(['./modules/posts'], () => {
    const NewPost = require('./modules/posts').default
    store.hotUpdate({
      modules: {
        posts: NewPost
      }
    })
  })
}

export default store

export const posts = state => state.posts

export const postById = (state, getters) => (id) => {
  return state.posts.find(post => post.id === id)
}

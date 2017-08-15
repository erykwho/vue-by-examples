var total = 5

const state = {
  posts: [
    {id: 1, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae dolor quis elit scelerisque ullamcorper ut non ex. Duis tempor magna vitae leo congue fermentum. Praesent ac efficitur felis. Phasellus sed tempor velit. Suspendisse aliquet tellus non risus maximus, sed ultricies nulla commodo. Ut rutrum ut justo eget ultrices. Integer blandit, massa non ultricies dignissim, sapien massa aliquet ligula, ac pretium odio lectus nec metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet aliquet urna. Etiam consectetur dui nec molestie dapibus.'},
    {id: 2, title: 'In eros', content: 'In eros nunc, sagittis nec faucibus et, vestibulum vel magna. Praesent sed erat ante. Maecenas sed libero tincidunt, scelerisque risus volutpat, vulputate risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur varius, massa sit amet laoreet molestie, risus nisl porttitor felis, ut ornare elit enim a elit. Aenean rhoncus auctor bibendum. Sed sit amet sapien semper, egestas lacus a, dapibus neque.'},
    {id: 3, title: 'Vivamus tincidunt', content: 'Vivamus tincidunt erat pretium tempus finibus. Donec nec felis cursus, varius elit vel, pharetra ex. Donec vehicula, diam ut mollis auctor, magna lacus feugiat velit, gravida malesuada velit risus sit amet orci. Sed urna nisi, imperdiet id urna nec, interdum finibus felis. Nulla vel sapien in ante consequat lacinia vel eu urna. Curabitur eu nisi dictum, fringilla ligula at, efficitur risus. Duis volutpat orci justo, eget vulputate magna dignissim a. Ut viverra mauris eleifend nunc tincidunt, id accumsan nisi tempor. Donec eu enim efficitur, porttitor sapien id, dictum velit. Donec massa sapien, sodales vel fermentum a, laoreet in nunc. Donec nec nulla orci. Nullam et diam elit. Nam in justo egestas, efficitur lacus eget, maximus ex.'},
    {id: 4, title: 'Nam odio', content: 'Nam odio dolor, eleifend eu neque hendrerit, volutpat elementum neque. Nunc blandit est sodales massa congue consectetur. Donec fringilla at massa at facilisis. Suspendisse eu elementum lacus. Quisque diam purus, suscipit id lobortis at, viverra sed velit. Sed sed leo arcu. Ut nunc leo, egestas eget sapien vel, iaculis luctus ligula. Integer tempus ante ut egestas commodo. Maecenas bibendum vestibulum sollicitudin.'}
  ]
}

const getters = {
  posts: state => state.posts,
  postById: (state, getters) => (id) => {
    return state.posts.find(post => post.id === id)
  }
}

const mutations = {
  editPost (state, post) {
    console.log('Mutations')
    console.log(post)
    let index = state.posts.map((el) => el.id).indexOf(post.id)
    state.posts[index].title = post.title
    state.posts[index].content = post.content
  },
  createPost (state, post) {
    state.posts.push({
      id: total,
      title: post.title,
      content: post.content
    })
    total++
  }
}

const actions = {
  createPost (context, post) {
    return new Promise((resolve) => {
      context.commit('createPost', post)
      resolve({ id: total - 1 })
    })
  },
  editPost (context, content) {
    context.commit('editPost', content.post)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

<template>
<div>
  <new-post></new-post>
  <ul>
    <li
      v-for="post in posts"
      @click="showPost(post.id)">
      {{post.title}}
    </li>
  </ul>
  <post :post="postById"></post>

</div>
</template>

<script>
  import Post from './Post.vue'
  import NewPost from './NewPost.vue'
  export default {
    data () {
      return {
        postId: null,
        newPost: ''
      }
    },
    components: {
      Post,
      NewPost
    },
    computed: {
      postById () {
        return this.$store.getters.postById(this.postId)
      },
      posts () {
        return this.$store.getters.posts
      }
    },
    methods: {
      showPost (id) {
        this.postId = id
      }
    }
  }
</script>

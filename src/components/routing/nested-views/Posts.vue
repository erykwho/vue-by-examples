<template>
<div>
  <input v-model.number="postId">
  <post :post="postById" v-if="postById"></post>
</div>
</template>

<script>
  import Post from './Post.vue'
  export default {
    data () {
      return {
        postId: null
      }
    },
    components: {
      Post
    },
    computed: {
      postById () {
        return this.$store.getters.postById(this.postId)
      }
    }
  }
</script>

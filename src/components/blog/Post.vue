<template>
  <div>
    <span v-if="post">
      <h2>{{post.title}}</h2>
      <p>{{post.content}}</p>
    </span>

    <span v-else>
      <h3>Post {{postId}} not found</h3>
    </span>
  </div>
</template>

<script>
  export default {
    props: ['postId'],
    computed: {
      post () {
        return this.$store.getters.postById(this.postId)
      }
    }
  }
</script>

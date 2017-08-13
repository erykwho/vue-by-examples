<template>
  <div>
    <p>All posts</p>
    <template v-for="post in posts">
      <div class="row">
        <div class="col-8">
          ({{post.id}}) - {{post.title}}
        </div>
        <div class="col-4">

          <button @click="show(post.id)" class="btn btn-outline-primary">
            Show
          </button>
        </div>
      </div>

    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'posts'
      ])
    },
    methods: {
      show (postId) {
        this.$emit('showPost', postId)
      }
    }
  }
</script>

<template>
  <div>
    <div class="row justify-content-center">
      <h1>Blog</h1>
    </div>

    <div class="row justify-content-center">

      <div class="col-9 border">
        <transition name="fade" mode="out-in">
          <post :key="postId" v-if="postId" :postId="postId"></post>
        </transition>
      </div>

      <div class="col-3">

        <div class="row justify-content-center">
          <router-link to="/blog/post/new">
            <button class="btn btn-outline-success">
              I wanna write
            </button>
          </router-link>
        </div>

        <div class="form-horizontal p-4">
          <label for="postId" class="form-control-label">Search</label>
          <input id="postId" class="form-control" placeholder="Post id"
                 v-model="searchPostId"
                 v-on:input="show"
                 v-on:keyup.enter="show"
          >

        </div>

        <post-titles @showPost="showPost($event)"></post-titles>

      </div>

    </div>

  </div>

</template>

<script>
import Post from '@/components/blog/Post'
import PostTitles from '@/components/blog/PostTitles'
export default {
  props: ['postId'],
  components: { Post, PostTitles },
  data () {
    return {
      searchPostId: null
    }
  },
  methods: {
    showPost (postId) {
      let route = '/blog/post/' + postId
      this.$router.push(route)
    },
    show (event) {
      let value = event.target.value
      if (value) {
        let route = '/blog/post/' + event.target.value
        this.$router.push(route)
      }
    }

  }
}
</script>


<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

</style>

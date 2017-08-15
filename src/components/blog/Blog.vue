<template>
  <div>
    <div class="row justify-content-center">
      <h1>Blog</h1>
    </div>

    <div class="row justify-content-center">

      <div class="col-9 border">
        <post v-if="postId" :postId="postId"></post>
      </div>

      <div class="col-3">

        <div class="row justify-content-center">
          <router-link to="blog/post/new">
            <button class="btn btn-outline-success">
              I wanna write
            </button>
          </router-link>
        </div>

        <div class="form-horizontal p-4">
          <label for="postId" class="form-control-label">Search</label>
          <input id="postId" class="form-control" placeholder="Post id" v-model.number="postId">
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
  data () {
    return {
      postId: null
    }
  },
  components: { Post, PostTitles },
  methods: {
    showPost (postId) {
      this.postId = postId
    }
  }
}
</script>

<template>
  <div>
    <h2>Write a new post</h2>

    <div class="row">
      <div class="form-group form-horizontal form-inline">
        <div class="col-4">
          <label for="title" class="form-control-label">Title</label>
        </div>
        <div class="col-8">
          <input id="title" class="form-control" v-model="post.title">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="form-group form-horizontal form-inline">
        <div class="col-4">
          <label for="content" class="form-control-label">Content</label>
        </div>
        <div class="col-8">
          <textarea id="content" class="form-control" v-model="post.content"></textarea>
        </div>
      </div>
    </div>

    <div class="row">
      <router-link to="/blog">
        <button class="m-1 btn btn-primary">
          Go back
        </button>
      </router-link>
      <button @click="create" class="m-1 btn btn-primary">
        Create
      </button>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        post: {
          title: null,
          content: null
        }
      }
    },
    methods: {
      create () {
        this.$store.dispatch('createPost', this.post).then((response) => {
          this.$router.push('/blog/post/' + String(response.id))
        })
      }
    }
  }
</script>

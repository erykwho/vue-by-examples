<template>
  <div>
    <div class="row justify-content-center">
      <h3>New Post</h3>
    </div>


    <div class="row justify-content-center">
      <label for="title" class="form-control-label">Title</label>
      <input id="title" name="title" v-model="post.title" class="form-control">
    </div>

    <div class="row justify-content-center">
      <label for="content" class="form-control-label">Title</label>
      <textarea id="content" name="content" type="text" v-model="post.content" class="form-control">
      </textarea>
    </div>

    <div class="row justify-content-center">
      <button class="btn card-outline-primary" @click="create">Create New Post</button>
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
        this.$store.commit('newPost', this.post)
      }
    }
  }
</script>

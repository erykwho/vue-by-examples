<template>
  <div>
    <span v-if="post">

      <span v-if="editMode">
        <h4>Edit Post</h4>
        <input id="title" class="form-control" v-model="post.title">
        <textarea rows="15" id="content" class="form-control" v-model="post.content"></textarea>
      </span>

      <span v-else>
        <h2>{{post.title}}</h2>
        <p>{{post.content}}</p>
      </span>


      <div class="row justify-content-center">
        <button class="m-3 btn btn-outline-primary" v-if="!editMode" @click="editMode = true">Edit post</button>
        <button class="m-3 btn btn-outline-warning" v-if="editMode" @click="editMode = falase">Cancel</button>
        <button class="m-3 btn btn-outline-success" v-if="editMode" @click="edit">Confirm</button>
      </div>
    </span>

    <span v-else>
      <h3>Post {{postId}} not found</h3>
    </span>

  </div>
</template>

<script>
  export default {
    props: ['postId'],
    data () {
      return {
        editMode: false
      }
    },
    computed: {
      post () {
        return this.$store.getters.postById(Number(this.postId))
      }
    },
    methods: {
      edit () {
        // TODO: pass index of post or change mutation to find index of post from its id
        this.$store.dispatch('editPost', {postId: this.post.id, post: this.post})
        this.editMode = false
      }
    }
  }
</script>

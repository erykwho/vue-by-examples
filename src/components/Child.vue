<template>
  <div>
    <h3>{{name}}</h3>
    <form class="form-horizontal">
      <div class="row">
        <input type="text" style="width: 40%;" v-model="newName">
        <button v-on:click="rename" type="button" class="btn btn-success">Rename</button>
      </div>
      <div class="row" v-show="! daddyGood">
        <button v-on:click="suicide" type="button" class="btn btn-danger">Suicide</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['name', 'index', 'daddyGood'],
    data () {
      return {
        newName: this.name
      }
    },
    methods: {
      suicide: function () {
        this.$emit('abortChild', this.index)
      },
      rename: function () {
        this.$emit('rename', {
          newName: this.newName,
          index: this.index
        })
      }
    }
  }
</script>

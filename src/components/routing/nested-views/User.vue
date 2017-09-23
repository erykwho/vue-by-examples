<template>
<div>
  <h1>User {{$route.params.id}}</h1>
  <button class="btn btn-outline-success" @click="goTo('profile')">Profile</button>
  <button class="btn btn-outline-success" @click="goTo('posts')">Posts</button>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  methods: {
    goTo (destination) {
      let route = '/nested-views/' + this.$route.params.id + '/' + destination
      this.$router.push(route)
    }
  }
}
</script>

<template>
  <div>
    <div class="row justify-content-center">
      <h1>Routing</h1>
    </div>
    <div class="row justify-content-center">
      <h2>Page {{$route.params.id}}</h2>
    </div>
    <div class="row justify-content-center">
      <b-form-input v-model.number="page" type="number"></b-form-input>
      <b-button :to="routingPage">Go to page {{page}}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: ''
    }
  },
  computed: {
    routingPage () {
      return '/routing/' + String(this.page)
    }
  }
}
</script>

<template>
  <div>
    <div class="row justify-content-center">
      <h1>Routing</h1>
    </div>
    <div class="row justify-content-center">
      <h2>Route Page {{$route.params.id}}</h2>
      <h2>Routed Page {{$route.params.routed_id}}</h2>
    </div>
    <div class="row justify-content-center">
      <b-form-fieldset description="Route id">
        <b-form-input v-model.number="page" type="number"></b-form-input>
      </b-form-fieldset>

      <b-input-group :left="routingPage + /routed/">
        <b-form-input v-model.number="routedPage" type="number"></b-form-input>
      </b-input-group>

      <b-button :to="newRoute">Go to page</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: '',
        routedPage: ''
      }
    },
    computed: {
      routingPage () {
        return '/routing/' + String(this.page)
      },
      newRoute () {
        return this.routingPage + /routed/ + this.routedPage
      }
    }
  }
</script>

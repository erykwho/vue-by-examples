<template>
  <div id="login">

    <b-alert variant="danger" dismissible :show="error ? true : false" @dismissed="error=null">
      {{error}}
    </b-alert>

    <form class="form-horizontal">

      <div class="row">
        <label class="text-right control-label col-4 m-2">Email:</label>
        <b-form-input v-model="credentials.email" type="email" class="form-control col-4 m-1"
                      placeholder="Email"></b-form-input>
      </div>

      <div class="row">
        <label class="text-right control-label col-4 m-2">Password:</label>
        <b-form-input v-model="credentials.password" type="password" class="form-control col-4 m-1"
                      placeholder="Password"></b-form-input>
      </div>

      <div class="row">
        <div class="offset-4"></div>
        <b-button size="md" variant="primary" class="col-4 m-3" @click="login">Login</b-button>
      </div>


    </form>

  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        credentials: {
          email: '',
          password: ''
        },
        error: null
      }
    },
    methods: {
      login () {
        this.loading = {
          value: true,
          message: 'Loging user...'
        }
        this.$store.dispatch('login', this.credentials)
          .then(() => {
            let route = '/exd'
            this.$router.push(route)
          })
          .catch((err) => {
            this.error = err.data.message
            this.loading = false
          })
      }
    }
  }
</script>

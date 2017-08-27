<template>
  <div class="menu">
    <b-navbar toggleable type="inverse" variant="inverse">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/exd">
        <span>Expenses Diary</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item to="/exd/expenses">List Expenses</b-nav-item>
        </b-nav>

        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item to="/exd/login" v-show="!exdLogged" right>Login</b-nav-item>
          <b-nav-item to="/exd/logout" v-show="exdLogged" right>Logout</b-nav-item>
          <b-nav-item to="/exd/sign-up" v-show="exdLogged" right>Sign Up</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>

    <!-- navbar.vue -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters([
      'exdLogged'
    ])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


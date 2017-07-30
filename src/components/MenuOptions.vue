<template>
  <div class="menu">
    <b-navbar toggleable type="inverse" variant="inverse">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" width="30" height="30" alt="">
        <span>Vue By Examples</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>

          <b-nav-item-dropdown text="Routing" right>
            <b-dropdown-item to="/dynamic-routing">Dynamic Routing</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Cool Stuff" right>
            <b-dropdown-item to="/yesno">Yes/No</b-dropdown-item>
            <b-dropdown-item to="/bootstrap-learning">Bootstrap Learning</b-dropdown-item>
            <b-dropdown-item to="/good-dady">Good Daddy</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item to="/about" right>About</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>

    <!-- navbar.vue -->
  </div>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


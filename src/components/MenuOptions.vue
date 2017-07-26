<template>
  <div class="menu">
    <b-navbar toggleable type="inverse" variant="success">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <span>Vue By Examples</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item to="/about">About</b-nav-item>
        </b-nav>

        <b-nav is-nav-bar class="ml-auto">

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Examples" right>
            <b-dropdown-item to="/yesno">Yes/No</b-dropdown-item>
            <b-dropdown-item to="/bootstrap-play">Bootstrap Play</b-dropdown-item>
            <b-dropdown-item to="/emit-trigger">Emit Trigger</b-dropdown-item>
          </b-nav-item-dropdown>

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


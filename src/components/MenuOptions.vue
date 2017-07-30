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
          <template v-for="group in groups">
            <b-nav-item-dropdown :text="group.name" right>
              <b-dropdown-item
                :key="route.id"
                v-for="route in categoryRoutes(group.category)"
                :to="route.path">
                {{route.name}}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </template>

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
  import routes from '../router/routes.js'

  export default {
    name: 'menu',
    data () {
      return {
        routes: routes,
        groups: [
          {
            name: 'Routing',
            category: 'routing'
          },
          {
            name: 'Cool Stuff',
            category: 'coolStuff'
          }
        ]
      }
    },
    methods: {
      categoryRoutes (category) {
        let routes = this.routes.slice()
        return routes.filter(function (el) {
          return el.category === category
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


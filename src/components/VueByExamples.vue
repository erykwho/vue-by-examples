<template>
  <div>
    <template v-for="group in routeGroups">
      <div class="jumbotron">
        <div class="row justify-content-center">
          <h1>{{group.name}}</h1>
        </div>
        <template v-for="route in categoryRoutes(group.category)">
          <div class="row justify-content-center">
            <router-link :to="route.path">
              <li class="list-group-item list-group-item-action justify-content-center">
                {{route.name}}: {{route.path}}
              </li>
            </router-link>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import routes from '../router/routes.js'
import routeGroups from '../router/groups.js'

export default {
  data () {
    return {
      routes: routes,
      routeGroups: routeGroups
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


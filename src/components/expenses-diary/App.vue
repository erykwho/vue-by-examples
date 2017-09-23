<template>
  <div id="exd">
    <menu-options></menu-options>
    <router-view></router-view>
  </div>

</template>

<script>
  import Login from './Login'
  import MenuOptions from './MenuOptions'
  import { mapGetters } from 'vuex'
  export default {
    components: { Login, MenuOptions },
    computed: mapGetters([
      'exdLogged'
    ])
  }
</script>

<template>
  <div id="app">
    <menu-options></menu-options>
    <div class="row">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MenuOptions from '@/components/MenuOptions'
export default {
  name: 'app',
  components: {
    MenuOptions
  }
}
</script>

<style>
</style>

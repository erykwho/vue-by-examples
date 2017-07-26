<template>
  <div id="app">
    <menu-options></menu-options>
    <div class="container">
      <transition mode="out-in" appear name="slide">
        <router-view></router-view>
      </transition>
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

  .slide-enter
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(-300%);
  }
  .slide-enter-active {
    transition: all .3s;
  }
  .slide-leave-active {
    transition: all .3s;
  }
  .slide-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(300%);
  }

</style>

<template>
  <div>
    <div class="row justify-content-center">
      <p class="loading">Loading {{target}}</p>
    </div>
    <div class="row justify-content-center">
      <pulse-loader :size="size" :color="color"></pulse-loader>
    </div>
  </div>
</template>


<script>
  import PulseLoader from 'vue-spinner/src/PulseLoader'
  export default {
    props: ['target'],
    data () {
      return {
        size: '20px',
        color: 'gray'
      }
    },
    components: { PulseLoader }
  }
</script>

<style>
  .loading {
    color: #777777;
    font-weight: bold;
  }
</style>

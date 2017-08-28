<template>
  <div id="logout">

  </div>
</template>

<script>
  export default {
    name: 'logout',
    mounted () {
      this.$store.commit('logout')
      this.$router.push('/exd')
    }
  }
</script>

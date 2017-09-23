<template>
  <div class="hello">
    <b-alert variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
      Dismissible Alert!
    </b-alert>

    <div class="row">
      <div class="col-4 pb-2">
        <b-button size="sm" variant="primary" href="" @click="showDismissibleAlert = true">
          Invoke something dangerous
        </b-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      dismissCountDown: null,
      showDismissibleAlert: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

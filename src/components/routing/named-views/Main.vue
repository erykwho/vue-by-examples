<template>
  <div>
    <div class="row">
      <div class="col-6">
        <router-view></router-view>
      </div>
      <div class="col-6">
        <router-view name="second"></router-view>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <router-view name="third"></router-view>
      </div>
    </div>
  </div>
</template>


<script>

</script>

<template>
  <div id="app" class="c-cover-box">
    <router-view v-if="false"></router-view>
    <div class="c-container c-cover-box c-flex-between">
<router-view name="aside"></router-view>
      <div class="c-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>

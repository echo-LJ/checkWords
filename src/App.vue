<template>
  <div id="app" class="c-cover-box">
    <router-view v-if="false"></router-view>
    <div class="c-container c-cover-box c-flex-between">
      <router-view name="aside"></router-view>
      <div class="c-body-container c-flex-item c-flex">
        <router-view name="body"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./assets/css/commonVar.scss";
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.c-body-container {
  padding: $container-spacing;
}
</style>

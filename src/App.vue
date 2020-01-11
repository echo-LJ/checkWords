<template>
  <div id="app" class="c-cover-box">
    <router-view v-if="false"></router-view>
    <div class="c-container c-cover-box c-flex-between">
      <Aside></Aside>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// <router-view></router-view>
import Aside from "./views/aside/Aside";
export default {
  name: "app",
  components: {
    Aside
  }
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

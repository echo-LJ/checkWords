<template>
  <div id="app" class=" c-container c-cover-box c-flex-between">
    <Aside v-if="false"></Aside>
    <div class="c-flex-item">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Aside from "./views/aside/Aside.vue";
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

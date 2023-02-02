<template>
  <div id="app" class=" c-container c-cover-box c-flex-between">
    <Aside></Aside>
    <div class="c-flex-item c-flow-auto">
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

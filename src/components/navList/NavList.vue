<template>
  <div class="nav-list-container c-flex-item c-flex-center">
    <router-link class="n-link" v-for="(item, index) in routerNames" :key="index" :to="{ name: item.name, params: item.params }">
      <!-- {{ item.name }} -->
    </router-link>
  </div>
</template>

<script>
import * as routerNames from "../../router/routerNames.ts";

export default {
  name: "NavList",
  data() {
    return {
      routerNames: [
        {
          name: routerNames.HELLO,
          params: {}
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.nav-list-container{
  padding: $spacing * 6 0 $spacing * 4 0;
}

</style>

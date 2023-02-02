<template>
  <div class="nav-list-container c-flex-item c-flex-center">
    <router-link class="n-link" v-for="(item, index) in routerNames" :key="index" :to="{ name: item.value, params: item.params }">
      <span class="item-label c-font-500-16"> {{ item.label }}</span>
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
        //   label: '添加单词',
        label: '1',
          value: routerNames.ADDWORD,
          params: {}
        },
        {
        //   label: '单词艾宾浩斯',
          label: '2',
          value: routerNames.WORDEBBINGHAUS,
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
  flex-direction:column;
  .item-label{
    line-height: 40px;

  }
}

</style>

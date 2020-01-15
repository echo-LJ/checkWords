<template>
  <div class="nav-list-container c-flex-item c-flex-column">
    <router-link
      class="n-link c-flex-item"
      v-for="(item, index) in routerNames"
      :key="index"
      :to="{ name: item.name, params: item.params }"
    >
      <div class="c-flex-center">
        <Icon :type="item.icon" />
        <div class="c-flex-item">
          {{ item.label }}
        </div>
      </div>
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
          label: "添加单词",
          params: {},
          icon: "ios-add"
        },
        {
          name: routerNames.BOOKLIST,
          label: "单词书籍",
          params: {},
          icon: "ios-book-outline"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.nav-list-container {
  padding: $spacing * 6 0 $spacing * 4 0;
  .n-link {
    color: $Divider;
    width: 100%;
    font-size: 20px;
    i {
      font-size: 30px;
    }
  }
  .router-link-active {
    color: $success;
  }
}
</style>

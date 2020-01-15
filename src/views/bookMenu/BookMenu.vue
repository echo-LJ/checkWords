<template>
  <div class="book-menu-container c-flex-column c-cover-box">
    <div
      class="bm-module c-flex-item c-flex-center"
      v-for="menu in menuData"
      :key="menu.name"
      @click="handleClickMenu(menu)"
    >
      <Icon :type="menu.meta.icon" />
      <div class="bm-module-item-label c-flex-item">
        {{ menu.meta.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from "../../router/index.ts";
export default {
  name: "BookMenu",
  data() {
    return {
      currentRouteName: ""
    };
  },
  computed: {
    menuData() {
      return routes.filter(item => item.isMenu);
    }
  },
  methods: {
    handleClickMenu(menu) {
      this.currentRouteName = menu.name
      this.$router.push(menu.path);
    }
  }
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.book-menu-container {
  .bm-module {
    padding-left: $spacing;
    color: $success;
    cursor: pointer;
    &:hover {
      color: rgba(red, 0.5);
    }
    i {
      font-size: 30px;
    }
  }
  .bm-module-item-label {
    padding: $spacing;
    font-size: 20px;
  }
}
</style>

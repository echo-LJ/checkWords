<template>
  <div class="aside-container c-flex-column">
    <div class="a-photo-box c-flex-center">
      <img src="./../../assets/img/honeGirl.jpg" />
    </div>
    <div class="a-menu-box">
      <book-menu></book-menu>
    </div>
  </div>
</template>

<script>
import BookMenu from "./../bookMenu/BookMenu.vue";

export default {
  name: "Aside",
  components: {
    BookMenu
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.aside-container {
  height: 100%;
  width: 300px;
  background: $white;
  box-shadow: 2px 0 3px -1px rgba($black, 0.3);
  padding: 4 * $spacing;
  .a-photo-box {
    border-radius: 100%;
    width: 220px;
    height: 220px;
    overflow: hidden;
  }
  .a-menu-box {
    flex: 1;
    padding: 0 2 * $spacing;
    margin-top: 4 * $spacing;
  }
}
</style>

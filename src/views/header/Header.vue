<template>
  <div class="header-container c-flex-center">
    
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.$Message.success("Success!");
          this.router
        } else {
          // this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.header-container {
  height: 65px;
  width: 100%;
  box-shadow: 0px 0px 5px 2px rgba($black, 0.1);
}
</style>

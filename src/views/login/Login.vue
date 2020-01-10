<template>
  <div class="login-container c-cover-box c-flex-center">
    <div class="l-center-box c-flex">
      <div class="l-speechcraft">人生每一个清晨到该努力</div>
      <div class="l-center-form">
        <span>用户注册</span>
        <div class="l-center-login">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user" name="user">
              <Input
                type="text"
                v-model="formInline.user"
                placeholder="Username"
              ></Input>
            </FormItem>
          </Form>
        </div>
        <div class="l-center-register"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      formInline: {
        user: ""
      },
      Username: "111",
      ruleInline: {}
    };
  }
};
</script>

<style lang="scss">
@import "./../../assets/css/commonVar.scss";
.login-container {
  background-image: url(./../../assets/img/sunset.jpg);
  background-size: cover;
  .l-center-box {
    width: 60%;
    height: 65%;
    background: rgba($silver, 0.1);
    margin-bottom: 5%;
    box-shadow: 0px 0px 5px 2px rgba($black, 0.1);
  }
  .l-speechcraft {
    color: red;
    width: 65%;
  }
  .l-center-form {
    width: 35%;
    padding: 80px 30px;
    text-align: left;
    background: rgba($white, 0.8);
  }
}
</style>

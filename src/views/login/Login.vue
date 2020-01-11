<template>
  <div class="login-container c-cover-box c-flex-center">
    <div class="l-center-box c-flex">
      <div class="l-speechcraft">{{ chickenSoup }}</div>
      <div class="l-center-form">
        <div class="l-common-padding">用户登录</div>
        <div class="l-center-login">
          <Form ref="formValidate" :model="userForm" :rules="ruleInline" inline>
            <FormItem prop="user">
              <Input
                type="text"
                size="large"
                prefix="ios-contact"
                v-model="userForm.user"
                placeholder="Username"
              ></Input>
            </FormItem>
            <FormItem prop="password">
              <Input
                type="text"
                size="large"
                prefix="md-body"
                v-model="userForm.password"
                placeholder="password"
              ></Input>
            </FormItem>
            <div class="c-flex-center">
              <Button
                type="success"
                size="large"
                @click="handleSubmit('formValidate')"
              >
                登录
              </Button>
            </div>
          </Form>
        </div>
        <div class="l-center-register"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    const userValidator = (rule, value, callback) => {
      if (value !== "") {
        if (value === this.check.user) {
          callback();
        } else {
          return callback(new Error("用户名输入错误！"));
        }
      } else {
        return callback(new Error("请输入用户名！"));
      }
    };
    const passwordValidator = (rule, value, callback) => {
      if (value !== "") {
        if (value === this.check.password) {
          callback();
        } else {
          return callback(new Error("密码输入错误！"));
        }
      } else {
        return callback(new Error("请输入密码！"));
      }
    };
    return {
      userForm: {
        user: ""
      },
      check: {
        user: "Echo",
        password: "Beautiful"
      },
      chickenSoup: "此处是鸡汤",
      Username: "111",
      ruleInline: {
        user: [
          {
            validator: userValidator,
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: passwordValidator,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.$Message.success("Success!");
          // this.router
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
    font-size: 30px;
    text-align: left;
    width: 65%;
    padding: 4 * $spacing;
  }
  .l-common-padding {
    padding-bottom: 2 * $spacing;
  }
  .l-center-form {
    width: 35%;
    padding: 8 * $spacing 3 * $spacing;
    text-align: left;
    background: rgba($white, 0.8);
  }
}
</style>

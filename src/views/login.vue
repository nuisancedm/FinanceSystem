<template>
  <div>
    <el-row type="flex" justify="center">
      <el-card>
        <div slot="header">
          <!--登录卡标题-->
          <h2>塔塔金融管理系统</h2>
        </div>

        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!--登录卡表单-->
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <!--登录按钮-->
          <el-form-item>
            <el-button type="primary" class="loginBtn" @click="login"
              >立即登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { post } from "@/utils/http";
import { setToken } from "../utils/tokens";
export default {
  data() {
    //自定义用户名正则验证
    var usernamePass = (rule, value, callback) => {
      const reg = /^\w{4,8}$/;
      if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("用户名要求4-8为字母组合"));
      }
    };

    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { validator: usernamePass, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          post("/login", this.ruleForm)
            .then((res) => {
              setToken(res.token);
              sessionStorage.setItem("nickname", res.nickname);
              this.$router.push("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-card {
  width: 500px;
  text-align: center;
  margin-top: 200px;
}
.loginBtn {
  width: 100%;
}
</style>
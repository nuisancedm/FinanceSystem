<template>
  <div class="wrap">
    <el-menu
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
    >
      <h3 class="menutitle">塔塔金融管理系统</h3>
      <menus
        v-for="(item, index) in menuData"
        :key="index"
        :eachitem="item"
      ></menus>
      <!--循环组件递归生成动态菜单 /menus-->
    </el-menu>
  </div>
</template>

<script>
import { get } from "@/utils/http.js";
import menus from "./menus.vue";
export default {
  created() {
    get("/menu").then((res) => {
      //请求菜单数据
      this.menuData = res.data;
    });
  },
  data() {
    return {
      menuData: "",
    };
  },
  components: { menus },
};
</script>

<style lang="less" scoped>


.el-menu {
  border: none;
  height: 100vh;
  
  .menutitle {
    background: #001529;
    color: white;
    text-align: center;
    margin-top: 20px;
  }
}
.wrap {
  background: #001529;
  height: 100%;
}
</style>
<template>
  <div class="layout">
    <el-container>
      <!--布局-->
      <el-aside width="250px"><left-nav></left-nav></el-aside>
      <!--左侧菜单导航-->
      <el-container>
        <el-header><headers></headers></el-header>
        <!--顶部-->
        <el-main>
          <keep-alive
            ><router-view v-if="$route.meta.keepAlive"></router-view
          ></keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
        <!--主体 加载路由-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNav from "../components/LeftNav.vue";
import headers from "../components/Headers.vue";
export default {
  name: "Home",
  components: { leftNav, headers },
};
</script>

<style lang="less" scoped>
.el-header {
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border: none;
  line-height: 60px;
  color: #333;
}
::-webkit-scrollbar {
  display: none;
}
.el-main {
  background: #e8edf3;
}
</style>

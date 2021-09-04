<template>
  <!--菜单里的每一项 在LeftNav里被循环-->
  
  <div> <!--submenu或menu-item二选一-->
    <el-submenu v-if="eachitem.children" :index="eachitem.url">
        <template slot="title">
          <i :class="eachitem.icon"></i>
          <span>{{eachitem.name}}</span>
        </template>
        <menuloop v-for="(item,index) in eachitem.children" :key="index" :eachitem="item"></menuloop> <!--在submenu里递归-->
    </el-submenu>
    <el-menu-item v-else :index="eachitem.url">
        <i :class="eachitem.icon"></i>
        <span slot="title">{{eachitem.name}}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name:"menuloop",
  props: { eachitem: {
      required:true,
      type:Object
  } },
};
</script>

<style lang="less" scoped>
</style>
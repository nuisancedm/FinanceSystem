<template>
  <div>
    <el-card>
      <el-button @click="back"> 返回 </el-button>
    </el-card>

    <el-card class="mt">
      详细信息
      <div class="mt">阿巴阿巴阿巴阿巴阿巴阿巴</div>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/product/all");
    },
  },
};
</script>

<style lang="less" scoped>
</style>
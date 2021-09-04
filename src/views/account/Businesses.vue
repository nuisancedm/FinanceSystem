<template>
  <div>
    <bread :breads="meta"></bread>
    我是业务人员
  </div>
</template>

<script>
import bread from "@/components/breadCrumb.vue";
export default {
  components: {
    bread,
  },
  data() {
    return {
      meta: this.$route.meta,
    };
  },
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div>
    <bread :breads="meta"></bread>
    <el-card>
      <el-radio-group v-model="radio1">
        <el-radio-button label="1">待审核</el-radio-button>
        <el-radio-button label="2">审核中</el-radio-button>
        <el-radio-button label="3">审核通过</el-radio-button>
        <el-radio-button label="4">审核拒绝</el-radio-button>
          <el-radio-button label="5">已放款</el-radio-button>
      </el-radio-group>
        <keep-alive>
            <component :is="currentTabComponent"> </component>
        </keep-alive>
        
    </el-card>

    
    
  </div>
</template>

<script>
import bread from "../../components/breadCrumb.vue";
import myTabs1 from './Tabs1.vue'
import myTabs2 from './Tabs2.vue'
export default {
  data() {
    return {
      meta: this.$route.meta,
      radio1:"1",
     
    };
  },
  computed:{
       currentTabComponent(){
           return "myTabs"+this.radio1
       },
  },
  components: {
    bread,myTabs1,myTabs2
  },
};
</script>

<style lang="less" scoped>
</style>
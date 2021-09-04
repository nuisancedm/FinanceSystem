<template>
  <div>
    <bread :breads="meta"></bread>
    <!--搜索栏-->
    <el-card class="mt">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-input placeholder="产品名称" v-model.trim="searchValue" />
        </el-col>
        <el-col :span="6">
          <el-select v-model="rate" placeholder="利率" style="width: 100%">
            <el-option label="3.8%" value="3.8">3.8</el-option>
            <el-option label="3.9%" value="3.9">3.9</el-option>
            <el-option label="4.1%" value="4.1">4.1</el-option>
            <el-option label="4.3%" value="4.3">4.3</el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary">重置</el-button>

          <span class="el-dropdown-link ml" @click="expand" v-show="!advanced">
            展开<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <span class="el-dropdown-link ml" @click="expand" v-show="advanced">
            收起<i class="el-icon-arrow-up el-icon--right"></i>
          </span>
        </el-col>
      </el-row>
      <el-row :gutter="16" class="mt" v-show="advanced">
        <el-col :span="6">
          <el-input placeholder="产品类别" />
        </el-col>
        <el-col :span="6">
          <el-input placeholder="最高分期数" />
        </el-col>
        <el-col :span="6">
          <el-input placeholder="状态" />
        </el-col>
      </el-row>
    </el-card>
    <!--表格-->
    <el-card class="mt">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="name" label="产品名称"> </el-table-column>
        <el-table-column prop="type" label="产品类型"> </el-table-column>
        <el-table-column prop="rate" label="利率"> </el-table-column>
        <el-table-column prop="date" label="开放日期"> </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag
              effect="dark"
              :type="scope.row.status == 1 ? 'success' : 'danger'"
              >{{ scope.row.status == 1 ? "已启用" : "已禁用" }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="highest" label="最高分期数（月）">
        </el-table-column>
        <el-table-column prop="number" label="申请客户数量"> </el-table-column>
        <el-table-column prop="total" label="累计签约金额"> </el-table-column>
        <el-table-column prop="average" label="件均"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              :type="scope.row.status == 1 ? 'danger' : 'primary'"
              >{{ scope.row.status == 1 ? "停用" : "启用" }}</el-button
            >
            <el-button size="mini" type="primary" @click="detail(scope.row.name)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import bread from "../../components/breadCrumb.vue";
import moment from "moment";
import { get } from "@/utils/http";
export default {
  created(){
    this.list()
    console.log("111111")
  },

  data() {
    return {
      meta: this.$route.meta,
      searchValue: "",
      rate: "",
      date: "",
      advanced: false,

      tableData: [],
    };
  },
  methods: {
    expand() {
      this.advanced = !this.advanced;
    },
    search() {
      //moment(日期对象).format("YYYY-MM-DD")
      let start = moment(this.date[0]).format("YYYY-MM-DD");
      console.log(start);
    },
    list() {
      get("/productList").then((res) => {
        const data = res.data.list;
        this.tableData = data;
      });
    },
    detail(name){
      sessionStorage.setItem("name",name)
      this.$router.push("/product/detail")
    },
  },
  components: {
    bread,
  },
};
</script>

<style lang="less" scoped>
</style>
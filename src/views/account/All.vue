<template>
  <div>
    <!--面包屑-->
    <bread :breads="meta"></bread>
    <!--按钮-->
    <el-card class="mt">
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="input3" class="input fl">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="8" class="btns">
          <el-button type="primary" class="newbtn" @click="add"
            >新建角色</el-button
          >
          <el-button class="otherbtn" :disabled="!selected.length">启动</el-button>
          <el-button class="otherbtn" :disabled="!selected.length">冻结</el-button>
          <el-button class="otherbtn" :disabled="!selected.length">删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!--表格-->
    <el-card class="mt mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="account" label="账户"> </el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="character" label="角色"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
        <el-table-column prop="reason" label="创建原因"> </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            {{ scope.row.status == 1 ? "已启用" : "未启用" }}
          </template>
        </el-table-column>
        <el-table-column prop="date" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
            <el-button size="mini">
              {{ scope.row.status == 1 ? "禁用" : "启用" }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="2"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </el-card>

    <allmodal :visable="myVisable" @hide="hide" :title="mytitle"></allmodal>
  </div>
</template>

<script>
import allmodal from './AllModal.vue'
import { get } from "../../utils/http";
import bread from "@/components/breadCrumb.vue";
import {mapMutations} from 'vuex'
export default {
  created() {
    this.list();
  },

  components: {
    bread,allmodal
  },
  data() {
    return {
      meta: this.$route.meta,
      input3: "",
      tableData: [],
      selected:[],
      myVisable:false,
      mytitle:"编辑"
    };
  },

  methods: {
    ...mapMutations(["setRowData"]),
    list() {
      get("/all").then((res) => {
        this.tableData = res.data.list;
      });
    },
    handleSizeChange(size) {
      //发送axios请求
      console.log(size);
    },
    handleCurrentChange(cur) {
      //发送axios请求
      console.log(cur);
    },
    handleSelectionChange(selection){
      console.log(selection)
      this.selected=selection
    },
    //编辑用户信息
    edit(rowData){
      this.myVisable=true,
      this.setRowData(rowData)
      this.mytitle="编辑"
    },
    hide(){
      this.myVisable=false
    },
    //新增用户
    add(){
      this.setRowData({})
      this.myVisable=true
      this.mytitle="新建"
    }
  },
};
</script>

<style lang="less" scoped>
.el-input {
  width: 350px;
}
.otherbtn {
  width: 70px;
}

.btns {
  text-align: right;
}
</style>
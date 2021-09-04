<template>
  <div>
    <el-dialog :title="title" :visible="visable" width="600px" @close="close">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色:" prop="character">
          <el-select
            v-model="ruleForm.character"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="业务人员" value="1"></el-option>
            <el-option label="审核人员" value="2"></el-option>
            <el-option label="风控经理" value="3"></el-option>
            <el-option label="管理员" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注:" prop="remark">
          <el-input v-model="ruleForm.remark"></el-input>
        </el-form-item>

        <el-form-item label="创建原因:" prop="reason">
          <el-input v-model="ruleForm.reason"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    title:{
      require:true,
      type:String
    },
    visable: {
      require: true,
      type: Boolean,
    },
  },
  computed: {
    ...mapState(["rowData"]),
  },
  watch: {
    visable() {
      const {character,remark,reason} = this.rowData
      this.ruleForm = {
        character,
        remark,
        reason
      };
    },
  },

  data() {
    return {
      ruleForm: {
        character: "",
        remark: "",
        reason: "",
      },
      rules: {
        character: [
          { required: true, message: "请选择角色名", trigger: "change" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
        reason: [
          { required: true, message: "请输入创建原因", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    close() {
      this.$emit("hide");
    },
    ok(){
      //提交表单，请求更改数据  /user/add或者/user/edit
      const url=this.title=="新建"?"/user/add":"/user/edit"
      console.log(this.ruleForm,url)
    },
  },
};
</script>

<style lang="less" scoped>
</style>
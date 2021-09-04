<template>
  <div>
    <el-dropdown class="fr" @command="fn">
      <span class="el-dropdown-link">
        欢迎您,{{nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">个人中心</el-dropdown-item>
        <el-dropdown-item command="2">修改密码</el-dropdown-item>
        <el-dropdown-item command="3">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <p class="fr tips">今天是你在塔塔的第<span>{{days}}</span>天</p>
  </div>
</template>

<script>
import {get} from '../utils/http'
export default {
    methods:{
        fn(command){
            if(command==="3"){
                sessionStorage.clear(),
                this.$router.push('/login')
            }
        }
    },
    data(){
        return{
            nickname:sessionStorage.getItem('nickname'),
            indate:''
        }
    },
    computed:{
        days(){
            let now=new Date()
            let target=new Date(this.indate)
            let timedifference=(now-target)/1000/60/60/24
            return Math.floor(timedifference)
        },
    },
    created(){
      get('/in').then((res)=>{
          this.indate=res.date
      })
    },
};
</script>

<style lang="less" scoped>
.tips{margin-right: 20px;
    span{color: #40a9ff; font-size: 24px;}
    }
</style>
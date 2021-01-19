<template>
  <div class="homeBox">
    <el-container style="background-color:#fff;">
  <el-header>
    <el-col :span="6">
      <span> <i class="el-icon-s-fold" style="font-size:1.5rem;"></i>&nbsp;&nbsp;</span><span style="font-size:1.2rem">EMPLOYESS INFOR<span style="color:#FF6C60">MATION MANAGEMENT SYSTEM</span></span>
    </el-col>
    <el-col :span="3" class="tipboxs">
      <el-badge :value="1" class="item" type="success">
      <span><i class="el-icon-s-order" style="font-size:1rem;"></i></span>
      </el-badge>
      <el-badge :value="2" class="item" type="primary">
      <span><i class="el-icon-message" style="font-size:1rem;"></i></span>
      </el-badge>
      <el-badge :value="1" class="item" type="danger">
      <span><i class="el-icon-message-solid" style="font-size:1rem;"></i></span>
      </el-badge>
    </el-col>
    <el-col :span="3" :offset="12">
      <span  style="width:6.5rem;height:2.5rem;display:inline-block;cursor:pointer;">
        <span class="userlogo">
        <img src="../../../static/userlogo.jpg" alt="">
      </span>
      <span style="margin-top:-2rem;">
        <el-dropdown>
          <span style="width:3.5rem;height:2rem;">
            amos<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      </span>
    </el-col>
  </el-header>
  <el-container>
    <el-aside width="200px">
       <el-menu
      default-active="2-1"
      class="el-menu-vertical-demo"
      background-color="#333"
      text-color="#fff"
      active-text-color="#FF6C60">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>日常工作</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">员工在岗情况</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
        <i class="el-icon-menu"></i>
        <span>员工管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">员工基本信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
       <template slot="title">
        <i class="el-icon-document"></i>
        <span>部门管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">部门基本信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">资料管理</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>
<script>
export default {
  name:'Home',
  data(){
    return{}
  },
  methods:{

  }
}
</script>
<style scoped>
.homeBox{
  width: 100vw;
  height: 100vh;
}
.el-header {
    background-color: #FFF;
    color: #333;
    text-align: center;
    line-height: 60px;

  }
 
  .el-aside {
    background-color: #333;
    box-shadow: 10px 10px 5px  #333;
    height: 93.5vh;
  }
  
  .el-main {
    background-color: #f3f3f3;
    color: #333;
  }
  .el-badge >>>.el-badge__content.is-fixed {
    position: absolute !important;
    top: 15px !important;
    right: 20px !important;
    -webkit-transform: translateY(-50%) translateX(100%);
    transform: translateY(-50%) translateX(100%);
  }
  .tipboxs span{
    display:inline-block;
    width:2rem;
    height:2rem;
    text-align:center;
    line-height:2rem;
    border:.5px solid #f3f3f3;
    cursor: pointer;
  }
  .tipboxs span:hover{
    background-color: #e2e0e0;
  }
  .userlogo{
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    line-height: 2rem;
    margin-top: 15px;;
  }
  .userlogo img{
    width: 100%;
    height: 100%;
  }
</style>
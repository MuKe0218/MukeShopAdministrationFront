<template>
    <div id="index">
      <el-container>
        <el-header class="header" height="100px">
          <div class="flex">
            <img src="../assets/logo.png" class="logo">
            <h1 class="title">木可小店后台管理系统</h1>
          </div>
          <el-button type="danger" @click="exit">退出</el-button>
        </el-header>
        <el-container>
          <el-aside width="200px" class="aside">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router="true">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/userList">用户列表</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>角色管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/roleList">角色列表</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<style>
  .el-container{
    height: 100vh;
    overflow: hidden;
  }
  .header{
    background-color: rgb(31, 36, 42);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .aside {
    background-color: rgb(48, 55, 65);
  }
  .logo{
    width: 80px;
  }
  .title{
    color: #E9EEF3;
  }
  .flex{
    display: flex;
    align-items: center;
  }
</style>
<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {
    exit () {
      this.$message('这是退出登录按钮')
    }
  }
}
</script>

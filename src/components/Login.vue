<template>
  <div id="login">
    <el-row type="flex" class="row-bg">
        <el-col :span="6"><div class="logo-div">
          <img id="logo" src="../assets/木可小店.png">
        </div></el-col>
        <el-col :span="6"><div class="login-info-div">
          <el-form ref="form" :model="form" label-width="100px" class="login-info">
            <el-form-item label="账号：">
                <el-input v-model="form.admin" placeholder="请输入管理员账号"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
            </el-form>
        </div></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        admin: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.form.admin === 'admin' && this.form.password === 'admin123') {
        this.$router.push('/index')
      } else {
        this.$message('账号或密码有误')
      }
    },
    cancel () {
      this.form.admin = ''
      this.form.password = ''
    }
  }
}
</script>

<style scoped>
 #logo {
   width: 300px;
   height: 400px;
   margin-left: 200px;
 }
 #login {
  width: 1000px;
  height: auto;
  background-color: rgb(248, 246, 246);
  margin: auto;
  }
/*.head-portrait {
    width: 600px;
    height: auto;
    background-color: brown;
} */
.login-info-div {
  width: auto;
  height: auto;
  margin-left: 300px;
  margin-top: 100px;
}
.login-info {
    width: 300px;
    height: auto;
    background-color: rgb(35, 142, 87);
    padding: 15px;
}
.row-bg {
    padding: 10px 0;
    background-color: #0e57e9;
  }
</style>

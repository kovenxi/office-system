<template>
  <div class="login">
    <div>
      <div id = 'login'>
        <div @click="test"  class="close">
          X
        </div>
        <el-form  :rules="rules" ref="ruleform" :model="loginForm" class='loginContainer'>
          <h3 class="loginHead" style="margin-bottom:10px;">管理员登录</h3>
          <el-form-item prop="username">
              <el-input tpye="text" autocomplete="false" v-model="loginForm.username" placeholder="请输入管理员ID"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input tpye="password" autocomplete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="code">
              <el-input tpye="test" autocomplete="false" v-model="loginForm.code" placeholder="请输入验证码" style="width: 210px;margin-right: 5px;position:relative"></el-input>
              <img src="@/assets/img/code1.webp" style="width: 70px;height: 50px;position:absolute;top:-10px">
          </el-form-item>
          <el-button tpye="primary" style="width:100%" @click="submit">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
      return{
        loginForm:{
          username:'',
          password:'',
          code:''
        },

        usermassage:{
          username:'koven',
          password:'123',
          code:'123'
        },

        rules:{
          username:[{required:true,message:'请输入用户名',trigger:'blur'}],
          password:[{required:true,message:'请输入密码',trigger:'blur'}],
          code:[{required:true,message:'请输入验证码',trigger:'blur'}]
        }
      }
    },

    methods:{
      submit(){
         this.$refs.ruleform.validate((valid) => {
          if (valid && this.loginForm.username==this.usermassage.username && this.loginForm.password==this.usermassage.password && this.loginForm.code==this.usermassage.code) {
            this.$message({
            showClose: true,
            message: '登录成功！',
            type: 'success'
        });
          } else {
            this.$message.error('登录失败，请检查账号信息！');
            return false;
          }
        });
      },
      test(){
        this.$emit('close')
      }

    }
}
</script>

<style scoped>
.loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 360px;
    padding: 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
  .loginHead {
    text-align: center;
    margin-top: 13px;
  }
  .close{
    float: right;
    font-weight: bold;
    font-size: 20px;
    color: #cac6c6;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
</style>
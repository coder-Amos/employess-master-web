<template>
  <div class="loginBox">
    <el-row style="height:30vh;">
      <el-col  style="margin-top:5vh;font-size:2.5rem;color:#fff;text-align:center;" :span="24">
       登录
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="headgif">
          <img src="../../../static/loginpage/head.gif" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="5" :span="6">
        <div class="earth">
          <img src="../../../static/loginpage/d.png" alt="">
        </div>
      </el-col>
      <el-col :offset="1" :span="6">
        <div class="loginbox">
          <input type="text" placeholder="   请输入用户名" style="margin:15vh auto auto 5vw;" v-model="username"> <br>
          <input type="password" placeholder="   请输入密码" style="margin:3vh auto auto 5vw;" v-model="password">
          <button style="margin:3vh auto auto 6vw;" @click="to_login">登录</button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import db from '../../utils/localstorage';
export default {
  name: "loginPage",
  data() {
    return {
      username:'',
      password:''
    };
  },
  mounted() {
  },
  methods: {
    to_login(){
      const payload = {
        name:this.username,
        password:this.password
      }
      this.$store.dispatch('store_login',payload).then(
        res=>{
         if(res.state == 200){
           if(res.isTrue === true){
             this.$router.push('/home')
             db.save('isLogin','true')
           }else{
             this.$message.error('用户名或密码错误！！！')
           }        
         }
      }).catch(err=>console.log(err))
    }
  },
};
</script>
<style scoped>
.loginBox{
  width: 100vw;
  height: 100vh;
  background-image: url('../../../static/loginpage/bj.jpg');
}
.headgif{
  width: 50vw;
  height: 50vh;
  position: absolute;
  top: -40vh;
  left: 24vw;
}
.headgif img{
  width: 100%;
  height: 100%;
}
.earth{
  width: 26vw;
  height: 24vw;
  animation:earthxz 9s infinite linear ;
}
.earth img{
  width: 100%;
  height: 100%;
}
@keyframes earthxz
{
0%   {transform:rotate(0);}
25%  {transform:rotate(90deg);}
50%  {transform:rotate(180deg);}
75%  {transform:rotate(270deg);}
100% {transform:rotate(360deg);}
}
.loginbox{
  width: 26vw;
  height: 24vw;
  background-image: url('../../../static/loginpage/e.png');
  background-size:100% 100%;
}
.loginBox input{
  width: 17vw;
  height: 2.4rem;
  border: 1px solid #00EAFF;
  background-color: #010A17;
  color: #fff;
}
.loginBox button{
  width: 15vw;
  height: 2.5rem;
  color:#010A17;
  background-color: #00EAFF;
  border: 0;
  cursor: pointer;
}
</style>
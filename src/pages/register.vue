<template>
  <div class="container">
    <div class="header">
      <!-- logo部分 -->
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
    </div>
    <!-- 输入框部分 -->
    <div class="inputs">
      <myinput placeholder="用户名/手机号"
               v-model="userObj.username"
               type="text"
               :rule="/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/"
               msg_err="手机号码格式不正确"></myinput>
      <myinput placeholder="昵称"
               v-model="userObj.nickname"
               type="text"
               :rule="/^\w+$/"
               msg_err="昵称不能为空"></myinput>
      <myinput placeholder="密码(8-20位)"
               v-model="userObj.password"
               type="password"
               :rule="/\S{8,20}$/"
               msg_err="密码长度不能少于8位，不能超过20位"></myinput>
    </div>
    <!-- 提示部分 -->
    <div class="tips">
      已有账号？
      <router-link to="/login">去登录</router-link>
    </div>
    <!-- 按钮部分 -->
    <mybutton text="注册"
              type="danger"
              @click="register"></mybutton>
  </div>
</template>

<script>
import myinput from '@/components/myinput.vue'
import mybutton from '@/components/mybutton.vue'
// 引入注册的api方法
import { register } from '@/apis/user.js'
export default {
  data () {
    return {
      userObj: {
        username: '',
        password: '',
        nickname: ''
      }
    }
  },
  components: {
    myinput, mybutton
  },
  methods: {
    register () {
      register(this.userObj)
        .then(res => {
          console.log(res)
          // 提示注册成功，并直接跳转到登录页面
          if (res.data.message === '注册成功') {
            this.$toast.success('注册成功')
            // 跳转到登录页面
            this.$router.push({ name: 'Login' })
          }
        })
        .catch(err => {
          console.log(err)
          // 提示错误
          this.$toast.fail('服务器错误，请重试')
        })
    }
  }
}
</script>

<style lang='less'>
.container {
  padding: 20px;
  .header {
    .close {
      span {
        font-size: 27 / 360 * 100vw;
      }
    }
    .logo {
      display: flex;
      justify-content: center;
      span {
        font-size: 126 / 360 * 100vw;
        color: #d81e06;
      }
    }
  }
  .inputs {
    input {
      margin-bottom: 10px;
    }
  }
  .tips {
    text-align: right;
    margin-bottom: 20px;
    a {
      text-decoration: none;
      color: #3385ff;
    }
  }
}
</style>

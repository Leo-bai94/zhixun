<template>
  <div id="app">
    <!-- logo部分 -->
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
    </div>
    <!-- 输入框部分 -->
    <div class="inputs">
      <myinput :value="userObj.userName"
               class="userName"
               placeholder="请输入用户名"
               rule="/^1\d{10}$/"
               msg_err="格式不正确"></myinput>
      <myinput :value="userObj.userPwd"
               class="userPwd"
               placeholder="请输入密码"
               type="password"></myinput>
    </div>
    <!-- 注册提示 -->
    <div class="tips">
      <p>
        没有账号？
        <a href="#/register">去注册！</a>
      </p>
    </div>
    <!-- 登录按钮 -->
    <mybutton text='登 录'
              type='primary'
              @click="login"></mybutton>
  </div>
</template>

<script>
import myinput from '@/components/myinput.vue'
import mybutton from '@/components/mybutton.vue'
export default {
  data () {
    return {
      userObj: {
        userName: '12345678900',
        userPwd: '123'
      }
    }
  },
  components: {
    myinput, mybutton
  },
  methods: {
    login () {

    }
  }
}
</script>

<style lang="less">
#app {
  .container {
    padding: 20px;
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
    padding: 10px;
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

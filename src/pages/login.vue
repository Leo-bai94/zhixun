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
      <myinput v-model="userObj.username"
               class="userName"
               placeholder="请输入用户名"
               :rule="/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/"
               msg_err="手机号码格式不正确"></myinput>
      <myinput v-model="userObj.password"
               class="userPwd"
               placeholder="请输入密码"
               :rule='/\S{8,20}$/'
               msg_err='请输入正确长度的密码'
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
import { login } from '@/apis/user.js'
export default {
  data () {
    return {
      userObj: {
        username: '123456',
        password: '123456'
      }
    }
  },
  components: {
    myinput, mybutton
  },
  methods: {
    login () {
      // console.log(this.userObj)
      login(this.userObj)
        .then(res => {
          // console.log(res)
          if (res.data.message === '登录成功') {
            // 登录成功就将用户信息token和用户id存储到本地
            localStorage.setItem('zhixun_Authorization', res.data.data.token)
            localStorage.setItem('zhixun_id', res.data.data.user.id)
            // 登录成功之后跳转到个人中心页面
            this.$router.push({ path: `personal/${res.data.data.user.id}` })
          } else {
            this.$toast.fail(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('服务器异常，请重试')
        })
    }
    // handleInput (data) {
    //   this.userObj.userName = data
    // }
  }
}
</script>

<style lang="less" scoped>
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
    padding: 10px 20px;
    input {
      margin-bottom: 10px;
    }
  }
  .tips {
    padding-right: 10px;
    text-align: right;
    margin-bottom: 20px;
    a {
      text-decoration: none;
      color: #3385ff;
    }
  }
}
</style>

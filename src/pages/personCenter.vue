<template>
  <div class="container">
    <!-- 头像部分 -->
    <router-link to='/editPerson'
                 class="headerinfo">
      <!-- 头像 -->
      <img src="../assets/imgs/2.gif"
           alt="">
      <!-- 昵称和时间 -->
      <div class="personFile">
        <div class="Nname">
          <span class="iconfont iconxingbienan">我就是我</span>
        </div>
        <div class="time">
          2020-2-2
        </div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </router-link>
    <!-- 单元格部分 -->
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style lang='less' scoped>
.container {
  box-sizing: border-box;
  background-color: #eee;
  width: 100vw;
  height: 100vh;
  .headerinfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20/375 * 100vw 10/375 * 100vw;
    color: #666;
    border-bottom: 5/375 * 100vw solid #ddd;
    img {
      width: 70/375 * 100vw;
      height: 70/375 * 100vw;
      border-radius: 50%;
      margin-right: 20/375 * 100vw;
    }
    .personFile {
      flex: 1;
      .Nname {
        margin-bottom: 10/375 * 100vw;
        span {
          color: #75b9eb;
        }
      }
      .time {
        color: #666;
        font-size: 14/375 * 100vw;
      }
    }
  }
}
</style>

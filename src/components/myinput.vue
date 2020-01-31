<template>
  <input :placeholder="placeholder"
         :value="value"
         @input="handleinput"
         class="inp"
         type="text" />
</template>

<script>
export default {
  props: [
    // 从父组件传递过来的数据
    'placeholder', // 输入款提示内容
    'value', // 输入款的值
    'rule', // 正则判断格式
    'msg_err' // 错误信息
  ],
  methods: {
    handleinput () { }
  }
}
</script>

<style lang="less">
.inp {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px solid #999;
  line-height: 40px;
  outline: none;
  padding-left: 10px;
  box-sizing: border-box;
}
.red {
  border-color: red;
}
.green {
  border-color: green;
}
</style>

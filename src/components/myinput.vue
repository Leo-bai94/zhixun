<template>
  <input :placeholder="placeholder"
         :value="value"
         @input="handleinput"
         class="inp"
         type="text"
         :class="{red:status==='fail',green:status==='success'}"
         @blur="handleblur" />
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
  data () {
    return {
      status: ''
    }
  },
  methods: {
    // 文本框的事件
    handleinput (event) {
      // console.log(event)
      let v = event.target.value
      // 子传父，将输入框中的数据传到父组件
      this.$emit('input', v)
      // 判断用户输入的数据是否符合规范
      // 条件1  判断规则是否存在
      if (this.rule && typeof this.rule === 'object') {
        // 条件2  判断数据是否符合规则
        if (this.rule.test(v)) {
          this.status = 'success'
        } else {
          this.status = 'fail'
        }
      }
    },
    // 文本框失去焦点事件，验证规则
    handleblur (event) {
      if (this.rule && typeof this.rule === 'object') {
        if (!this.rule.test(event.target.value)) {
          alert(this.msg_err)
          this.statue = 'fail'
        }
      }
    }
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

<template>
  <div class="btn"
       :class="{danger:type==='danger',primary:type==='primary',info:type==='info',warning:type==='warning'}"
       @click="handleClick">{{text}}</div>
</template>

<script>
export default {
  props: [
    'text',
    'type'
  ],
  methods: {
    handleClick (event) {
      // console.log(event)
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='less'>
.btn {
  background-color: #f00;
  width: 90%;
  height: 40px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  border-radius: 25px;
  margin: 0 auto;
}
.danger {
  background-color: #f00;
}
.primary {
  background-color: rgb(17, 219, 94);
}
.info {
  background-color: #999;
}
.warning {
  background-color: orange;
}
</style>

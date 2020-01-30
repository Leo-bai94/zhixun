// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入组件
// 登录组件
import Login from '@/pages/login.vue'

// 使用
Vue.use(VueRouter)
// 创建路由对象
var router = new VueRouter({
  // 使用routes配置路由
  routes: [
    {
      // 登录页面的路由配置
      name: 'Login', // 名称
      path: '/login', // 路径
      component: Login // 将组件映射到路由
    }
  ]
})
// 暴露路由
export default router

// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入组件
// 登录组件
import Login from '@/pages/login.vue'
// 注册组件
import Register from '@/pages/register.vue'
// 个人中心页面组件
import PersonCenter from '@/pages/personCenter.vue'

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
    },
    {
      // 注册页面的路由配置
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      // 个人中心页面的路由配置
      name: 'PersonCenter',
      path: '/personal/:id',
      component: PersonCenter
    }
  ]
})
// 暴露路由
export default router

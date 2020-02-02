// 引入axios
import axios from '@/utils/myaxios.js'

// 添加方法
// 实现登录
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
// 实现注册
export const register = (data) => {
  return axios({
    method: 'post',
    url: '/register',
    data
  })
}
// 请求个人中心数据

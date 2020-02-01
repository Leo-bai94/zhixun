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

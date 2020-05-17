import request from '@/utils/request'
// 获取用户所有频道列表

export const GetAll = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}

import request from '@/utils/request'
// 获取联想建议
export const getSearch = q => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}
// 获取搜索结果
export const getSearchRes = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/search',
    params
  })
}

// 获取搜索历史记录
export const getSearchhistory = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/search/histories'
  })
}

import request from '@/utils/request'

export const Getcomment = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    params
  })
}

export const like = target => {
  return request({
    method: 'POST',
    url: '/app/v1_0/comment/likings',
    data: {
      target
    }
  })
}

export const nolike = commentId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/comment/likings/${commentId}`
  })
}

export const addpost = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/comments',
    data
  })
}

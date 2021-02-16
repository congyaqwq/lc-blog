import request from '@/utils/request'

export function list(params) {
  return request({
    url: 'blogs/list',
    params
  })
}

export function detail(id) {
  return request({
    url: `blogs/detail/${id}`
  })
}

export function thumb(data) {
  return request({
    url: `thumb`,
    method: 'put',
    data
  })
}
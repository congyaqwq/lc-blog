import request from '@/utils/request'

export function list(params) {
  return request({
    url: 'blogs/list',
    params
  })
}
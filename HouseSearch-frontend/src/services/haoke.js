import request from '@/utils/request'

export async function addHouseResources (params) {
  return request('/haoke/house/resources', {
    method: 'POST',
    body: params
  })
}
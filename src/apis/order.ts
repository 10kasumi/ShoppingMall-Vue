import http from '@/utils/http'
import { type OrderType } from '@/apis/model/Order'
/*
params: {
orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params: object): Promise<OrderType> => {
  return http({
    url: '/member/order',
    method: 'GET',
    params
  })
}
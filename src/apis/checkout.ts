import http from '@/utils/http'
import { type CheckoutTs } from './model/Checkout/Checkout'
import { type Address } from './model/Checkout/address'
import { type GetAddress } from './model/Checkout/getAddress'
import type { PayTs } from '@/apis/model/Pay/pay'

export const getCheckInfoAPI = (): Promise<CheckoutTs> => {
    return http({
        url: '/member/order/pre'
    })
}

export const addAddressAPI = (data: object): Promise<Address> => {
    return http({
        url: '/member/address',
        method: 'POST',
        data
    })
}
/**
* @description: 获取收获地址
* @param {*}
* @return {*}
*/
export const getAddressAPI = (): Promise<GetAddress> => {
    return http({
        url: '/member/address',
        method: 'GET'
    })
}

export const createOrderAPI = (data: object): Promise<PayTs> => {
    return http({
        url: '/member/order',
        method: 'POST',
        data
    })
}
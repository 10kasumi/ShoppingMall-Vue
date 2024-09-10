import http from '@/utils/http'


export const getCheckInfoAPI = () => {
    return http({
        url: '/member/order/pre'
    })
}
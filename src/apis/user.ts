import http from '@/utils/http'

export const loginAPI = ({ account, password }) => {
    return http({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })

}
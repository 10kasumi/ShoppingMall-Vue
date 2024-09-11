import http from '@/utils/http'

export const loginAPI = ({ account, password }: { account: string, password: string }) => {
    return http({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}

export const getLikeListAPI = ({ limit = 4 }) => {
    return http({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}
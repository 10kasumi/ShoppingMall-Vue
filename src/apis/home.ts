import http from "@/utils/http"

export function getBannerAPI() {
    return http({
        url: '/home/banner'
    })
}

export const findNewAPI = () => {
    return http({
        url: '/home/new'
    })
}

export const getHotAPI = () => {
    return http({
        url: '/home/hot',
        method: 'get',
        params: {}
    })
}

export const getGoodsAPI = () => {
    return http({
        url: '/home/goods'
    })
}

export const getDetail = (id: number) => {
    return http({
        url: '/goods',
        params: {
            id
        }
    })
}
import http from "@/utils/http"

export function getBannerAPI(params = {}) {
    //默认1，商品2
    const { distributionSite = '1' } = params
    return http({
        url: '/home/banner',
        params: {
            distributionSite
        }
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
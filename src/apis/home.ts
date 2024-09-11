import http from "@/utils/http"
import type { Result } from './model/type'

export const getBannerAPI = (distributionSite: string = '1'): Promise<Result> => {
    //默认1，商品2
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
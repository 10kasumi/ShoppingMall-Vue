import http from '@/utils/http'
import type { Result, ResultObject } from './model/type'

export const getDetail = (id: string): Promise<ResultObject> => {
    return http({
        url: '/goods',
        params: {
            id
        }
    })
}

export const getHotGoodsAPI = (
    id: string,
    type: number,
    limit: number = 3
): Promise<Result> => {
    return http({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}
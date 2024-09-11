import http from '@/utils/http'
import type { Result } from './model/type'
import type { ResultObject } from '@/apis/model/Category/C1'

// 获取全部分类数据
export function reqGetCategory(): Promise<Result> {
    return http({
        method: 'get',
        url: '/home/category/head'
    })
}

export const getCategoryAPI = (id: string): Promise<ResultObject> => {
    return http({
        url: '/category',
        params: {
            id
        }
    })
}

export const getCategoryFilterAPI = (id: string): Promise<ResultObject> => {
    return http({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

export const getSubCategoryAPI = (data: object): Promise<ResultObject> => {
    return http({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}
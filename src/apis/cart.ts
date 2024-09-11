import http from '@/utils/http'
import { type Result } from '@/apis/model/type'

export const insertCartAPI = (
    { skuId, count }: { skuId: string, count: number }
): Promise<Result> => {
    return http({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

export const findUserCartAPI = (): Promise<Result> => {
    return http({
        url: '/member/cart/',
        method: 'GET'
    })
}

export const deleteCartAPI = (ids: string[]): Promise<Result> => {
    return http({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

//合并购物车
export const mergeCartAPI = (data: object[]): Promise<Result> => {
    return http({
        url: '/member/cart/merge',
        method: 'POST',
        data: {
            data
        }
    })
}
import http from '@/utils/http'

export const insertCartAPI = ({ skuId, count }) => {
    return http({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

export const findUserCartAPI = () => {
    return http({
        url: '/member/cart/'
    })
}

export const deleteCartAPI = (ids) => {
    return http({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

//合并购物车
export const mergeCartAPI = (data) => {
    return http({
        url: '/member/cart/merge',
        method: 'POST',
        data: {
            data
        }
    })
}
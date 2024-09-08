import http from '@/utils/http'

export function getCategoryAPI(id: number) {
    return http({
        url: '/category',
        params: {
            id
        }
    })
}
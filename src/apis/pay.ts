import http from "@/utils/http"
import { type OrderdetailTs } from '@/apis/model/Pay/Orderdetail'

export const getOrderAPI = (id: string): Promise<OrderdetailTs> => {
    return http({
        url: `/member/order/${id}`,
    })
}
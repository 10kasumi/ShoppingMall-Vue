import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const addCart = () => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count++;
        } else {
            cartList.value.push(goods)
        }
    }
    const removeCart = (skuId) => {
        const index = cartList.value.findIndex((item) => item.skuId === skuId)
        cartList.value.splice(index, 1)
    }

    return {
        cartList,
        addCart,
        removeCart
    }
})
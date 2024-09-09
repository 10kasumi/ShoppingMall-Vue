import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const addCart = async (goods) => {
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

    const singleCheck = (skuId, isSelected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = isSelected
    }

    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    const allCount = computed(() => cartList.value.reduce((sum, cur) => sum + cur.count, 0))
    const allPrice = computed(() => cartList.value.reduce((sum, cur) => sum + cur.count * cur.price, 0))
    const allSelected = computed(() => cartList.value.every((item) => item.selected))

    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((sum, cur) => sum + cur.count, 0))
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((sum, cur) => sum + cur.count * cur.price, 0))


    return {
        cartList,
        addCart,
        removeCart,
        singleCheck,
        allCheck,
        allCount,
        allPrice,
        allSelected,
        selectedCount,
        selectedPrice
    }
}, {
    persist: true,
})
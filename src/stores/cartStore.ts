import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findUserCartAPI, deleteCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    const updateNewList = async () => {
        const res = await findUserCartAPI()
        cartList.value = res.result
    }

    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            await insertCartAPI({ skuId, count })
            updateNewList()
        } else {
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count++;
            } else {
                cartList.value.push(goods)
            }
        }
    }

    const deleteCart = async (skuId) => {
        if (isLogin.value) {
            await deleteCartAPI([skuId])
            updateNewList
        } else {
            const index = cartList.value.findIndex((item) => item.skuId === skuId)
            cartList.value.splice(index, 1)
        }
    }
    const removeCart = (skuId) => {
        const index = cartList.value.findIndex((item) => item.skuId === skuId)
        cartList.value.splice(index, 1)
    }

    //清除本地购物车
    const clearCart = () => {
        cartList.value = []
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
        updateNewList,
        addCart,
        removeCart,
        singleCheck,
        allCheck,
        deleteCart,
        clearCart,
        allCount,
        allPrice,
        allSelected,
        selectedCount,
        selectedPrice
    }
}, {
    persist: true,
})
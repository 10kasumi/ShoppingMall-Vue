//倒计时
import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
    const time = ref(0)
    let timer = null
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    const start = (currentTime) => {
        formatTime.value = currentTime
        timer = setInterval(() => {
            formatTime.value -= 1
        }, 1000)
    }
    //组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}
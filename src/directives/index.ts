import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
    install(app: any) {
        app.directive('img-lazy', {
            //el：指令绑定的元素(img), binding：binding.value 指令等于后后面绑定的表达式的值(图片url)
            mounted(el: HTMLImageElement, binding: any) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}
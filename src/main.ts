import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载插件并注册
// import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueLazyload from 'vue-lazyload'
import LazyPic from '@/assets/LazyPic.webp'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
// app.use(lazyPlugin)
app.use(VueLazyload, {
    error: LazyPic,
    loading: LazyPic,
    attempt: 3,
    observer: true,
})
app.use(componentPlugin)
app.mount('#app')



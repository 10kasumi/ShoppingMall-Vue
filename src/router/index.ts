import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  //路由滚动行为定制，路由切换时页面滚动条回到顶部
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router

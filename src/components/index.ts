// 把components的组件通过插件方式进行全局注册
import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        //app.component('组件名称', 组件配置对象)
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', XtxSku)
    }
}
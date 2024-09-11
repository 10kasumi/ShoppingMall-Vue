const routes = [
    {
        path: '/',
        component: () => import('@/views/Layout/index.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/Home/index.vue')
            },
            {
                path: 'category/:id',
                name: 'category',
                component: () => import('@/views/Category/index.vue')
            },
            {
                path: 'category/sub/:id',
                name: 'subcategory',
                component: () => import('@/views/SubCategory/index.vue')
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: () => import('@/views/Detail/index.vue')
            },
            {
                path: 'cartlist',
                name: 'cartlist',
                component: () => import('@/views/CartList/index.vue')
            },
            {
                path: 'checkout',
                name: 'checkout',
                component: () => import('@/views/Checkout/index.vue')
            },
            {
                path: 'pay',
                name: 'pay',
                component: () => import('@/views/Pay/index.vue')
            },
            {
                path: 'paycallback', // 注意路径，必须是paycallback
                component: () => import('@/views/Pay/PayBack.vue')
            },
            {
                path: 'member',
                name: 'member',
                component: () => import('@/views/Member/index.vue'),
                redirect: '/member/user',
                children: [
                    {
                        path: 'user',
                        name: 'user',
                        component: () => import('@/views/Member/components/UserInfo.vue')
                    },
                    {
                        path: 'order',
                        name: 'order',
                        component: () => import('@/views/Member/components/UserOrder.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/index.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]
export default routes
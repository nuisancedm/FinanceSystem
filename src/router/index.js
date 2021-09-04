import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
//配置路由
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    redirect:'/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/Index.vue')

      },
      {
        path: '/account/all',
        name: 'all',
        component: () => import('../views/account/All.vue'),
        meta:["账户管理","所有人员"]
      },
      {
        path: '/account/business',
        name: 'business',
        component: () => import('../views/account/Businesses.vue'),
        meta:["账户管理","业务人员"]
      },
      {
        path: '/product/all',
        name: 'product_all',
        component: () => import('../views/product/All.vue'),
        meta:["产品管理","全部产品"]
      },
      {
        path: '/product/detail',
        name: 'product_detail',
        component: () => import('../views/product/Detail.vue'),
        meta:["产品管理","全部产品","产品详情"]
      },
      {
        path: '/orders/all',
        name: 'orders_all',
        component: () => import('../views/orders/index.vue'),
        meta:["订单管理","所有订单"]
      },
    ],
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

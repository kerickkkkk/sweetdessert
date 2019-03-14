import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/pages/Products'
import Customer_order from '@/components/pages/Customer_order'
import Mainboard from '@/components/Mainboard'
import Index from '@/components/Index'
import Carts from '@/components/pages/Carts'
import Coupons from '@/components/pages/Coupons'
import Checkout from '@/components/pages/Checkout'
import Payconfirm from '@/components/pages/Payconfirm'
import Orderlist from '@/components/pages/Orderlist'
import Product from '@/components/pages/Product'

Orderlist

Vue.use(Router)
    //routerview app 
export default new Router({
    routes: [{ // 如果有隨意輸入path全都回login
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/',
            name: 'Mainboard',
            component: Mainboard,
            //router-view
            children: [{
                    path: 'customer_order',
                    name: 'CustomerOrder',
                    component: Customer_order,
                },
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'carts',
                    name: 'Carts',
                    component: Carts
                },
                {
                    path: 'checkout',
                    name: 'Checkout',
                    component: Checkout
                },
                {
                    path: 'product/:orderId',
                    name: 'Product',
                    component: Product
                },
                {
                    path: 'payconfirm/:orderId',
                    name: 'Payconfirm',
                    component: Payconfirm
                },
                {
                    path: 'orderlist',
                    name: 'Orderlist',
                    component: Orderlist,
                },
            ]
        },
        {
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard,
            //router-view
            children: [{
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requiresAuth: true }
                },
                {
                    path: 'coupons',
                    name: 'Coupons',
                    component: Coupons,
                    meta: { requiresAuth: true }
                },
                {
                    path: 'orderlist',
                    name: 'Orderlist',
                    component: Orderlist,
                    meta: { requiresAuth: true }
                },
            ]
        },


    ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'

let Home = () => import('views/home/Home.vue')
let Category = () => import('views/category/Category.vue')
let Cart = () => import('views/cart/Cart.vue')
let Profile = () => import('views/profile/Profile.vue')


// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
let routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
]

let router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
//引入路由组建
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
//配置路由
export default [
    {
        path: "/home",
        component: Home,
        meta:{show:true}
    },
    {
        path: "/login",
        component: Login,
    },
    {
        name: "search",
        path: "/search/:keyword?",
        component: Search,
        meta:{show:true}
    },
    {
        path: "/register",
        component: Register
    },
    {
        name: "detail",
        path: "/detail/:skuid?",
        component: Detail,
        meta:{show:true}
    },
    {
        name: "addCartSuccess",
        path: "/addCartSuccess",
        component: AddCartSuccess,
        meta:{show:true}
    },
    {
        name: "shopCart",
        path: "/shopCart",
        component: ShopCart,
        meta:{show:true}
    },
    {
        name: "trade",
        path: "/trade",
        component: Trade,
        meta:{show:true}
    },
    {
        name: "pay",
        path: "/pay",
        component: Pay,
        meta:{show:true}
    },
    //重定向到首页
    {
        path: "/*",
        redirect: "/home",
        meta:{show:true}
    }
]
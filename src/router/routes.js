//引入路由组建
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
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
    //重定向到首页
    {
        path: "/*",
        redirect: "/home",
        meta:{show:true}
    }
]
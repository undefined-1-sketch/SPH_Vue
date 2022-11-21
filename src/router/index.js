// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

//引入路由组建
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push
let originPReplace = VueRouter.prototype.replace


//重写push||replace
//第一个参数，告诉原来push方法，往哪里跳转（传递哪些参数）
//call||apply区别
//相同点，都可以调用函数一次，都可以篡改函数上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行传递数组
VueRouter.prototype.push = function(location, resolve, reject) {
    if(resolve && reject){
        originPush.call(this, location, resolve, reject)
    }else {
        originPush.call(this, location, ()=>{}, ()=>{})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if(resolve && reject) {
        originPReplace.call(this, location, resolve, reject)
    }else {
        originPReplace.call(this, location, ()=>{}, ()=>{})
    }
}

//配置路由
export default new VueRouter({
    //配置路由
    routes: [
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
        //重定向到首页
        {
            path: "/*",
            redirect: "/home",
            meta:{show:true}
        }
    ]
})
// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

//引入路由组件
import routes from './routes'
import store from '@/store'

//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push
let originPReplace = VueRouter.prototype.replace


//重写push||replace
//第一个参数，告诉原来push方法，往哪里跳转（传递哪些参数）
//call||apply区别
//相同点，都可以调用函数一次，都可以篡改函数上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originPReplace.call(this, location, resolve, reject)
    } else {
        originPReplace.call(this, location, () => { }, () => { })
    }
}
//对外暴露vuerouter实例
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

//全局守卫，前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    //登录
    if (token) {
        //如果回login
        if (to.path == '/login' || to.path=='/register') {
            next('/home');
        } else {
            //用户名已有
            if (name) {
                next();
            } else {
                try {
                    //获取用户信息
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token过期
                    await store.dispatch('logout');
                    next('/login');
                }
            }
        }
    } else {
        //未登录
        next();
        console.log(555);
    }
})


//配置路由
export default router;
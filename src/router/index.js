// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

//引入路由组件
import routes from './routes'

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

//配置路由
export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})
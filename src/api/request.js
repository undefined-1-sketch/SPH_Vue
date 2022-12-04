//对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";

//1.利用axios对象的方法create，去创建一个axios实例
//2.reques就是axios，只不过稍微配置一下
const requests = axios.create({
    //基础路径
    baseURL: '/api',
    timeout: 5000
})

//请求拦截器
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid) {
        config.headers.userTempId = store.state.detail.uuid;
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('fail'))
})

//对外暴露
export default requests
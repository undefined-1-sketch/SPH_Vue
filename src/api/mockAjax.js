//对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

//1.利用axios对象的方法create，去创建一个axios实例
//2.reques就是axios，只不过稍微配置一下
const requests = axios.create({
    //基础路径
    baseURL: '/mock',
    timeout: 5000
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
}, (error)=>{
    return Promise.reject(new Error('fail'))
})

//对外暴露
export default requests
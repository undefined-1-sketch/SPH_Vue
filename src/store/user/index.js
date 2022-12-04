//用户模块
import { reqGetCode, reqLogin, reqRegister, reqUserInfo } from '@/api'
const state = {
    code:'',
    token:''
};
const mutations = {
    GETCODE(state,data){
        state.code=data;
    },
    LOGIN(state,token){
        state.token=token;
    }
};
const actions = {
    //获取验证码
    async getCode({commit},phone){
        let result = await reqGetCode(phone);
        if(result.code==200){
            commit('GETCODE',result.data);
        }else{
            return Promise.reject(new Error('faild'));
        }
    },
    //注册
    async register({commit},user){
        let result = await reqRegister(user);
        if(result.code==200){
            return "ok";
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    //登陆
    async login({commit},user){
        let result = await reqLogin(user);
        console.log(result);
        if(result.code==200){
            commit('LOGIN',result.data.token);
            return "ok";
        }else{
            return Promise.reject(new Error('faild'));
        }
    },
    //获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        console.log("###",result);
        if(result.code==200){
            commit('GETUserInfo',result.data);
        }
    }
    
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}
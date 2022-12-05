//用户模块
import { reqGetCode, reqLogin, reqLogout, reqRegister, reqUserInfo } from '@/api'
import { clearToken, getToken, setToken } from '@/utils/token';
const state = {
    code: '',
    token: getToken(),
    userInfo: {}
};
const mutations = {
    GETCODE(state, data) {
        state.code = data;
    },
    LOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    LOGOUT(state){
        //清除数据
        state.token='',
        state.userInfo={},
        clearToken();
    }
};
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
        } else {
            return Promise.reject(new Error('faild'));
        }
    },
    //注册
    async register({ commit }, user) {
        let result = await reqRegister(user);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error('fail'));
        }
    },
    //登陆
    async login({ commit }, user) {
        let result = await reqLogin(user);
        console.log(result);
        if (result.code == 200) {
            commit('LOGIN', result.data.token);
            setToken(result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error('faild'));
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data);
        }
    },
    //退出登录
    async logout({commit}){
        let result = await reqLogout();
        if(result.code==200){
            commit('LOGOUT');
            return "ok";
        }else{
            return Promise.reject(new Error('faild'));
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